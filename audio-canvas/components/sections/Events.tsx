import SectionBg from "@/components/sections/SectionBg";
import Link from "next/link";

const events = [
    { label: "• Conferences", slug: "conferences" },
    { label: "• Corporate Events", slug: "corporate-events" },
    { label: "• Hybrid Meetings and Training Sessions", slug: "hybrid-meetings-training-sessions" },
    { label: "• Live Performances (In-door and Outdoor)", slug: "live-performances" },
    { label: "• School Functions (Revue & Sports Days)", slug: "school-functions" },
    { label: "• Marketing Events", slug: "marketing-events" },
    { label: "• Year-End Functions", slug: "year-end-functions" },
    { label: "• Private Events", slug: "private-events" },
    { label: "• Birthday Parties", slug: "birthday-parties" },
    { label: "• Weddings", slug: "weddings" },
];

export default function Events() {
    return (
        <SectionBg id="events" image="/sections/events.jpg" overlay="medium" className="py-14">
        <section id="events" className="bg-white/[0.02] py-2">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-emerald-400">Events We Cover</h2>
                    <p className="mt-2 max-w-3xl leading-relaxed text-slate-300">
                        Flexible equipment and a tailored approach to match your venue, audience and vibe.
                    </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {events.map((e) => (
                        <Link
                          key={e.slug}
                          href={`/events/${e.slug}`}
                          className="flex items-center justify-center px-2 py-2 text-center text-sm font-medium text-slate-300"
                        >
                            {e.label}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    </SectionBg>
    );
}