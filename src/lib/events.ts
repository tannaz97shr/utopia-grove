import { IEvent, IRawEvent } from "@/models/general";
import { QueryResult, sql } from "@vercel/postgres";

export const createEventsTable = async () => {
  await sql`CREATE TABLE IF NOT EXISTS events
  (
     id          SERIAL PRIMARY KEY,
     title       CHAR(100) NOT NULL,
     description CHAR(512),
     start_date  TIMESTAMP,
     end_date    TIMESTAMP,
     address     CHAR(100),
     link        CHAR(200),
     image       CHAR(200),
     user_id     integer REFERENCES users
  ); `;
};

export const addSingleEvent = async (event: IRawEvent, userId: string) => {
  await sql`INSERT INTO events
  (
              title,
              startdate,
              enddate,
              description,
              address,
              link,
              image,
              user_id
  )
  VALUES
  (
              ${event.title},
              ${event.start_date},
              ${event.end_date},
              ${event.description},
              ${event.address},
              ${event.link},
              ${event.image},
              ${userId}
  );`;
};

export const fetchEvents = async (page: number, perPage: number) => {
  const now = new Date();
  const response: Promise<QueryResult<IEvent>> = sql`SELECT *
  FROM   events
  WHERE  start_date > ${now.toISOString()}
  ORDER  BY start_date
  LIMIT 
    ${perPage} OFFSET ${(page - 1) * perPage};`;

  return (await response).rows;
};
export const fetchSingleEvent = async (id: string) => {
  const response: Promise<
    QueryResult<IEvent>
  > = sql`SELECT * FROM Events WHERE id=${id};`;
  return (await response).rows;
};
