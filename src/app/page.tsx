import Carousel from "@/components/carousel";
import Navigation from "@/components/nav";

export default function Home() {
    return (
        <section className="bg-[#ffffff] min-h-screen">
            <Navigation />
            <Carousel />
        </section>
    );
}
