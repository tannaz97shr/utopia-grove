import { IEvent, IRawEvent } from "@/models/general";
import { QueryResult, sql } from "@vercel/postgres";

export const createEventsTable = async () => {
  await sql`CREATE TABLE IF NOT EXISTS Events (id SERIAL PRIMARY KEY, title CHAR(100) NOT NULL, description CHAR(512), startdate CHAR(100), enddate CHAR(100), address CHAR(100), link CHAR(200), image CHAR(200));`;
};

export const addSingleEvent = async (event: IRawEvent) => {
  await sql`INSERT INTO events (title, startdate, enddate, description, address, link, image) 
    VALUES (${event.title}, ${event.startdate}, ${event.enddate}, ${event.description}, ${event.address}, ${event.link}, ${event.image});`;
};

export const fetchEvents = async (page: number, perPage: number) => {
  const response: Promise<
    QueryResult<IEvent>
  > = sql`SELECT * FROM events ORDER BY id OFFSET ${
    (page - 1) * perPage
  } ROWS FETCH NEXT ${perPage} ROWS ONLY;`;
  return (await response).rows;
};
export const fetchSingleEvent = async (id: string) => {
  const response: Promise<
    QueryResult<IEvent>
  > = sql`SELECT * FROM Events WHERE id=${id};`;
  return (await response).rows;
};
