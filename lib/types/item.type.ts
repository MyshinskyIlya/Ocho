export interface ItemData {
    name: string;
    description: string;
    characterClass: "warrior" | "mage" | "rogue";
    itemClass:
        | "head"
        | "shoulders"
        | "body"
        | "gloves"
        | "legs"
        | "feet"
        | "arm";
    damage?: number;
    stats?: {
        strength?: number;
        intelligence?: number;
        agility?: number;
        endurance?: number;
        spirit?: number;
        spell?: Function;
    };
    level: number;
    rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
    img: string;
}
