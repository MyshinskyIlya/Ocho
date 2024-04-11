"use client";

import React, { useState } from "react";

const CookiePage = () => {
    const [isVisible, setIsVisible] = useState(true);
    return isVisible ? (
        <div className="fixed bottom-0 left-0 py-2 px-12 flex justify-between text-2xl w-full bg-black bg-opacity-60 border border-red-700 border-x-0 gap-6">
            <div>
                <h2 className="">Наш сайт использует куки</h2>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa dolor nisi beatae ea non ullam quae explicabo, magni
                    ratione.
                </p>
            </div>
            <button
                className="hover:text-red-600 duration-300"
                onClick={() => setIsVisible(false)}
            >
                Принять
            </button>
        </div>
    ) : null;
};

export default CookiePage;
