import { CharacterData } from "@/lib/types/character.type";
import React from "react";

interface BattleHeroesCardProps {
    char: CharacterData;
}

function BattleHeroesCard({ char }: BattleHeroesCardProps) {
    return <span>{char.name}</span>;
}

export default BattleHeroesCard;
