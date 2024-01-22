"use client";

import { submitEvent } from "@/lib/actions";
import { useFormState } from "react-dom";

interface CreateEventFormProps {
  children: React.ReactNode;
}

export default function CreateEventForm({ children }: CreateEventFormProps) {
  const [state, formAction] = useFormState(submitEvent, { message: null });
  return (
    <form
      className="flex flex-col border border-border-brown p-4"
      action={formAction}
    >
      {children}
      {state.message && <p>{state.message}</p>}
    </form>
  );
}
