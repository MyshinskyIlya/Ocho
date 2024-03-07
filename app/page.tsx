import Link from "next/link";

export default function Home() {
    return (
        <main className="">
            <div className="home-bg">
                <div className="mx-auto max-w-[580px] h-vh">
                    <div className="flex flex-col text-center py-28 gap-6">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-8xl">Очо</h1>
                            <p className="text-lg text-slate-200">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Cum tempore aut omnis
                                laudantium! Architecto soluta atque vel laborum
                                dolores, asperiores recusandae dignissimos eum,
                                molestias molestiae, suscipit veniam ut maxime
                                repudiandae?
                            </p>
                        </div>
                        <div className="flex gap-8 text-2xl justify-center mt-4">
                            <Link
                                href={"/account"}
                                className="bg-card hover:text-red-600 hover:bg-black transition-all duration-300"
                            >
                                Начать Игру
                            </Link>
                            <button className="bg-card hover:text-amber-500 hover:bg-black transition-all duration-300">
                                О Нас
                            </button>
                        </div>
                    </div>
                    <div className="fixed bottom-0 left-0 py-2 px-12 flex justify-between text-2xl w-full bg-black bg-opacity-60 border border-red-700 border-x-0 gap-6">
                        <div>
                            <h2 className="">Наш сайт использует куки</h2>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsa dolor nisi beatae ea non
                                ullam quae explicabo, magni ratione.
                            </p>
                        </div>
                        <button className="hover:text-red-600 duration-300">
                            Принять
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="h-screen"></div> */}
        </main>
    );
}
