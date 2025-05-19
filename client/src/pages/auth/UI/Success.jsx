import Header from "../Components/Header";
import { Check } from "lucide-react";
export default function Success() {
  return (
    <>
      <Header text="Go into the world and earn!" />
      <div className="flex justify-center">
        <div className="w-36 h-36 rounded-full flex items-center justify-center border-4 border-[#00ff1e]">
          <Check className="w-24 h-24 text-[#00ff1e] stroke-[3]" />
        </div>
      </div>
    </>
  );
}
