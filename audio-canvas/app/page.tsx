import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Events from "../components/sections/Events";
import WhyUs from "../components/sections/WhyUs";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

export default function Home() {
    return (
        <div className="relative overflow-x-hidden">
            {/* Background Glows */}
            <div className="pointer-events-none fixed -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-emerald-400/25 blur-[60px]" />
            <div className="pointer-events-none fixed -right-52 top-16 h-[520px] w-[520px] rounded-full bg-emerald-400/15 blur-[60px]" />

            {/* Subtle Grid */}
            <div
              className="pointer-events-none fixed insert-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,.035) 1px, transparent 1px), linear-gradiant(to bottom, rgba(255,255,255,.035) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
                maskImage: "radial-gradient(circle at 30%, 1-%, black 0 35%, transparent 70%)",
              }}
            />

            <Header />
            <main>
                <Hero />
                <Services />
                <Events />
                <WhyUs />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}