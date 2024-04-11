import Image from "next/image";
import React from "react";

const BattleIcon = () => {
    return (
        <div className="flex items-center justify-center">
            <Image
                priority
                src={"/images/items/battle.webp"}
                alt="Battle"
                width={360}
                height={360}
                className="object-contain"
            ></Image>
        </div>
    );
};

export default BattleIcon;
