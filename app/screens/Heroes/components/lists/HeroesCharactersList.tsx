import { userData } from "@/lib/types/user.type";
import React from "react";

interface HeroesCharactersListProps {
    currentUser: userData;
    users: userData[];
    characters: CharacterData[];
}

const HeroesCharactersList = ({
    characters,
    users,
    currentUser,
}: HeroesCharactersListProps) => {
    const getCharClassName = (className: string): string => {
        switch (className) {
            case "mage":
                return "text-purple-500";
            case "rogue":
                return "text-yellow-300";
            case "warrior":
                return "text-red-600";
            default:
                return "";
        }
    };
    return (
        <div className="col-span-7 flex flex-col gap-6 p-6 bg-card">
            <h2 className="text-3xl">Персонажи</h2>
            <div className="flex flex-col gap-2">
                {characters?.map((char: any) => {
                    const owner = users.find((u) => u._id == char.ownerId);
                    return (
                        <div
                            className={`${
                                currentUser._id == char.ownerId
                                    ? "shadow-sm shadow-amber-500"
                                    : "shadow-sm shadow-slate-800"
                            } grid grid-cols-12 items-center gap-6 justify-between  rounded-lg !bg-black !bg-opacity-60 py-1 px-4 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out`}
                            key={char?.name}
                        >
                            <div className="col-span-3">
                                <h3
                                    className={`${getCharClassName(
                                        char.characterClass
                                    )} text-xl`}
                                >
                                    {char?.name}
                                </h3>
                                <p className="text-md capitalize -mt-1">
                                    <span>{char.characterClass}</span>
                                    <span> | {char.level} lvl</span>
                                </p>
                            </div>

                            <div className="col-span-3 text-md">
                                В клане не состоит
                            </div>
                            <div className="col-span-2 text-md">
                                <p>Урон {char.damage}</p>
                                <p>Здоровье {char.health}</p>
                            </div>
                            <div className="col-span-4 text-md">
                                <p>Владелец:</p>
                                <p
                                    className={`${
                                        char.ownerId == currentUser._id &&
                                        "text-amber-400"
                                    }`}
                                >
                                    {owner?.name}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HeroesCharactersList;
