import { createUser, fetchUser } from "@/lib/actions/user.actions";
import { getServerSession } from "next-auth";
import React from "react";

import CharacterInfo from "../components/lists/cards/CharacterInfo";
import { fetchUserCharacters } from "@/lib/actions/character.action";
import { authOptions } from "@/configs/auth";

const page = async () => {
    const session = await getServerSession(authOptions);

    if (!session?.user) return null;

    const userInfo = await fetchUser(session?.user?.email as string);

    if (!userInfo) {
        await createUser({
            email: session.user.email as string,
            image: session.user.image as string,
            name: session.user.name as string,
            role: "USER",
        });
    }

    const characters = await fetchUserCharacters(userInfo.id);

    return <CharacterInfo id={characters[0]?.id}></CharacterInfo>;
};

export default page;
