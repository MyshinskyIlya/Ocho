import { authOptions } from "@/configs/auth";
import {
    fetchAllCharacters,
    fetchUserCharacters,
} from "@/lib/actions/character.action";
import { fetchUser } from "@/lib/actions/user.actions";
import { CharacterData } from "@/lib/types/character.type";
import { userData } from "@/lib/types/user.type";
import { getServerSession } from "next-auth";
import React from "react";
import ChooseHero from "../screens/Arena/ChooseHero";
import ChooseEnemy from "../screens/Arena/ChooseEnemy";
import BattleIcon from "../screens/Arena/UI/BattleIcon";
import BattleButton from "../screens/Arena/UI/BattleButton";
import BattleGround from "../screens/Arena/BattleGround";
import BattleTitle from "../screens/Arena/UI/BattleTitle";

const page = async () => {
    const session = await getServerSession(authOptions);
    if (!session?.user) return null;

    const userInfo: userData = await fetchUser(session?.user?.email as string);

    const characters: CharacterData[] = await fetchUserCharacters(userInfo._id);
    const allCharacters: CharacterData[] = await fetchAllCharacters();

    const enemies = allCharacters.filter(
        (item) => item.ownerId != userInfo._id
    );

    return (
        <div className="p-6 flex flex-col gap-8">
            <BattleTitle></BattleTitle>
            <BattleGround
                characters={characters}
                enemies={enemies}
            ></BattleGround>
        </div>
    );
};

export default page;
