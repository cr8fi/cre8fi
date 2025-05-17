export default function BottomNav({ setMobileOpen }) {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#181c2e] border-t border-[#23243a] flex justify-between items-center px-2 py-1 z-50 sm:hidden">
      {navItems.slice(0, 5).map((item, idx) => (
        <button
          key={item.label}
          className={`flex flex-col items-center justify-center flex-1 py-2 ${
            item.active ? "text-[#2e6cff]" : "text-[#bfc9db]"
          }`}
          onClick={() => {
            if (idx === 4) setMobileOpen(true);
          }}
        >
          <span className="w-7 h-7 flex items-center justify-center">
            {item.icon}
          </span>
        </button>
      ))}
      <button
        className="flex flex-col items-center justify-center flex-1 py-2"
        onClick={() => setMobileOpen(true)}
      >
        <MoreHorizontal className="w-7 h-7" />
      </button>
    </nav>
  );
}
