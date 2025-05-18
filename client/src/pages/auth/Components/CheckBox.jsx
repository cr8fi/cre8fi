export default function CheckBox({
  id,
  name,
  text,
  onChange,
  checked,
  disabled,
}) {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name={name}
        className="hidden peer"
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      <label
        htmlFor={id}
        className={`inline-block w-full p-2 px-4 rounded-full border text-white font-semibold text-sm transition-all peer-checked:text-[#090C17] peer-checked:border-transparent border-[#9C39FF] peer-checked:from-slate-50 peer-checked:to-slate-100 bg-gradient-to-r from-[#4565DB] to-[#9C39FF]
          ${disabled ? "cursor-not-allowed" : "cursor-pointer"} `}
      >
        <span>{text}</span>
      </label>
    </div>
  );
}
