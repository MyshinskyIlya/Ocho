"use client";

import { updateCharacterStats } from "@/lib/actions/character.action";
import React from "react";

interface UpdLvlProps {
    id?: any;
    characterLvl: number;
}

const UpdLvl = ({ id, characterLvl }: UpdLvlProps) => {
    const handleLvlButton = async () => {
        await updateCharacterStats(id, ++characterLvl);
    };
    return (
        <div>
            <button className="bg-card" onClick={handleLvlButton}>
                Поднять уровень
            </button>
        </div>
    );
};

export default UpdLvl;
