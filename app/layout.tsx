import type { Metadata } from "next";
import { Underdog, Yanone_Kaffeesatz } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";

import SessionProvider from "./components/SessionProvider";
import Navigation from "./components/Navigation";
import { authOptions } from "@/configs/auth";

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

    return (
        <html lang="en" className="bg-black cursor-default">
            <body className={underDog.className}>
                <SessionProvider session={session}>
                    <Navigation></Navigation>
                    <main className="">{children}</main>
                </SessionProvider>
            </body>
        </html>
    );
}
