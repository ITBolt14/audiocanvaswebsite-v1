import SectionBg from "@/components/sections/SectionBg";

const services = [
    {
        title: "Event Audio & Visual Support",
        items: ["Live audio engineering", "Sound & playback setup", "Lighting support and event setup"],
    },
    {
        title: "Recording & Editing",
        items: ["Recording capture", "Editing and post-production", "Delivery-ready audio files"],
    },
    {
        title: "Consultation & System Design",
        items: ["Sound system design", "Lighting system design", "AV installations & upgrades"],
    },
    {
        title: "Sales: Audio, Lighting & Cables",
        items: ["Equipment guidance", "Compatible cabling solutions", "Setup support where needed"],
    },
];

export default function Services() {
    return (
        <SectionBg id="services" image="/sections/services.jpg" overlay="medium" className="py-14">
        <section id="services" className="mx-auto max-w-6xl px-4 py-14">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-slate-300">Services</h2>
                <p className="mt-2 max-w-3xl leading-relaxed text-slate-300">
                    From planning to execution - we bring sound, lighting and visual elements together seamlessly.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {services.map((s) => (
                    <article
                      key={s.title}
                      className="rounded-2xl border border-white/10 bg-black/10 backdrop-blur p-5 hover:border-emerald-400/80"
                    >
                        <h3 className="text-sm font-semibold text-slate-400">{s.title}</h3>
                        <ul className="mt-3 space-y-2 text-sm text-slate-300">
                            {s.items.map((i) => (
                                <li key={i} className="list-disc pl-4 market:text-emerald-400/70">
                                    {i}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    </SectionBg>
    );
}