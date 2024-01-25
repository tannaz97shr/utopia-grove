import { IEvent } from "@/models/general";
import EventsCard from "./EventsCard";

interface EventsSectionProps {
  events: IEvent[];
}

export default function EventsSection({ events }: EventsSectionProps) {
  return (
    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4">
      {events.map((event: IEvent) => {
        return (
          <EventsCard
            key={event.id}
            id={event.id}
            title={event.title}
            image={event.image}
          />
        );
      })}
    </div>
  );
}
