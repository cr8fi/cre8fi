import NavItem from "../Components/NavItem";
import {
  Home,
  Bell,
  Mail,
  Store,
  Book,
  Users,
  Wallet,
  Settings,
  MoreHorizontal,
  LogOut,
} from "lucide-react";
export default function Sidebar() {
  const navItems = [
    { icon: <Home />, label: "Home", active: true },
    { icon: <Bell />, label: "Notification" },
    { icon: <Mail />, label: "Messages" },
    { icon: <Store />, label: "Marketplace" },
    { icon: <Book />, label: "Vault" },
    { icon: <Users />, label: "Communities" },
    { icon: <Wallet />, label: "Wallet" },
    { icon: <Settings />, label: "Settings" },
    { icon: <MoreHorizontal />, label: "More" },
  ];
  return (
    <aside
      className="md:h-auto col-span-1 md:col-span-2 bg-gradient-to-b from-[#343E63] to-[#121318] py-8 md:p-5 flex flex-col gap-4 justify-between"
      aria-label="Sidebar"
    >
      <div className="text-[#0036FF] text-start font-bold text-3xl hidden md:flex">
        Cre8fi
      </div>

      <nav className="flex flex-col gap-4 mx-4 items-center md:items-start">
        <button className="w-9 h-9 bg-red-300 border rounded-full inline md:hidden">
          <img src="#" alt="profile" />
        </button>
        <article className="text-white hidden md:flex items-center gap-4 cursor-pointer p-2 rounded-full justify-center md:justify-start">
          <div className="md:w-5 md:h-5 flex items-center justify-center">
            <img src="#" alt="profile" />
          </div>
          <span className="hidden md:block">Profile</span>
        </article>
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={item.active}
          />
        ))}
      </nav>

      <div className="hidden md:flex flex-col gap-2">
        <button className="w-full bg-gradient-to-b from-[#4565DB] to-[#9C39FF] text-white p-2 rounded-md font-bold text-lg hover:opacity-90 transition">
          Post
        </button>
        <button className="flex items-center gap-2 text-[#bfc9db] text-sm font-medium p-1">
          <LogOut className="w-4 h-4" />
          <span>Log out</span>
        </button>
      </div>
      <button className="md:hidden flex items-center gap-2 text-[#bfc9db] text-sm font-medium p-1 justify-center">
        <LogOut className="w-7 h-7" />
      </button>
    </aside>
  );
}
