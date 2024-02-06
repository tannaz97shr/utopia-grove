import { fetchEvents } from "@/lib/events";
import { IEvent } from "@/models/general";
import PreviewCard from "./PreviewCard";

export default async function HomeEventsSection() {
  const latestEvents = await fetchEvents(1, 4);
  if (!latestEvents.length) return;
  return (
    <div className="mt-8 w-full">
      <h2 id="latestEvents" className="font-semibold text-2xl w-fit mx-auto">
        Latest Events
      </h2>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 pt-4">
        {latestEvents.map((event: IEvent) => (
          <PreviewCard
            key={event.id}
            image={event.image}
            title={event.title}
            link={event.link}
          />
        ))}
      </div>
    </div>
  );
}
