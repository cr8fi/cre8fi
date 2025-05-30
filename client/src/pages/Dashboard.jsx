import Feed from "./auth/UI/Feeds";
import RightPanel from "./auth/UI/RightPanel";
import Sidebar from "./auth/UI/Sidebar";

export default function Dashboard() {
  return (
    <main className="bg-[#030214] flex min-h-screen min-w-max">
      <Sidebar />
      {/* Main content */}
      <Feed />
      {/* Right Panel Content */}
      <RightPanel />
    </main>
  );
}
