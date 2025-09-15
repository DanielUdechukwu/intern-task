// types/generateTools.ts or constants/generateTools.ts

export interface GenerateTool {
    id: number;
    name: string;
    tag?: "NEW" | "BETA" | "PREMIUM";
    description: string;
    icon: string;
    bgGradient: string;
    action: string;
}

export const generateTools: GenerateTool[] = [
    {
        id: 1,
        name: "Image",
        tag: "NEW",
        description: "Create stunning AI images from text prompts",
        icon: "/icons/gallery.svg",
        bgGradient:
            "linear-gradient(0deg, rgb(208, 227, 241) 0%, rgb(41, 73, 98) 100%)",
        action: "Open",
    },
    {
        id: 2,
        name: "Video",
        description: "Generate videos with Hukin, Flux and more",
        icon: "/icons/video.svg",
        bgGradient: "#ffa702",
        action: "Open",
    },
    {
        id: 3,
        name: "Realtime",
        description: "AI voice chatting in a camera",
        icon: "/icons/draw.svg",
        bgGradient:
            "linear-gradient(0deg, rgb(206, 246, 255) 0%, oklch(0.7972 0.1583 221.31) 35%, oklch(0.6575 0.1796 237.869) 100%)",
        action: "Open",
    },
    {
        id: 4,
        name: "Enhancer",
        tag: "NEW",
        description: "Upscale and enhance your images and videos",
        icon: "icons/wand.svg",
        bgGradient: "linear-gradient(0deg, #888888 0%, #000000 100%)",
        action: "Open",
    },
    {
        id: 5,
        name: "Edit",
        tag: "NEW",
        description: "Edit images with AI without prompts and generations",
        icon: "/icons/divider.svg",
        bgGradient:
            "linear-gradient(0deg, #AE91CA 0%, #592A85 60%, #180728 100%)",
        action: "Open",
    },
    {
        id: 6,
        name: "Video Upscaler",
        tag: "NEW",
        description: "AI video upscaling and frame",
        icon: "/icons/mic.svg",
        bgGradient:
            "linear-gradient(0deg, #BBCA91 0%, #3C878F 60%, #07280F 100%)",
        action: "Open",
    },
    {
        id: 7,
        name: "Motion Transfer",
        tag: "NEW",
        description: "Transfer motion from videos to static characters",
        icon: "/icons/person.svg",
        bgGradient: "#1b1c1d",
        action: "Open",
    },
    {
        id: 8,
        name: "Train",
        description:
            "Train custom AI models with your own productivity or characters",
        icon: "/icons/restyle.svg",
        bgGradient: "#f96a69",
        action: "Open",
    },
];
