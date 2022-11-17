/* eslint-disable @next/next/no-img-element */

function Story({ img, username }) {
    return (
        <div>
            <img
                src={img}
                alt=""
                className=" h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 duration-200"
            />
            <p className=" text-xs w-14 truncate">{username}</p>
        </div>
    );
}

export default Story;
