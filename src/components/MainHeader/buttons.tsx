"use client";

import { signOut, useSession } from "next-auth/react";
import Button from "../UI/Button";
import { IconFavorite } from "../UI/Icons";

export default function Buttons() {
  const { data: session } = useSession();
  return (
    <div className="mx-auto md:mr-0 md:ml-auto mt-auto md:mt-0 flex items-center">
      {!session ? (
        <Button variant="secondary" href="/auth">
          Login/Signup
        </Button>
      ) : (
        <>
          <Button
            className="rounded-full px-1 py-1 ml-2"
            variant="secondary"
            onClick={() => {
              signOut();
            }}
          >
            Log Out
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
      )}
    </div>
  );
}
