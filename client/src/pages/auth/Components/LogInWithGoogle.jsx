export default function LogInWithGoogle() {
  return (
    <>
      <div className="flex gap-1 items-center justify-center my-6">
        <hr className="w-1/2 border-slate-500" />
        <span className="px-2 bg-[#2a3352] text-[#777e90]">Or</span>
        <hr className="w-1/2 border-slate-500" />
      </div>

      <button
        type="button"
        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-transparent border border-[#9c39ff]/30 text-white font-medium rounded-lg hover:bg-[#3a4362] transition duration-200"
      >
        <img src="./assets/google.png" alt="Google" width={20} height={20} />
        Sign in with google
      </button>
    </>
  );
}
