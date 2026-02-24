import Link from "next/link";

export default function EventCTA() {
    return (
        <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6">
            <h3 className="text-lg font-semibold text-emerald-400">
                Request support for your event
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
                Share the event location, estimated guest count, and what you require (audio, lighting, AV, streaming or recording). We'll respond with a clear technical plan and next steps.
            </p>
            <div className="mt-4">
                <Link
                    href="/#contact"
                    className="inline-flex rounded-xl border border-emerald-400/50 bg-emerald-400 px-5 py-3 text-sm font-semibold text-[#07110b]"
                >
                    Contact Us
                </Link>
            </div>
        </div>
    );
}