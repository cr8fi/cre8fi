import Button from "../Components/Button";
import Header from "../Components/Header";
import Input from "../Components/Input";
import Radio from "../Components/Radio";

export default function Form1({ howUseCre8Fi, updateFields }) {
  return (
    <>
      <Header text="How will you use" span="Cre8Fi?" />

      <fieldset className="flex flex-col gap-6">
        <Radio
          type="radio"
          name="howUseCre8Fi"
          id="creator"
          heading="Creator"
          paragraph="I want to showcase my skills and work on projects"
          isChecked={howUseCre8Fi === "creator"}
          value="creator"
          updateFields={updateFields}
        />
        <Radio
          type="radio"
          name="howUseCre8Fi"
          id="project"
          heading="Project"
          paragraph="I need to find creative talents and manage my projects"
          isChecked={howUseCre8Fi === "project"}
          value="project"
          updateFields={updateFields}
        />
      </fieldset>
    </>
  );
}
