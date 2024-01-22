"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { addSingleEvent, createEventsTable } from "./events";
import { uploadImage } from "./images";

export const submitEvent = async (
  _prevState: any,
  formData: FormData
): Promise<{ message?: string | null }> => {
  const event = {
    title: formData.get("title") as string,
    startDate: `${formData.get("startDate") as string}, ${
      formData.get("startTime") as string
    }`,
    endDate: `${formData.get("endDate") as string}, ${
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
    redirect("/events");
  } catch (e) {
    console.error("insert error", e);
    return {
      message: "insert error",
    };
  }
};
