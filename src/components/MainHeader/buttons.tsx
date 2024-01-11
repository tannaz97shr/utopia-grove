"use client";

import Button from "../UI/Button";
import { IconFavorite } from "../UI/Icons";

export default function Buttons() {
  return (
    <>
      <Button
        className="ml-auto"
        variant="secondary"
        onClick={() => {
          console.log("sign in/up clicked");
        }}
      >
        Login/Signup
      </Button>
      <Button
        className="rounded-full px-1 py-1 ml-2"
        variant="secondary"
        onClick={() => {
          console.log("favorite clicked");
        }}
      >
        <IconFavorite />
      </Button>
    </>
  );
}
