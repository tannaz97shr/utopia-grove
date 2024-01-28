import LoginForm from "@/components/LoginForm";
import Tabs from "@/components/Tabs";
import { notFound } from "next/navigation";

export default function AuthPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  if (searchParams.tab !== "login" && searchParams.tab !== "signup") {
    notFound();
  }
  return (
    <div className="w-full lg:w-3/4 mx-auto bg-bg-secondary p-2 mt-6">
      <div className="flex flex-col border border-border-brown p-4">
        <Tabs
          items={[
            { id: "login", title: "log in" },
            { id: "signup", title: "sign up" },
          ]}
        />
        <LoginForm />
      </div>
    </div>
  );
}
