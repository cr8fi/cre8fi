import { Bookmark, Combine, Share2, ThumbsUpIcon } from "lucide-react";

export default function Feed({
  name,
  userName,
  userImage,
  postDate,
  postTextContent,
  postImage,
  likes = 0,
  retweets = 0,
  comments = 0,
  bookmarks = 0,
  points = 0,
}) {
  return (
    <article className="bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-[#222] md:p-4 p-3">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-left">
          <img
            src={userImage}
            alt="Profile"
            className="md:w-12 w-10 md:h-12 h-10 rounded-full border border-[#2e6cff]"
          />
          <header>
            <h3 className="flex gap-2 items-center -mb-1">
              <strong className="text-sm md:text-base">{name.slice(0,10)}</strong>
              <span className="text-xs hidden md:inline">
                <sm>Mutuals</sm> · <sm>{postDate}</sm>
              </span>
            </h3>
            <span className="text-xs">{userName}</span>
          </header>
        </div>
        <button>•••</button>
      </nav>

      <div>
        <p className="leading-relaxed text-start text-sm my-4">
          {postTextContent}
        </p>
        <div className="rounded-lg overflow-hidden w-full">
          <img
            src={postImage}
            alt="Creative Solution"
            className="w-full object-cover"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 justify-between">
        {/* Like */}
        <button className="flex items-center gap-1">
          <ThumbsUpIcon />
          {likes}
        </button>

        {/* Retweet */}
        <button className="flex items-center gap-1">
          <Combine />
          {retweets}
        </button>

        {/* Comment */}
        <button className="flex items-center gap-1">
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
          {comments}
        </button>
        {/* Bookmark */}
        <button className="flex items-center gap-1">
          <Bookmark />
          {bookmarks}
        </button>

        {/* Points */}
        <button className="hidden md:flex items-center gap-1">
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
          {points} points
        </button>

        {/* Share */}
        <button className="flex items-center gap-1">
          <Share2 />
        </button>
      </div>
    </article>
  );
}
