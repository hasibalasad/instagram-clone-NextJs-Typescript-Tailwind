/* eslint-disable @next/next/no-img-element */
function MiniProfile() {
    return (
        <div className=" flex items-center">
            <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt=""
                className=" rounded-full h-16 w-16 cursor-pointer"
            />
            <div className=" flex-1 mx-4">
                <h2 className=" font-bold cursor-pointer">hasibalasad</h2>
                <h3 className=" text-sm text-gray-400">Welcome to Instagram</h3>
            </div>
            <button className=" text-sm text-blue-400 font-semibold">
                Sign Out
            </button>
        </div>
    );
}

export default MiniProfile;
