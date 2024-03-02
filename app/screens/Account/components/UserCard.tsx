"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";

interface UserCardProps {
    session: any;
}

const UserCard = ({ session }: UserCardProps) => {
    return (
        <div className="items-center flex gap-6 bg-card rounded-xl justify-between">
            <div className="flex gap-6 items-center">
                <img
                    src={session?.user?.image as string}
                    alt="USER IMAGE"
                    className="object-contain rounded-md w-12 h-12"
                ></img>

                <h3 className="text-4xl font-semibold text-amber-400">
                    {session.user.name}
                </h3>
            </div>
            <div className="items-center flex gap-4 text-xl mr-4">
                <Link href={"#"}>Статистика</Link>
                <Link href={"#"}>Настройки</Link>
                <button onClick={() => signOut()}>Выйти</button>
            </div>
        </div>
    );
};

export default UserCard;
