import { Metadata } from "next";
import React from "react";
import { fetchOneCharacters } from "@/lib/actions/character.action";
import CharacterInfo from "@/app/components/lists/cards/CharacterInfo";

export type PropsId = {
    params: {
        id: string;
    };
};

export async function generateMetadata({
    params: { id },
}: PropsId): Promise<Metadata> {
    const character = await fetchOneCharacters(id);

    return {
        title: `${character?.name} | ACCOUNT`,
    };
}

export default async function Post({ params: { id } }: PropsId) {
    const character = await fetchOneCharacters(id);

    return (
        <>
            {id ? (
                <CharacterInfo id={id}></CharacterInfo>
            ) : (
                <p>Выберите персонажа</p>
            )}
        </>
    );
}
