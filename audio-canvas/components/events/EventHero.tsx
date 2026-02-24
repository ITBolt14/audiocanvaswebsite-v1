import Link from "next/link";

export default function EventHero({
    title,
    subtitle,
}: {
    title: string;
    subtitle: string;
}) {
    return (
        <div className="border-b border-white/10 bg-white/[0.02]">
            <div className="mx-auto max-w-6xl px-4 py-10">
                <p className="text-xs tracking-[0.16em] text-slate-400">EVENTS WE COVER</p>
                <h1 className="mt-2 text-3xl font-semibold text-emerald-400 md:text-4xl">
                    {title}
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
                    {subtitle}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                        href="/#contact"
                        className="rounded-xl border border-emerald-400/50 bg-emerald-400 px-5 py-3 text-sm font-semibold text-[#07110b]"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}