import Header from "../Components/Header";

export default function Form4() {
  return (
    <>
      <Header text="Date of Birth" />

      <fieldset className="flex gap-6">
        <input
          type="number"
          name="day"
          id="day"
          placeholder="Day"
          min={1}
          max={31}
          className="peer w-full bg-transparent p-3 rounded-md border outline-none border-[#4565DB] focus:border-[#9C39FF]"
        />
        <input
          type="number"
          name="month"
          id="month"
          placeholder="Month"
          min={1}
          max={12}
          className="peer w-full bg-transparent p-3 rounded-md border outline-none border-[#4565DB] focus:border-[#9C39FF]"
        />
        <input
          type="number"
          name="year"
          id="year"
          placeholder="Year"
          min={1900}
          max={2100}
          className="peer w-full bg-transparent p-3 rounded-md border outline-none border-[#4565DB] focus:border-[#9C39FF]"
        />
      </fieldset>
    </>
  );
}
