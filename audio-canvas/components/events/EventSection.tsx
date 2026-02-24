export default function EventSection({
    title,
    items,
}: {
    title: string;
    items: string[];
}) {
    return (
        <div className="mt-8">
            <h2 className="text-lg font-semibold text-emerald-400">{title}</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
                {items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                        <div className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                        <p className="text-sm leading-relaxed text-slate-300">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}