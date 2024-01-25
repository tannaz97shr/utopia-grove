import Image from "next/image";
import Link from "next/link";

interface EventsCardProps {
  id: number;
  title: string;
  image: string;
}

export default function EventsCard({ id, title, image }: EventsCardProps) {
  return (
    <Link
      href={`/events/${id}`}
      className="flex flex-col px-2 py-4 w-full mx-auto max-w-[400px] custom-shadow hover:bg-bg-secondary"
    >
      <div className="relative w-full mx-auto aspect-video shadow-none">
        {image && (
          <Image className="w-full h-full" alt={title} src={image} fill />
        )}
      </div>
      <h2 className="mt-4 max-w-full mx-auto font-semibold text-xl truncate">
        {title}
      </h2>
    </Link>
  );
}
