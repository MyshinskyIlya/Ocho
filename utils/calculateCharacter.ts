export const calculateStats = (
    statType: string,
    characterClass: string,
    level: number
) => {
    let baseValue;
    switch (statType) {
        case "strength":
            baseValue = characterClass === "warrior" ? 10 : 0;
            break;
        case "intelligence":
            baseValue = characterClass === "mage" ? 10 : 0;
            break;
        case "agility":
            baseValue = characterClass === "rogue" ? 10 : 0;
            break;
        case "endurance":
            baseValue = 0; // Endurance не зависит от класса
            break;
        case "spirit":
            baseValue = 0; // Spirit не зависит от класса
            break;
        default:
            baseValue = 0;
    }
    // Возможно, вы захотите изменить формулу для расчета стата в зависимости от уровня
    return baseValue + level; // Пример: базовое значение + уровень
};

export const calculateHealth = (endurance: string, level: number) => {
    return 100 + endurance + level; // Пример: базовое значение + стат + уровень
};

export const calculateDamage = (characterClass: string, stats: any) => {
    switch (characterClass) {
        case "warrior":
            return 20 + stats.strength;
        case "mage":
            return 10 + stats.intelligence;
        case "rogue":
            return 15 + stats.agility;
        default:
            return 0;
    }
};
