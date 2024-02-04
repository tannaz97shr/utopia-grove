"use client";

import { IHeaderMenuItem } from "@/models/general";
import Link from "next/link";
import { useState } from "react";
import { IconCross, IconMenu } from "../UI/Icons";
import Buttons from "./buttons";

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

export default function NavbarList() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuButtonClicked = () => {
    setIsMenuOpen(isMenuOpen ? false : true);
  };

  return (
    <>
      <button
        onClick={menuButtonClicked}
        className="flex md:hidden ml-auto mb-4 mr-4"
      >
        {isMenuOpen ? <IconCross /> : <IconMenu />}
      </button>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden md:flex"
        } w-[90%] md:w-[40rem] flex-col md:flex-row absolute md:relative top-28 md:top-0 bg-bg-primary border left-1/2 transform -translate-x-1/2 md:border-none p-4 md:p-0 h-[70vh] md:h-fit`}
      >
        <ul className="flex md:mt-auto flex-col md:flex-row items-baseline">
          {listItems.map((item) => (
            <li
              key={item.id}
              className="mx-6 border-b-4 border-transparent font-semibold py-4
        hover:cursor-pointer hover:text-custom-maroon hover:border-b-4 hover:border-custom-maroon"
            >
              <Link className="capitalize" href={item.href}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Buttons />
      </div>
    </>
  );
}
