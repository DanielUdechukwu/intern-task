/**
 * Carousel Section
 */

"use client";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const carouselItems = [
        {
            src: "/images/img1.webp",
            alt: "Image 1",
            title: "New Image Model",
        },
        {
            src: "/images/img2.webp",
            alt: "Image 2",
            title: "Advanced AI System",
        },
        {
            src: "/images/img3.webp",
            alt: "Image 3",
            title: "Creative Generator",
        },
        {
            src: "/images/img4.webp",
            alt: "Image 4",
            title: "Smart Processing",
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
                className="w-full overflow-x-scroll scrollbar-hide flex items-center gap-[3.5rem] pb-[1rem] scroll-smooth"
                style={{
                    scrollSnapType: "x mandatory",
                    scrollBehavior: "smooth",
                }}
            >
                {carouselItems.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-[70rem] relative h-[35rem] border border-black rounded-3xl flex-shrink-0"
                        style={{ scrollSnapAlign: "start" }}
                    >
                        <Image
                            src={item.src}
                            width={1024}
                            height={1024}
                            alt={item.alt}
                            className="w-full object-cover rounded-3xl h-full"
                        />
                        {/* Model Descriptor */}
                        <div className="uppercase">
                            <p className="font-bold text-[.9rem] text-white/80 absolute top-[2rem] left-[2.5rem]">
                                {item.title}
                            </p>
                        </div>
                    </div>
                ))}
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
                                    ? "bg-[#2e2e2e] scale-125"
                                    : "bg-[#2e2e2e]/30 hover:bg-[#2e2e2e]/50"
                            }`}
                        />
                    ))}
                </ul>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-[.3rem]">
                    <button
                        onClick={goToPrevious}
                        className="w-[2rem] h-[2rem] rounded-full bg-[#2e2e2e]/30 hover:bg-[#2e2e2e]/50 flex items-center justify-center transition-all duration-200 active:scale-95"
                        aria-label="Previous slide"
                    >
                        <Image
                            src="/icons/caret.svg"
                            width={24}
                            height={24}
                            alt="previous"
                            className="rotate-90 w-[.8rem]"
                        />
                    </button>
                    <button
                        onClick={goToNext}
                        className="w-[2rem] h-[2rem] rounded-full bg-[#2e2e2e]/30 hover:bg-[#2e2e2e]/50 flex items-center justify-center transition-all duration-200 active:scale-95"
                        aria-label="Next slide"
                    >
                        <Image
                            src="/icons/caret.svg"
                            width={24}
                            height={24}
                            alt="next"
                            className="-rotate-90 w-[.8rem]"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}
