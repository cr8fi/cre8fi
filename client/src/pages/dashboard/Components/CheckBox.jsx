export default function CheckBox({ id, text }) {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name="categories"
        className="hidden peer"
      />
      <label
        key={id}
        htmlFor={id}
        className={`cursor-pointer inline-block w-full p-2 px-4 rounded-full border text-white font-semibold text-sm transition-all peer-checked:text-[#090C17] peer-checked:border-transparent border-[#9C39FF]  peer-checked:from-slate-50 peer-checked:to-slate-100  bg-gradient-to-r from-[#4565DB] to-[#9C39FF]`}
      >
        <span>{text}</span>
      </label>
    </div>
  );
}
