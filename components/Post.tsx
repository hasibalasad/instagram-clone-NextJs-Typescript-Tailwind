/* eslint-disable @next/next/no-img-element */
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ id, username, userImg, img, caption }) {
    return (
        <div className=" bg-white my-7">
            {/* Header */}
            <div className=" flex items-center">
                <img
                    src={userImg}
                    className="rounded-full w-12 h-12 border object-contain p-1 mr-3"
                    alt=""
                />
                <p className=" font-bold flex-1">{username}</p>
                <DotsHorizontalIcon className=" h-5" />
            </div>
            {/* Image */}
            <img src={img} className="object-cover w-full" alt="" />
            {/* Button */}
            <div className=" flex justify-between px-4 pt-4">
                <div className=" flex space-x-4">
                    <HeartIcon className=" h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out" />

                    <ChatIcon className=" h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out" />

                    <PaperAirplaneIcon className=" h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out" />
                </div>

                <BookmarkIcon className=" h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out" />
            </div>
            {/* Caption */}
            <p className=" p-5 truncate">
                <span className=" font-bold mr-1">{username} </span>
                {caption}
            </p>
            {/* Comments */}

            {/* Input Box */}
            <form className=" flex items-center p-4">
                <EmojiHappyIcon className=" h-7" />
                <input
                    type="text"
                    placeholder="Add a comment..."
                    className=" flex-1 border-none focus:ring-0 outline-none"
                />
                <button className=" font-semibold text-blue-400">post</button>
            </form>
        </div>
    );
}

export default Post;
