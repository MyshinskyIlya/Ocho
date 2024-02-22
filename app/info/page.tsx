"use client";
import { fetchAllCharacters } from "@/lib/actions/character.action";
import { getServerSession } from "next-auth";
import React, { useEffect, useState } from "react";

const page = () => {
    const [session, setSession] = useState<any>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const session = await getServerSession();
                setSession(session as any);
            } catch (error: any) {
                throw Error(error);
            }
        };

        fetchData();
    }, []);

    return <div>{session && <div>{session.user.name as string}</div>}</div>;
};

export default page;
