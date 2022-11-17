import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronCircleLeft,
    faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

function Stories() {
    const [suggestions, setSuggestions] = useState([{}]);
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            userId: faker.datatype.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
            id: i,
        }));
        setSuggestions(suggestions);
    }, []);

    return (
        <div className=" relative">
            <div className=" flex space-x-2 p-6 mt-8 bg-white border border-gray-200 rounded-sm overflow-x-scroll scroll-smooth scrollbar-hide">
                {suggestions.map((profile) => (
                    <Story
                        key={profile.id}
                        img={profile.avatar}
                        username={profile.username}
                    />
                ))}
            </div>

            <button>
                <FontAwesomeIcon
                    icon={faChevronCircleLeft}
                    size="lg"
                    color="white"
                    className=" absolute top-11 left-3 cursor-pointer filter drop-shadow-lg hover:scale-110"
                />
            </button>
            <button>
                <FontAwesomeIcon
                    icon={faChevronCircleRight}
                    size="lg"
                    color="white"
                    className=" absolute top-11 right-2 cursor-pointer filter drop-shadow-lg hover:scale-110"
                />
            </button>
        </div>
    );
}

export default Stories;
