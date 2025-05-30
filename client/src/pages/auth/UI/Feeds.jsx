import { Image, Smile } from "lucide-react";

export default function Feed() {
  return (
    <main className="w-2/4 text-white  relative">
      <nav className="bg-[#020922] px-[10%] sticky top-0 border-b border-[#222]">
        <form className="flex items-center justify-between py-6 font-bold">
          <label htmlFor="forYou">
            <input type="radio" name="feeds" id="forYou" />
            <div>For you</div>
          </label>

          <label htmlFor="following">
            <input type="radio" name="feeds" id="following" />
            <div>Following</div>
          </label>

          <label htmlFor="trending">
            <input type="radio" name="feeds" id="trending" />
            <div>Trending</div>
          </label>
        </form>
      </nav>

      <aside>
        <form className="flex items-end justify-between gap-4 bg-[#020922] px-[10%] py-6">
          <div className="flex gap-4 items-center">
            <img
              src="#"
              alt="User"
              className="border w-16 h-16 rounded-xl border-[#2e6cff]/40 object-cover"
            />
            <fieldset className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="What are you creating?"
                className="flex-1 bg-transparent outline-none border-none text-[#b1b5c3] placeholder-[#b1b5c3] text-lg"
              />
              <div className="text-[#b1b5c3] flex gap-1">
                <Image className="text-[#4565DB] w-5 h-5" />
                <Smile className="text-[#4565DB] w-5 h-5" />
              </div>
            </fieldset>
          </div>

          <button className="px-6 py-2 rounded-lg bg-gradient-to-tr from-[#4565DB] to-[#9C39FF] text-white font-semibold text-base shadow hover:opacity-90 transition">
            Post
          </button>
        </form>
      </aside>

      <section className="p-[5%]"></section>
    </main>
  );
}
