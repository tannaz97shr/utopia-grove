"use client";

import { createUser } from "@/lib/authActions";
import NotificationContext from "@/store/notification-context";
import { redirect } from "next/navigation";
import { useContext, useEffect } from "react";
import { useFormState } from "react-dom";
import Input from "../UI/Input";
import SubmitButton from "../UI/SubmitButton";

export default function SignupForm() {
  const [state, formAction] = useFormState(createUser, { message: null });
  const notificationCtx = useContext(NotificationContext);
  useEffect(() => {
    if (state.status === 200) {
      notificationCtx.showNotification({
        message: state.message as string,
        status: "success",
      });
      redirect("/");
    } else if (state.status === 500) {
      notificationCtx.showNotification({
        message: state.message as string,
        status: "error",
      });
    }
  }, [state]);
  return (
    <form className="flex flex-col p-4 w-fit mx-auto" action={formAction}>
      <Input required name="email" type="text" label="Email" />
      <Input required name="password" type="password" label="Password" />
      <Input
        required
        name="repeatPassword"
        type="password"
        label="Repeat Password"
      />
      <div className="w-fit mt-4 mr-auto">
        <SubmitButton>Sign Up</SubmitButton>
      </div>
    </form>
  );
}
