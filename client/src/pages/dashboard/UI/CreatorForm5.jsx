import Header from "../Components/Header";
import TextArea from "../Components/TextArea";

export default function Form5({ description, updateFields }) {
  return (
    <>
      <Header text="Tell us a bit about yourself" />
      <fieldset>
        <TextArea
          heading="Write a short description about you"
          placeholder="I am a graphics designer who solve all your problem with my ............."
          name="description"
          id="description"
          value={description}
          updateFields={updateFields}
        />
      </fieldset>
    </>
  );
}
