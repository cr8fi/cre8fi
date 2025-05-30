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
    { icon: "#", label: "Profile" },
  ];
  return (
    <aside
      className="w-1/4 bg-gradient-to-b from-[#343E63] to-[#121318] p-5 flex flex-col gap-4 justify-between"
      aria-label="Sidebar"
    >
      <div className="text-[#0036FF] text-start font-bold text-3xl">Cre8fi</div>

      <nav className="flex flex-col gap-4 mx-4">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={item.active}
          />
        ))}
      </nav>

      <div className="flex flex-col gap-2">
        <button className="w-full bg-gradient-to-b from-[#4565DB] to-[#9C39FF] text-white p-2 rounded-md font-bold text-lg hover:opacity-90 transition">
          Post
        </button>
        <button className="flex items-center gap-2 text-[#bfc9db] text-sm font-medium p-1">
          <LogOut className="w-4 h-4" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}
