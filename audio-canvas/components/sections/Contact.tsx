"use client";

import React, { useState } from "react";
import SectionBg from "@/components/sections/SectionBg";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [msg, setMsg] = useState("");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");
        setMsg("");

        const form = e.currentTarget;
        const data = new FormData(form);

        const payload = {
            name: String(data.get("name") || "").trim(),
            email: String(data.get("email") || "").trim(),
            phone: String(data.get("phone") || "").trim(),

            venue: String(data.get("venue") || "").trim(),
            venueContactPerson: String(data.get("venueContactPerson") || "").trim(),
            venueContactNumber: String(data.get("venueContactNumber") || "").trim(),

            eventStart: String(data.get("eventStart") || "").trim(),
            eventEnd: String(data.get("eventEnd") || "").trim(),

            eventType: String(data.get("eventType") || "").trim(),
            message: String(data.get("message") || "").trim(),
            company: String(data.get("company") || "").trim(), // honeypot
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const json = await res.json().catch(() => ({}));

            if (!res.ok || !json.ok) {
                setStatus("error");
                setMsg(json.error || "Something went wrong. Please try again.");
                return;
            }

            setStatus("success");
            setMsg("Thanks! Your message has been sent. We'll be in touch shortly.");
            form.reset();
        } catch {
            setStatus("error");
            setMsg("Network error. Please try again.");
        }
    }

    return (
        <SectionBg id="contact" image="/sections/contact.jpg" overlay="medium" className="py-14">
        <section id="contact" className="bg-white/[0.02] py-2">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-emerald-400">Contact Us</h2>
                    <p className="mt-2 max-w-3xl leading-relaxed text-slate-300">
                        Name your expectation and we will bring it to life
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <form
                      onSubmit={onSubmit}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                    >
                        {/* Honeypot hidden */}
                        <div className="hidden">
                            <label>
                                Company
                                <input name="company" type="text" autoComplete="off" tabIndex={-1} />
                            </label>
                        </div>

                        {/* Row 1 */}
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

                        {/* Row 2 */}
                        <div className="mt-3 grid gap-3 sm:grid-cols-2">
                            <label className="text-xs text-slate-400">
                                Your Contact Number
                                <input name="phone" className="mt-2 w-full rounded-xl border border-white/10 bg-[#07090b]/60 px-3 py-3 text-sm text-slate-100 outline-none focus:border-emerald-400/40" placeholder="i.e. 0801234567" />
                            </label>

                            <label className="text-xs text-slate-400">
                                Venue / Area of Event
                                <input name="venue" className="mt-2 w-full rounded-xl border border-white/10 bg-[#07090b]/60 px-3 py-3 text-sm text-slate-100 outline-none focus:border-emerald-400/40" placeholder="Please provide the name of the venue or the area the event is taking place." />
                            </label>
                        </div>

                        {/* Row 3 */}
                        <div className="mt-3 grid gap-3 sm:grid-cols-2">
                            <label className="text-xs text-slate-400">
                                Contact Person at Venue
                                <input name="venueContactPerson" className="mt-2 w-full rounded-xl border border-white/10 bg-[#07090b]/60 px-3 py-3 text-sm text-slate-100 outline-none focus:border-emerald-400/40" placeholder="Contact person name at the venue" />
                            </label>

                            <label className="text-xs text-slate-400">
                                Venue Contact Number
                                <input name="venueContactNumber" className="mt-2 w-full rounded-xl border border-white/10 bg-[#07090b]/60 px-3 py-3 text-sm text-slate-100 outline-none focus:border-emerald-400/40" placeholder="Contact number of the venue" />
                            </label>
                        </div>

                        {/* Row 4 */}
                        <div className="mt-3 grid gap-3 sm:grid-cols-2">
                            <label className="text-xs text-slate-400">
                                Event Start Date & Time
                                <input name="eventStart" type="datetime-local" className="mt-2 w-full rounded-xl border border-white/10 bg-[#07090b]/60 px-3 py-3 text-sm text-slate-100 outline-none focus:border-emerald-400/40" />
                            </label>

                            <label className="text-xs text-slate-400">
                                Event End Date & Time
                                <input name="eventEnd" type="datetime-local" className="mt-2 w-full rounded-xl border border-white/10 bg-[#07090b]/60 px-3 py-3 text-sm text-slate-100 outline-none focus:border-emerald-400/40" />
                            </label>
                        </div>

                        <label className="mt-3 block text-xs text-slate-400">
                            Event Type – a site inspection may be required
                            <select
                              name="eventType"
                              className="mt-2 w-full rounded-xl border border-white/10 bg-[#07090b]/60 px-3 py-3 text-sm text-slate-100 outline-none focus:border-emerald-400/40"
                            >
                                <option value="">Select Event Type</option>
                                <option>Birthday parties</option>
                                <option>Celebration of Life</option>
                                <option>Conferences</option>
                                <option>Corporate Events</option>
                                <option>Engagements</option>
                                <option>Hybrid Meetings and Training Sessions</option>
                                <option>Live Performances (Indoor & Outdoor)</option>
                                <option>Marketing Events</option>
                                <option>School Functions</option>
                                <option>Weddings</option>
                                <option>Year-End Functions</option>
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
                              placeholder="Please share a brief description of what you’re hoping to achieve with this event or service. You’re welcome to include your vision, any specific requirements, technical needs, budget considerations, or important details about the people involved. If there are any challenges, preferences, or non negotiables we should keep in mind, feel free to mention those too — anything that helps us understand your needs better is appreciated."
                            />
                        </label>

                        <button
                          type="submit"
                          disabled={status === "sending"}
                          className="mt-4 w-full rounded-xl border border-emerald-400/50 bg-gradient-to-b from-emerald-400 to-emerald-600 px-5 py-3 font-semibold text-[#07110b] disabled:opacity-60"
                        >
                            {status === "sending" ? "Sending..." : "Send Message"}
                        </button>

                        {msg && (
                        <p 
                          className={`mt-3 text-sm ${
                            status === "success" ? "text-emerald-300" : status === "error" ? "text-red-300" : "text-slate-300"
                          }`}
                          aria-live="polite"
                        >
                            {msg}
                        </p>
                    )}
                    </form>

                    <aside className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-5">
                      <h3 className="text-lg font-semibold text-emerald-400">Direct Contact</h3>
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
                            <a className="font-semibold text-slate-300 hover:text-emerald-300" href="mailto:chris@audiocanvas.co.za">chris@audiocanvas.co.za</a>
                        </div>
                      </div>

                      <p className="mt-4 text-sm text-emerald-400">
                        Audio Canvas (Pty) Ltd - Professional audio-visual solutions for events and venues.
                      </p>
                    </aside>
                </div>
            </div>
        </section>
    </SectionBg>
    );
}