interface DateAndTimePickerProps {
  label: string;
  dateName: string;
  timeName: string;
}

export default function DateAndTimePicker({
  label,
  dateName,
  timeName,
}: DateAndTimePickerProps) {
  return (
    <label className="flex flex-col mt-4">
      {label} :
      <div className="w-72 flex gap-2 mt-2">
        <input
          className="w-36 rounded bg-bg-primary mt-2 p-1 focus-visible:outline-0"
          name={dateName}
          type="date"
        />
        <input
          className="w-36 rounded bg-bg-primary mt-2 p-1 focus-visible:outline-0"
          name={timeName}
          type="time"
        />
      </div>
    </label>
  );
}
