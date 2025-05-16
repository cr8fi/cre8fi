export default function Button({ onClick, text, type }) {
  return (
    <button
      type={type ?? "button"}
      className="w-full bg-gradient-to-b from-[#4565DB] to-[#9C39FF] p-2 rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
