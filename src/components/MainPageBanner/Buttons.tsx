"use client";

import Button from "../UI/Button";

export default function BannerButtons() {
  return (
    <div className="mt-4 flex">
      <Button
        variant="primary"
        onClick={() => {
          console.log("contact us clicked");
        }}
      >
        Contact Us
      </Button>
      <Button
        className="ml-3"
        variant="secondary"
        onClick={() => {
          console.log("Visit our recommended us clicked");
        }}
      >
        Recommendeds
      </Button>
    </div>
  );
}
