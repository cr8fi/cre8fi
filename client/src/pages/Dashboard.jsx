import Feeds from "./auth/UI/Feeds";
import RightPanel from "./auth/UI/RightPanel";
import Sidebar from "./auth/UI/Sidebar";

export default function Dashboard() {
  return (
    <main className="bg-[#030214] flex min-h-screen min-w-[1024px]">
      <Sidebar />
      {/* Main content */}
      <Feeds />
      {/* Right Panel Content */}
      <RightPanel />
    </main>
  );
}
