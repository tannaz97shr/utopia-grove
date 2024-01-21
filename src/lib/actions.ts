"use server";

import { sql } from "@vercel/postgres";
import { uploadImage } from "./images";

export const submitEvent = async (formData: FormData) => {
  // add try catch
  const event = {
    title: formData.get("title") as string,
    startDate: formData.get("startDate") as string,
    // startTime: formData.get("startTime"),
    endDate: formData.get("endDate") as string,
    // endTime: formData.get("endTime"),
    description: formData.get("description") as string,
    address: formData.get("address") as string,
    link: formData.get("link") as string,
    // image: storedImage.url,
  };
  try {
    const storedImage = await uploadImage(formData.get("image") as File);
    const createResponse =
      await sql`CREATE TABLE IF NOT EXISTS Events (id SERIAL PRIMARY KEY, title CHAR(100) NOT NULL, description CHAR(256), startDate CHAR(100), endDate CHAR(100), address CHAR(100), link CHAR(200), image CHAR(200));`;
    console.log("table created", createResponse);

    const insertResponse =
      await sql`INSERT INTO events (title, startDate, endDate, description, address, link, image) 
    VALUES (${event.title}, ${event.startDate}, ${event.endDate}, ${event.description}, ${event.address}, ${event.link}, ${event.link}, ${storedImage.url});`;
    console.log("insert successful", insertResponse);
  } catch (e) {
    console.error("insert error", e);
  }
};
