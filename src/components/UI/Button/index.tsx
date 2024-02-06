"use client";

import Link from "next/link";

interface ButtonProps {
  variant: "primary" | "secondary";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  submit?: boolean;
  href?: string;
}

export default function Button({
  variant,
  onClick,
  children,
  className,
  submit,
  href,
}: ButtonProps) {
  const primaryClassName = `px-4 py-2 rounded-md h-fit whitespace-nowrap border border-border-peach bg-custom-maroon text-bg-primary hover:text-custom-maroon hover:bg-bg-primary`;
  const secondaryClassName = `px-4 py-2 rounded-md h-fit whitespace-nowrap border border-border-peach text-custom-maroon font-semibold bg-bg-primary hover:text-bg-primary hover:bg-custom-maroon`;
  return (
    <>
      {submit ? (
        <button
          className={`${
            variant === "primary" ? primaryClassName : secondaryClassName
          } ${className}`}
          type="submit"
        >
          {children}
        </button>
      ) : href ? (
        <Link
          href={href}
          className={`${
            variant === "primary" ? primaryClassName : secondaryClassName
          } ${className}`}
          type="submit"
        >
          {children}
        </Link>
      ) : (
        <button
          className={`${
            variant === "primary" ? primaryClassName : secondaryClassName
          } ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
}
