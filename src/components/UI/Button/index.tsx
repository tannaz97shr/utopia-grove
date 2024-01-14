"use client";

interface ButtonProps {
  variant: "primary" | "secondary";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  submit?: boolean;
}

export default function Button({
  variant,
  onClick,
  children,
  className,
  submit,
}: ButtonProps) {
  return (
    <>
      {!submit ? (
        <button
          className={`px-4 py-2 rounded-md h-fit whitespace-nowrap ${
            variant !== "secondary"
              ? "border border-border-brown bg-custom-orange text-bg-primary hover:text-custom-orange hover:bg-bg-primary"
              : "border border-border-brown text-border-brown font-semibold bg-bg-secndary"
          } ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      ) : (
        <button
          className="mt-4 mx-auto px-4 py-2 
            border border-border-brown bg-custom-orange text-bg-primary 
            hover:text-custom-orange hover:bg-bg-primary"
          type="submit"
        >
          {children}
        </button>
      )}
    </>
  );
}
