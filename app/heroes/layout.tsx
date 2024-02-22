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
            <div className="bg-black bg-opacity-50">
                <div className="max-w-[1280px] mx-auto page-h">{children}</div>
            </div>
        </div>
    );
}
