"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import CookiePage from "./CookiePage";

export default function NewUserPage() {
    return (
        <div className="mx-auto max-w-[580px] h-screen">
            <div className="flex flex-col text-center py-28 gap-6">
                <div className="flex flex-col gap-4">
                    <h1 className="text-8xl">Очо</h1>
                    <p className="text-lg text-slate-200">
                        Захватывающая игра в жанре ММОРПГ, которая перенесёт вас
                        в удивительный фэнтезийный мир, полный опасностей и
                        приключений. В этой игре вы сможете создать своего
                        уникального персонажа, выбрать его класс и отправиться в
                        незабываемое приключение, сражаясь с остальными
                        игроками.
                    </p>
                </div>
                <div className="flex gap-8 text-2xl justify-center mt-4">
                    <Link
                        href={"/account"}
                        className="bg-card hover:text-red-600 hover:bg-black transition-all duration-300"
                        onClick={() => signIn()}
                    >
                        Начать Игру
                    </Link>
                    <Link
                        href={"https://github.com/MyshinskyIlya/Ocho"}
                        className="bg-card hover:text-amber-500 hover:bg-black transition-all duration-300"
                    >
                        О Нас
                    </Link>
                    <div>
                        <CookiePage></CookiePage>
                    </div>
                </div>
            </div>
        </div>
    );
}
