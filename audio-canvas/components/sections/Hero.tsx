import SectionBg from "@/components/sections/SectionBg";

export default function Hero() {
    return (
        <SectionBg image="/sections/hero.jpg" overlay="medium">
        <section className="mx-auto max-w-6xl px-4 pb-8 pt-14">
            <div className="grid items-center gap-10 md:grid-cols-2">
                <div>
                    <p className="text-xs font-medium tracking-[0.18em] text-slate-400">
                        PROFESSIONAL AUDIO • LIGHTING • AV PRODUCTION
                    </p>

                    <h1 className="mt-3 text-4xl font-semibold leading-tight text-slate-400 md:text-5xl">
                        Sound, lighting & production that makes your event{" "}
                        <span className="text-emerald-400">feel unforgettable</span>.
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

                    <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-300">
                        {["Reliable setup & support", "Pro equipment", "Private & Corporate Events"].map((t) => (
                            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-slate-300">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Simple "signal" panel */}
                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] shadow-[0_18px_50px_rgba(0,0,0,.45)]">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                    <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/40" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/40" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/40" />
                    </div>
                    <span className="text-xs tracking-[0.16em] text-slate-400">LIVE SIGNAL</span>
                  </div>

                  <div className="px-4 py-10">
                    <div className="h-20 w-full rounded-xl bg-[radial-gradient(600px_160px_at_50%_70%,rgba(46,214,127,.22),transparent_55%)]">
                        <div className="h-full w-full rounded-xl border border-emerald-400/20" />
                    </div>

                    <div className="mt-5 flex items-center justify-between text-sm text-slate-300">
                        <span>Clear. Crisp. Controlled.</span>
                        <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(46,214,127,.12)]" />
                            Ready for Event
                        </span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 px-4 py-3 text-xs text-slate-400">
                    Where Vision Meets Vibration
                  </div>
                </div>
            </div>
        </section>
    </SectionBg>
    );
}