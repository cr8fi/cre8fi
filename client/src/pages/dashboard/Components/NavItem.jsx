export default function NavItem({ icon, label, active }) {
  return (
    <article
      className={`
      flex items-center gap-4 cursor-pointer px-4 py-3 rounded-full transition font-medium
      ${
        active
          ? "bg-[#2e6cff]/10 text-[#2e6cff] font-bold"
          : "text-[#bfc9db] hover:bg-[#23243a] hover:text-white"
      }
    `}
    >
      <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
      <span className="text-lg">{label}</span>
    </article>
  );
}
