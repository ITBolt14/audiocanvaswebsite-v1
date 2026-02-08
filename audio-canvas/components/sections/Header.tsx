"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="border-b border-white/10 bg-black/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
                <a href="#top" className="flex items-center gap-3" aria-label="Adio Canvas home" id="top">
                    <Image
                      src="/logo/Audio Canvas Logo.jpg"
                      alt="Audio Canvas logo"
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-xl border border-emerald-400/35 object-cover"
                      priority
                    />
                    <div className="leading-tight">
                        <div className="font-semibold text-slate-400 tracking-wide">Audio Canvas</div>
                        <div className="text-xs text-slate-400">Where Vision Meets Vibration</div>
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
                    <a className="hover:text-white" href="#services">Services</a>
                    <a className="hover:text-white" href="#events">Events</a>
                    <a className="hover:text-white" href="#about">Why Us</a>
                    <a 
                      className="rounded-xl border border-emerald-400/50 bg-gradient-to-b from-emerald-400 to-emerald-600 px-4 py-2 font-semibold text-[#07110b]" 
                      href="#contact"
                    >
                        Contact Us
                    </a>
                </nav>

                {/* Mobile Button */}
                <button
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 md:hidden"
                  aria-expanded={open}
                  aria-label="Open Menu"
                  onClick={() => setOpen((v) => !v)}
                >
                    <div className="space-y-1">
                        <span className="block h-0.5 w-5 bg-white/80" />
                        <span className="block h-0.5 w-5 bg-white/80" />
                        <span className="block h-0.5 w-5 bg-white/80" />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="border-t border-white/10 px-4 md:hidden">
                    <div className="mx-auto flex max-w-6xl flex-col gap-3 pt-3 text-sm text-slate-300">
                        <a onClick={() => setOpen(false)} className="hover:text-whote" href="#services">Services</a>
                        <a onClick={() => setOpen(false)} className="hover:text-white" href="#events">Events</a>
                        <a onClick={() => setOpen(false)} className="hover:text-white" href="#about">Why Us</a>
                        <a onClick={() => setOpen(false)} className="mt-1 rounded-xl border border-emerald-400/50 bg-gradient-to-b from-emerald-400 to-emerald-600 px-4 py-2 text-center font-semibold text-[#07110b]" href="#contact">Contact Us</a>
                    </div>
                </div>
            )}
        </header>
    );
}