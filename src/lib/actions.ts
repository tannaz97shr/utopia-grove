"use server";

export const submitEvent = async (formData: FormData) => {
  const event = {
    title: formData.get("title"),
    startDate: formData.get("startDate"),
    startTime: formData.get("startTime"),
    endDate: formData.get("endDate"),
    endTime: formData.get("endTime"),
    description: formData.get("description"),
    address: formData.get("address"),
    link: formData.get("link"),
    image: formData.get("image"),
  };
  console.log("event submited", event);
};
