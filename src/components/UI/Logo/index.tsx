import Image from "next/image";
import ForestIcon from "./forest.png";

export default function Logo() {
  return (
    <div className="flex items-center font-semibold text-2xl">
      <Image
        src={ForestIcon}
        width={50}
        height={50}
        alt="Picture of the author"
      />
      <span className="ml-4">Utopia Grove</span>
    </div>
  );
}
