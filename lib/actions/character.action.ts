"use server";

import mongoose from "mongoose";
import Character from "../models/character.model";
import { connectToDB } from "../mongoose";
import {
    calculateDamage,
    calculateHealth,
    calculateStats,
} from "../../utils/calculateCharacter";
import { CharacterData } from "../types/character.type";

export const createCharacter = async ({
    ownerId,
    name,
    characterClass,
    level = 1,
}: CharacterData) => {
    const stats = {
        strength:
            characterClass == "warrior"
                ? Math.floor(Math.random() * 11) + 10
                : Math.floor(Math.random() * 11),
        intelligence:
            characterClass == "mage"
                ? Math.floor(Math.random() * 11) + 10
                : Math.floor(Math.random() * 5),
        agility:
            characterClass == "rogue"
                ? Math.floor(Math.random() * 11) + 10
                : Math.floor(Math.random() * 11),
        endurance:
            characterClass == "warrior"
                ? Math.floor(Math.random() * 11) + 10
                : Math.floor(Math.random() * 11),
        spirit:
            characterClass == "mage"
                ? Math.floor(Math.random() * 11) + 10
                : Math.floor(Math.random() * 11),
    };
    const health = 100 + stats.endurance;

    let damage;
    switch (characterClass) {
        case "warrior":
            damage = 20 + stats.strength;
            break;
        case "mage":
            damage = 10 + stats.intelligence;
            break;
        case "rogue":
            damage = 15 + stats.agility;
            break;
        default:
            alert("Укажите класс");
    }

    try {
        connectToDB();

        await Character.create({
            ownerId,
            name,
            characterClass,
            level,
            stats,
            health,
            damage,
        });
    } catch (error: any) {
        throw new Error(`FAILED TO CREATE CHARACTER ${error}`);
    }
};

export const updateCharacterStats = async (
    characterId: any,
    newLevel: number
) => {
    try {
        const character = await Character.findById(characterId);
        if (!character) {
            throw new Error("Character not found");
        }

        // Обновляем уровень персонажа
        character.level = newLevel;

        // Пересчитываем статы, здоровье и урон
        character.stats.strength = calculateStats(
            "strength",
            character.characterClass,
            newLevel
        );
        character.stats.intelligence = calculateStats(
            "intelligence",
            character.characterClass,
            newLevel
        );
        character.stats.agility = calculateStats(
            "agility",
            character.characterClass,
            newLevel
        );
        character.stats.endurance = calculateStats(
            "endurance",
            character.characterClass,
            newLevel
        );
        character.stats.spirit = calculateStats(
            "spirit",
            character.characterClass,
            newLevel
        );
        character.health = calculateHealth(character.stats.endurance, newLevel);
        character.damage = calculateDamage(
            character.characterClass,
            character.stats
        );

        // Сохраняем обновленные данные персонажа
        await character.save();
    } catch (error) {
        throw new Error(`FAILED TO UPDATE CHARACTER STATS ${error}`);
    }
};

export const fetchAllCharacters = async () => {
    try {
        connectToDB();

        const characters = await Character.find();

        return characters;
    } catch (error: any) {
        throw new Error("FAILED TO FETCH ALL CHARACTERS");
    }
};
export const fetchUserCharacters = async (ownerId: string) => {
    try {
        connectToDB();
        console.log(ownerId);

        const characters = await Character.find({ ownerId });

        return characters;
    } catch (error) {
        throw new Error(`FAILED TO FETCH CHARACTERS ${error}`);
    }
};

export const fetchOneCharacters = async (id: string) => {
    try {
        connectToDB();

        const character = await Character.findById(id);

        return character;
    } catch (error) {
        throw new Error(`FAILED TO FETCH CHARACTER ${error}`);
    }
};
