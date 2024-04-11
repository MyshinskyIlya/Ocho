import { CharacterData } from "@/lib/types/character.type";
import React from "react";
import BattleHeroesCard from "./cards/BattleHeroesCard";

interface BattleHeroesList {
    characters: CharacterData[];
}

function BattleHeroesList({ characters }: BattleHeroesList) {
    return (
        <div className="flex flex-col gap-1">
            {characters.map((char) => (
                <div
                    key={char._id as string}
                    className="bg-card hover:shadow-sm hover:shadow-amber-600 duration-300 cursor-pointer"
                >
                    <BattleHeroesCard char={char}></BattleHeroesCard>
                </div>
            ))}
        </div>
    );
}

export default BattleHeroesList;
