import Button from "../Components/Button";
import Header from "../Components/Header";
import Input from "../Components/Input";
import Radio from "../Components/Radio";

export default function Form2({ gender, updateFields }) {
  return (
    <>
      <Header text="What is your gender?" />

      <fieldset className="flex flex-col gap-6">
        <Radio
          type="radio"
          name="gender"
          id="male"
          heading="Male"
          isChecked={gender === "male"}
          value="male"
          updateFields={updateFields}
        />

        <Radio
          type="radio"
          name="gender"
          id="female"
          heading="Female"
          isChecked={gender === "female"}
          value="female"
          updateFields={updateFields}
        />

        <Radio
          type="radio"
          name="gender"
          id="prefereNotToSay"
          heading="Prefere not to say"
          isChecked={gender === "prefereNotToSay"}
          value="prefereNotToSay"
          updateFields={updateFields}
        />
      </fieldset>
    </>
  );
}
