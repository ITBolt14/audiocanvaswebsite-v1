
import SectionBg from "@/components/sections/SectionBg";

export default function WhyUs() {
    return (
        <SectionBg id="about" image="/sections/why-us.jpg" overlay="light" className="px-14">
        <section id="about" className="mx-auto max-w-6xl px-4 py-14">
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h2 className="text-2xl font-semibold text-emerald-400">Why Choose Audio Canvas</h2>
                    <p className="mt-2 max-w-3xl leading-relaxed text-slate-300">
                        Whether you're planning an intimate celebration or corporate production, Audio Canvas offers Top-tier equipment & skilled operators, Transparency, Professional communication, Modern, innovative solutions and unmatched technical proficiency while incorporating a creative insight and personalized service.  
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-5">
                  {[
                    { label: "Core Values", value: "Quality • Integrity • Innovation • Customer Focus" },
                    { label: "Mission", value: "Provide high-quality, innovative, and reliable audio-visual services that elevate events and experiences, while building long-lasting relationships through excellence and professionalism." },
                  ].map((s) => (
                    <div key={s.label} className="border-b border-white/10 py-4 last:border-b-0">
                        <div className="text-xl font-semibold tracking-[0.16em] text-emerald-400">{s.label}</div>
                        <div className="mt-2 font-semibold text-slate-100">{s.value}</div>
                    </div>
                  ))}
                </div>
            </div>
        </section>
    </SectionBg>
    );
}