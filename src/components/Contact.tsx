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
    <section id="contact" className="py-20 px-6 bg-[#0b1f4a]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Get Started</h2>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Fill out the form below and I&apos;ll reach out within 24 hours to schedule your free intro call.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#0b1f4a] mb-2">Message received!</h3>
                <p className="text-gray-500">I&apos;ll be in touch within 24 hours to schedule your free call.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0b1f4a] mb-1">Name</label>
                    <input
                      required
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Student or parent name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0b1f4a] mb-1">Phone</label>
                    <input
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="(408) 555-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0b1f4a] mb-1">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0b1f4a] mb-1">Interested in</label>
                  <select
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">Select a package</option>
                    <option value="starter">Starter — $299</option>
                    <option value="full">Full Application — $899</option>
                    <option value="premium">Premium Full Year — $1,999</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0b1f4a] mb-1">Tell me about your situation</label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                    placeholder="Current school, intended major, target UCs, GPA, timeline..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-yellow-400 text-[#0b1f4a] py-3 rounded-xl font-bold hover:bg-yellow-300 transition-colors disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">Something went wrong. Email me directly below.</p>
                )}
              </form>
            )}
          </div>
          <div className="flex flex-col gap-6 text-white justify-center">
            <div>
              <h3 className="font-semibold text-xl mb-4">Or book directly</h3>
              <p className="text-blue-200 text-sm mb-6">
                Prefer to schedule right now? Use the calendar link to book a free 30-minute intro call.
              </p>
              <a
                href="https://calendly.com/pranavyk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow-400 text-[#0b1f4a] px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule on Calendly
              </a>
            </div>
            <div className="border-t border-white/10 pt-6">
              <p className="text-blue-300 text-sm mb-1">Or email directly</p>
              <a href="mailto:pranavyk@gmail.com" className="text-yellow-400 font-medium hover:underline">
                pranavyk@gmail.com
              </a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-sm text-blue-200">
              <strong className="text-white block mb-1">Response time</strong>
              I respond to all inquiries within 24 hours, usually same day.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
