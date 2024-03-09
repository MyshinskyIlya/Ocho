import Image from "next/image";
import React from "react";

const NewItem = () => {
    return (
        <div className="col-span-4 flex flex-col gap-6 p-6 bg-card cursor-default !shadow-purple-600 !shadow-md">
            <h2 className="text-3xl">Скоро в игре</h2>
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
                    <h4 className="text-3xl">Характеристики</h4>
                    <div className="flex flex-col gap-2">
                        <p className="text-2xl">Урон: 24-32</p>
                        <p>Сила: 15</p>
                        <p>Выносливость: 4</p>
                        <p className="text-purple-600">Эпическое</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-semibold">Топор Тьмы</h3>
                <p className="italic">
                    Оружие, которое воплощает в себе мощь и страх ночи. Его
                    лезвие, созданное из самых темных и загадочных материалов,
                    обладает способностью проникать сквозь броню и защиту,
                    словно оно обладает силой самой тьмы. Рукоять украшена
                    символами древних культов, искусно вырезанными из черного
                    металла, напоминая о древности и могуществе этого оружия.
                </p>
            </div>
        </div>
    );
};

export default NewItem;
