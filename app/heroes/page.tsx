import React from "react";
import Heroes from "../screens/Heroes/components/Heroes";
import { getServerSession } from "next-auth";
import { authOptions } from "@/configs/auth";
import { fetchUser } from "@/lib/actions/user.actions";
import { userData } from "@/lib/types/user.type";

const page = async () => {
    const currentUser = await getServerSession(authOptions);

    const userInfo = await fetchUser(currentUser?.user?.email as string);

    return <Heroes currentUser={userInfo as userData}></Heroes>;
};

export default page;
