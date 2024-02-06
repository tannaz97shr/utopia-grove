import Image from "next/image";
import DubaiIcon from "./dubai-logo.png";

export default function Logo() {
  return (
    <div className="flex items-center font-semibold text-2xl mb-4">
      <Image
        src={DubaiIcon}
        width={50}
        height={50}
        alt="Picture of the author"
      />
      <span className="ml-4">Dubai Events</span>
    </div>
  );
}
