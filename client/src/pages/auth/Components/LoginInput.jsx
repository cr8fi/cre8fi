export default function LoginInput({ heading, id, ...props }) {
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
        className="w-full px-4 py-3 rounded-lg bg-[#2a3352] border border-[#9c39ff]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#9c39ff]/50"
      />
    </div>
  );
}
