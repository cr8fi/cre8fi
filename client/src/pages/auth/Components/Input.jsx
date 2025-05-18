export default function Input({ heading, paragraph, updateFields, ...props }) {
  return (
    <div className="flex flex-col-reverse text-left">
      <input
        required
        {...props}
        onChange={(e) => updateFields(props.name, e.target.value)}
        className="peer w-full bg-transparent p-3 rounded-md border outline-none border-[#4565DB] focus:border-[#9C39FF]"
      />

      <label
        htmlFor={props.id}
        className="w-full flex items-center justify-start gap-4 peer-checked:bg-gradient-to-b peer-checked:from-[#4565DB] peer-checked:to-[#9C39FF] peer-checked:bg-[#343E63] rounded-2xl mb-2 cursor-pointer transition-all duration-200 ease-in-out"
      >
        <div>
          <h2 className="text-xl">{heading}</h2>
          {paragraph && <p className="text-sm">{paragraph}</p>}
        </div>
      </label>
    </div>
  );
}
