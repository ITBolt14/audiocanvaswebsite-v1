"use client";

import React, { useState } from "react";
import { setHeapSnapshotNearHeapLimit } from "v8";
import SectionBg from "@/components/sections/SectionBg";

export default function Contact() {
    const [note, setNote] = useState("");

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        const name = String(data.get("name") || "").trim();
        const email = String(data.get("email") || "").trim();
        const phone = String(data.get("phone") || "").trim();
        const date = String(data.get("date") || "").trim();
        const type = String(data.get("type") || "").trim();
        const message = String(data.get("message") || "").trim();

        const subject = encodeURIComponent(`Audio Canvas Website Enquiry - ${type || "Event"}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nEvent Date: ${date}\nEvent Type: ${type}\n\nMessage:\n${message}\n`
        );

        window.location.href = `mailto:info@audiocanvas.co.za?subject=${subject}&body=${body}`;
        setNote("Opening your email app... If it didn't open, please email info@audiocanvas.co.za directly.");
        form.reset();
    }

    return (
        <SectionBg id="contact" image="/sections/contact.jpg" overlay="medium" className="py-14">
        <section id="contact" className="bg-white/[0.02] py-14">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-slate-400">Contact Us</h2>
                    <p className="mt-2 max-w-3xl leading-relaxed text-slate-300">
                        Tell us about your event and we'll get back to you with a clear plan and next steps.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <form
                      onSubmit={onSubmit}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                    >
                        <div className="grid gap-3 sm:grid-cols-2">
                            <label className="text-xs text-slate-400">
                                Name
                                <input required name="name" className="mt-2 w-full rounded-xl border border-white/10 bg-[#07090b]/60 px-3 py-3 text-sm text-slate-100 outline-none focus:border-emerald-400/40" placeholder="i.e. John Doe" />
                            </label>
                            <label className="text-xs text-slate-400">
                                Email
                                <input required name="email" type="email" className="mt-2 w-full rounded-xl border border-white/10 bg-[#07090b]/60 px-3 py-3 text-sm text-slate-100 outline-none focus:border-emerald-400/40" placeholder="i.e. john@domain.com" />
                            </label>
                        </div>

                        <div className="mt-3 grid gap-3 sm:grid-cols-2">
                            <label className="text-xs text-slate-400">
                                Phone
                                <input name="phone" className="mt-2 w-full rounded-xl border border-white/10 bg-[#07090b]/60 px-3 py-3 text-sm text-slate-100 outline-none focus:border-emerald-400/40" placeholder="i.e. 0801234567" />
                            </label>
                            <label className="text-xs text-slate-400">
                                Event Date
                                <input name="date" type="date" className="mt-2 w-full rounded-xl border border-white/10 bg-[#07090b]/60 px-3 py-3 text-sm text-slate-100 outline-none focus:border-emerald-400/40" />
                            </label>
                        </div>

                        <label className="mt-3 block text-xs text-slate-400">
                            Event Type
                            <select
                              name="type"
                              className="mt-2 w-full rounded-xl border border-white/10 bg-[#07090b]/60 px-3 py-3 text-sm text-slate-100 outline-none focus:border-emerald-400/40"
                            >
                                <option value="">Select Event Type</option>
                                <option>Conferences</option>
                                <option>Corporate Events</option>
                                <option>Hybrid Meetings and Training Sessions</option>
                                <option>Live Performances (In-door & Outdoor)</option>
                                <option>School Functions (Revue & Sports Days)</option>
                                <option>Marketing Events</option>
                                <option>Year-End Functions</option>
                                <option>Private Events</option>
                                <option>Birthday Parties</option>
                                <option>Weddings</option>
                                <option>Other</option>
                            </select>
                        </label>

                        <label className="mt-3 block text-xs text-slate-400">
                            Message
                            <textarea
                              required
                              name="message"
                              rows={5}
                              className="mt-2 w-full rounded-xl border border-white/10 bg-[#07090b]/60 px-3 py-3 text-sm text-slate-100 outline-none focus:border-emerald-400/40"
                              placeholder="Venue/area, guest count, and what you need (sound, lighting, AV, recording,m etc.)"
                            />
                        </label>

                        <button className="mt-4 w-full rounded-xl border border-emerald-400/50 bg-gradient-to-b from-emerald-400 to-emerlad-600 px-5 py-3 font-semibold text-[#07110b]">
                          Send Message
                        </button>

                        {note && <p className="mt-3 text-sm text-slate-400">{note}</p>}
                    </form>

                    <aside className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-5">
                      <h3 className="text-lg font-semibold text-slate-400">Direct Contact</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">
                        Prefer to reach out directly? Use the details below.
                      </p>

                      <div className="mt-4 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/[0.03]">
                        <div className="flex items-center justify-between gap-4 px-4 py-4 text-sm">
                            <span className="text-xs tracking-[0.16em] text-slate-400">PHONE</span>
                            <a className="font-semibold text-slate-300 hover:text-emerald-300" href="tel:+27837932095">083 793 2095</a>
                        </div>
                        <div className="flex items-center justify-between gap-4 px-4 py-4 text-sm">
                            <span className="text-xs tracking-[0.16em] text-slate-400">EMAIL</span>
                            <a className="font-semibold text-slate-300 hover:text-emerald-300" href="mailto:info@audiocanvas.co.za">info@audiocanvas.co.za</a>
                        </div>
                      </div>

                      <p className="mt-4 text-sm text-slate-400">
                        Audio Canvas (Pty) Ltd - Professional audio-visual solutions for events and venues.
                      </p>
                    </aside>
                </div>
            </div>
        </section>
    </SectionBg>
    );
}