"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const getWeekStart = (date) => {
    const day = date.getDay();
    const diff = (day + 6) % 7;
    const start = new Date(date);
    start.setDate(date.getDate() - diff);
    start.setHours(0, 0, 0, 0);
    return start;
};
const isWorkingDay = (dateISO, workingDays) => {
    const day = new Date(dateISO).getDay();
    return workingDays.includes(day);
};
const getWeekRange = (today, workingDays, includeFuture) => {
    const start = getWeekStart(today);
    const dates = [];
    for (let offset = 0; offset < 7; offset += 1) {
        const next = new Date(start);
        next.setDate(start.getDate() + offset);
        if (!includeFuture && next > today)
            break;
        dates.push(next.toISOString().slice(0, 10));
    }
    return dates.filter((day) => isWorkingDay(day, workingDays));
};
const getMonthRange = (today, workingDays, includeFuture) => {
    const year = today.getFullYear();
    const month = today.getMonth();
    const totalDays = includeFuture
        ? new Date(year, month + 1, 0).getDate()
        : today.getDate();
    const dates = [];
    for (let day = 1; day <= totalDays; day += 1) {
        const next = new Date(year, month, day);
        dates.push(next.toISOString().slice(0, 10));
    }
    return dates.filter((day) => isWorkingDay(day, workingDays));
};
const getDateRange = (range, workingDays, includeFuture) => {
    const today = new Date();
    return range === "week"
        ? getWeekRange(today, workingDays, includeFuture)
        : getMonthRange(today, workingDays, includeFuture);
};
const combineDateAndTime = (dateISO, time) => {
    const [year, month, day] = dateISO.split("-").map(Number);
    const [hours, minutes] = time.split(":").map(Number);
    return new Date(year, month - 1, day, hours, minutes, 0, 0);
};
const isLateCheckIn = (signInAt, lateAfterTime, dateISO) => {
    if (!signInAt || !lateAfterTime || !dateISO)
        return false;
    const lateAfter = combineDateAndTime(dateISO, lateAfterTime);
    return signInAt.getTime() > lateAfter.getTime();
};
const isEarlyCheckout = (signOutAt, earlyCheckoutBeforeTime, dateISO) => {
    if (!signOutAt || !earlyCheckoutBeforeTime || !dateISO)
        return false;
    const earlyCutoff = combineDateAndTime(dateISO, earlyCheckoutBeforeTime);
    return signOutAt.getTime() < earlyCutoff.getTime();
};
let AnalyticsService = class AnalyticsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAnalytics(orgId, range, filter) {
        const organization = await this.prisma.organization.findUnique({
            where: { id: orgId },
            include: { staff: true }
        });
        if (!organization) {
            return {
                rangeStart: null,
                rangeEnd: null,
                rows: [],
                totals: { late: 0, early: 0, absent: 0 }
            };
        }
        const workingDays = organization.workingDays ?? [1, 2, 3, 4, 5];
        const includeFuture = organization.analyticsIncludeFutureDays ?? false;
        const dateRange = getDateRange(range, workingDays, includeFuture);
        const records = dateRange.length
            ? await this.prisma.attendanceRecord.findMany({
                where: {
                    organizationId: orgId,
                    dateISO: { in: dateRange }
                }
            })
            : [];
        const recordMap = new Map();
        records.forEach((record) => {
            recordMap.set(`${record.staffId}-${record.dateISO}`, {
                signInAt: record.signInAt ?? null,
                signOutAt: record.signOutAt ?? null
            });
        });
        const rows = organization.staff.map((staff) => {
            let lateCount = 0;
            let earlyCount = 0;
            let absentCount = 0;
            dateRange.forEach((dateISO) => {
                const record = recordMap.get(`${staff.id}-${dateISO}`);
                if (!record?.signInAt) {
                    absentCount += 1;
                    return;
                }
                if (isLateCheckIn(record.signInAt, organization.lateAfterTime, dateISO)) {
                    lateCount += 1;
                }
                if (record.signOutAt &&
                    isEarlyCheckout(record.signOutAt, organization.earlyCheckoutBeforeTime, dateISO)) {
                    earlyCount += 1;
                }
            });
            return {
                staff,
                lateCount,
                earlyCount,
                absentCount
            };
        });
        const filteredRows = rows.filter((row) => {
            if (filter === "late")
                return row.lateCount > 0;
            if (filter === "early")
                return row.earlyCount > 0;
            if (filter === "absent")
                return row.absentCount > 0;
            return true;
        });
        const totals = rows.reduce((acc, row) => {
            acc.late += row.lateCount;
            acc.early += row.earlyCount;
            acc.absent += row.absentCount;
            return acc;
        }, { late: 0, early: 0, absent: 0 });
        return {
            rangeStart: dateRange[0] ?? null,
            rangeEnd: dateRange[dateRange.length - 1] ?? null,
            rows: filteredRows,
            totals
        };
    }
};
exports.AnalyticsService = AnalyticsService;
exports.AnalyticsService = AnalyticsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AnalyticsService);
//# sourceMappingURL=analytics.service.js.map