"use client";

import SectionBg from "@/components/sections/SectionBg";

const services = [
    {
        id: "live-performances",
        title: "Live Performances (Indoor and Outdoor)",
        image: "",
        description:
          "From corporate events to Marketing launches and conferences, from outdoor productions to weddings and birthday parties, we offer expertly curated performances with seamless production and precision execution - designed to engage audiences with the impact it desires.",
    },
    {
        id: "broadcasting",
        title: "Broadcasting",
        image: "",
        description:
          "Live streaming include corporate events, sporting events, music performances, and memorial services. We handle full audio and video production to ensure high-quality visuals and clear sound.",
    },
    {
        id: "multitrack-recording",
        title: "Multitrack Recording",
        image: "",
        description:
          "We capture quality recordings for your productions with our multitrack recording services. We also offer expert mixing and mastering ensuring balanced and ready for release broadcasts.",
    },
    {
        id: "hybrid-meetings-training",
        title: "Hybrid Meetings & Training Sessions",
        image: "",
        description:
          "We deliver reliable, high-quality hybrid meeting and training solutions that connects room and remote participants into one seamless experience. From executive meetings to company-wide training, we ensure clear communication, professional presentation, and stable technology so your message is delivered with impact.",
    },
    {
        id: "audio-visual-support",
        title: "Audio-Visual Support Services ",
        image: "",
        description:
          "We provide effective audio-visual support services tailored specifically for churches and schools, combining practical hands-on training with structured technical consultation. Services include volunteer training on existing and newly installed systems, system design and reconfiguration, upgrade planning, trouble shooting and expert repairs. Optional Service Level Agreements (SLAs) are available to provide priority support and scheduled maintenance.",
    }
];

function ServiceCard({
    title,
    image,
    description,
}: {
    title: string;
    image: string;
    description: string;
}) {
    return (
        <div className="group relative h-[260px] overflow-hidden rounded-2xl border border-slate-500/60 hover:border-emerald-400 transition-all duration-300">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-black/45 transition-opacity duration-300 group-hover:bg-black/75" />

            {/* Front: title only */}
            <div className="absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-center text-base font-semibold tracking-wide text-emerald-400 md:text-lg drop-shadow-[0_0_6px_rgba(16,185,129,0.5)]">
                    {title}
                </h3>
            </div>

            {/* Back: description */}
            <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-center">
                    <h3 className="mb-3 text-base font-semibold tracking-wide text-emerald-400 md:text-lg">
                        {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-200">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function Services() {
    return (
        <SectionBg
          id="services"
          image="/sections/services.jpg"
          overlay="medium"
          className="py-10"
        >
            <section className="bg-white/[0.02] py-2">
              <div className="mx-auto max-w-6xl px-4">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-emerald-400">Services</h2>
                    <p className="mt-2 max-w-5xl leading-relaxed text-slate-300">
                        From planning to execution - we offer seamless integration of sound, lighting and visual elements for an unforgettable experience.
                    </p>
                </div>

                {/* Desktop / Tablet layout */}
                <div className="hidden md:block">
                    <div className="grid grid-cols-2 gap-4">
                        <ServiceCard
                          title={services[0].title}
                          image={services[0].image}
                          description={services[0].description}
                        />
                        <ServiceCard
                          title={services[1].title}
                          image={services[1].image}
                          description={services[1].description}
                        />
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <ServiceCard
                          title={services[2].title}
                          image={services[2].image}
                          description={services[2].description}
                        />
                        <ServiceCard
                          title={services[3].title}
                          image={services[3].image}
                          description={services[3].description}
                        />
                    </div>

                    <div className="mt-4 flex justify-center">
                        <div className="w-full max-w-[calc(50%-0.5rem)] md:w-[calc(50%-0.5rem)]">
                            <ServiceCard
                              title={services[4].title}
                              image={services[4].image}
                              description={services[4].description}
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile stacked layout */}
                <div className="grid gap-4 md:hidden">
                    {services.map((service) => (
                        <ServiceCard
                          key={service.title}
                          title={service.title}
                          image={service.image}
                          description={service.description}
                        />
                    ))}
                </div>
              </div>
            </section>
        </SectionBg>
    );
}