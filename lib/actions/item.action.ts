"use server";

import Item from "../models/item.model";
import { connectToDB } from "../mongoose";

export interface ItemData {
    name: string;
    description: string;
    damage?: number;
    stats?: {
        strength?: number;
        intelligence?: number;
        agility?: number;
        endurance?: number;
        spirit?: number;
        spell?: Function;
    };
    lvl: number;
    rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
    img: string;
}

export const createItem = async ({
    name,
    description,
    damage,
    stats,
    lvl,
    rarity,
    img,
}: ItemData) => {
    try {
        connectToDB();

        await Item.create({
            name,
            description,
            damage,
            stats,
            lvl,
            rarity,
            img,
        });
    } catch (error: any) {
        throw new Error(`FAILED TO CREATE ITEM ${error}`);
    }
};

export const fetchAllItems = async () => {
    try {
        connectToDB();

        const items = await Item.find();

        return items;
    } catch (error) {
        throw new Error(`FAILED TO FETCH ALL ITEMS ${error}`);
    }
};
