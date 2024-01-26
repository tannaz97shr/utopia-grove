import TextCollapse from "@/components/TextCollapse";
import Button from "@/components/UI/Button";
import { fetchSingleEvent } from "@/lib/events";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CiLocationOn } from "react-icons/ci";

export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  const [event] = await fetchSingleEvent(params.slug);
  const start = new Date(event.startDate);
  const end = new Date(event.endDate);
  if (!event) {
    notFound();
  }
  return (
    <>
      <h1 className="mt-6 text-xl md:text-3xl text-custom-orange font-semibold">
        {event.title}
      </h1>
      <div className="flex flex-col md:flex-row mt-6">
        <div className="w-full md:w-3/5">
          <div className="flex items-center">
            <CiLocationOn />
            <span>{event.address}</span>
          </div>
          <div className="flex flex-col mt-6">
            <h2 className="font-semibold text-lg">When</h2>
            <div>
              From: {start.toLocaleDateString()}, {start.toLocaleTimeString()}
            </div>
            <div>
              To: {end.toLocaleDateString()}, {end.toLocaleTimeString()}
            </div>
          </div>
          <Button variant="primary" href={event.link} className="mt-10">
            Visit Website
          </Button>
          <TextCollapse text={event.description} />
        </div>
        <div className="w-full md:w-2/5">
          <div className="relative w-full aspect-video">
            <Image
              className="w-full h-full"
              src={event.image}
              fill
              alt={event.title}
            />
          </div>
        </div>
      </div>
    </>
  );
}
