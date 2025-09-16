/**
 * Generate models component
 */

import { generateTools } from "@/utils/options";
import Image from "next/image";

export default function GenerateModels() {
    return (
        <section className="w-[95%] mx-auto mt-16 mb-20">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold ml-4 dark:text-white">
                Generate
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch">
                {generateTools.map((items) => {
                    const {
                        id,
                        name,
                        tag,
                        description,
                        icon,
                        bgGradient,
                        action,
                    } = items;

                    return (
                        <div
                            key={id}
                            className="group flex gap-2 sm:gap-3 hover:bg-[#f5f5f5] dark:hover:bg-white px-4 py-4 rounded-2xl transition ease-in-out duration-300 items-center h-full"
                        >
                            <div
                                className="flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex-shrink-0"
                                style={{
                                    background: bgGradient,
                                }}
                            >
                                <Image
                                    src={icon}
                                    width={28}
                                    height={28}
                                    alt="Icon"
                                    className="w-6 sm:w-8"
                                />
                            </div>

                            <div className="flex gap-4 justify-between items-center flex-1 min-h-0">
                                <div className="flex-1">
                                    <p className="text-base sm:text-lg dark:text-white font-bold flex gap-2 items-center group-hover:text-black dark:group-hover:text-black">
                                        {name}
                                        {tag && (
                                            <span className="bg-[#3B82F6] text-white font-semibold h-6 flex justify-center items-center px-2 sm:px-3 rounded-full text-xs sm:text-sm backdrop-blur-2xl">
                                                {tag}
                                            </span>
                                        )}
                                    </p>
                                    <p className="text-sm sm:text-base font-medium leading-tight text-[#6C757D] dark:text-[#ffffff]/80 group-hover:text-black dark:group-hover:text-black mt-1">
                                        {description}
                                    </p>
                                </div>
                                <button className="bg-[#6C757D]/20 text-sm sm:text-base font-semibold text-[#6C757D] dark:text-[#ffffff]/80 group-hover:text-black dark:group-hover:text-black h-9 sm:h-10 min-w-[5rem] sm:min-w-[6rem] rounded-full flex-shrink-0">
                                    {action}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
