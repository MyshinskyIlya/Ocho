import { fetchUserCharacters } from "@/lib/actions/character.action";
import { getServerSession } from "next-auth";
import React, { Children } from "react";
import CharacterCard from "./cards/CharacterCard";
import { CharacterData } from "@/lib/types/character.type";

interface CharactersListProps {
    children?: React.ReactNode;
    characters: CharacterData[];
    className?: string;
    cardClassName?: string;
}

const CharactersList = async ({
    children,
    characters,
    className,
    cardClassName,
}: CharactersListProps) => {
    return (
        <div className={className}>
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
                        cardClassName={cardClassName}
                    ></CharacterCard>
                ))
            ) : (
                <p>Нет персонажей</p>
            )}
            {children}
        </div>
    );
};

export default CharactersList;
