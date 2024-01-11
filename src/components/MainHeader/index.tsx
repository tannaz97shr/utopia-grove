import { IHeaderMenuItem } from "@/app/models/general";
import Link from "next/link";
import Logo from "../UI/Logo";
import Buttons from "./buttons";

export default function MainHeader() {
  const listItems: IHeaderMenuItem[] = [
    {
      id: "events",
      title: "events",
      href: "/events",
    },
    {
      id: "todo",
      title: "things to do",
      href: "/todo",
    },
    {
      id: "stay",
      title: "Stay",
      href: "/stay",
    },
  ];
  return (
    <div className="flex items-center w-full px-4 pt-6 border-b border-border-brown text-text-primary">
      <Link href="/">
        <Logo />
      </Link>
      <ul className="flex mt-auto ml-16">
        {listItems.map((item) => (
          <li
            key={item.id}
            className="mx-6 border-b-4 border-transparent font-semibold pb-6
            hover:cursor-pointer hover:text-custom-orange hover:border-b-4 hover:border-custom-orange"
          >
            <Link className="capitalize" href={item.href}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <Buttons />
    </div>
  );
}
