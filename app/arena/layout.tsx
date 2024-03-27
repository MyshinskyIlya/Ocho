import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "ARENA | OCHO",
};

export default function ItemsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="arena-bg">
            <div className="bg-black bg-opacity-70">
                <div className="max-w-[1080px] mx-auto page-h p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
