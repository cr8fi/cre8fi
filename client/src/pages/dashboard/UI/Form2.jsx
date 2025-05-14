import Button from "../Components/Button";
import Header from "../Components/Header";
import Input from "../Components/Input";

export default function Form2() {
  return (
    <form action="#" className="py-10 px-20 flex flex-col gap-10">
      <Header text="What is your gender?" />

      <fieldset className="flex flex-col gap-6">
        <Input type="radio" name="gender" id="Male" heading="Male" />
        <Input type="radio" name="gender" id="Female" heading="Female" />
        <Input
          type="radio"
          name="gender"
          id="private"
          heading="Prefere not to say"
        />
      </fieldset>

      <Button />
    </form>
  );
}
