import { fetchAllItems } from "@/lib/actions/item.action";
import Image from "next/image";
import React from "react";
import ItemsList from "../screens/Items/ItemsList";
import NewItem from "../screens/Items/NewItem";

const page = async () => {
    const items = await fetchAllItems();

    return (
        <div className="grid grid-cols-10 gap-6 p-4">
            <ItemsList items={items}></ItemsList>
            <NewItem></NewItem>
        </div>
    );
};

export default page;
