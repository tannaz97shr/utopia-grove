import CreateEventForm from "@/components/CreateEventForm";
import FormExtraInfo from "@/components/FormExtraInfo";
import ImagePicker from "@/components/ImagePicker";
import DateAndTimePicker from "@/components/UI/DateAndTimePicker";
import Input from "@/components/UI/Input";
import SubmitButton from "@/components/UI/SubmitButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Create() {
  const session = await getServerSession();
  if (!session) {
    redirect("/events");
  }
  return (
    <>
      <h1 className="text-3xl mt-6 mx-auto">Submit Your Event</h1>
      <div className="w-full lg:w-3/4 mx-auto bg-bg-secondary p-2 mt-6">
        <CreateEventForm>
          <FormExtraInfo info="Allow at least 48 hours for events to be approved by a team member. Check to see if your event is already posted on the events calendar before submitting this form. There is a chance a team member may have posted it. Do not use all caps.">
            <Input required name="title" type="text" label="Title" />
            <DateAndTimePicker
              dateName="startdate"
              timeName="startTime"
              label="Start Date"
              required
            />
            <DateAndTimePicker
              dateName="enddate"
              timeName="endTime"
              label="End Date"
              required
            />
          </FormExtraInfo>
          <FormExtraInfo info="Tell visitors all about your event!">
            <Input
              name="description"
              type="textarea"
              label="Event Description"
              required
            />
          </FormExtraInfo>
          <FormExtraInfo info="Type the name of a business, name of a popular venue, or just use a street address where the event will take place">
            <Input required name="address" type="text" label="Event Address" />
          </FormExtraInfo>
          <FormExtraInfo info="This is the page where people should go to find out more information about your event, RSVP, or buy a ticket (if applicable). If you don't have a page setup for the event, it's best to leave this field blank.">
            <Input name="link" type="text" label="Event Website Link" />
          </FormExtraInfo>
          <ImagePicker name="image" label="Event Image :" />
          <SubmitButton>Submit Event</SubmitButton>
        </CreateEventForm>
      </div>
    </>
  );
}
