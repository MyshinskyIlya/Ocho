import CharactersList from "@/app/components/lists/CharactersList";
import { CharacterData } from "@/lib/types/character.type";
import React from "react";

interface ChooseEnemyProps {
    enemies: CharacterData[];
}

// className="bg-card hover:shadow-sm hover:shadow-red-600 duration-300 cursor-pointer"

function ChooseEnemy({ enemies }: ChooseEnemyProps) {
    return (
        <div className="bg-card flex flex-col gap-4">
            <h3 className="text-2xl text-center">Выбрать противника</h3>
            <CharactersList
                characters={enemies}
                className="flex flex-col gap-1 h-96 overflow-auto p-1"
                cardClassName="flex gap-4 bg-card w-full rounded-lg justify-between bg-opacity-20 shadow-sm shadow-zinc-800 hover:shadow-red-900 hover:shadow-sm transition-all ease-in-out duration-200 cursor-pointer"
            ></CharactersList>
        </div>
    );
}

export default ChooseEnemy;
