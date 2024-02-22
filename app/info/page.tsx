"use client";
import { fetchAllCharacters } from "@/lib/actions/character.action";
import React, { useEffect, useState } from "react";

const page = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchAllCharacters();

                setCharacters(result as []);
            } catch (error: any) {
                throw Error(error);
            }
        };

        console.log(characters);

        fetchData();
    }, []);

    return <div>page</div>;
};

export default page;
