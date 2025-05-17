export default function TextArea({ heading, updateFields, ...props }) {
  return (
    <div>
      <label htmlFor={props.id} className="text-xl block mb-4 text-start">
        {heading}
      </label>
      <textarea
        required
        {...props}
        onChange={(e) => updateFields(props.id, e.target.value)}
        className="w-full bg-transparent p-5 rounded-md border outline-none border-[#4565DB] focus:border-[#9C39FF] resize-none h-44"
      ></textarea>
    </div>
  );
}
