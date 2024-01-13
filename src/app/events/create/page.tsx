import Input from "@/components/UI/Input";

export default function Create() {
  return (
    <>
      <h1 className="text-3xl mt-6 mx-auto">Submit Your Event</h1>
      <div className="w-full lg:w-3/4 mx-auto bg-bg-secndary p-2 mt-6">
        <form className="border border-border-brown p-4">
          {/* <label className="flex flex-col">
            Title:
            <input
              className="w-72 rounded bg-bg-primary mt-2 p-1 focus-visible:outline-0"
              type="text"
              name="name"
            />
          </label> */}
          <Input name="title" type="text" label="Title" />
        </form>
      </div>
    </>
  );
}
