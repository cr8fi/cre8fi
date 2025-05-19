import { useEffect, useState } from "react";

export default function Code({ heading, id, handleResendCode, ...props }) {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    if (seconds === 0) return;
    const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-[#b1b5c3] text-sm text-left font-medium"
      >
        {heading}
      </label>
      <input
        {...props}
        required
        className="w-full px-4 py-3 rounded-lg bg-[#2a3352] border border-[#9c39ff]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#9c39ff]/50"
      />
      <label className="block text-[#b1b5c3] text-sm text-right font-medium">
        <button
          type="button"
          disabled={seconds > 0}
          onClick={() => {
            handleResendCode();
            setSeconds(30);
          }}
          className={`${seconds > 0 && "cursor-not-allowed"}`}
        >
          Resend
        </button>{" "}
        code in: <span className="font-bold text-white">{seconds}s</span>
      </label>
    </div>
  );
}
