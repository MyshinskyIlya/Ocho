"use client";

import { createCharacter } from "@/lib/actions/character.action";
import { CharacterData } from "@/lib/types/character.type";

import mongoose from "mongoose";
import React, { useState, ChangeEvent, FormEvent } from "react";
import CreateCharacterButton from "../UI/CreateCharacterButton";

interface CreateCharacterFormProps {
    ownerId?: string;
}

export type CreateStatus = "loading" | "pending" | "rejected" | "complited";

const CreateCharacterForm = ({ ownerId }: CreateCharacterFormProps) => {
    if (!ownerId) {
        return;
    }

    const [characterData, setCharacterData] = useState<any>({
        ownerId: ownerId,
        name: "",
        characterClass: "warrior",
    });

    const [createStatus, setcreateStatus] = useState<CreateStatus>("pending");

    const handleInputChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setCharacterData({
            ...characterData,
            name: e.target.value,
        });
    };
    const handleInputChangeCharacterClass = (
        e: ChangeEvent<HTMLSelectElement>
    ) => {
        setCharacterData({
            ...characterData,
            characterClass: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setcreateStatus("loading");
        try {
            await createCharacter({
                ...characterData,
            });
            setcreateStatus("complited");
            console.log("Отправленные данные:", characterData);
            window.location.reload();
        } catch (error) {
            alert("Ошибка");
            setcreateStatus("rejected");
            console.log(error);
        }
    };

    return (
        <div className="flex flex-col gap-4 bg-yellow-950 bg-opacity-15 bg-card max-h-[420px] shadow-yellow-500 focus-within:shadow-lg focus-within:shadow-yellow-700 transition-all duration-700 ease-out">
            <h2 className="text-3xl">Создание персонажа</h2>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <label className="flex flex-col gap-2">
                    <div className="text-slate-200">Имя</div>
                    <input
                        className="outline-none rounded-md p-2 shadow-md bg-neutral-800 bg-opacity-40"
                        type="text"
                        name="name"
                        value={characterData.name}
                        onChange={handleInputChangeName}
                        required
                        autoComplete="off"
                    />
                </label>
                <label className="flex flex-col gap-2">
                    <div className="text-slate-200">Класс</div>
                    <select
                        className="outline-none bg-neutral-800 bg-opacity-40 rounded-md p-2 shadow-md"
                        name="characterClass"
                        value={characterData.characterClass}
                        onChange={handleInputChangeCharacterClass}
                        required
                    >
                        <option value="warrior">Воин</option>
                        <option value="mage">Маг</option>
                        <option value="rogue">Разбойник</option>
                    </select>
                </label>
                <CreateCharacterButton
                    characterData={characterData}
                    className={
                        characterData.name.length < 3
                            ? "bg-slate-900 border border-slate-800 shadow-md  text-slate-500 font-semibold rounded-md p-2 mt-2 text-xl"
                            : "bg-red-800 border border-red-950 shadow-md  text-yellow-300 font-semibold rounded-md p-2 mt-2 text-xl hover:bg-red-800 hover:border-yellow-800 duration-300"
                    }
                    createStatus={createStatus}
                ></CreateCharacterButton>
            </form>
        </div>
    );
};

export default CreateCharacterForm;
