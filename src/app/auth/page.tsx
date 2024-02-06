"use client";

import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";
import Tabs from "@/components/Tabs";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full lg:w-3/4 mx-auto bg-teal p-2 mt-6">
      <div className="flex flex-col border border-peach p-4">
        <Tabs
          items={[
            { id: "login", title: "log in" },
            { id: "signup", title: "sign up" },
          ]}
        />
        {searchParams.tab === "login" && <LoginForm />}
        {searchParams.tab === "signup" && <SignupForm />}
      </div>
    </div>
  );
}
