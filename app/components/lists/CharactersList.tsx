import { fetchUserCharacters } from "@/lib/actions/character.action";
import { getServerSession } from "next-auth";
import React from "react";
import CharacterCard from "./cards/CharacterCard";

interface CharactersListProps {
    userId: string;
}

const CharactersList = async ({ userId }: CharactersListProps) => {
    const characters = await fetchUserCharacters(userId);

    return (
        <div className="flex flex-col gap-6 bg-yellow-950 bg-card">
            <h2 className="text-center text-4xl">Персонажи</h2>
            <div className="flex gap-4 flex-wrap">
                {characters.length > 0 ? (
                    characters.map((character) => (
                        <CharacterCard
                            key={character.name}
                            id={character._id}
                            name={character.name}
                            characterClass={character.characterClass}
                            stats={character.stats}
                            level={character.level}
                            health={character.health}
                            inventory={character.inventory}
                        ></CharacterCard>
                    ))
                ) : (
                    <p>Нет персонажей</p>
                )}
            </div>
        </div>
    );
};

export default CharactersList;
