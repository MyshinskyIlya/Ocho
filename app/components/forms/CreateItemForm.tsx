"use client";

import { createItem } from "@/lib/actions/item.action";
import { ItemData } from "@/lib/types/item.type";
import React, { ChangeEvent, FormEvent, useState } from "react";

const CreateItemForm = () => {
    const [formData, setFormData] = useState<ItemData>({
        name: "",
        description: "",
        characterClass: "warrior",
        itemClass: "head",
        damage: 0,
        stats: {
            strength: 0,
            intelligence: 0,
            agility: 0,
            endurance: 0,
            spirit: 0,
        },
        level: 0,
        rarity: "common",
        img: "",
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleStatsChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        e.target.value = e.target.value.replace(/^0/, "");

        setFormData((prevData) => ({
            ...prevData,
            stats: {
                ...prevData.stats,
                [name]: +value,
            },
        }));
    };
    const handleDamageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        e.target.value = e.target.value.replace(/^0/, "");

        setFormData((prevData) => ({
            ...prevData,
            [name]: +value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await createItem({
            ...formData,
        });
        alert("Предмет создан успешно");
        console.log("Отправленные данные:", formData);
    };

    return (
        <div className="grid grid-cols-6 gap-6">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 text-black rounded-lg bg-blue-950 bg-opacity-30 p-6 col-span-2"
            >
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-white">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className=" text-white outline-none bg-slate-700 bg-opacity-20 shadow-sm focus:shadow-teal-500 p-1 rounded-lg mt-2"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="description" className="text-white">
                        Description:
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className=" text-white outline-none bg-slate-700 bg-opacity-20 shadow-sm focus:shadow-teal-500 p-1 rounded-lg mt-2"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="damage" className="text-white">
                        Damage:
                    </label>
                    <input
                        type="number"
                        id="damage"
                        name="damage"
                        value={formData.damage}
                        onChange={handleDamageChange}
                        className=" text-white outline-none bg-slate-700 bg-opacity-20 shadow-sm focus:shadow-teal-500 p-1 rounded-lg mt-2"
                    />
                </div>
                <div>
                    <div className="flex flex-col">
                        <label htmlFor="strength" className="text-white">
                            Strength:
                        </label>
                        <input
                            type="number"
                            id="strength"
                            name="strength"
                            onChange={handleStatsChange}
                            value={formData?.stats?.strength}
                            className=" text-white outline-none bg-slate-700 bg-opacity-20 shadow-sm focus:shadow-teal-500 p-1 rounded-lg mt-2"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="agility" className="text-white">
                            Agility:
                        </label>
                        <input
                            type="number"
                            id="agility"
                            name="agility"
                            onChange={handleStatsChange}
                            value={formData?.stats?.agility}
                            className=" text-white outline-none bg-slate-700 bg-opacity-20 shadow-sm focus:shadow-teal-500 p-1 rounded-lg mt-2"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="intelligence" className="text-white">
                            Intelligence:
                        </label>
                        <input
                            type="number"
                            id="intelligence"
                            name="intelligence"
                            onChange={handleStatsChange}
                            value={formData?.stats?.intelligence}
                            className=" text-white outline-none bg-slate-700 bg-opacity-20 shadow-sm focus:shadow-teal-500 p-1 rounded-lg mt-2"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="endurance" className="text-white">
                            Endurance:
                        </label>
                        <input
                            type="number"
                            id="endurance"
                            name="endurance"
                            onChange={handleStatsChange}
                            value={formData?.stats?.endurance}
                            className=" text-white outline-none bg-slate-700 bg-opacity-20 shadow-sm focus:shadow-teal-500 p-1 rounded-lg mt-2"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="endurance" className="text-white">
                            Spirit:
                        </label>
                        <input
                            type="number"
                            id="spirit"
                            name="spirit"
                            onChange={handleStatsChange}
                            value={formData?.stats?.spirit}
                            className=" text-white outline-none bg-slate-700 bg-opacity-20 shadow-sm focus:shadow-teal-500 p-1 rounded-lg mt-2"
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="lvl" className="text-white">
                        Level:
                    </label>
                    <input
                        type="number"
                        id="level"
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                        className=" text-white outline-none bg-slate-700 bg-opacity-20 shadow-sm focus:shadow-teal-500 p-1 rounded-lg mt-2"
                    />
                </div>
                <div>
                    <div className="flex gap-2">
                        <input
                            type="radio"
                            id="warrior"
                            name="characterClass"
                            value="warrior"
                            checked={formData.characterClass === "warrior"}
                            onChange={handleChange}
                        />
                        <label htmlFor="warrior" className="text-white">
                            Warrior
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="radio"
                            id="rogue"
                            name="characterClass"
                            value="rogue"
                            checked={formData.characterClass === "rogue"}
                            onChange={handleChange}
                        />
                        <label htmlFor="rogue" className="text-white">
                            Rogue
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="radio"
                            id="mage"
                            name="characterClass"
                            value="mage"
                            checked={formData.characterClass === "mage"}
                            onChange={handleChange}
                        />
                        <label htmlFor="mage" className="text-white">
                            Mage
                        </label>
                    </div>
                </div>
                <div>
                    <div className="flex gap-2">
                        <input
                            type="radio"
                            id="common"
                            name="rarity"
                            value="common"
                            checked={formData.rarity === "common"}
                            onChange={handleChange}
                        />
                        <label htmlFor="common" className="text-white">
                            Common
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="radio"
                            id="uncommon"
                            name="rarity"
                            value="uncommon"
                            checked={formData.rarity === "uncommon"}
                            onChange={handleChange}
                        />
                        <label htmlFor="uncommon" className="text-white">
                            Uncommon
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="radio"
                            id="rare"
                            name="rarity"
                            value="rare"
                            checked={formData.rarity === "rare"}
                            onChange={handleChange}
                        />
                        <label htmlFor="rare" className="text-white">
                            Rare
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="radio"
                            id="epic"
                            name="rarity"
                            value="epic"
                            checked={formData.rarity === "epic"}
                            onChange={handleChange}
                        />
                        <label htmlFor="epic" className="text-white">
                            Epic
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="radio"
                            id="legendary"
                            name="rarity"
                            value="legendary"
                            checked={formData.rarity === "legendary"}
                            onChange={handleChange}
                        />
                        <label htmlFor="legendary" className="text-white">
                            Legendary
                        </label>
                    </div>
                </div>
                <div>
                    <div className="flex gap-2">
                        <input
                            type="radio"
                            id="head"
                            name="itemClass"
                            value="head"
                            checked={formData.itemClass === "head"}
                            onChange={handleChange}
                        />
                        <label htmlFor="head" className="text-white">
                            Head
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="radio"
                            id="shoulders"
                            name="itemClass"
                            value="shoulders"
                            checked={formData.itemClass === "shoulders"}
                            onChange={handleChange}
                        />
                        <label htmlFor="shoulders" className="text-white">
                            Shoulders
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="radio"
                            id="body"
                            name="itemClass"
                            value="body"
                            checked={formData.itemClass === "body"}
                            onChange={handleChange}
                        />
                        <label htmlFor="body" className="text-white">
                            Body
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="radio"
                            id="gloves"
                            name="itemClass"
                            value="gloves"
                            checked={formData.itemClass === "gloves"}
                            onChange={handleChange}
                        />
                        <label htmlFor="gloves" className="text-white">
                            Gloves
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="radio"
                            id="legs"
                            name="itemClass"
                            value="legs"
                            checked={formData.itemClass === "legs"}
                            onChange={handleChange}
                        />
                        <label htmlFor="legs" className="text-white">
                            Legs
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="radio"
                            id="feet"
                            name="itemClass"
                            value="feet"
                            checked={formData.itemClass === "feet"}
                            onChange={handleChange}
                        />
                        <label htmlFor="feet" className="text-white">
                            Feet
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="radio"
                            id="arm"
                            name="itemClass"
                            value="arm"
                            checked={formData.itemClass === "arm"}
                            onChange={handleChange}
                        />
                        <label htmlFor="arm" className="text-white">
                            Arm
                        </label>
                    </div>
                </div>
                //----------------------
                <div className="flex flex-col">
                    <label htmlFor="img" className="text-white">
                        Image:
                    </label>
                    <input
                        type="text"
                        id="img"
                        name="img"
                        value={formData.img}
                        onChange={handleChange}
                        className=" text-white outline-none bg-slate-700 bg-opacity-20 shadow-sm focus:shadow-teal-500 p-1 rounded-lg mt-2"
                    />
                </div>
                <button
                    type="submit"
                    className=" text-white outline-none bg-slate-700 bg-opacity-20 shadow-sm focus:shadow-teal-500 p-2 rounded-lg mt-2"
                >
                    Create Item
                </button>
            </form>
            <div className="flex flex-col gap-4 rounded-lg bg-blue-900 bg-opacity-20 p-6 col-span-4">
                <img
                    src={formData.img}
                    alt="Item image"
                    className="object-contain rounded-3xl w-14 h-14"
                ></img>
                <p>Название предмета: {formData.name}</p>
                <p>Описание: {formData.description}</p>
                <p>Класс героя: {formData.characterClass}</p>
                <p>Класс предмета: {formData.itemClass}</p>
                <p>Урон: {formData.damage}</p>
                <div className="flex flex-col gap-4">
                    <h3>Характеристики</h3>
                    <div className="flex flex-col gap-2">
                        <p>Сила: {formData?.stats?.strength}</p>
                        <p>Ловкость: {formData?.stats?.agility}</p>
                        <p>Интелект: {formData?.stats?.intelligence}</p>
                        <p>Выносливость: {formData?.stats?.endurance}</p>
                        <p>Дух: {formData?.stats?.spirit}</p>
                    </div>
                </div>
                <p>Уровень: {formData.level}</p>
                <p>Редкость: {formData.rarity}</p>
            </div>
        </div>
    );
};

export default CreateItemForm;
