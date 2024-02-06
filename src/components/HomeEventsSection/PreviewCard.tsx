import Image from "next/image";
import Link from "next/link";

interface PreviewCardProps {
  title: string;
  image: string;
  link: string;
}
export default function PreviewCard({ title, image, link }: PreviewCardProps) {
  return (
    <div className="flex flex-col relative">
      <div className="w-full aspect-square bg-bg-secondary relative">
        <Image src={image} alt={title} fill />
      </div>
      <div className="whitespace-nowrap w-full truncate text-xl font-semibold mt-4 font-sans px-2">
        {title}
      </div>
      <Link target="_blank" href={link} className={"btn-double mt-6"} />
    </div>
  );
}
