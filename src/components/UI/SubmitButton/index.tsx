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
      border border-border-brown bg-custom-orange text-bg-primary 
      hover:text-custom-orange hover:bg-bg-primary"
      type="submit"
    >
      {pending ? "Submitting..." : children}
    </button>
  );
}
