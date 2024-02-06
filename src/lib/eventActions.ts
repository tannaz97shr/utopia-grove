"use server";

import { ISubmitEventResponse } from "@/models/general";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { findUserByEmail } from "./auth";
import { addSingleEvent, createEventsTable } from "./events";
import { uploadImage } from "./images";

export const submitEvent = async (
  _prevState: any,
  formData: FormData
): Promise<ISubmitEventResponse> => {
  const session = await getServerSession();
  if (!session) {
    redirect("/events");
  }
  const start = new Date(
    `${formData.get("startDate") as string}, ${
      formData.get("startTime") as string
    }`
  );
  const end = new Date(
    `${formData.get("endDate") as string}, ${formData.get("endTime") as string}`
  );
  const event = {
    title: formData.get("title") as string,
    start_date: start.toISOString(),
    end_date: end.toISOString(),
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
    const [user] = await findUserByEmail(session.user?.email as string);
    await addSingleEvent({ ...event, image: storedImage.url }, user.id);
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
