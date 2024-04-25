import { createUser, fetchUser } from "@/lib/actions/user.actions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import React from "react";
import UserCard from "../screens/Account/components/UserCard";
import Characters from "../screens/Account/components/Characters";
import { authOptions } from "@/configs/auth";

export const metadata: Metadata = {
    title: "ACCOUNT | OCHO",
};

export default async function AccountLayout({
    children,
}: {
    children: React.ReactNode;
}) {
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
    return (
        <div className="account-bg">
            <div className="bg-black overflow-auto bg-opacity-50 h-vh flex justify-center items">
                <div className="max-w-[1280px] mx-auto v-vh">
                    <div className="flex flex-col gap-4 items-start p-4">
                        {session && (
                            <>
                                <UserCard session={session}></UserCard>
                                <Characters children={children}></Characters>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
