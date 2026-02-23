import SectionBg from "@/components/sections/SectionBg";

const services = [
    {
        title: "Live Performance (In-door and Outdoor)",
        description:
          "Professional live entertainment tailored for corporate and premium events. From executive functions and brand launches, to large-scale outdoor productions, we deliver expertly curated performances with seamless production and precision execution - designed to engage audiences, elevate brand presence, and leave a lasting impression.",
    },
    {
        title: "Broadcasting",
        description:
          "Professional live streaming for corporate events, sports, music performances, and memorial services. We handle full audio and video production to ensure high-quality visuals, clear sound, and seamless delivery to any audience.",
    },
     {
        title: "Multitrack Recording",
        description:
          "Capture professional-quality recordings for your productions with our multitrack recording services. We also offer expert mixing and mastering to ensure your audio sounds polished, balanced, and ready for release or broadcast.",
    },
    {
        title: "Hybrid Meetings & Training Sessions",
        description:
          "We deliver reliable, high-quality hybrid meeting and training solutions that connectin-room and remote participants into one seamless experience. From executive meetings to company-wide training, we ensure clear communication, professional presentation, and stable technology - so your sessions run smoothly and your message is delivered with impact.",
    },
    {
        title: "Audio-Visual Support Services for Churches & Schools",
        description:
          "We provide professional audio-visual support services tailored specifically for churches and schools, combining practical hands-on training with structured technical consultation. Services include volunteer training on existing and newly installed systems, system design and reconfiguration, upgrade planning, and expert fault finding and repairs. Optional Service Level Agreements (SLAs) are available to provide priority support and scheduled maintenance.",
    },
    {
        title: "Event Planning",
        description:
          "Whether planning a wedding, corporate function, funeral or divorcce party, we partner with clients to translate their vision into a thoughtfully designed and expertly executed experience.",
    } 
];

export default function Services() {
    return (
        <SectionBg id="services" image="/sections/services.jpg" overlay="medium" className="py-14">
        <section id="services" className="mx-auto max-w-6xl px-4 py-2">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-emerald-400">Services</h2>
                <p className="mt-2 max-w-3xl leading-relaxed text-slate-300">
                    From planning to execution - we bring sound, lighting and visual elements together seamlessly.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {services.map((service) => (
                    <div
                      key={service.title}
                      className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-6 hover:border-emerald-400/30"
                    >
                        <h3 className="text-lg font-semibold text-emerald-400">
                            {service.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate-300">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    </SectionBg>
    );
}