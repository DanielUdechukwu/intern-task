/**
 * Generate models component
 */

import { generateTools } from "@/utils/options";
import Image from "next/image";

export default function GenerateModels() {
    return (
        <section className="w-[95%] mx-auto mt-[4rem] mb-[5rem]">
            <h3 className="text-[1.3rem] font-bold ml-[1rem] dark:text-white">
                Generate
            </h3>

            <div className="mt-[1rem] grid grid-cols-4 gap-y-[1rem] items-stretch">
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
                            className="group flex gap-[.5rem] hover:bg-[#f5f5f5] dark:hover:bg-white px-[1rem] py-[1rem] rounded-[20px] transition ease-in-out duration-300 items-center h-full"
                        >
                            <div
                                className="flex justify-center items-center w-[3.5rem] h-[3.5rem] aspect-square rounded-[10px] flex-shrink-0"
                                style={{
                                    background: bgGradient,
                                }}
                            >
                                <Image
                                    src={icon}
                                    width={24}
                                    height={24}
                                    alt="Icon"
                                    className="w-[2rem]"
                                />
                            </div>

                            <div className="flex gap-[2rem] justify-between items-center flex-1 min-h-0">
                                <div className="flex-1">
                                    <p className="text-[1.2rem] dark:text-white font-bold flex gap-[.5rem] items-center group-hover:text-black dark:group-hover:text-black">
                                        {name}
                                        {tag && (
                                            <span className="bg-[#3B82F6] text-white font-semibold h-[1.5rem] flex justify-center items-center px-3 rounded-full text-[.7rem] backdrop-blur-2xl">
                                                {tag}
                                            </span>
                                        )}
                                    </p>
                                    <p className="text-[.9rem] font-bold leading-[1.1rem] text-[#6C757D] dark:text-[#ffffff]/80 group-hover:text-black dark:group-hover:text-black">
                                        {description}
                                    </p>
                                </div>
                                <button className="bg-[#6C757D]/20 text-[.9rem] font-bold text-[#6C757D] dark:text-[#ffffff]/80 group-hover:text-black dark:group-hover:text-black h-[2.5rem] min-w-[6rem] rounded-full flex-shrink-0">
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
