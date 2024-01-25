import { IEvent } from "@/models/general";
import { QueryResult, sql } from "@vercel/postgres";

export const createEventsTable = async () => {
  await sql`CREATE TABLE IF NOT EXISTS Events (id SERIAL PRIMARY KEY, title CHAR(100) NOT NULL, description CHAR(512), startDate CHAR(100), endDate CHAR(100), address CHAR(100), link CHAR(200), image CHAR(200));`;
};

export const addSingleEvent = async (event: IEvent) => {
  await sql`INSERT INTO events (title, startDate, endDate, description, address, link, image) 
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
  > = sql`SELECT * FROM events WHERE id=${id};`;
  return (await response).rows;
};
