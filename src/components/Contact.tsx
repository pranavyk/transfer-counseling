"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", service: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#faf7f0]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — copy */}
          <div>
            <h2 className="font-serif text-5xl md:text-6xl font-semibold text-[#2a1408] leading-[0.95] mb-6">
              Let&apos;s figure<br />out your<br /><span className="italic">path.</span>
            </h2>
            <p className="text-[#8a6050] leading-relaxed mb-8">
              Fill this out and I&apos;ll reach out within 24 hours. Usually same day.
              First call is free, no pressure to commit to anything.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-xs text-[#b0927a] uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:pranav@p2transfers.com" className="text-[#2a1408] font-medium hover:text-[#7ab4d4] transition-colors">
                  pranav@p2transfers.com
                </a>
              </div>
              <div>
                <p className="text-xs text-[#b0927a] uppercase tracking-widest mb-2">Book directly</p>
                <a
                  href="https://calendly.com/pranavyk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#2a1408] border border-[#e8d5b5] px-5 py-2.5 rounded-full hover:border-[#7ab4d4] hover:text-[#7ab4d4] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule on Calendly
                </a>
              </div>
              <div className="border border-[#e8d5b5] rounded-xl p-4 bg-[#f0e8d8]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#7a9e7e] animate-pulse" />
                  <span className="text-xs font-medium text-[#3a5e3e]">Fall 2026 Cohort Open</span>
                </div>
                <p className="text-xs text-[#8a6050] leading-relaxed">
                  Currently accepting 4 students for the August–December cycle.
                  Once full, next availability is Spring 2027.
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === "success" ? (
              <div className="bg-[#f0e8d8] rounded-2xl p-10 text-center border border-[#e8d5b5]">
                <div className="font-serif text-2xl text-[#2a1408] mb-2">Got it.</div>
                <p className="text-[#8a6050] text-sm">I&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#b0927a] uppercase tracking-widest mb-1.5">Name</label>
                    <input
                      required
                      className="w-full border border-[#e8d5b5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7ab4d4] bg-[#faf7f0]"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#b0927a] uppercase tracking-widest mb-1.5">Phone</label>
                    <input
                      className="w-full border border-[#e8d5b5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7ab4d4] bg-[#faf7f0]"
                      placeholder="Optional"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-[#b0927a] uppercase tracking-widest mb-1.5">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full border border-[#e8d5b5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7ab4d4] bg-[#faf7f0]"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#b0927a] uppercase tracking-widest mb-1.5">Interested in</label>
                  <select
                    className="w-full border border-[#e8d5b5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7ab4d4] bg-[#faf7f0]"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">Select a package</option>
                    <option value="starter">Starter Session ($299)</option>
                    <option value="full">Full Application ($899)</option>
                    <option value="premium">Full Year ($1,999)</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-[#b0927a] uppercase tracking-widest mb-1.5">Tell me about your situation</label>
                  <textarea
                    rows={4}
                    className="w-full border border-[#e8d5b5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7ab4d4] bg-[#faf7f0] resize-none"
                    placeholder="Current school, intended major, target UCs, GPA, timeline. Whatever feels relevant."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#7ab4d4] text-[#1e1208] py-3.5 rounded-full font-semibold hover:bg-[#8fc4e4] transition-colors disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : "Send message"}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">Something went wrong. Email me directly at pranav@p2transfers.com</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
