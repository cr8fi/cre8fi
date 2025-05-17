export default function Feed() {
  return (
    <div className="flex-1 border-r border-[#23243a] min-h-screen overflow-y-auto bg-gradient-to-b from-[#181c2e] to-[#101223] pb-16 sm:pb-0">
      <div className="border-b border-[#23243a] px-4 sm:px-8 py-4 text-xl font-bold text-white sticky top-0 bg-[#181c2e] z-10 flex items-center gap-4 sm:gap-8">
        <span className="border-b-2 border-[#2e6cff] pb-2 text-[#bfc9db]">
          For you
        </span>
        <span className="pb-2 text-[#bfc9db] hover:text-white cursor-pointer">
          Following
        </span>
        <span className="pb-2 text-[#bfc9db] hover:text-white cursor-pointer">
          Trending
        </span>
      </div>
      <div className="p-4 sm:p-8 border-b border-[#23243a]">
        <div className="flex gap-3">
          <img
            src="https://i.ibb.co/W6sGDZg/avatar.png"
            alt="User"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
          />
          <input
            type="text"
            placeholder="What are you creating?"
            className="bg-transparent w-full text-white placeholder-[#6b7280] outline-none text-base sm:text-lg"
          />
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-gradient-to-r from-[#2e6cff] to-[#a259ff] text-white px-4 sm:px-6 py-2 rounded-full text-base font-semibold hover:opacity-90 transition">
            Post
          </button>
        </div>
      </div>
      {/* Sample Post */}
      <div className="p-4 sm:p-8 border-b border-[#23243a] text-white">
        <div className="flex gap-3">
          <img
            src="https://i.ibb.co/W6sGDZg/avatar.png"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
            alt="Author"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold">The-chain Alhaji</span>
                <span className="text-[#bfc9db] ml-2 text-xs sm:text-base">
                  @thechainalhaji · 26/02/2024
                </span>
              </div>
              <span className="text-[#bfc9db] text-xl font-bold cursor-pointer">
                •••
              </span>
            </div>
            <p className="mt-2 text-sm sm:text-base">
              Guess who's back? Your favorite Web3 Alhaji!
              <br />
              I took a break after my last account got suspended now I'm back
              with a fresh brand.
              <br />
              2025 isn't over, so why not keep burning the flames in my little
              design kitchen?
              <br />
              I'm The Chain Alhaji, your one and only creative solution!
            </p>
            <img
              src="https://i.ibb.co/wgQ2YzP/chain.png"
              alt="Post"
              className="rounded-2xl mt-4 w-full max-w-lg"
            />
            <div className="flex justify-between mt-4 text-[#bfc9db] text-xs sm:text-base">
              <span className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="10" cy="10" r="9" stroke="#bfc9db" />
                  <path d="M7 10h6" stroke="#bfc9db" />
                </svg>
                198
              </span>
              <span className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M4 12v-2a4 4 0 014-4h4a4 4 0 014 4v2"
                    stroke="#bfc9db"
                  />
                  <path d="M12 16v2m-4-2v2" stroke="#bfc9db" />
                </svg>
                10
              </span>
              <span className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 20l9-5-9-5-9 5 9 5z" stroke="#bfc9db" />
                </svg>
                20
              </span>
              <span className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16v16H4z" stroke="#bfc9db" />
                </svg>
                2
              </span>
              <span className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="10" cy="10" r="9" stroke="#bfc9db" />
                  <path d="M10 6v4l3 3" stroke="#bfc9db" />
                </svg>
                10 points
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Another Sample Post */}
      <div className="p-4 sm:p-8 border-b border-[#23243a] text-white">
        <div className="flex gap-3">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
            alt="Author"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold">Indispensable</span>
                <span className="text-[#bfc9db] ml-2 text-xs sm:text-base">
                  @Spikenourel · 26/02/2024
                </span>
              </div>
              <span className="text-[#bfc9db] text-xl font-bold cursor-pointer">
                •••
              </span>
            </div>
            <p className="mt-2 text-sm sm:text-base">
              Passive income in crypto is most times a lie!
              <br />
              But @Basebetio is one project that will blow your mind.
              <br />
              Call it a casino on-chain, paying you whether you lose a game or
              win one.
              <br />
              Watch this video and then read on to find out more about Basebet
              $BBT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
