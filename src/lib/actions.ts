"use server";

import { sql } from "@vercel/postgres";
import { uploadImage } from "./images";

export const submitEvent = async (formData: FormData) => {
  // add try catch
  const storedImage = await uploadImage(formData.get("image") as File);
  const event = {
    title: formData.get("title") as string,
    startDate: formData.get("startDate") as string,
    // startTime: formData.get("startTime"),
    endDate: formData.get("endDate") as string,
    // endTime: formData.get("endTime"),
    description: formData.get("description") as string,
    address: formData.get("address") as string,
    link: formData.get("link") as string,
    image: storedImage.url,
  };
  const createResponse =
    await sql`CREATE TABLE IF NOT EXISTS Events (id VARCHAR(100) PRIMARY KEY, title VARCHAR(100) NOT NULL, description VARCHAR(256), startDate VARCHAR(100), endDate VARCHAR(100), address VARCHAR(100), link VARCHAR(200), image VARCHAR(200));`;
  const insertResponse =
    await sql`INSERT INTO events (id, title, startDate, endDate, description, address, link, image) 
    VALUES (${event.title.toLocaleLowerCase().trim()}, ${event.title}, ${
      event.startDate
    }, ${event.endDate}, ${event.description}, ${event.address}, ${
      event.link
    }, ${event.image});`;
};
