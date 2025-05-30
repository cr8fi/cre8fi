import { Image, Smile } from "lucide-react";

export default function Feed() {
  return (
    <main className="col-span-3 text-white overflow-x-scroll scrollbar-hide">
      <nav className="bg-[#020922] flex items-center justify-between px-[10%] py-6 font-bold ">
        <div>For you</div>
        <div>Following</div>
        <div>Trending</div>
      </nav>

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

      <section>
        <article>
          <div className="max-w-xl mx-auto bg-black rounded-2xl overflow-hidden shadow-lg border border-[#222]">
            {/* Header */}
            <div className="flex items-center gap-3 px-4 pt-4">
              <img
                src="https://i.ibb.co/W6sGDZg/avatar.png"
                alt="Profile"
                className="w-12 h-12 rounded-full border border-[#2e6cff]"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-base">
                    The–chain Alhaji
                  </span>
                  <span className="text-[#b1b5c3] text-xs">
                    Mutuals · 26/02/2024
                  </span>
                </div>
                <span className="text-[#b1b5c3] text-sm">@thechainalhaji</span>
              </div>
              <div className="ml-auto text-[#b1b5c3] text-xl font-bold cursor-pointer">
                •••
              </div>
            </div>
            {/* Post Text */}
            <div className="px-4 pt-4 pb-2 text-white text-base leading-relaxed whitespace-pre-line">
              <span className="block mb-2 font-medium">
                Guess who's back? Your favorite Web3 Alhaji!
              </span>
              <span className="block mb-2">
                I took a break after my last account got suspended now I'm back
                with a fresh brand.
              </span>
              <span className="block mb-2">
                2025 isn't over, so why not keep burning the flames in my little
                design kitchen?
              </span>
              <span className="block">
                I’m The Chain Alhaji, your one and only creative solution!
              </span>
            </div>
            {/* Image */}
            <div className="w-full bg-[#181c2e] flex justify-center items-center rounded-b-2xl overflow-hidden">
              <div className="relative w-full flex justify-center">
                <img
                  src="https://i.ibb.co/3r8v8wK/alhaji-demo.png"
                  alt="Creative Solution"
                  className="w-full max-w-md object-cover"
                />
                <span className="absolute bottom-6 right-8 text-white text-sm font-medium opacity-80">
                  Every brand
                  <br />
                  creative
                  <br />
                  solution.
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 px-4 py-3 text-white text-base select-none">
            {/* Like */}
            <span className="flex items-center gap-1">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M10 18s-6-4.35-6-8.5A4.5 4.5 0 0110 5a4.5 4.5 0 016 4.5C16 13.65 10 18 10 18z" />
              </svg>
              198
            </span>
            {/* Retweet */}
            <span className="flex items-center gap-1">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17 8V5a2 2 0 00-2-2H7" />
                <path d="M7 15v3a2 2 0 002 2h6" />
                <path d="M7 15l-4-4 4-4" />
                <path d="M17 8l4 4-4 4" />
              </svg>
              10
            </span>
            {/* Comment */}
            <span className="flex items-center gap-1">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="10" cy="10" r="9" />
                <path d="M7 10h6" />
              </svg>
              20
            </span>
            {/* Bookmark */}
            <span className="flex items-center gap-1">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 3h10a2 2 0 012 2v14l-7-5-7 5V5a2 2 0 012-2z" />
              </svg>
              2
            </span>
            {/* Points */}
            <span className="flex items-center gap-1">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="10" cy="10" r="9" />
                <path d="M10 6v4l3 3" />
              </svg>
              10 points
            </span>
            {/* Share */}
            <span className="flex items-center gap-1">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 12v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                <path d="M12 16v2m-4-2v2" />
              </svg>
            </span>
          </div>
        </article>
      </section>
    </main>
  );
}
