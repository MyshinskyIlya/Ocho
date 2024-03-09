"use client";
import ItemInfo from "@/app/components/itemInfo/ItemInfo";
import React, { useState } from "react";
import CurrentItem from "./CurrentItem";

interface ItemsListProps {
    items: any;
}

const ItemsList = ({ items }: ItemsListProps) => {
    return (
        <div className="col-span-6 flex flex-col gap-6 p-6 bg-card !relative">
            <h2 className="text-3xl">Все предметы доступные в мире</h2>
            <div className="flex flex-col flex-wrap">
                {items.length > 0 ? (
                    items.map((item: any) => (
                        <CurrentItem key={item._id} item={item}></CurrentItem>
                    ))
                ) : (
                    <p>No results</p>
                )}
            </div>
        </div>
    );
};

export default ItemsList;
