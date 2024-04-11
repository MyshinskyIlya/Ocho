"use client";

import React, { useState } from "react";
import ChooseHero from "./ChooseHero";
import BattleIcon from "./UI/BattleIcon";
import ChooseEnemy from "./ChooseEnemy";
import { CharacterData } from "@/lib/types/character.type";
import BattleButton from "./UI/BattleButton";

interface BattleGroundProps {
    characters: CharacterData[];
    enemies: CharacterData[];
}

function BattleGround({ characters, enemies }: BattleGroundProps) {
    const [hero, setHero] = useState<CharacterData>();
    const [enemy, setEmemy] = useState<CharacterData>();

    return (
        <div className="flex justify-between gap-16">
            <ChooseHero characters={characters} setHero={setHero}></ChooseHero>
            <div className="flex flex-col justify-center items-center gap-4">
                <BattleIcon></BattleIcon>
                <BattleButton></BattleButton>
            </div>
            <ChooseEnemy enemies={enemies}></ChooseEnemy>
        </div>
    );
}

export default BattleGround;
