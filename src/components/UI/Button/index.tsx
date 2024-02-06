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
  const primaryClassName = `px-4 py-2 rounded-md h-fit whitespace-nowrap border border-peach bg-maroon text-beige hover:text-maroon hover:bg-beige`;
  const secondaryClassName = `px-4 py-2 rounded-md h-fit whitespace-nowrap border border-peach text-maroon font-semibold bg-beige hover:text-beige hover:bg-maroon`;
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
