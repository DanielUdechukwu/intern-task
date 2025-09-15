(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/carousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Carousel Section
 */ __turbopack_context__.s([
    "default",
    ()=>Carousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Carousel() {
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const carouselItems = [
        {
            image: "/images/img1.webp",
            alt: "WAN 2.2 preview",
            badge: "New Release",
            title: "WAN 2.2 Image generation",
            description: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
            cta: "Try WAN 2.2"
        },
        {
            image: "/images/img2.webp",
            alt: "FLUX.1 preview",
            badge: "Open Source",
            title: "FLUX.1 Krea",
            description: "FLUX.1 is tuned for stylized composition and studio lighting — great for product renders and cinematic results.",
            cta: "Explore FLUX.1"
        },
        {
            image: "/images/img3.webp",
            alt: "Realtime Studio preview",
            badge: "Realtime",
            title: "Realtime Studio",
            description: "Iterate visually with instant renders and live adjustments — ideal for rapid creative workflows.",
            cta: "Open Studio"
        },
        {
            image: "/images/img4.webp",
            alt: "Creative Enhancer preview",
            badge: "Enhancer",
            title: "Creative Enhancer",
            description: "Refine, denoise and upscale images up to 8K while preserving artistic intent and textures.",
            cta: "Enhance"
        },
        {
            image: "/images/img5.webp",
            alt: "Open Models Hub preview",
            badge: "Community",
            title: "Open Models Hub",
            description: "Browse and remix community models and checkpoints — fine-tune or deploy the ones you like.",
            cta: "Browse Models"
        }
    ];
    const scrollToCard = (index)=>{
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const firstChild = container.firstElementChild;
            if (!firstChild) return; // prevent null access
            const cardWidth = firstChild.offsetWidth + 56;
            const scrollLeft = index * cardWidth;
            container.scrollTo({
                left: scrollLeft,
                behavior: "smooth"
            });
        }
    };
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Carousel.useCallback[handleScroll]": ()=>{
            if (scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                const firstChild = container.firstElementChild;
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
                const newIndex = Math.max(0, Math.min(carouselItems.length - 2, Math.round(scrollLeft / cardWidth)));
                if (newIndex !== activeIndex) {
                    setActiveIndex(newIndex);
                }
            }
        }
    }["Carousel.useCallback[handleScroll]"], [
        activeIndex,
        carouselItems.length
    ]);
    const goToPrevious = ()=>{
        if (activeIndex > 0) {
            scrollToCard(activeIndex - 1);
        }
    };
    const goToNext = ()=>{
        if (activeIndex < carouselItems.length - 1) {
            scrollToCard(activeIndex + 1);
        }
    };
    const handlePaginationClick = (index)=>{
        scrollToCard(index);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Carousel.useEffect": ()=>{
            const container = scrollContainerRef.current;
            if (container) {
                container.addEventListener("scroll", handleScroll, {
                    passive: true
                });
                return ({
                    "Carousel.useEffect": ()=>{
                        container.removeEventListener("scroll", handleScroll);
                    }
                })["Carousel.useEffect"];
            }
        }
    }["Carousel.useEffect"], [
        handleScroll
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mt-[7rem] ml-[3rem]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollContainerRef,
                className: "w-full overflow-x-scroll scrollbar-hide flex items-center pb-[1rem] scroll-smooth",
                style: {
                    scrollSnapType: "x mandatory",
                    scrollBehavior: "smooth"
                },
                children: carouselItems.map((items, index)=>{
                    const { image, alt, badge, title, description, cta } = items;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-[70rem] relative mr-[3.5rem] h-[35rem] rounded-3xl flex-shrink-0",
                        style: {
                            scrollSnapAlign: "start"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: image,
                                width: 1024,
                                height: 1024,
                                alt: alt,
                                className: "w-full object-cover rounded-3xl h-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/carousel.tsx",
                                lineNumber: 170,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/50 rounded-3xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/carousel.tsx",
                                lineNumber: 179,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "uppercase",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-[.9rem] text-white/80 absolute top-[2rem] left-[2.5rem]",
                                    children: badge
                                }, void 0, false, {
                                    fileName: "[project]/src/components/carousel.tsx",
                                    lineNumber: 183,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/carousel.tsx",
                                lineNumber: 182,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[2rem] text-white flex justify-between items-end w-full px-[2rem]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[35rem]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-[2rem]",
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/carousel.tsx",
                                                lineNumber: 191,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "w-[95%] font-medium text-[1rem]",
                                                children: description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/carousel.tsx",
                                                lineNumber: 194,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/carousel.tsx",
                                        lineNumber: 190,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "h-[3rem] min-w-[10rem] bg-white rounded-full text-black cursor-pointer font-medium",
                                        children: cta
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/carousel.tsx",
                                        lineNumber: 199,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/carousel.tsx",
                                lineNumber: 189,
                                columnNumber: 29
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/carousel.tsx",
                        lineNumber: 165,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/carousel.tsx",
                lineNumber: 152,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "PAGINATION mx-[3rem] flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: "[project]/src/components/carousel.tsx",
                        lineNumber: 209,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex items-center gap-[.7rem]",
                        children: carouselItems.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                onClick: ()=>handlePaginationClick(index),
                                className: "w-[.6rem] h-[.6rem] rounded-full cursor-pointer transition-all duration-300 ".concat(activeIndex === index ? "bg-[#2e2e2e] scale-125" : "bg-[#2e2e2e]/30 hover:bg-[#2e2e2e]/50")
                            }, index, false, {
                                fileName: "[project]/src/components/carousel.tsx",
                                lineNumber: 214,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/carousel.tsx",
                        lineNumber: 212,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-[.3rem]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: goToPrevious,
                                className: "w-[2rem] h-[2rem] rounded-full bg-[#2e2e2e]/30 hover:bg-[#2e2e2e]/50 flex items-center justify-center transition-all duration-200 active:scale-95",
                                "aria-label": "Previous slide",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/icons/caret.svg",
                                    width: 24,
                                    height: 24,
                                    alt: "previous",
                                    className: "rotate-90 w-[.8rem]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/carousel.tsx",
                                    lineNumber: 233,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/carousel.tsx",
                                lineNumber: 228,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: goToNext,
                                className: "w-[2rem] h-[2rem] rounded-full bg-[#2e2e2e]/30 hover:bg-[#2e2e2e]/50 flex items-center justify-center transition-all duration-200 active:scale-95",
                                "aria-label": "Next slide",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/icons/caret.svg",
                                    width: 24,
                                    height: 24,
                                    alt: "next",
                                    className: "-rotate-90 w-[.8rem]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/carousel.tsx",
                                    lineNumber: 246,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/carousel.tsx",
                                lineNumber: 241,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/carousel.tsx",
                        lineNumber: 227,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/carousel.tsx",
                lineNumber: 208,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/carousel.tsx",
        lineNumber: 151,
        columnNumber: 9
    }, this);
}
_s(Carousel, "BI7NONvK4okBnJNPgr10mngwd8A=");
_c = Carousel;
var _c;
__turbopack_context__.k.register(_c, "Carousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useDarkMode.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDarkMode",
    ()=>useDarkMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useDarkMode() {
    _s();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDarkMode.useEffect": ()=>{
            setMounted(true);
            // Check localStorage first, then system preference
            const stored = localStorage.getItem("darkMode");
            const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const shouldBeDark = stored === "true" || stored === null && systemDark;
            setIsDark(shouldBeDark);
            if (shouldBeDark) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }
    }["useDarkMode.useEffect"], []);
    const toggleDarkMode = ()=>{
        const newDarkMode = !isDark;
        setIsDark(newDarkMode);
        if (newDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("darkMode", "true");
            console.log("Dark Mode");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("darkMode", "false");
            console.log("Light Mode");
        }
    };
    return {
        isDark,
        toggleDarkMode,
        mounted
    };
}
_s(useDarkMode, "4PPoEPuUE5ZM05wB23N+LA9kxlg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Navigation Component
 */ __turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDarkMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDarkMode.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Navigation() {
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [light, setLight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isDark, toggleDarkMode, mounted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDarkMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDarkMode"])();
    const navItems = [
        {
            id: "home",
            name: "Home",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "18",
                height: "18",
                className: "",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2 11.7354C2 10.4141 2 9.75338 2.18958 9.15972C2.35736 8.63437 2.63195 8.14939 2.99611 7.73524C3.40763 7.26724 3.97416 6.92732 5.10723 6.24748L8.70722 4.08748C9.90443 3.36916 10.503 3.01 11.142 2.86967C11.7073 2.74555 12.2927 2.74555 12.858 2.86967C13.497 3.01 14.0956 3.36916 15.2928 4.08748L18.8928 6.24748C20.0258 6.92732 20.5924 7.26724 21.0039 7.73524C21.3681 8.14939 21.6426 8.63437 21.8104 9.15972C22 9.75338 22 10.4141 22 11.7354V18.9118C22 20.0319 22 20.592 21.782 21.0198C21.5903 21.3961 21.2843 21.7021 20.908 21.8938C20.4802 22.1118 19.9201 22.1118 18.8 22.1118H18.2C17.0799 22.1118 16.5198 22.1118 16.092 21.8938C15.7157 21.7021 15.4097 21.3961 15.218 21.0198C15 20.592 15 20.0319 15 18.9118V15.7118C15 15.1518 15 14.8717 14.891 14.6578C14.7951 14.4697 14.6422 14.3167 14.454 14.2208C14.2401 14.1118 13.9601 14.1118 13.4 14.1118H10.6C10.0399 14.1118 9.75992 14.1118 9.54601 14.2208C9.35785 14.3167 9.20487 14.4697 9.10899 14.6578C9 14.8717 9 15.1518 9 15.7118V18.9118C9 20.0319 9 20.592 8.78201 21.0198C8.59027 21.3961 8.28431 21.7021 7.90798 21.8938C7.48016 22.1118 6.9201 22.1118 5.8 22.1118H5.2C4.0799 22.1118 3.51984 22.1118 3.09202 21.8938C2.71569 21.7021 2.40973 21.3961 2.21799 21.0198C2 20.592 2 20.0319 2 18.9118V11.7354Z",
                    fill: "".concat(light ? "#000000" : "#OEOEOE")
                }, void 0, false, {
                    fileName: "[project]/src/components/nav.tsx",
                    lineNumber: 28,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/nav.tsx",
                lineNumber: 20,
                columnNumber: 17
            }, this)
        },
        {
            id: "gallery",
            name: "Gallery",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10.4763 9.85043C10.4763 10.8104 9.69763 11.589 8.73768 11.589C7.77772 11.589 7 10.8104 7 9.85043C7 8.89049 7.77772 8.11182 8.73768 8.11182C9.69763 8.11182 10.4754 8.88955 10.4763 9.84856V9.85043Z",
                        fill: "".concat(light ? "#000000" : "#OEOEOE")
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 47,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "2.75",
                        y: "3.86182",
                        width: "18.5",
                        height: "16.5",
                        rx: "3.25",
                        stroke: "".concat(light ? "#000000" : "#OEOEOE"),
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 53,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M15.758 13.1118C17.5271 13.1118 19.1544 14.6938 20 15.4766V19.1118H4C4 19.1118 5.29914 17.0464 6.6586 16.0349C8.01806 15.0235 9.56678 16.6015 11.2673 16.6015C12.9687 16.6015 13.9898 13.1118 15.758 13.1118Z",
                        fill: "".concat(light ? "#000000" : "#OEOEOE"),
                        stroke: "".concat(light ? "#000000" : "#OEOEOE"),
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 62,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/nav.tsx",
                lineNumber: 39,
                columnNumber: 17
            }, this)
        },
        {
            id: "video",
            name: "Video",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "18",
                height: "18",
                className: "",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M22.263 7.17399C21.637 6.41199 20.506 6.30099 19.743 6.92499L18.5167 7.92894C18.2593 8.13966 18.1409 8.46318 18.1571 8.79542C18.1589 8.83351 18.16 8.872 18.16 8.91099V15.312C18.16 15.3533 18.1588 15.3941 18.1568 15.4344C18.14 15.7656 18.2584 16.0881 18.5146 16.2987L19.729 17.297C20.045 17.558 20.448 17.701 20.863 17.701C21.849 17.701 22.654 16.899 22.657 15.912L22.669 8.31399C22.67 7.89899 22.527 7.49299 22.263 7.17399Z",
                        fill: "".concat(light ? "#000000" : "#OEOEOE")
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 85,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12.6444 5.11182H5.68203C3.08003 5.11182 1.33203 6.93982 1.33203 9.66182V15.0618C1.33203 17.7838 3.08003 19.6118 5.68203 19.6118H12.6434C15.2474 19.6118 16.9964 17.7838 16.9964 15.0618V9.66182C16.9964 6.93982 15.2474 5.11182 12.6444 5.11182Z",
                        fill: "".concat(light ? "#000000" : "#OEOEOE")
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 91,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "1",
                        y: "5.11182",
                        width: "16",
                        height: "15",
                        rx: "4",
                        fill: "".concat(light ? "#000000" : "#OEOEOE")
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 97,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/nav.tsx",
                lineNumber: 77,
                columnNumber: 17
            }, this)
        },
        {
            id: "design",
            name: "Design",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "18",
                height: "18",
                className: "",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4.49935 13.0083C4.34395 13.5194 3.94455 13.9195 3.43425 14.075C3.94455 14.2306 4.34395 14.6306 4.49935 15.1417C4.65465 14.6306 5.05405 14.2306 5.56445 14.075C5.05405 13.9195 4.65465 13.5194 4.49935 13.0083Z",
                        stroke: "".concat(light ? "#000000" : "#OEOEOE"),
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 120,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16.3704 5.57373C16.215 6.08483 15.8156 6.48493 15.3053 6.64043C15.8156 6.79603 16.215 7.19603 16.3704 7.70713C16.5257 7.19603 16.9251 6.79603 17.4355 6.64043C16.9251 6.48493 16.5257 6.08483 16.3704 5.57373Z",
                        stroke: "".concat(light ? "#000000" : "#OEOEOE"),
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 127,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M7.82105 18.4485H7.83105",
                        stroke: "".concat(light ? "#000000" : "#OEOEOE"),
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 134,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12.8125 3.69873H12.8025",
                        stroke: "".concat(light ? "#000000" : "#OEOEOE"),
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 141,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "3.3868",
                        y: "5.14091",
                        width: "2.5",
                        height: "22.0199",
                        rx: "1.25",
                        transform: "rotate(-44.5361 3.3868 5.14091)",
                        stroke: "".concat(light ? "#000000" : "#OEOEOE"),
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 148,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8.4043 11.3093L11.2555 8.50389L20.2713 17.6668C21.046 18.4542 21.0357 19.7204 20.2484 20.4951C19.461 21.2698 18.1947 21.2596 17.42 20.4722L8.4043 11.3093Z",
                        fill: "".concat(light ? "#000000" : "#OEOEOE")
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 158,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/nav.tsx",
                lineNumber: 112,
                columnNumber: 17
            }, this)
        },
        {
            id: "edit",
            name: "Edit",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "18",
                height: "18",
                className: "",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14.9472 14.4612C14.6244 14.8306 14.4629 15.0153 14.2819 15.1777C14.121 15.3219 13.9487 15.4529 13.7667 15.5693C13.5618 15.7004 13.3384 15.8077 12.8914 16.0223C11.8174 16.538 11.2804 16.7959 10.9271 16.705C10.6205 16.626 10.3693 16.4065 10.25 16.1132C10.1126 15.7753 10.2963 15.2086 10.6635 14.0752C10.8164 13.6035 10.8928 13.3677 10.9952 13.1471C11.0863 12.9511 11.193 12.7629 11.3144 12.5842C11.4511 12.383 11.6125 12.1983 11.9354 11.8289L17.0023 6.03138C17.076 5.94704 17.1129 5.90487 17.1574 5.88701C17.1966 5.87129 17.2398 5.86839 17.2807 5.87871C17.3273 5.89045 17.3695 5.92731 17.4538 6.00102L19.9838 8.21213C20.0681 8.28584 20.1103 8.3227 20.1281 8.36727C20.1438 8.40647 20.1467 8.44964 20.1364 8.4906C20.1247 8.53715 20.0878 8.57932 20.0141 8.66366L14.9472 14.4612Z",
                        fill: "".concat(light ? "#000000" : "#OEOEOE")
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 177,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M20.8883 7.65066C20.8146 7.73499 20.7778 7.77716 20.7332 7.79503C20.694 7.81075 20.6508 7.81365 20.6099 7.80333C20.5633 7.79159 20.5211 7.75473 20.4368 7.68102L17.9096 5.47231C17.8253 5.3986 17.7831 5.36175 17.7652 5.31718C17.7495 5.27798 17.7466 5.23481 17.7569 5.19385C17.7687 5.14729 17.8055 5.10512 17.8792 5.02079L18.3305 4.50446C18.6354 4.15563 18.7878 3.98121 18.9511 3.87147C19.3968 3.57199 19.9685 3.53354 20.4502 3.77066C20.6267 3.85755 20.8012 4.00999 21.15 4.31486C21.4988 4.61972 21.6732 4.77216 21.783 4.93546C22.0824 5.3811 22.1209 5.95283 21.8838 6.43456C21.7969 6.61108 21.6444 6.7855 21.3396 7.13432L20.8883 7.65066Z",
                        fill: "".concat(light ? "#000000" : "#OEOEOE")
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 181,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9.5 18C9.5 18 7.2314 20.6818 6 20C4.7686 19.3182 8.43957 14.8136 8.43957 13.0357C8.43957 12.0802 5.54026 16.2053 3.75331 16.7185C0.87539 17.5452 7.17108 5 7.17108 5",
                        stroke: "".concat(light ? "#000000" : "#OEOEOE"),
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 185,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/nav.tsx",
                lineNumber: 169,
                columnNumber: 17
            }, this)
        },
        {
            id: "profile",
            name: "Profile",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "18",
                height: "18",
                className: "",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 2.854L12 5.51603",
                        stroke: "".concat(light ? "#000000" : "#OEOEOE"),
                        strokeWidth: "1.5",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 207,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12.0001",
                        cy: "8.17831",
                        r: "2.12118",
                        stroke: "".concat(light ? "#000000" : "#OEOEOE"),
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 213,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10.4869 10.1001L7.45996 21.4302",
                        stroke: "".concat(light ? "#000000" : "#OEOEOE"),
                        strokeWidth: "1.5",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 220,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M17.2646 21.2366C17.3715 21.6368 17.1338 22.0479 16.7336 22.1548C16.3334 22.2617 15.9224 22.0239 15.8155 21.6238L17.2646 21.2366ZM14.2377 9.90652L17.2646 21.2366L15.8155 21.6238L12.7885 10.2937L14.2377 9.90652Z",
                        fill: "".concat(light ? "#000000" : "#OEOEOE")
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 226,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6.42188 16.1118C6.42188 16.1118 7.91228 17.3606 12.0006 17.3606C16.0889 17.3606 17.5793 16.1118 17.5793 16.1118",
                        stroke: "".concat(light ? "#000000" : "#OEOEOE"),
                        strokeWidth: "1.5",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 230,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/nav.tsx",
                lineNumber: 199,
                columnNumber: 17
            }, this)
        },
        {
            id: "files",
            name: "Files",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "".concat(light ? "#000000" : "#OEOEOE"),
                className: "",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3 5C3 4.45 3.45 4 4 4H9.17C9.58 4 9.95 4.21 10.14 4.55L10.86 5.89C11.05 6.23 11.42 6.44 11.83 6.44H20C20.55 6.44 21 6.89 21 7.44V11C21 11.55 20.55 12 20 12H4C3.45 12 3 11.55 3 11V5Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 251,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "3",
                        y: "7",
                        width: "18",
                        height: "12",
                        rx: "1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 252,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3.15 18.5C3.08 18.15 3.08 17.65 3.08 17H20.92C20.92 17.65 20.92 18.15 20.85 18.5H3.15Z",
                        opacity: "0.3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 253,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M5 20H19C19.8 20 20.2 20 20.5 19.8C20.7 19.7 20.9 19.5 21 19.2C21.05 19.1 21.08 19 21.1 18.5H2.9C2.92 19 2.95 19.1 3 19.2C3.1 19.5 3.3 19.7 3.5 19.8C3.8 20 4.2 20 5 20Z",
                        opacity: "0.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 257,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/nav.tsx",
                lineNumber: 243,
                columnNumber: 17
            }, this)
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            setLight(true);
        }
    }["Navigation.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "relative flex mt-[.9rem] items-center w-[95%] mx-auto my-[.4rem]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/icons/logo.svg",
                    width: 24,
                    height: 24,
                    alt: "Company Logo"
                }, void 0, false, {
                    fileName: "[project]/src/components/nav.tsx",
                    lineNumber: 274,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/nav.tsx",
                lineNumber: 273,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "absolute left-1/2 -translate-x-1/2 flex group items-center bg-[#f5f5f5] gap-1 px-2 rounded-2xl backdrop-blur-2xl py-[.4rem]",
                children: navItems.map((items, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        onClick: ()=>setActiveIndex(index),
                        className: "h-10 w-13 flex items-center justify-center rounded-xl cursor-pointer transition ease-in-out duration-100 ".concat(activeIndex === index ? "bg-white shadow-sm" : "hover:bg-[#e5e5e5]"),
                        children: items.icon
                    }, items.id, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 285,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/nav.tsx",
                lineNumber: 283,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-auto flex justify-center items-center gap-[1rem]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center gap-[.3rem] bg-[#f8f8f8] px-2 py-2 rounded-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/icons/gallery2.svg",
                                width: 24,
                                height: 24,
                                alt: "dark mode toggle",
                                className: "w-[1.2rem]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav.tsx",
                                lineNumber: 302,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.9rem] font-medium",
                                children: "Gallery"
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav.tsx",
                                lineNumber: 309,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 301,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center gap-[.3rem] bg-[#f8f8f8] px-2 py-2 rounded-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/icons/headset.svg",
                                width: 24,
                                height: 24,
                                alt: "dark mode toggle",
                                className: "w-[1.2rem]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav.tsx",
                                lineNumber: 313,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.9rem] font-medium",
                                children: "Support"
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav.tsx",
                                lineNumber: 320,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 312,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center gap-[.3rem] bg-[#f8f8f8] px-2 py-2 rounded-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/icons/bell-fill.svg",
                            width: 24,
                            height: 24,
                            alt: "notifications",
                            className: "w-[1.2rem]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/nav.tsx",
                            lineNumber: 324,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 323,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center gap-[.3rem] bg-[#f8f8f8] px-2 py-2 rounded-xl",
                        children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/icons/cresent.svg",
                            width: 24,
                            height: 24,
                            alt: "dark mode toggle",
                            className: "cursor-pointer",
                            onClick: toggleDarkMode
                        }, void 0, false, {
                            fileName: "[project]/src/components/nav.tsx",
                            lineNumber: 335,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/icons/light.svg",
                            width: 24,
                            height: 24,
                            alt: "light mode toggle",
                            className: "cursor-pointer",
                            onClick: toggleDarkMode
                        }, void 0, false, {
                            fileName: "[project]/src/components/nav.tsx",
                            lineNumber: 344,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 333,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 354,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/nav.tsx",
                lineNumber: 300,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/nav.tsx",
        lineNumber: 271,
        columnNumber: 9
    }, this);
}
_s(Navigation, "OFvnrYSlWW0j+lMkrTROYJs4xj0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDarkMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDarkMode"]
    ];
});
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_5b701444._.js.map