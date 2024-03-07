import { fetchAllItems } from "@/lib/actions/item.action";
import Image from "next/image";
import React from "react";

const page = async () => {
    const items = await fetchAllItems();

    const getClassByRarity = (rarity: string): string => {
        switch (rarity) {
            case "common":
                return "text-zinc-300";
            case "uncommon":
                return "text-blue-300";
            case "rare":
                return "text-blue-600";
            case "epic":
                return "text-purple-700";
            case "legendary":
                return " text-amber-500";
            default:
                return "";
        }
    };

    return (
        <div className="grid grid-cols-10 gap-6 p-4">
            <div className="col-span-6 flex flex-col gap-6 p-6 bg-card">
                <h2 className="text-4xl">Все предметы доступные в мире</h2>
                <div className="flex flex-col gap-2 flex-wrap">
                    {items.length > 0 ? (
                        items.map((item) => (
                            <div
                                key={item.name}
                                className="flex h-[72px] gap-6 shadow-md shadow-slate-800  bg-black bg-opacity-40 rounded-lg py-2 px-4 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                            >
                                <img
                                    src={item.img}
                                    alt="Item Image"
                                    className="w-12 rounded-lg"
                                ></img>
                                <div>
                                    <h3
                                        className={
                                            getClassByRarity(item.rarity) +
                                            " text-2xl font-semibold"
                                        }
                                    >
                                        {item.name}
                                    </h3>
                                    <p className="italic">
                                        {item.description.slice(0, 70) +
                                            (item.description.length > 70
                                                ? "..."
                                                : "")}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No results</p>
                    )}
                </div>
            </div>
            <div className="col-span-4 flex flex-col gap-6 p-6 bg-card cursor-default">
                <h2 className="text-4xl">Скоро в игре</h2>
                <div className="flex gap-6">
                    <div className="shadow-sm shadow-purple-700 rounded-xl overflow-hidden">
                        <Image
                            src="/images/items/weapons/shadowAxe01.jpg"
                            alt="Shadow Axe"
                            width={256}
                            height={256}
                            className="object-contain rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xl">Характеристики</h4>
                        <div className="flex flex-col gap-2">
                            <p className="text-xl">Урон: 24-32</p>
                            <p>Сила: 15</p>
                            <p>Выносливость: 4</p>
                            <p className="text-purple-600">Эпическое</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-4xl font-semibold">Топор Тьмы</h3>
                    <p className="italic">
                        Оружие, которое воплощает в себе мощь и страх ночи. Его
                        лезвие, созданное из самых темных и загадочных
                        материалов, обладает способностью проникать сквозь броню
                        и защиту, словно оно обладает силой самой тьмы. Рукоять
                        украшена символами древних культов, искусно вырезанными
                        из черного металла, напоминая о древности и могуществе
                        этого оружия.
                    </p>
                </div>
                <p></p>
            </div>
        </div>
    );
};

export default page;
