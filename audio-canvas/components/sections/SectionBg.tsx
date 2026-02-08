import React from "react";

type OverlayStrength = "light" | "medium" | "strong";

const overlayMap: Record<OverlayStrength, string> = {
    // Lighter overlay - image more visible
    light: "bg-black/65",
    medium: "bg-black/70",
    strong: "bg-black/80,"
};

export default function SectionBg({
    id,
    image,
    overlay = "medium",
    children,
    className= "",
}: {
    id?: string;
    image: string; // e.g. "/sections/hero.jpg"
    overlay?: OverlayStrength;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section id={id} className={`relative overflow-hidden ${className}`}>
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
              aria-hidden="true"
            />

            {/* Overlay (controls image visibility vs readability) */}
            <div className={`absolute inset-0 ${overlayMap[overlay]}`} aria-hidden="true" />

            {/* Subtle green/brand gradient for depth */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-emerald-400/10 via-transparent to-black/40"
              aria-hidden="true"
            />

            {/* Content */}
            <div className="relative">{children}</div>
        </section>
    );
}