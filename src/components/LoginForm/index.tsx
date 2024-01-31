"use client";

// import { signInUser } from "@/lib/authActions";
import { IAuthResponse } from "@/models/general";
import NotificationContext from "@/store/notification-context";
import { SignInResponse, signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useContext, useEffect } from "react";
import { useFormState } from "react-dom";
import Input from "../UI/Input";
import SubmitButton from "../UI/SubmitButton";

const signInUser = async (
  _prevState: any,
  formData: FormData
): Promise<IAuthResponse> => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    return {
      message: "invalid input data",
      status: 500,
    };
  }
  const result: SignInResponse | undefined = await signIn("credentials", {
    redirect: false,
    email: email,
    password: password,
  });
  if (result?.error) {
    return {
      message: "Sign in Error",
      status: 500,
    };
  }
  return {
    message: "Sin in successful",
    status: 200,
  };
};

export default function LoginForm() {
  const [state, formAction] = useFormState(signInUser, { message: null });
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
      <div className="w-fit mt-4 mr-auto">
        <SubmitButton>Login</SubmitButton>
      </div>
    </form>
  );
}
