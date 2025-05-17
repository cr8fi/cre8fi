import Header from "../Components/Header";
import Number from "../Components/Number";

export default function Form4({ DOB, updateFields }) {
  return (
    <>
      <Header text="Date of Birth" />

      <fieldset className="flex gap-6">
        <Number
          name="DOB"
          id="day"
          placeholder="Day"
          updateFields={updateFields}
          DOB={DOB}
          value={DOB.day}
          min={1}
          max={31}
        />
        <Number
          name="DOB"
          id="month"
          placeholder="Month"
          updateFields={updateFields}
          DOB={DOB}
          value={DOB.month}
          min={1}
          max={12}
        />
        <Number
          name="DOB"
          id="year"
          placeholder="Year"
          updateFields={updateFields}
          DOB={DOB}
          value={DOB.year}
          min={1900}
          max={2024}
        />
      </fieldset>
    </>
  );
}
