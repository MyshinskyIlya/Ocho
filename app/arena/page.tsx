import { authOptions } from "@/configs/auth";
import {
    fetchAllCharacters,
    fetchUserCharacters,
} from "@/lib/actions/character.action";
import { fetchUser } from "@/lib/actions/user.actions";
import { CharacterData } from "@/lib/types/character.type";
import { userData } from "@/lib/types/user.type";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

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
            <div className="text-center">
                <h2 className="text-3xl">Здесь проходят гладиаторские бои</h2>
            </div>
            <div className="flex justify-between gap-16">
                <div className="bg-card flex flex-col gap-4">
                    <h3 className="text-2xl text-center">Выбрать героя</h3>
                    <div className="flex flex-col gap-1">
                        {characters.map((char) => (
                            <div
                                key={char._id as string}
                                className="bg-card hover:shadow-sm hover:shadow-amber-600 duration-300 cursor-pointer"
                            >
                                <span>{char.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center w-[420px]">
                    <Image
                        priority
                        src={"/images/items/battle.webp"}
                        alt="Battle"
                        width={180}
                        height={180}
                        className="object-contain"
                    ></Image>
                </div>
                <div className="bg-card flex flex-col gap-4">
                    <h3 className="text-2xl text-center">Выбрать противника</h3>
                    <div className="flex flex-col gap-1">
                        {enemies.map((char) => (
                            <div
                                key={char._id as string}
                                className="bg-card hover:shadow-sm hover:shadow-red-600 duration-300 cursor-pointer"
                            >
                                <span>{char.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button
                    disabled
                    className="mt-2 text-3xl bg-card !w-72 !bg-red-950 !bg-opacity-75 cursor-pointer hover:!bg-opacity-100 hover:shadow-sm hover:shadow-red-700 duration-300"
                >
                    Битва
                </button>
            </div>
        </div>
    );
};

export default page;
