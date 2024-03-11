import mongoose from "mongoose";

export const CharacterSchema = new mongoose.Schema({
    ownerId: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    characterClass: {
        type: String,
        enum: ["warrior", "mage", "rogue"],
        required: true,
    },
    level: {
        type: Number,
        default: 1,
    },
    stats: {
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
    equipment: {},
    inventory: {
        type: [
            {
                slot: {
                    type: Number,
                    required: true,
                },
                item: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Item",
                },
            },
        ],
        // default: () =>
        //     Array.from({ length: 12 }, (_, index) => ({
        //         slot: index,
        //         item: null,
        //     })), // Инициализация инвентаря с 12 уникальными слотами
    },
    damage: {
        type: Number,
    },
    health: {
        type: Number,
    },
});

const Character =
    mongoose.models.Character || mongoose.model("Character", CharacterSchema);

export default Character;
