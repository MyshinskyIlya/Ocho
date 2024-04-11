import { CharacterData } from "@/lib/types/character.type";
import React from "react";
import BattleHeroesList from "./lists/BattleHeroesList";
import CharactersList from "@/app/components/lists/CharactersList";

interface ChooseHeroProps {
    characters: CharacterData[];
    setHero: (hero: CharacterData) => void;
}

function ChooseHero({ characters }: ChooseHeroProps) {
    return (
        <div className="bg-card flex flex-col gap-4">
            <h3 className="text-2xl text-center">Выбрать героя</h3>

            <CharactersList
                characters={characters}
                className="flex flex-col gap-1 h-96 overflow-auto p-1"
                cardClassName="flex gap-4 bg-card w-full rounded-lg justify-between bg-opacity-20 shadow-sm shadow-zinc-800 hover:shadow-yellow-600 hover:shadow-sm transition-all ease-in-out duration-200 cursor-pointer"
            ></CharactersList>
        </div>
    );
}

export default ChooseHero;
