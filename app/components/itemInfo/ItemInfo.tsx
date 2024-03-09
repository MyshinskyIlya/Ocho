import { ItemData } from "@/lib/actions/item.action";
import React from "react";

interface ItemInfoProps {
    item: ItemData;
    getClassByRarity: (rarity: string) => string;
}

const ItemInfo = ({ item, getClassByRarity }: ItemInfoProps) => {
    console.log(item);

    return (
        <div className="fixed right-96  flex items-start gap-4 w-96">
            <img
                src={item.img}
                alt="Item Icon"
                className="w-12 h-12 mt-2 rounded-lg object-contain border border-slate-700"
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
                <div className="mt-4">
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
