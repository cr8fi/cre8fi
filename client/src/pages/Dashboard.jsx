import Feed from "./auth/UI/Feeds";
import Sidebar from "./auth/UI/Sidebar";

export default function Dashboard() {
  return (
    <main className="bg-[#030214] h-screen grid grid-cols-5 overflow-hidden gap-4">
      <Sidebar />
      {/* Main content */}
      <Feed />

      {/* Bottom Navigation for Mobile */}
    </main>
  );
}
