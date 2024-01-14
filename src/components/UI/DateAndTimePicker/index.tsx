interface DateAndTimePickerProps {
  label: string;
  dateName: string;
  timeName: string;
  required?: boolean;
}

export default function DateAndTimePicker({
  label,
  dateName,
  timeName,
  required,
}: DateAndTimePickerProps) {
  return (
    <label className="flex flex-col mt-4">
      {label} :
      <div className="w-72 flex gap-2 mt-2">
        <input
          className="w-36 rounded bg-bg-primary mt-2 p-1 focus-visible:outline-0"
          name={dateName}
          type="date"
          required={required}
        />
        <input
          className="w-36 rounded bg-bg-primary mt-2 p-1 focus-visible:outline-0"
          name={timeName}
          type="time"
          required={required}
        />
      </div>
    </label>
  );
}
