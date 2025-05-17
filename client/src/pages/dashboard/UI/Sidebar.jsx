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
      className="bg-gradient-to-b from-[#181c2e] to-[#101223] text-white h-screen fixed top-0 left-0 z-40 transition-all duration-300 w-60 md:w-80 border-r border-[#23243a]"
      aria-label="Sidebar"
    >
      <div className="flex flex-col h-full justify-between">
        <div className="flex items-center justify-between">
          <span className="text-3xl font-extrabold text-[#2e6cff] tracking-tight">
            Cre8fi
          </span>
          <button className="w-8 h-8">✕</button>
        </div>

        <nav className="flex flex-col gap-1 mt-2">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              active={item.active}
            />
          ))}
        </nav>

        {/* Post Button */}
        <div>
          <div className="px-2 pb-4 mt-4">
            <button className="w-full bg-gradient-to-r from-[#2e6cff] to-[#a259ff] text-white py-3 rounded-full font-bold text-lg shadow-md hover:opacity-90 transition flex items-center justify-center">
              <span>Post</span>
            </button>
          </div>
          {/* Profile Section */}
          <div className="mb-4 px-2">
            <div className="flex items-center gap-3 p-2 rounded-full hover:bg-[#23243a] transition cursor-pointer">
              <img
                src="#"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-[#2e6cff]"
              />
              <div>
                <div className="font-semibold leading-tight text-white">
                  Profile
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
