type Props = {
  selectedDate: string;
  onChange: (value: string) => void;
};

const DateSelector = ({ selectedDate, onChange }: Props) => {
  return (
    <div className="date-select">
      <label htmlFor="attendance-date">Attendance date</label>
      <input
        id="attendance-date"
        type="date"
        value={selectedDate}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default DateSelector;
