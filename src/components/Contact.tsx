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
    <section id="contact" className="py-24 px-6 bg-[#eef2f9]">
      <div className="max-w-5xl mx-auto">
        <p className="text-yellow-600 font-medium text-sm tracking-widest uppercase mb-4">Get in touch</p>
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — copy */}
          <div>
            <h2 className="font-serif text-4xl font-semibold text-[#0b1f4a] leading-snug mb-5">
              Let&apos;s figure out your path together.
            </h2>
            <p className="text-stone-500 leading-relaxed mb-8">
              Fill this out and I&apos;ll reach out within 24 hours — usually same day.
              The first call is free and there&apos;s no pressure to commit to anything.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:pranavyk@gmail.com" className="text-[#0b1f4a] font-medium hover:text-yellow-600 transition-colors">
                  pranavyk@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-2">Book directly</p>
                <a
                  href="https://calendly.com/pranavyk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#0b1f4a] border border-stone-300 px-5 py-2.5 rounded-full hover:border-[#0b1f4a] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule on Calendly
                </a>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === "success" ? (
              <div className="bg-[#f5f8fd] rounded-2xl p-10 text-center border border-blue-100">
                <div className="font-serif text-2xl text-[#0b1f4a] mb-2">Got it.</div>
                <p className="text-stone-500 text-sm">I&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-stone-400 uppercase tracking-widest mb-1.5">Name</label>
                    <input
                      required
                      className="w-full border border-blue-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-[#f5f8fd]"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-stone-400 uppercase tracking-widest mb-1.5">Phone</label>
                    <input
                      className="w-full border border-blue-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-[#f5f8fd]"
                      placeholder="Optional"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-stone-400 uppercase tracking-widest mb-1.5">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full border border-blue-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-[#f5f8fd]"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs text-stone-400 uppercase tracking-widest mb-1.5">Interested in</label>
                  <select
                    className="w-full border border-blue-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-[#f5f8fd]"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">Select a package</option>
                    <option value="starter">Starter Session — $299</option>
                    <option value="full">Full Application — $899</option>
                    <option value="premium">Full Year — $1,999</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-stone-400 uppercase tracking-widest mb-1.5">Tell me about your situation</label>
                  <textarea
                    rows={4}
                    className="w-full border border-blue-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-[#f5f8fd] resize-none"
                    placeholder="Current school, intended major, target UCs, GPA, timeline — whatever feels relevant."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#0b1f4a] text-white py-3.5 rounded-full font-medium hover:bg-[#0d2660] transition-colors disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : "Send message"}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">Something went wrong. Email me directly at pranavyk@gmail.com</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
