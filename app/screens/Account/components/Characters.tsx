import React from "react";
import CharactersList from "../../../components/lists/CharactersList";
import CreateCharacterForm from "../../../components/forms/CreateCharacterForm";
import CharacterInfo from "../../../components/lists/cards/CharacterInfo";
import { fetchUser } from "@/lib/actions/user.actions";
import { getServerSession } from "next-auth";
import { fetchUserCharacters } from "@/lib/actions/character.action";
import { authOptions } from "@/configs/auth";

const Characters = async ({ children }: { children: React.ReactNode }) => {
    const session = await getServerSession(authOptions);

    const userInfo = await fetchUser(session?.user?.email as string);

    const userCharacters = await fetchUserCharacters(userInfo?.id);

    return (
        <div className="grid grid-cols-10 w-full gap-4">
            <div className="col-span-3 flex flex-col gap-4">
                {userCharacters.length > 0 && (
                    <div className="flex flex-col gap-4 bg-yellow-950 bg-card">
                        <h2 className="text-3xl">Персонажи</h2>
                        <CharactersList
                            characters={userCharacters}
                            className="flex gap-2 flex-wrap"
                        ></CharactersList>
                    </div>
                )}

                <CreateCharacterForm
                    ownerId={userInfo?._id.toString()}
                ></CreateCharacterForm>
            </div>
            <div className="col-span-7">{children}</div>
        </div>
    );
};

export default Characters;
