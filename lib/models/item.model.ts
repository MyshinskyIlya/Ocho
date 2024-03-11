import mongoose from "mongoose";

export const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    damage: {
        type: Number,
    },
    characterClass: {
        type: String,
        enum: ["warrior", "mage", "rogue"],
        required: true,
    },
    itemClass: {
        type: String,
        enum: ["head", "shoulders", "body", "gloves", "legs", "feet", "arm"],
        required: true,
    },
    stats: {
        damage: {
            type: Number,
        },
        strength: {
            type: Number,
        },
        intelligence: {
            type: Number,
        },
        agility: {
            type: Number,
        },
        endurance: {
            type: Number,
        },
        spirit: {
            type: Number,
        },
    },
    rarity: {
        type: String,
        enum: ["common", "uncommon", "rare", "epic", "legendary"],
        default: "commmon",
    },
    level: {
        type: Number,
    },
    img: {
        type: String,
    },
});

const Item = mongoose.models.Item || mongoose.model("Item", ItemSchema);

export default Item;
