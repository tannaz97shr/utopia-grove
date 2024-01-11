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
      className={`px-4 py-2 h-fit rounded-md ${
        variant !== "secondary"
          ? "border border-border-brown bg-custom-orange"
          : "border border-custom-orange text-custom-orange font-semibold"
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
