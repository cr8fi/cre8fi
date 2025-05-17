export default function HeaderTwo({ header, paragraph }) {
  return (
    <header className="text-center mb-6">
      <h1 className="text-2xl font-bold text-white mb-2">Cre8Fi</h1>
      <h2 className="text-3xl font-bold text-white mb-2">{header}</h2>
      <p className="text-[#b1b5c3] text-center">{paragraph}</p>
    </header>
  );
}
