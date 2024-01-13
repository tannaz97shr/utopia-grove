"use client";

interface ButtonProps {
  variant: "primary" | "secondary";
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant,
  onClick,
  children,
  className,
}: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-md h-fit whitespace-nowrap ${
        variant !== "secondary"
          ? "border border-border-brown bg-custom-orange"
          : "border border-border-brown text-border-brown font-semibold bg-bg-secndary"
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
