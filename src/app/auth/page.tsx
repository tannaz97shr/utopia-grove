import Tabs from "@/components/Tabs";

export default function AuthPage() {
  return (
    <div className="w-full lg:w-3/4 mx-auto bg-bg-secondary p-2 mt-6">
      <div className="flex flex-col border border-border-brown p-4">
        Auth page
        <Tabs
          items={[
            { id: "login", title: "log in" },
            { id: "signup", title: "sign up" },
          ]}
        />
      </div>
    </div>
  );
}
