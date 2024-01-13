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
    <label className="flex flex-col">
      {label}
      <input
        className={`w-72 rounded bg-bg-primary mt-2 p-1 focus-visible:outline-0 ${className}`}
        type={type}
        name={name}
        onChange={onChange && onChange}
        value={value && value}
        checked={checked && checked}
      />
    </label>
  );
}
