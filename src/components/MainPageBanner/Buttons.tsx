"use client";

import Button from "../UI/Button";

export default function BannerButtons() {
  return (
    <div className="mt-4 flex">
      <Button variant="primary" href="/#latestEvents">
        Latest Events
      </Button>
      <Button className="ml-3" variant="secondary" href="/#about">
        About
      </Button>
    </div>
  );
}
