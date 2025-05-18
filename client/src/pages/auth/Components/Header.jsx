export default function Header({ text, span }) {
  return (
    <header className="flex flex-col justify-center items-center gap-1">
      <h1 className="text-3xl font-semibold">
        {text && text}
        {span && <span className="text-[#0067FF]"> {span}</span>}
      </h1>

      <div className="w-4/5 py-[0.85px] bg-gradient-to-r from-[#282E4900] via-white to-[#2A324D00]"></div>
    </header>
  );
}
