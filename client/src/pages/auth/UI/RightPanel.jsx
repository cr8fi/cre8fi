const RANDOMUSER = [
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
];
export default function RightPanel() {
  return (
    <section className="hidden md:col-span-2 p-2 text-white md:flex flex-col gap-4">
      <form action="">
        <input
          type="text"
          placeholder="Look for something..."
          className="w-full border border-[#23243a] bg-transparent text-white px-4 py-2 rounded-lg focus:outline-none focus:border-[#2e6cff]"
        />
      </form>

      <article className="bg-transparent border border-[#23243a] p-4 rounded-lg text-start">
        <header className="mb-4">
          <h2 className="text-lg font-semibold">Complete your profile</h2>
          <p className="text-xs">
            Complete your profile and add all of your proof of work to start
            creating
          </p>
        </header>

        <button className="w-1/2 p-1.5 rounded-sm bg-gradient-to-tr from-[#4565DB] to-[#9C39FF] text-white font-semibold text-base shadow hover:opacity-90 transition">
          View profile
        </button>
      </article>

      <section className="bg-transparent border border-[#23243a] p-4 rounded-lg text-start">
        <h2 className="text-lg font-semibold">
          Account that match your profile
        </h2>
        <section className="my-4 flex flex-col gap-4">
          {RANDOMUSER.map((user, i) => (
            <article key={i} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src={user.img}
                  alt={user.name}
                  className="w-10 h-10 rounded-md"
                />
                <div>
                  <div className="font-semibold text-white">{user.name}</div>
                  <div className="text-[#bfc9db] text-xs">{user.handle}</div>
                </div>
              </div>

              <button className="px-4 py-1.5 rounded-sm bg-gradient-to-tr from-[#4565DB] to-[#9C39FF] text-white font-semibold text-base shadow hover:opacity-90 transition">
                Follow
              </button>
            </article>
          ))}
        </section>

        <button className="w-full p-1.5 rounded-sm bg-gradient-to-tr from-[#4565DB] to-[#9C39FF] text-white font-semibold text-base shadow hover:opacity-90 transition">
          See all
        </button>
      </section>
    </section>
  );
}
