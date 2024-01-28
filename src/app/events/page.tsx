import EventsSection from "@/components/EventsSection";
import { fetchEvents } from "@/lib/events";
import { IEvent } from "@/models/general";

export default async function Events() {
  const eventsResponse: IEvent[] = await fetchEvents(1, 20);
  return (
    <>
      <EventsSection events={eventsResponse} />
    </>
  );
}
