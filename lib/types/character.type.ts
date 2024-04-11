export interface CharacterData {
    _id?: any;
    ownerId: string;
    name: string;
    characterClass: "warrior" | "mage" | "rogue" | "" | string;
    level: number;
    stats: {
        strength: number;
        intelligence: number;
        agility: number;
        endurance: number;
        spirit: number;
    };
    health: number;
    inventory: any;
}
