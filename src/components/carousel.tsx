/**
 * Carousel Section
 */

"use client";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";

interface CarouselItem {
    image: string;
    alt: string;
    badge: string;
    title: string;
    description?: string;
    cta?: string;
}

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const carouselItems: CarouselItem[] = [
        {
            image: "/images/img1.webp",
            alt: "WAN 2.2 preview",
            badge: "New Release",
            title: "WAN 2.2 Image generation",
            description:
                "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
            cta: "Try WAN 2.2",
        },
        {
            image: "/images/img2.webp",
            alt: "FLUX.1 preview",
            badge: "Open Source",
            title: "FLUX.1 Krea",
            description:
                "FLUX.1 is tuned for stylized composition and studio lighting — great for product renders and cinematic results.",
            cta: "Explore FLUX.1",
        },
        {
            image: "/images/img3.webp",
            alt: "Realtime Studio preview",
            badge: "Realtime",
            title: "Realtime Studio",
            description:
                "Iterate visually with instant renders and live adjustments — ideal for rapid creative workflows.",
            cta: "Open Studio",
        },
        {
            image: "/images/img4.webp",
            alt: "Creative Enhancer preview",
            badge: "Enhancer",
            title: "Creative Enhancer",
            description:
                "Refine, denoise and upscale images up to 8K while preserving artistic intent and textures.",
            cta: "Enhance",
        },
        {
            image: "/images/img5.webp",
            alt: "Open Models Hub preview",
            badge: "Community",
            title: "Open Models Hub",
            description:
                "Browse and remix community models and checkpoints — fine-tune or deploy the ones you like.",
            cta: "Browse Models",
        },
    ];

    const scrollToCard = (index: number) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;

            const firstChild =
                container.firstElementChild as HTMLElement | null;
            if (!firstChild) return; // prevent null access

            const cardWidth = firstChild.offsetWidth + 56;
            const scrollLeft = index * cardWidth;

            container.scrollTo({
                left: scrollLeft,
                behavior: "smooth",
            });
        }
    };

    const handleScroll = useCallback(() => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;

            const firstChild =
                container.firstElementChild as HTMLElement | null;
            if (!firstChild) return;

            const cardWidth = firstChild.clientWidth + 56;
            const scrollLeft = container.scrollLeft;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;

            if (scrollLeft >= maxScrollLeft - 5) {
                if (activeIndex !== carouselItems.length - 1) {
                    setActiveIndex(carouselItems.length - 1);
                }
                return;
            }

            const newIndex = Math.max(
                0,
                Math.min(
                    carouselItems.length - 2,
                    Math.round(scrollLeft / cardWidth)
                )
            );

            if (newIndex !== activeIndex) {
                setActiveIndex(newIndex);
            }
        }
    }, [activeIndex, carouselItems.length]);

    const goToPrevious = () => {
        if (activeIndex > 0) {
            scrollToCard(activeIndex - 1);
        }
    };

    const goToNext = () => {
        if (activeIndex < carouselItems.length - 1) {
            scrollToCard(activeIndex + 1);
        }
    };

    const handlePaginationClick = (index: number) => {
        scrollToCard(index);
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll, {
                passive: true,
            });

            return () => {
                container.removeEventListener("scroll", handleScroll);
            };
        }
    }, [handleScroll]);

    return (
        <section className="mt-[7rem] ml-[3rem]">
            <div
                ref={scrollContainerRef}
                className="w-full overflow-x-scroll scrollbar-hide flex items-center pb-[1rem] scroll-smooth"
                style={{
                    scrollSnapType: "x mandatory",
                    scrollBehavior: "smooth",
                }}
            >
                {carouselItems.map((items, index) => {
                    const { image, alt, badge, title, description, cta } =
                        items;

                    return (
                        <div
                            key={index}
                            className="min-w-[70rem] relative mr-[3.5rem] h-[35rem] rounded-3xl flex-shrink-0"
                            style={{ scrollSnapAlign: "start" }}
                        >
                            <Image
                                src={image}
                                width={1024}
                                height={1024}
                                alt={alt}
                                className="w-full object-cover rounded-3xl h-full"
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/50 rounded-3xl" />

                            {/* Model Descriptor */}
                            <div className="uppercase">
                                <p className="font-bold text-[.9rem] text-white/80 absolute top-[2rem] left-[2.5rem]">
                                    {badge}
                                </p>
                            </div>

                            {/* Main Card Description */}
                            <div className="absolute bottom-[2rem] text-white flex justify-between items-end w-full px-[2rem]">
                                <div className="w-[35rem]">
                                    <h3 className="font-bold text-[2rem]">
                                        {title}
                                    </h3>
                                    <p className="w-[95%] font-medium text-[1rem]">
                                        {description}
                                    </p>
                                </div>

                                <button className="h-[3rem] min-w-[10rem] bg-white rounded-full text-black cursor-pointer font-medium">
                                    {cta}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="PAGINATION mx-[3rem] flex justify-between items-center">
                <div></div>

                {/* Dynamic Pagination Dots */}
                <ul className="flex items-center gap-[.7rem]">
                    {carouselItems.map((_, index) => (
                        <li
                            key={index}
                            onClick={() => handlePaginationClick(index)}
                            className={`w-[.6rem] h-[.6rem] rounded-full cursor-pointer transition-all duration-300 ${
                                activeIndex === index
                                    ? "bg-[#2e2e2e] dark:bg-white scale-125"
                                    : "bg-[#2e2e2e]/30 hover:bg-[#2e2e2e]/50 dark:bg-white/30 dark:hover:bg-white/50"
                            }`}
                        ></li>
                    ))}
                </ul>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-[.3rem]">
                    <button
                        onClick={goToPrevious}
                        className="w-[2rem] h-[2rem] rounded-full bg-[#2e2e2e]/30 hover:bg-[#2e2e2e]/50 flex items-center justify-center transition-all duration-200 active:scale-95"
                        aria-label="Previous slide"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            className="rotate-90 w-[.8rem] text-[#202020] dark:text-white"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1.64645 4.64645C1.84171 4.45118 2.15829 4.45118 2.35355 4.64645L8 10.2929L13.6464 4.64645C13.8417 4.45118 14.1583 4.45118 14.3536 4.64645C14.5488 4.84171 14.5488 5.15829 14.3536 5.35355L8.35355 11.3536C8.15829 11.5488 7.84171 11.5488 7.64645 11.3536L1.64645 5.35355C1.45118 5.15829 1.45118 4.84171 1.64645 4.64645Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={goToNext}
                        className="w-[2rem] h-[2rem] rounded-full bg-[#2e2e2e]/30 hover:bg-[#2e2e2e]/50 flex items-center justify-center transition-all duration-200 active:scale-95"
                        aria-label="Next slide"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            className="-rotate-90 w-[.8rem] text-[#202020] dark:text-white"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1.64645 4.64645C1.84171 4.45118 2.15829 4.45118 2.35355 4.64645L8 10.2929L13.6464 4.64645C13.8417 4.45118 14.1583 4.45118 14.3536 4.64645C14.5488 4.84171 14.5488 5.15829 14.3536 5.35355L8.35355 11.3536C8.15829 11.5488 7.84171 11.5488 7.64645 11.3536L1.64645 5.35355C1.45118 5.15829 1.45118 4.84171 1.64645 4.64645Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
