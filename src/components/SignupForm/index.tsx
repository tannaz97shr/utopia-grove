import Input from "../UI/Input";
import SubmitButton from "../UI/SubmitButton";

export default function SignupForm() {
  return (
    <form
      className="flex flex-col p-4 w-fit mx-auto"
      // action={formAction}
    >
      <Input required name="email" type="text" label="Email" />
      <Input required name="password" type="password" label="Password" />
      <Input
        required
        name="repeatPassword"
        type="password"
        label="Repeat Password"
      />
      <div className="w-fit mt-4 mr-auto">
        <SubmitButton>Sign Up</SubmitButton>
      </div>
    </form>
  );
}
