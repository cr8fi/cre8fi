import Header from "../Components/Header";
import Input from "../Components/Input";
import TextArea from "../Components/TextArea";

export default function ProjectForm2({
  projectName,
  projectOverview,
  updateFields,
}) {
  return (
    <>
      <Header text="Tell us about your project" />

      <fieldset className="flex flex-col gap-6">
        <Input
          type="text"
          name="projectName"
          id="projectName"
          heading="Display Name"
          placeholder="Willbur Wright"
          value={projectName}
          updateFields={updateFields}
        />
        <TextArea
          heading="Short overview of the project"
          placeholder="Yourbestdesigner123"
          name="projectOverview"
          id="projectOverview"
          value={projectOverview}
          updateFields={updateFields}
        />
      </fieldset>
    </>
  );
}
