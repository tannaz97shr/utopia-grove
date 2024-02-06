import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

export default function Footer() {
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center
    w-full mt-5 p-4 bottom-0 absolute
  beige-teal lg:bg-gradient-to-r from-teal to-peach"
    >
      <div className="mb-4 md:mb-0">
        Email:{" "}
        <Link
          className="drop-shadow-xl font-semibold"
          href="mailto:tia.shr97@gmail.com"
        >
          tia.shr97@gmail.com
        </Link>
      </div>
      <div className="flex">
        <Link
          className="mx-4"
          target="_blank"
          href={"https://www.linkedin.com/in/tannaz-shirzadi/"}
        >
          <FaLinkedin size={30} />
        </Link>
        <Link
          className="mx-4"
          target="_blank"
          href={"https://github.com/tannaz97shr"}
        >
          <FaGithub size={30} />
        </Link>
        <Link
          className="mx-4"
          target="_blank"
          href={"https://portfolio-eta-blond.vercel.app/"}
        >
          <ImProfile size={30} />
        </Link>
      </div>
    </div>
  );
}
