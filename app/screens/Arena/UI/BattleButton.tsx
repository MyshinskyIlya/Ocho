import React from "react";

const BattleButton = () => {
    return (
        <button
            disabled
            className="mt-2 text-3xl bg-card  !bg-red-950 !bg-opacity-75 cursor-pointer hover:!bg-opacity-100 hover:shadow-sm hover:shadow-red-700 duration-300"
        >
            Сражение
        </button>
    );
};

export default BattleButton;
