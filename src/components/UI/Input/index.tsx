interface InputProps {
  className?: string;
  type: string;
  name: string;
  label: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

export default function Input({
  className,
  type,
  name,
  label,
  value,
  onChange,
  checked,
}: InputProps) {
  return (
    <label className="flex flex-col mt-4">
      {label} :
      {type !== "textarea" ? (
        <input
          className={`w-72 rounded bg-bg-primary mt-2 p-1 focus-visible:outline-0 ${className}`}
          name={name}
          onChange={onChange && onChange}
          value={value && value}
          type={type}
          checked={checked && checked}
        />
      ) : (
        <textarea
          className={`w-72 rounded bg-bg-primary mt-2 p-1 focus-visible:outline-0 ${className}`}
          name={name}
          value={value && value}
        />
      )}
    </label>
  );
}
