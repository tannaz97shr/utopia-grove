"use client";

import { ITabItem } from "@/models/general";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

// const tabItems: ITabItem[] = [
//   {
//     id: "all",
//     title: "All",
//   },
//   {
//     id: "pizza",
//     title: "Pizza Match",
//   },
//   {
//     id: "steak",
//     title: "Steak Match",
//   },
// ];

interface TabsProps {
  items: ITabItem[];
}

export default function Tabs({ items }: TabsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [currentTabId, setCurrentTabId] = useState<string>(
    searchParams.get("tab") ? (searchParams.get("tab") as string) : "login"
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      //   if (value === "all") {
      //     params.delete("food");
      //   } else {
      params.set(name, value);
      //   }

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    router.push(
      pathname + "?" + createQueryString("tab", currentTabId.toString())
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTabId]);

  const onTabChange = (id: string) => {
    setCurrentTabId(id);
  };

  return (
    <ul
      className="flex flex-wrap text-sm font-medium text-center mt-6 border-b justify-center 
text-text-secondary border-border-brown"
    >
      {items.map((item: ITabItem) => (
        <li
          key={item.id}
          onClick={() => onTabChange(item.id)}
          className={`me-2 inline-block p-4 min-w-[7rem] hover:cursor-pointer rounded-t-lg bg-bg-secondary 
        ${
          item.id === currentTabId
            ? "text-custom-orange font-semibold border-b-2 border-custom-orange"
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