import { fetchEvents, fetchSingleEvent } from "@/lib/events";

export const getEvents = async (page: number, perPage: number) => {
  try {
    const events = await fetchEvents(page, perPage);
    if (events) {
      return events;
    }
    return [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getSingleEvent = async (id: string) => {
  try {
    const [event] = await fetchSingleEvent(id);
    if (event) {
      return event;
    }
    return null;
  } catch (e) {
    console.error(e);
    return null;
  }
};
