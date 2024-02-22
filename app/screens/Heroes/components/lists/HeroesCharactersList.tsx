import React from "react";

interface HeroesCharactersListProps {
    characters: CharacterData[];
}

const HeroesCharactersList = ({ characters }: HeroesCharactersListProps) => {
    return (
        <div className="col-span-7 flex flex-col gap-6 p-6 bg-card">
            <h2 className="text-4xl">Персонажи</h2>
            <div className="flex flex-col gap-2">
                {characters?.map((char: any) => (
                    <div
                        className="flex items-center justify-between gap-6 shadow-md shadow-slate-800  bg-black bg-opacity-40 rounded-lg py-2 px-4 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                        key={char?.name}
                    >
                        <div>
                            <h3 className="text-3xl">{char?.name}</h3>
                            <p className="text-lg capitalize">
                                {char.characterClass} | {char.level} lvl
                            </p>
                        </div>

                        <div className="text-lg">В клане не состоит</div>
                        <div className="text-lg">
                            <p>Урон {char.damage}</p>
                            <p>Здоровье {char.health}</p>
                        </div>
                        <div className="text-lg">
                            <p>Владелец:</p>
                            <p>{char.ownerId}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroesCharactersList;
