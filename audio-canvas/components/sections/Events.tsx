import SectionBg from "@/components/sections/SectionBg";

const events = [
    "Conferences",
    "Corporate Events",
    "Hybrid Meetings and Training Sessions",
    "Live Performances (In-door and Outdoor)",
    "School Functions (Revue & Sports Days)",
    "Marketing Events",
    "Year-End Functions",
    "Private Events",
    "Birthday Parties",
    "Weddings",
];

export default function Events() {
    return (
        <SectionBg id="events" image="/sections/events.jpg" overlay="medium" className="py-14">
        <section id="events" className="bg-white/[0.02] py-14">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-slate-400">Events We Cover</h2>
                    <p className="mt-2 max-w-3xl leading-relaxed text-slate-300">
                        Flexible equipment and a tailored approach to match your venue, audience and vibe.
                    </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {events.map((e) => (
                        <div
                          key={e}
                          className="rounded-2xl border border-white/10 bg-black/10 backdrop-blur px-3 py-3 text-center text-sm text-slate-300 hover:border-emerald-400/80 hover:text-white"
                        >
                            {e}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </SectionBg>
    );
}