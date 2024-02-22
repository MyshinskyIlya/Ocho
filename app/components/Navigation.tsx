"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
const Navigation = () => {
    const { data: session } = useSession();

    return (
        <nav className="w-screen flex justify-between py-2 px-6 bg-black items-center text-xl">
            <Link href={"/"}>ОЧО</Link>
            <div className="flex gap-5">
                <Link href={"/heroes"}>ГЕРОИ</Link>
                <Link href={"/items"}>ПРЕДМЕТЫ</Link>
                <Link href={"/account"}>ПРОФИЛЬ</Link>
                <Link href={"/info"}>ИНФО</Link>
                <Link href={"/admin"} className="text-amber-400">
                    АДМИН
                </Link>

                {!session && (
                    <button
                        className="bg-green-500 px-2 rounded-sm"
                        onClick={() => signIn()}
                    >
                        ВОЙТИ
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
