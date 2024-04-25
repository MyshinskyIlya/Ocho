import type { Metadata } from "next";
import { Underdog, Yanone_Kaffeesatz } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";

import SessionProvider from "./components/SessionProvider";
import Navigation from "./components/Navigation";
import { authOptions } from "@/configs/auth";
import { userData } from "@/lib/types/user.type";
import { fetchUser } from "@/lib/actions/user.actions";

import { signIn } from "next-auth/react";
import NewUserPage from "./screens/Home/NewUserPage";

// const roboto = Yanone_Kaffeesatz({
//     subsets: ["cyrillic"],
//     style: ["normal"],
//     weight: "400",
// });
const underDog = Underdog({
    subsets: ["cyrillic"],
    style: ["normal"],
    weight: "400",
});

export const metadata: Metadata = {
    title: "OCHO",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession(authOptions);

    const userInfo: userData = await fetchUser(session?.user?.email as string);

    return (
        <html lang="en" className="bg-black cursor-default">
            <body className={underDog.className}>
                <SessionProvider session={session}>
                    {session ? (
                        <>
                            <Navigation></Navigation>
                            <div>{children}</div>
                        </>
                    ) : (
                        <NewUserPage></NewUserPage>
                    )}
                </SessionProvider>
            </body>
        </html>
    );
}
