export default function NavItem({ icon, label }) {
  return (
    <article className=" text-white flex items-center gap-4 cursor-pointer p-2 rounded-full">
      <div className="w-5 h-5 flex items-center justify-center">{icon}</div>
      <span>{label}</span>
    </article>
  );
}
