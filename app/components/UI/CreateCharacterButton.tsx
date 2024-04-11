"use client";
import { CharacterData } from "@/lib/types/character.type";
import React from "react";
import { CreateStatus } from "../forms/CreateCharacterForm";

interface CreateCharacterButtonProps {
    characterData: CharacterData;
    className?: string;
    createStatus: CreateStatus;
}
const CreateCharacterButton = ({
    characterData,
    className,
    createStatus,
}: CreateCharacterButtonProps) => {
    const getCreateStatus = (createStatus: string): string => {
        switch (createStatus) {
            case "loading":
                return "Создание персонажа";
            case "pending":
                return "Готово";
            case "rejected":
                return "Ошибка";
            case "complited":
                return "Успешно";
            default:
                return "Готово";
        }
    };

    return (
        <button
            className={className}
            type="submit"
            disabled={characterData.name.length < 3}
        >
            {getCreateStatus(createStatus)}
        </button>
    );
};

export default CreateCharacterButton;
