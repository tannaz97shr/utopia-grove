"use client";

import { submitEvent } from "@/lib/actions";
import NotificationContext from "@/store/notification-context";
import { redirect } from "next/navigation";
import { useContext, useEffect } from "react";
import { useFormState } from "react-dom";

interface CreateEventFormProps {
  children: React.ReactNode;
}

export default function CreateEventForm({ children }: CreateEventFormProps) {
  const [state, formAction] = useFormState(submitEvent, { message: null });
  const notificationCtx = useContext(NotificationContext);
  useEffect(() => {
    if (state.status === 200) {
      notificationCtx.showNotification({
        message: "Event successfully submited.",
        status: "success",
      });
      redirect("/events");
    } else if (state.status === 500) {
      notificationCtx.showNotification({
        message: "Event submission failed.",
        status: "error",
      });
    }
  }, [state]);
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
