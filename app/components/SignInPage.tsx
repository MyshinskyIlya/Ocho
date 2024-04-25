"use client";

import { signIn } from "next-auth/react";
import React from "react";

const SignInPage = () => {
    return (
        <div className="max-w-[1080px] mx-auto page-h p-4">
            <div className="flex flex-col justify-center text-center items-center gap-4">
                <h2 className="text-3xl">
                    Вы еще не зарегистрированы на нашем сайте
                </h2>
                <button
                    className="bg-green-500 px-2 rounded-sm text-xl"
                    onClick={() => signIn()}
                >
                    ВОЙТИ
                </button>
            </div>
        </div>
    );
};

export default SignInPage;
