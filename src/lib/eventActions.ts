"use server";

import { ISubmitEventResponse } from "@/models/general";
import { revalidatePath } from "next/cache";
import { addSingleEvent, createEventsTable } from "./events";
import { uploadImage } from "./images";

export const submitEvent = async (
  _prevState: any,
  formData: FormData
): Promise<ISubmitEventResponse> => {
  const event = {
    title: formData.get("title") as string,
    startdate: `${formData.get("startdate") as string}, ${
      formData.get("startTime") as string
    }`,
    enddate: `${formData.get("enddate") as string}, ${
      formData.get("endTime") as string
    }`,
    description: formData.get("description") as string,
    address: formData.get("address") as string,
    link: formData.get("link") as string,
  };
  if (event.description.length > 512) {
    return {
      message: "Description must not be more thatn 512 charactess",
    };
  }
  try {
    const storedImage = await uploadImage(formData.get("image") as File);
    await createEventsTable();
    await addSingleEvent({ ...event, image: storedImage.url });
    revalidatePath("/events");
    return {
      message: "insert successful",
      status: 200,
    };
  } catch (e) {
    console.error("insert error", e);
    return {
      message: "insert error",
      status: 500,
    };
  }
};
