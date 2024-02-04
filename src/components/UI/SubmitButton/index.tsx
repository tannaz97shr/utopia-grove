"use client";

import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  children: React.ReactNode;
}

export default function SubmitButton({ children }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      className="mt-4 mx-auto px-4 py-2 
      border border-border-peach bg-custom-maroon text-bg-primary 
      hover:text-custom-maroon hover:bg-bg-primary"
      type="submit"
    >
      {pending ? "Submitting..." : children}
    </button>
  );
}
