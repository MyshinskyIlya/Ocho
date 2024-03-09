import { userData } from "@/lib/types/user.type";

import React from "react";

interface HeroesHeroesListProps {
    currentUser: userData;
    users: userData[];
}

const HeroesHeroesList = ({ users, currentUser }: HeroesHeroesListProps) => {
    return (
        <div className="col-span-3 flex flex-col gap-6 bg-card">
            <h2 className="text-3xl">Герои</h2>
            <div className="flex flex-col gap-2">
                {users?.map((user: any) => (
                    <div
                        className="flex h-[18px] items-center gap-4 shadow-sm shadow-slate-700  bg-black bg-opacity-40 rounded-lg py-6 px-4 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                        key={user?.email}
                    >
                        <img
                            src={user?.image}
                            alt="User Image"
                            className="h-8 w-8 object-contain rounded-lg"
                        ></img>
                        <p
                            className={`${
                                currentUser.name == user.name &&
                                "text-amber-400"
                            } flex flex-col text-xl`}
                        >
                            {user?.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroesHeroesList;
