import {
    fetchOneCharacters,
    updateCharacterStats,
} from "@/lib/actions/character.action";
import React from "react";
import UpdLvl from "./UpdLvl";

interface CharacterInfoProps {
    id?: any;
}

const CharacterInfo = async ({ id }: CharacterInfoProps) => {
    const character = await fetchOneCharacters(id);

    return (
        <div className="flex flex-col bg-card gap-6 h-full">
            <div className="flex flex-col">
                <h2 className="text-4xl">{character?.name}</h2>
                <div className="flex gap-4 text-xl">
                    <p>Level {character?.level}</p>
                    <p>-</p>
                    <p className="capitalize">{character?.characterClass}</p>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-10">
                <div className="col-span-2 flex justify-between gap-6">
                    <div className="w-full flex flex-col gap-6">
                        <h3 className="text-center text-3xl">Характеристики</h3>
                        <div className="flex flex-col gap-4">
                            <div className="text-2xl flex justify-between">
                                <p>Урон</p>
                                {character?.damage}
                            </div>
                            <div className="text-2xl flex justify-between">
                                <p>Здоровье</p>
                                {character?.health}
                            </div>
                            <div className="text-2xl flex justify-between">
                                <p>Сила</p>
                                {character?.stats.strength}
                            </div>
                            <div className="text-2xl flex justify-between">
                                <p>Интеллект</p>
                                {character?.stats.intelligence}
                            </div>
                            <div className="text-2xl flex justify-between">
                                <p>Ловкость</p>
                                {character?.stats.agility}
                            </div>
                            <div className="text-2xl flex justify-between">
                                <p>Выносливость</p>
                                {character?.stats.endurance}
                            </div>
                            <div className="text-2xl flex justify-between">
                                <p>Дух</p>
                                {character?.stats.spirit}
                            </div>
                        </div>
                    </div>
                    <div className="border-r border-slate-400 w-6"></div>
                </div>
                <div className="col-span-3 flex flex-col gap-6">
                    <h3 className="text-center text-3xl">Экипировка</h3>
                    <div className="grid grid-cols-4 gap-4">
                        {character?.inventory.map((item: any) => (
                            <div className="flex bg-card h-24 items-center justify-center text-xl hover:shadow-slate-600 transition-all duration-300 cursor-pointer">
                                Пусто
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-4 flex flex-col gap-6">
                <h3 className="text-3xl">Инвентарь</h3>
                <div className="grid grid-cols-12 gap-2">
                    {character?.inventory.map((item: any) => (
                        <div className="flex bg-card h-16 items-center justify-center text-lg hover:shadow-slate-600 transition-all duration-300 cursor-pointer">
                            {item.slot + 1}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-3xl">Описание</h3>
                <p className="text-xl">
                    Воины - наставниками мудрости и мастерами боевого искусства.
                    Они представляли собой стойкость и выносливость, способность
                    выдерживать испытания и покорять преграды, что делало их не
                    только защитниками, но и вдохновителями для других. Воины
                    отличаются не только силой и ловкостью в бою, но и честью и
                    преданностью своим союзникам. Они готовы идти на бой за
                    своих братьев по оружию, защищать их и поддерживать в
                    трудные моменты.
                </p>
            </div>
            <UpdLvl id={id} characterLvl={character?.level}></UpdLvl>
        </div>
    );
};

export default CharacterInfo;
