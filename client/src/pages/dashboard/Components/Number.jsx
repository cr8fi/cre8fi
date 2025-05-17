export default function Number({ updateFields, DOB, ...props }) {
  return (
    <input
      {...props}
      required
      type="number"
      onChange={(e) =>
        updateFields("DOB", { ...DOB, [props.id]: e.target.value })
      }
      className="peer w-full bg-transparent p-3 rounded-md border outline-none border-[#4565DB] focus:border-[#9C39FF]"
    />
  );
}
