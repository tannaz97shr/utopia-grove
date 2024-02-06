import { getEvents } from "@/api/events";
import EventsSection from "@/components/EventsSection";
import Button from "@/components/UI/Button";
import { IEvent } from "@/models/general";
import { getServerSession } from "next-auth";

export default async function Events() {
  //todo move to get events function
  const eventsResponse: IEvent[] = await getEvents(1, 20);
  const session = await getServerSession();
  return (
    <>
      {session && (
        <div className="mt-6">
          <Button variant="primary" href="/events/create" className="mt-6">
            Submit Your Event
          </Button>
        </div>
      )}
      <EventsSection events={eventsResponse} />
    </>
  );
}
