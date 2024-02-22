import { createUser, fetchUser } from "@/lib/actions/user.actions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import React from "react";
import UserCard from "../screens/Account/components/UserCard";
import Characters from "../components/Characters";

export const metadata: Metadata = {
    title: "ACCOUNT | OCHO",
};

export default async function AccountLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession();

    if (!session?.user) return null;

    const userInfo = await fetchUser(session?.user?.email as string);

    if (!userInfo) {
        await createUser({
            email: session.user.email as string,
            image: session.user.image as string,
            name: session.user.name as string,
        });
    }
    return (
        <div className="account-bg">
            <div className="bg-black bg-opacity-50">
                <div className="max-w-[1280px] mx-auto page-h">
                    <div className="flex flex-col gap-6 items-start p-6">
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
