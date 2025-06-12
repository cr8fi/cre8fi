import { Image, Smile } from "lucide-react";
import Feed from "./Feed";

export default function Feeds() {
  return (
    <main className="col-span-7 md:col-span-4 text-white relative h-screen overflow-y-auto scrollbar-hide md:mr-5">
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
        <form className="flex items-end justify-between md:gap-4 gap-2 bg-[#020922] px-[10%] py-6">
          <div className="flex gap-4 items-center">
            <img
              src="#"
              alt="User"
              className="border w-16 h-16 md:inline hidden rounded-xl border-[#2e6cff]/40 object-cover"
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

          <button className="w-full md:w-auto p-1.5 md:px-6 md:py-2 rounded-lg bg-gradient-to-tr from-[#4565DB] to-[#9C39FF] text-white font-semibold text-base shadow hover:opacity-90 transition">
            Post
          </button>
        </form>
      </aside>

      <section className="px-[5%] py-8 flex flex-col gap-4">
        <Feed
          name="The Chain Alhaji"
          userName="@thechainalhaji"
          userImage="#"
          postDate="26/02/2024"
          postTextContent="Guess who's back? Your favorite Web3 Alhaji! I took a break after my last account got suspended now I'm back with a fresh brand. 2025 isn't over, so why not keep burning the flames in my little design kitchen? I’m The Chain Alhaji, your one and only creative solution!"
          postImage="#"
          likes={198}
          retweets={12}
          comments={34}
          bookmarks={5}
          points={10}
        />

        <Feed
          name="Hub The Chain Alhaji"
          userName="@hubthechainalhaji"
          userImage="#"
          postDate="6/01/2025"
          postTextContent="Hello, world! I'm back with a new account and ready to share my creative journey with you all. Let's make 2025 a year to remember!"
          postImage="#"
          likes={367}
          retweets={24}
          comments={56}
          bookmarks={5}
          points={10}
        />

        <Feed
          name="The Chain Alhaji"
          userName="@thechainalhaji"
          userImage="#"
          postDate="26/02/2024"
          postTextContent="Guess who's back? Your favorite Web3 Alhaji! I took a break after my last account got suspended now I'm back with a fresh brand. 2025 isn't over, so why not keep burning the flames in my little design kitchen? I’m The Chain Alhaji, your one and only creative solution!"
          postImage="#"
          likes={198}
          retweets={12}
          comments={34}
          bookmarks={5}
          points={10}
        />
      </section>
    </main>
  );
}
