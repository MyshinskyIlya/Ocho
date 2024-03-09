"use client";

import ItemInfo from "@/app/components/itemInfo/ItemInfo";
import React, { useState } from "react";

interface CurrentItemProps {
    item: any;
}
const CurrentItem = ({ item }: CurrentItemProps) => {
    const [infoIsVisible, setInfoIsVisible] = useState(false);

    console.log(item);

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
        <div>
            <div
                className="absolute z-10"
                onMouseEnter={() => console.log(setInfoIsVisible(true))}
                onMouseLeave={() => setInfoIsVisible(false)}
            >
                {infoIsVisible && (
                    <ItemInfo
                        item={item}
                        getClassByRarity={getClassByRarity}
                    ></ItemInfo>
                )}
            </div>
            <div
                className="flex items-center h-[22px] gap-4 shadow-md shadow-neutral-900  bg-black bg-opacity-40 rounded-lg py-4 px-4 cursor-pointer hover:scale-105 hover:bg-slate-900 hover:bg-opacity-85 transition-all duration-300 ease-in-out"
                onMouseEnter={() => setInfoIsVisible(true)}
                onMouseLeave={() => setInfoIsVisible(false)}
            >
                <img
                    src={item.img}
                    alt="Item Image"
                    className="w-7 h-7 rounded-lg object-contain border border-slate-700"
                ></img>
                <h3
                    className={
                        getClassByRarity(item.rarity) + " text-xl font-semibold"
                    }
                >
                    {item.name}
                </h3>
            </div>
        </div>
    );
};

export default CurrentItem;
