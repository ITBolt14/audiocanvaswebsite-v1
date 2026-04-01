import SectionBg from "@/components/sections/SectionBg";

export default function Hero() {
    return (
        <SectionBg image="/sections/hero.jpg" overlay="medium">
        <section className="mx-auto max-w-6xl px-4 pb-6 pt-10">
            <div className="flex min-h-[420px] items-center">
                <div className="max-w-3xl">
                    <p className="text-xs font-medium tracking-[0.18em] text-slate-400">
                        PROFESSIONAL AUDIO • LIGHTING • AV PRODUCTION
                    </p>

                    <h1 className="mt-3 text-4xl font-semibold leading-tight text-slate-400 md:text-5xl">
                        Blending technical mastery with{" "}
                        <span className="text-emerald-400">creative artistry</span>.
                    </h1>

                    <p className="mt-4 max-w-xl leading-relaxed text-slate-300">
                        Audio Canvas is full-service audio-visual solutions company delivering exceptional sound, lighting,
                        and production services - with technical precision, creative flair, and a client-focused approach.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                          href="#contact"
                          className="rounded-xl border border-emerald-400/50 bg-gradient-to-b from-emerald-400 to-emerald-600 px-5 py-3 font-semibold text-[#07110b]"
                        >
                            Contact Us
                        </a>
                        <a
                          href="#services"
                          className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-100 hover:bg-white/10"
                        >
                            Explore Services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </SectionBg>
    );
}