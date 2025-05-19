import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

export default function Password({ heading, id, ...props }) {
  const [show, setShow] = useState(false);
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-[#b1b5c3] text-sm text-left font-medium"
      >
        {heading}
      </label>
      <div className="relative">
        <input
          {...props}
          required
          id={id}
          type={show ? "text" : "password"}
          placeholder="••••••••••"
          className="w-full px-4 py-3 rounded-lg bg-[#2a3352] border border-[#9c39ff]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#9c39ff]/50"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
          onClick={() => setShow(!show)}
        >
          {show ? (
            <EyeIcon className="h-5 w-5 text-[#b1b5c3]" />
          ) : (
            <EyeOffIcon className="h-5 w-5 text-[#b1b5c3]" />
          )}
        </button>
      </div>
    </div>
  );
}
