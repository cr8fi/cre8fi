import Header from "../Components/Header";

export default function Form5({ description, updateFields }) {
  return (
    <>
      <Header text="Tell us a bit about yourself" />
      <fieldset>
        <header>
          <h2 className="text-xl font-semibold mb-4">
            Write a short description about you
          </h2>
        </header>
        <textarea
          name="description"
          id="description"
          required
          value={description}
          onChange={(e) => updateFields("description", e.target.value)}
          placeholder="I am a graphics designer who solve all your problem with my ............."
          className="w-full bg-transparent p-5 rounded-md border outline-none border-[#4565DB] focus:border-[#9C39FF] resize-none h-44"
        ></textarea>
      </fieldset>
    </>
  );
}
