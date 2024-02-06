import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface ArrowProps {
  left?: boolean;
  onClick: (e: any) => void;
}

export default function Arrow({ left, onClick }: ArrowProps) {
  return (
    <div className="flex rounded-full bg-blur z-40 w-8 h-8" onClick={onClick}>
      {left ? (
        <FaAngleLeft className="text-bg-secondary m-auto" />
      ) : (
        <FaAngleRight className="text-bg-secondary m-auto" />
      )}
    </div>
  );
}
