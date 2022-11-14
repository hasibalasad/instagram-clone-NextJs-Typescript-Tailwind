import Image from "next/image";
import {
    SearchIcon,
    MenuIcon,
    PaperAirplaneIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

export default function Header() {
    return (
        <div className=" shadow-sm border-b bg-white sticky top-0 z-50">
            {/* logo section */}
            <div className=" flex justify-between max-w-6xl mx-5 lg:mx-auto">
                <div className=" relative hidden lg:inline-grid w-24 cursor-pointer">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png"
                        alt="instagram logo"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className=" relative lg:hidden w-24 cursor-pointer">
                    <Image
                        src="https://1000logos.net/wp-content/uploads/2017/02/insta-logo.png"
                        alt="instagram logo"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                {/* search section */}
                <div className=" max-w-xs">
                    <div className=" relative mt-1 p-3 rounded-md">
                        <div className=" absolute inset-y-0 pl-3 flex items-center">
                            <SearchIcon className=" h-5 w-5 text-gray-500" />
                        </div>
                        <input
                            className=" bg-gray-50 pl-10 block w-full sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                </div>

                {/* buttons on right side */}
                <div className=" flex items-center justify-end space-x-4">
                    <HomeIcon className=" navBtn" />
                    <MenuIcon className=" h-6 md:hidden cursor-pointer" />
                    <div className=" relative navBtn">
                        <PaperAirplaneIcon className="navBtn rotate-45" />
                        <div className=" absolute -top-1 -right-2 text-xs h-5 w-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                            4
                        </div>
                    </div>
                    <PlusCircleIcon className=" navBtn" />
                    <UserGroupIcon className="navBtn" />
                    <HeartIcon className="navBtn" />

                    <Image
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        alt="profile pic"
                        width={45}
                        height={45}
                        className=" rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}
