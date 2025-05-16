import Button from "../Components/Button";
import Header from "../Components/Header";
import Input from "../Components/Input";

export default function Form1() {
  return (
    <>
      <Header text="How will you use" span="Cre8Fi?" />

      <fieldset className="flex flex-col gap-6">
        <Input
          type="radio"
          name="how"
          id="creator"
          defaultChecked
          heading="Creator"
          paragraph="I want to showcase my skills and work on projects"
        />
        <Input
          type="radio"
          name="how"
          id="project"
          heading="Project"
          paragraph="I need to find creative talents and manage my projects"
        />
      </fieldset>
    </>
  );
}
