import { notFound } from "next/navigation";
import { events, getEvent } from "@/components/events/eventsData";
import EventHero from "@/components/events/EventHero";
import EventSection from "@/components/events/EventSection";
import EventCTA from "@/components/events/EventCTA";
import SectionBg from "@/components/sections/SectionBg";

export function generateStaticParams() {
    return events.map((e) => ({ slug: e.slug }));
}

export default async function EventPage({ 
    params, 
}: { 
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const event = getEvent(slug);
    if (!event) return notFound();

    return (
        <SectionBg id={`event-${event.slug}`} image={event.image} overlay="medium" className="py-14">
            <div className="bg-[#07090b]/60">
              <EventHero title={event.title} subtitle={event.subtitle} />

              <main className="mx-auto max-w-6xl px-4 py-10">
                <p className="max-2-3xl text-sm leading-relaxed text-slate-300">
                    {event.overview}
                </p>

                <EventSection title="Typical requirements" items={event.typicalRequirements} />
                <EventSection title="What we provide" items={event.whatWeProvide} />
                <EventSection title="Our approach" items={event.approach} />

                <EventCTA />
              </main>
            </div>
        </SectionBg>        
    )
}