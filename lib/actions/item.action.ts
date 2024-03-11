"use server";

import Item from "../models/item.model";
import { connectToDB } from "../mongoose";
import { ItemData } from "../types/item.type";

export const createItem = async ({
    name,
    description,
    characterClass,
    itemClass,
    damage,
    stats,
    level,
    rarity,
    img,
}: ItemData) => {
    try {
        connectToDB();

        await Item.create({
            name,
            description,
            characterClass,
            itemClass,
            damage,
            stats,
            level,
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
