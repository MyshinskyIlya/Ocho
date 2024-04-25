import { fetchUser } from "@/lib/actions/user.actions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import React from "react";

import { authOptions } from "@/configs/auth";
import { userData } from "@/lib/types/user.type";

export const metadata: Metadata = {
    title: "ADMIN | OCHO",
};

export default async function AccountLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    const userInfo: userData = await fetchUser(session?.user?.email as string);

    return userInfo.role == "ADMIN" ? (
        <div>{children}</div>
    ) : (
        <div>Ограничение доступа</div>
    );
}
