interface FormExtraInfoProps {
  children: React.ReactNode;
  info: string;
}

export default function FormExtraInfo({ children, info }: FormExtraInfoProps) {
  return (
    <div className="flex">
      <div>{children}</div>
      <div className="text-text-secondary text-sm p-6 mt-4">{info}</div>
    </div>
  );
}
