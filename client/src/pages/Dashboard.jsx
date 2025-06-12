import Feeds from "./auth/UI/Feeds";
import RightPanel from "./auth/UI/RightPanel";
import Sidebar from "./auth/UI/Sidebar";

export default function Dashboard() {
  return (
    <main className="bg-[#030214] grid grid-cols-8 min-h-screen w-full md:min-w-[1024px] relative">
      <Sidebar />
      {/* Main content */}
      <Feeds />
      {/* Right Panel Content */}
      <RightPanel />
    </main>
  );
}
