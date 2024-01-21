import { fetchEvents } from "@/lib/events";

export default async function Events() {
  await fetchEvents(2, 2);
  return <div>this is events page</div>;
}
