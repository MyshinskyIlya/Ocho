import Link from "next/link";
import React from "react";

interface CharacterCardProps {
    id: any;
    name: string;
    characterClass: string;
    stats: any;
    level: number;
    health: number;
    inventory: any;
}

const CharacterCard = ({
    id,
    name,
    characterClass,
    health,
    stats,
    level,
    inventory,
}: CharacterCardProps) => {
    return (
        <Link
            href={`/account/${id}`}
            className="flex gap-4 bg-card w-full rounded-lg justify-between bg-opacity-20 shadow-sm shadow-zinc-800 hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer"
        >
            <div>
                <p className="text-lg">{name}</p>
            </div>
            <div className="flex gap-4 justify-between">
                <p className="text-lg text-yellow-400">Lvl {level}</p>
                <p className="text-lg capitalize">
                    {characterClass.slice(0, 3)}
                </p>
            </div>
            {/* <div>
                <div>Stats</div>
                <p>Str: {stats.strength}</p>
                <p>Int: {stats.intelligence}</p>
                <p>Agl: {stats.agility}</p>
                <p>End: {stats.endurance}</p>
                <p>Spr: {stats.spirit}</p>
            </div> */}
        </Link>
    );
};

export default CharacterCard;
