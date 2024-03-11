import { ItemData } from "@/lib/types/item.type";
import React from "react";

interface ItemInfoProps {
    item: ItemData;
    getClassByRarity: (rarity: string) => string;
}

const ItemInfo = ({ item, getClassByRarity }: ItemInfoProps) => {
    const charClassColor = (charClass: string): string => {
        switch (charClass) {
            case "mage":
                return "text-purple-500";
            case "rogue":
                return "text-yellow-300";
            case "warrior":
                return "text-red-600";
            default:
                return "";
        }
    };
    const getcharClass = (charClass: string): string => {
        switch (charClass) {
            case "mage":
                return "Маг";
            case "rogue":
                return "Разбойник";
            case "warrior":
                return "Воин";
            default:
                return "";
        }
    };
    const getItemClass = (itemClass: string): string => {
        switch (itemClass) {
            case "head":
                return "Голова";
            case "shoulders":
                return "Плечи";
            case "body":
                return "Грудь";
            case "gloves":
                return "Руки";
            case "legs":
                return "Ноги";
            case "feet":
                return "Ступни";
            case "arm":
                return "Оружие";
            default:
                return "";
        }
    };
    console.log(getItemClass(item.itemClass));

    return (
        <div className="fixed right-96  flex items-start gap-4 w-96">
            <img
                src={item.img}
                alt="Item Icon"
                className="w-12 h-12 rounded-lg object-contain border border-slate-700"
            />
            <div className="bg-card !bg-slate-950 !bg-opacity-80">
                <div className="flex gap-4">
                    <h3
                        className={`${getClassByRarity(
                            item.rarity
                        )} font-semibold text-xl`}
                    >
                        {item.name}
                    </h3>
                </div>
                <p className="text-amber-400 text-sm">
                    Уровень предмета: {item.level}
                </p>
                <div className="flex justify-between">
                    <p>{`${getItemClass(item.itemClass)}`}</p>
                    <p
                        className={`${charClassColor(item.characterClass)}`}
                    >{`${getcharClass(item.characterClass)}`}</p>
                </div>
                {item.damage && <p>Урон: {item.damage}</p>}
                <div>
                    <p>
                        {item.stats?.endurance
                            ? `+${item.stats?.endurance} к выносливости `
                            : null}
                    </p>
                    <p>
                        {item.stats?.strength
                            ? `+${item.stats?.strength} к силе `
                            : null}
                    </p>
                    <p>
                        {item.stats?.intelligence
                            ? `+${item.stats?.intelligence} к интелекту `
                            : null}
                    </p>
                    <p>
                        {item.stats?.spirit
                            ? `+${item.stats?.spirit} к духу `
                            : null}
                    </p>
                    <p>
                        {item.stats?.agility
                            ? `+${item.stats?.agility} к ловкости `
                            : null}
                    </p>
                </div>

                <div className="mt-2">
                    <p className="font-semibold">Описание: </p>
                    <p className="flex flex-wrap italic text-sm">
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ItemInfo;
