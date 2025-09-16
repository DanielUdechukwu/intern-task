import Carousel from "@/components/carousel";
import GenerateModels from "@/components/generate";
import Navigation from "@/components/nav";

export default function Home() {
    return (
        <section className="min-h-screen">
            <Navigation />
            <Carousel />
            <GenerateModels />
        </section>
    );
}
