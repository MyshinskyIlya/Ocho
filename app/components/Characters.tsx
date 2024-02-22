import React from "react";
import CharactersList from "./lists/CharactersList";
import CreateCharacterForm from "./forms/CreateCharacterForm";
import CharacterInfo from "./lists/cards/CharacterInfo";
import { fetchUser } from "@/lib/actions/user.actions";
import { getServerSession } from "next-auth";
import { fetchUserCharacters } from "@/lib/actions/character.action";

const Characters = async ({ children }: { children: React.ReactNode }) => {
    const session = await getServerSession();

    const userInfo = await fetchUser(session?.user?.email as string);

    const characters = await fetchUserCharacters(userInfo.id);

    console.log(userInfo);

    return (
        <div className="grid grid-cols-10 w-full gap-6">
            <div className="col-span-3 flex flex-col gap-4">
                <CharactersList userId={userInfo._id}></CharactersList>
                <CreateCharacterForm
                    ownerId={userInfo._id as string}
                ></CreateCharacterForm>
            </div>
            <div className="col-span-7">{children}</div>
        </div>
    );
};

export default Characters;
