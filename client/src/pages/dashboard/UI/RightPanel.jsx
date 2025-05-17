export default function RightPanel() {
  return (
    <div className="hidden xl:block w-[420px] px-6 py-6 text-white bg-gradient-to-b from-[#181c2e] to-[#101223] space-y-6 min-h-screen border-l border-[#23243a]">
      <input
        type="text"
        placeholder="Look for something..."
        className="w-full p-3 bg-[#101223] border border-[#23243a] rounded-full text-base placeholder-[#6b7280] focus:outline-none"
      />
      <div className="bg-[#101223] border border-[#23243a] p-6 rounded-2xl">
        <p className="font-bold mb-2 text-lg">Complete your profile</p>
        <p className="mb-4 text-[#bfc9db] text-sm">
          Complete your profile and add all of your proof of work to start
          creating
        </p>
        <button className="bg-gradient-to-r from-[#2e6cff] to-[#a259ff] text-white px-6 py-2 rounded-full text-base font-semibold hover:opacity-90 transition w-full">
          View profile
        </button>
      </div>
      <div className="bg-[#101223] border border-[#23243a] p-6 rounded-2xl">
        <p className="font-bold mb-4 text-lg">
          Account that match your profile
        </p>
        {[
          {
            name: "Harri",
            handle: "@Harri_cbi",
            img: "https://randomuser.me/api/portraits/men/1.jpg",
          },
          {
            name: "Jonathan",
            handle: "@iamxD79",
            img: "https://randomuser.me/api/portraits/men/2.jpg",
          },
          {
            name: "STARBOY GUCCI",
            handle: "@GucciStarbo1",
            img: "https://randomuser.me/api/portraits/men/3.jpg",
          },
          {
            name: "FoLA",
            handle: "@Just_Folami",
            img: "https://randomuser.me/api/portraits/women/4.jpg",
          },
          {
            name: "THE ELITE",
            handle: "@theelite0",
            img: "https://randomuser.me/api/portraits/men/5.jpg",
          },
          {
            name: "Leo",
            handle: "@Leoweb3",
            img: "https://randomuser.me/api/portraits/men/6.jpg",
          },
          {
            name: "Web3Precious",
            handle: "@Web3Precious",
            img: "https://randomuser.me/api/portraits/men/7.jpg",
          },
        ].map((user, i) => (
          <div key={i} className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <img
                src={user.img}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-semibold text-white">{user.name}</div>
                <div className="text-[#bfc9db] text-xs">{user.handle}</div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-[#2e6cff] to-[#a259ff] text-white text-sm font-semibold px-5 py-1.5 rounded-full hover:opacity-90 transition">
              Follow
            </button>
          </div>
        ))}
        <button className="w-full bg-gradient-to-r from-[#2e6cff] to-[#a259ff] text-white text-base mt-2 rounded-full py-2 font-semibold hover:opacity-90 transition">
          See all
        </button>
      </div>
    </div>
  );
}
