import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "HEROES | OCHO",
};

export default function HeroesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="heroes-bg">
            <div className="bg-black overflow-auto bg-opacity-50 h-vh flex justify-center items">
                <div className="max-w-[1280px] mx-auto page-h">{children}</div>
            </div>
        </div>
    );
}
