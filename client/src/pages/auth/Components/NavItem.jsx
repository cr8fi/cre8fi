export default function NavItem({ icon, label }) {
  return (
    <article className="text-white flex items-center gap-4 cursor-pointer p-2 rounded-full justify-center md:justify-start">
      <div className="md:w-5 md:h-5 flex items-center justify-center">
        {icon}
      </div>
      <span className="hidden md:block">{label}</span>
    </article>
  );
}
