import { userData } from "@/lib/types/user.type";
import React from "react";

interface HeroesHeroesListProps {
    users: userData[];
}

const HeroesHeroesList = ({ users }: HeroesHeroesListProps) => {
    return (
        <div className="col-span-3 flex flex-col gap-6 p-6 bg-card">
            <h2 className="text-4xl">Герои</h2>
            <div className="flex flex-col gap-2">
                {users?.map((user: any) => (
                    <div
                        className="flex h-[72px] items-center gap-6 shadow-sm shadow-amber-400  bg-black bg-opacity-40 rounded-lg py-2 px-4 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                        key={user?.email}
                    >
                        <img
                            src={user?.image}
                            alt="User Image"
                            className="h-12 w-12 object-contain rounded-lg"
                        ></img>
                        <p className="flex flex-col text-2xl">{user?.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroesHeroesList;
