import { useMemo, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createOrganization, loginAdmin, registerAdmin } from "../lib/api";

type Props = {
  onEnter: () => void;
  page: "home" | "about" | "contact" | "faqs" | "plans" | "login" | "signup";
};

const LandingPage = ({ onEnter, page }: Props) => {
  const navigate = useNavigate();
  const [signupOrgName, setSignupOrgName] = useState("");
  const [signupLocation, setSignupLocation] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [authBusy, setAuthBusy] = useState<"login" | "signup" | null>(null);
  const heroImages = [
    "https://res.cloudinary.com/doxxevnyt/image/upload/v1773662233/8b9bce25-da3f-4c63-a9c4-6c543a15e1f1_yteu7o.png"
  ];
  const [heroIndex, setHeroIndex] = useState(0);

  const handleSignup = async () => {
    if (authBusy) return;
    setAuthError("");
    if (!signupOrgName || !signupLocation || !signupEmail || !signupPassword) {
      setAuthError("Please fill all fields.");
      return;
    }
    setAuthBusy("signup");
    try {
      const createdOrg = await createOrganization({
        name: signupOrgName.trim(),
        location: signupLocation.trim()
      });
      await registerAdmin({
        orgId: createdOrg.id,
        email: signupEmail.trim().toLowerCase(),
        password: signupPassword
      });
      navigate("/app");
    } catch {
      setAuthError("Could not create account. Please try again.");
    } finally {
      setAuthBusy(null);
    }
  };

  const handleLogin = async () => {
    if (authBusy) return;
    setAuthError("");
    if (!loginEmail || !loginPassword) {
      setAuthError("Enter your email and password.");
      return;
    }
    setAuthBusy("login");
    try {
      await loginAdmin({
        email: loginEmail.trim().toLowerCase(),
        password: loginPassword
      });
      navigate("/app");
    } catch {
      setAuthError("Invalid email or password.");
    } finally {
      setAuthBusy(null);
    }
  };

  const authPageTitle = useMemo(() => {
    if (page === "login") return "Welcome back";
    if (page === "signup") return "Create organization";
    return "";
}, [page]);

  const isBusy = authBusy !== null;

  useEffect(() => {
    if (page !== "home" || heroImages.length <= 1) return;
    const interval = window.setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => window.clearInterval(interval);
  }, [page, heroImages.length]);

  return (
    <div className="landing">
      <nav className="top-nav">
        <div className="brand">
          <span className="brand-mark">A</span>
          <span>Attendance</span>
        </div>
        <div className="nav-links">
          <Link className={page === "home" ? "nav-link active" : "nav-link"} to="/">
            Home
          </Link>
          <Link
            className={page === "about" ? "nav-link active" : "nav-link"}
            to="/about"
          >
            About us
          </Link>
          <Link
            className={page === "contact" ? "nav-link active" : "nav-link"}
            to="/contact"
          >
            Contact us
          </Link>
          <Link
            className={page === "faqs" ? "nav-link active" : "nav-link"}
            to="/faqs"
          >
            FAQs
          </Link>
          <Link
            className={page === "plans" ? "nav-link active" : "nav-link"}
            to="/plans"
          >
            Plans
          </Link>
        </div>
        <div className="nav-actions">
          <Link className="btn ghost" to="/login">
            Log in
          </Link>
          <Link className="btn solid" to="/signup">
            Sign up
          </Link>
        </div>
      </nav>

      {page === "login" || page === "signup" ? (
        <section className="auth-page">
          <div className="auth-card">
            <h1>{authPageTitle}</h1>
            <p className="muted">
              {page === "login"
                ? "Access your organization attendance dashboard."
                : "Register your organization to get started."}
            </p>
            {authError ? <p className="auth-error">{authError}</p> : null}
            {page === "login" ? (
              <div className="auth-form">
                <label>
                  Email
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(event) => setLoginEmail(event.target.value)}
                    disabled={isBusy}
                  />
                </label>
                <label>
                  Password
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(event) => setLoginPassword(event.target.value)}
                    disabled={isBusy}
                  />
                </label>
                <button
                  className="btn solid"
                  type="button"
                  onClick={handleLogin}
                  disabled={isBusy}
                >
                  {authBusy === "login" ? "Logging in..." : "Log in"}
                </button>
                <button
                  className="btn ghost"
                  type="button"
                  onClick={() => navigate("/signup")}
                  disabled={isBusy}
                >
                  Create new organization
                </button>
              </div>
            ) : (
              <div className="auth-form">
                <label>
                  Organization name
                  <input
                    type="text"
                    value={signupOrgName}
                    onChange={(event) => setSignupOrgName(event.target.value)}
                    disabled={isBusy}
                  />
                </label>
                <label>
                  Location
                  <input
                    type="text"
                    value={signupLocation}
                    onChange={(event) => setSignupLocation(event.target.value)}
                    disabled={isBusy}
                  />
                </label>
                <label>
                  Admin email
                  <input
                    type="email"
                    value={signupEmail}
                    onChange={(event) => setSignupEmail(event.target.value)}
                    disabled={isBusy}
                  />
                </label>
                <label>
                  Password
                  <input
                    type="password"
                    value={signupPassword}
                    onChange={(event) => setSignupPassword(event.target.value)}
                    disabled={isBusy}
                  />
                </label>
                <button
                  className="btn solid"
                  type="button"
                  onClick={handleSignup}
                  disabled={isBusy}
                >
                  {authBusy === "signup" ? "Creating account..." : "Create organization"}
                </button>
                <button
                  className="btn ghost"
                  type="button"
                  onClick={() => navigate("/login")}
                  disabled={isBusy}
                >
                  Already have an account
                </button>
              </div>
            )}
          </div>
        </section>
      ) : null}

      {page === "home" ? (
        <>
          <header className="landing-hero">
            <div className="landing-hero-panel">
              <div className="landing-hero-copy">
                <p className="landing-eyebrow">Attendance made simple</p>
                <h1>Run reliable staff attendance across every organization.</h1>
                <p className="landing-lede">
                  Morning sign-ins, evening sign-outs, late flags, and historical tracking
                  built for teams that want clarity without complexity.
                </p>
                <div className="landing-hero-badges">
                  <span className="badge">Live dashboards</span>
                  <span className="badge">Role-based access</span>
                  <span className="badge">Late alerts</span>
                </div>
                <div className="landing-cta">
                  <button className="btn solid" type="button" onClick={onEnter}>
                    Enter the app
                  </button>
                  <button className="btn ghost" type="button">
                    Book a demo
                  </button>
                </div>
              </div>
              <div className="landing-hero-visual">
                <div className="hero-image-frame">
                  <div className="hero-phone primary" aria-hidden="true">
                    {heroImages.map((src, idx) => (
                      <img
                        key={src}
                        src={src}
                        alt="Attendance dashboard preview"
                        className={`hero-phone-layer ${idx === heroIndex ? "active" : ""}`}
                      />
                    ))}
                  </div>
                </div>
              {heroImages.length > 1 ? (
                <div className="hero-dots" aria-hidden="true">
                  {heroImages.map((_, idx) => (
                    <span
                      key={idx}
                      className={`hero-dot ${idx === heroIndex ? "active" : ""}`}
                    />
                  ))}
                </div>
              ) : null}
              </div>
            </div>
            <div className="landing-hero-card">
              <div>
                <p className="landing-card-label">Live visibility</p>
                <h3>Know who is in, out, or late instantly.</h3>
              </div>
              <div className="landing-metric">
                <span>
                  <span className="icon-dot" />
                  Multi-organization
                </span>
                <strong>Built-in</strong>
              </div>
              <div className="landing-metric">
                <span>
                  <span className="icon-dot" />
                  Daily attendance
                </span>
                <strong>Tracked</strong>
              </div>
              <div className="landing-metric">
                <span>
                  <span className="icon-dot" />
                  Historical reports
                </span>
                <strong>Ready</strong>
              </div>
            </div>
          </header>

          <section className="landing-section">
            <div className="landing-grid">
              <div className="landing-card">
                <div className="landing-card-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M12 4l2.2 4.5L19 9.1l-3.5 3.4.8 4.8L12 15.8 7.7 17.3l.8-4.8L5 9.1l4.8-.6L12 4z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2>About us</h2>
                <p className="muted">
                  We help organizations stay on top of attendance with tools that are
                  lightweight, modern, and easy for teams to adopt.
                </p>
              </div>
              <div className="landing-card">
                <div className="landing-card-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M4 6h16v3H4V6zm0 5h16v7H4v-7zm3 2v3h3v-3H7z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2>What we do</h2>
                <p className="muted">
                  Manage attendance across multiple organizations, onboard staff, set
                  late and early rules, and keep everyone aligned day to day.
                </p>
              </div>
              <div className="landing-card">
                <div className="landing-card-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2zm0 2l7 5 7-5H5z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2>Contact us</h2>
                <p className="muted">
                  <a className="contact-link" href="mailto:hello@attendance.app">
                    hello@attendance.app
                  </a>
                </p>
                <p className="muted">
                  <a className="contact-link" href="tel:+2348107050824">
                    +234 810 705 0824
                  </a>
                </p>
                <p className="muted">Lagos, Nigeria</p>
                <button className="btn ghost" type="button">
                  Contact support
                </button>
              </div>
            </div>
          </section>

          <section className="landing-section">
            <div className="landing-section-header">
              <h2>Plans built for every organization</h2>
              <p className="muted">
                Upgrade when you need advanced controls, analytics, and integrations.
              </p>
            </div>
            <div className="plans">
              <div className="plan-card">
                <h3>Starter</h3>
                <p className="plan-price">Free</p>
                <ul>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Daily sign-in and sign-out
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Organization staff list
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Late and early flags
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Admins: 1
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Staff: up to 20
                  </li>
                </ul>
                <button className="btn ghost" type="button">
                  Get started
                </button>
              </div>
              <div className="plan-card highlight">
                <h3>Plus</h3>
                <p className="plan-price">NGN 45,000 / month</p>
                <ul>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Attendance history export (CSV)
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Shift and role analytics
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Manager notifications
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Priority support
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Admins: 3
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Staff: up to 100
                  </li>
                </ul>
                <button className="btn solid" type="button">
                  Choose Plus
                </button>
              </div>
              <div className="plan-card">
                <h3>Pro</h3>
                <p className="plan-price">NGN 120,000 / month</p>
                <ul>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Multi-location dashboards
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Custom attendance rules
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Payroll integrations
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Dedicated success manager
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Admins: 10
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Staff: unlimited
                  </li>
                </ul>
                <button className="btn ghost" type="button">
                  Talk to sales
                </button>
              </div>
            </div>
          </section>

          <section className="landing-section">
            <div className="landing-footer">
              <div>
                <h2>Ready to bring clarity to attendance?</h2>
                <p className="muted">
                  Start with the free plan, then scale with Plus or Pro when you are ready.
                </p>
              </div>
              <button className="btn solid" type="button" onClick={onEnter}>
                Enter the app
              </button>
            </div>
          </section>
        </>
      ) : null}

      {page === "about" ? (
        <section className="info-page about-page">
          <div className="info-hero">
            <div>
              <p className="landing-eyebrow">About Attendance</p>
              <h1>We build confidence in every workday.</h1>
              <p className="landing-lede">
                Our mission is to help organizations capture time, trust, and momentum
                across distributed teams.
              </p>
            </div>
            <div className="info-hero-card">
              <h3>Our story</h3>
              <p className="muted">
                Attendance started as a simple sign-in tool and grew into a full
                workforce visibility platform for modern teams.
              </p>
            </div>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <h3>Reliability</h3>
              <p className="muted">
                Always-on attendance tracking so managers have real-time visibility.
              </p>
            </div>
            <div className="info-card">
              <h3>Clarity</h3>
              <p className="muted">
                Clear signals for late arrivals, early departures, and trends.
              </p>
            </div>
            <div className="info-card">
              <h3>Growth</h3>
              <p className="muted">
                A platform that scales with your organization, location, and roles.
              </p>
            </div>
          </div>
        </section>
      ) : null}

      {page === "contact" ? (
        <section className="info-page contact-page">
          <div className="info-hero">
            <div>
              <p className="landing-eyebrow">Contact us</p>
              <h1>We are ready to help.</h1>
              <p className="landing-lede">
                Reach out for demos, onboarding help, or a custom plan for your team.
              </p>
            </div>
            <div className="info-hero-card">
              <h3>Support channels</h3>
              <p className="muted">Email, phone, or book a call with our team.</p>
            </div>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Email</h3>
              <a className="contact-link" href="mailto:hello@attendance.app">
                hello@attendance.app
              </a>
              <p className="muted">Response within 24 hours.</p>
            </div>
            <div className="contact-card">
              <h3>Phone</h3>
              <a className="contact-link" href="tel:+2348107050824">
                +234 810 705 0824
              </a>
              <p className="muted">Mon-Fri, 9am-6pm WAT.</p>
            </div>
            <div className="contact-card">
              <h3>Office</h3>
              <p className="muted">Lagos, Nigeria</p>
              <p className="muted">By appointment only.</p>
            </div>
          </div>
        </section>
      ) : null}

      {page === "faqs" ? (
        <section className="info-page">
          <div className="info-hero">
            <div>
              <p className="landing-eyebrow">FAQs</p>
              <h1>Quick answers to common questions.</h1>
              <p className="landing-lede">
                Everything you need to know before bringing Attendance to your team.
              </p>
            </div>
            <div className="info-hero-card">
              <h3>Need more help?</h3>
              <p className="muted">Contact us anytime and we will respond quickly.</p>
            </div>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Can we track multiple organizations?</h3>
              <p className="muted">
                Yes. The platform supports multiple organizations with separate staff
                rosters and attendance rules.
              </p>
            </div>
            <div className="faq-item">
              <h3>Does attendance history stay saved?</h3>
              <p className="muted">
                Yes. You can view historical attendance and export reports in Plus
                and Pro tiers.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can we customize late check-in times?</h3>
              <p className="muted">
                Absolutely. Admins set late and early thresholds per organization.
              </p>
            </div>
            <div className="faq-item">
              <h3>Is there onboarding support?</h3>
              <p className="muted">
                Yes. Our team helps with onboarding and data setup for Plus and Pro.
              </p>
            </div>
          </div>
        </section>
      ) : null}

      {page === "plans" ? (
        <section className="info-page">
          <div className="info-hero">
            <div>
              <p className="landing-eyebrow">Plans</p>
              <h1>Choose the right plan for your organization.</h1>
              <div className="info-hero-card inline">
                <h3>Need a custom plan?</h3>
                <p className="muted">We can tailor a package for large teams.</p>
              </div>
              <p className="landing-lede">
                Start free, then unlock advanced analytics and integrations.
              </p>
            </div>
          </div>
          <div className="plans">
            <div className="plan-card">
              <h3>Starter</h3>
              <p className="plan-price">Free</p>
                <ul>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Daily sign-in and sign-out
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Organization staff list
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Late and early flags
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Admins: 1
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Staff: up to 20
                  </li>
                </ul>
              <button className="btn ghost" type="button">
                Get started
              </button>
            </div>
            <div className="plan-card highlight">
              <h3>Plus</h3>
              <p className="plan-price">NGN 45,000 / month</p>
                <ul>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Attendance history export (CSV)
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Shift and role analytics
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Manager notifications
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Priority support
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Admins: 3
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Staff: up to 100
                  </li>
                </ul>
              <button className="btn solid" type="button">
                Choose Plus
              </button>
            </div>
            <div className="plan-card">
              <h3>Pro</h3>
              <p className="plan-price">NGN 120,000 / month</p>
                <ul>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Multi-location dashboards
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Custom attendance rules
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Payroll integrations
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Dedicated success manager
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Admins: 10
                  </li>
                  <li>
                    <span className="plan-icon" aria-hidden="true" />
                    Staff: unlimited
                  </li>
                </ul>
              <button className="btn ghost" type="button">
                Talk to sales
              </button>
            </div>
          </div>
        </section>
      ) : null}

      <footer className="site-footer">
        <div className="footer-brand">
          <div className="footer-mark">A</div>
          <div>
            <strong>Attendance</strong>
            <p className="muted">Modern attendance clarity for growing teams.</p>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <Link to="/" className="footer-link">
              Features
            </Link>
            <Link to="/plans" className="footer-link">
              Pricing
            </Link>
            <Link to="/faqs" className="footer-link">
              Security
            </Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link to="/about" className="footer-link">
              About
            </Link>
            <Link to="/about" className="footer-link">
              Careers
            </Link>
            <Link to="/about" className="footer-link">
              Press
            </Link>
          </div>
          <div>
            <h4>Support</h4>
            <a href="mailto:hello@attendance.app" className="footer-link">
              Email us
            </a>
            <a href="tel:+2348107050824" className="footer-link">
              Call us
            </a>
            <Link to="/contact" className="footer-link">
              Help center
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="muted">© 2026 Attendance. All rights reserved.</span>
          <div className="footer-socials">
            <a className="footer-link" href="#">
              LinkedIn
            </a>
            <a className="footer-link" href="#">
              Twitter
            </a>
            <a className="footer-link" href="#">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;




