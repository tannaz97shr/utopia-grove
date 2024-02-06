"use client";

import { ITabItem } from "@/models/general";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

interface TabsProps {
  items: ITabItem[];
}

export default function Tabs({ items }: TabsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [currentTabId, setCurrentTabId] = useState<"login" | "signup">("login");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    router.push(pathname + "?" + createQueryString("tab", currentTabId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTabId]);

  const onTabChange = (id: "login" | "signup") => {
    setCurrentTabId(id);
  };

  if (
    ((searchParams.get("tab") !== "login") as boolean) &&
    ((searchParams.get("tab") !== "signup") as boolean)
  ) {
    router.push(pathname + "?" + createQueryString("tab", "login"));
  }

  return (
    <ul
      className="flex flex-wrap text-sm font-medium text-center mt-6 border-b justify-center 
text-text-secondary border-peach"
    >
      {items.map((item: ITabItem) => (
        <li
          key={item.id}
          onClick={() => onTabChange(item.id)}
          className={`me-2 inline-block p-4 min-w-[7rem] hover:cursor-pointer rounded-t-lg bg-teal 
        ${
          item.id === currentTabId
            ? "text-maroon font-semibold border-b-2 border-maroon"
            : "text-text-secondary "
        }
        `}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}
