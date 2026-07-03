import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UC Transfer Deadlines & Info | P2Transfers",
  description: "Key UC transfer deadlines, TAG dates, application windows, and what to do each semester.",
};

const timeline = [
  {
    month: "August",
    year: "2025",
    items: [
      { label: "UC Application Opens", detail: "UC application becomes available at apply.universityofcalifornia.edu", important: true },
      { label: "TAG Window Opens", detail: "Transfer Admission Guarantee applications open for UC Davis, Irvine, Merced, Riverside, Santa Barbara, Santa Cruz", important: true },
      { label: "Start PIQ Drafts", detail: "Begin drafting your 4 Personal Insight Questions (350 words each)", important: false },
    ],
  },
  {
    month: "September",
    year: "2025",
    items: [
      { label: "TAG Deadline", detail: "September 30 — TAG applications must be submitted by end of month", important: true },
      { label: "Fall semester in full swing", detail: "Your fall grades matter — prioritize coursework now", important: false },
    ],
  },
  {
    month: "October",
    year: "2025",
    items: [
      { label: "Finalize Course List", detail: "Make sure your planned coursework through spring is accurate in the UC application", important: false },
      { label: "PIQ Final Drafts", detail: "Have your Personal Insight Questions reviewed and finalized before November", important: false },
    ],
  },
  {
    month: "November",
    year: "2025",
    items: [
      { label: "UC Application Window", detail: "November 1–30: Submit your UC application. Do not wait until November 30.", important: true },
      { label: "Application Deadline", detail: "November 30 at 11:59 PM PT — hard deadline, no exceptions", important: true },
    ],
  },
  {
    month: "December–January",
    year: "2025–26",
    items: [
      { label: "Transcripts Due", detail: "Official transcripts may be requested by individual campuses — check your UC portal", important: false },
      { label: "Additional Info Requests", detail: "Some campuses may request supplemental materials or additional essays", important: false },
    ],
  },
  {
    month: "March–April",
    year: "2026",
    items: [
      { label: "Admission Decisions Released", detail: "UC decisions typically released March–April. Check your MyAdmissions portal.", important: true },
      { label: "Statement of Intent to Register (SIR)", detail: "May 1 deadline — commit to your school and pay the enrollment deposit", important: true },
    ],
  },
  {
    month: "May 1",
    year: "2026",
    items: [
      { label: "SIR Deadline", detail: "Submit your Statement of Intent to Register. Missing this forfeits your spot.", important: true },
      { label: "Final Transcripts", detail: "Submit final transcripts after spring semester ends — usually by July 1", important: false },
    ],
  },
];

const faqs = [
  {
    q: "Which UCs offer TAG?",
    a: "UC Davis, UC Irvine, UC Merced, UC Riverside, UC Santa Barbara, and UC Santa Cruz. UC Berkeley and UCLA do not participate in TAG.",
  },
  {
    q: "What GPA do I need to transfer?",
    a: "Minimum UC transferable GPA is 2.4 for CA residents (2.8 for non-residents), but competitive campuses like Berkeley and UCLA typically admit transfers with 3.5+ GPAs depending on major.",
  },
  {
    q: "How many units do I need?",
    a: "You must complete 60 UC-transferable semester units (90 quarter units) by the end of spring before your fall transfer. You should also complete IGETC or campus-specific GE requirements.",
  },
  {
    q: "What are Personal Insight Questions?",
    a: "UC's version of college essays. You answer 4 out of 8 prompts, each 350 words max. These are critical — they're one of the few ways to differentiate yourself beyond GPA.",
  },
  {
    q: "Can I transfer as a junior or senior?",
    a: "UC transfers are designed for students entering as juniors (with 60+ units). You cannot transfer as a senior. Most students transfer after 2 years at a community college.",
  },
  {
    q: "What is IGETC?",
    a: "Intersegmental General Education Transfer Curriculum — a standardized set of lower-division GE courses you can complete at a California community college that satisfies GE requirements at any UC. Completing IGETC before transfer is highly recommended.",
  },
  {
    q: "Does my community college major matter?",
    a: "Your declared major at your CC should ideally match your intended UC major. Switching majors in your application can hurt your chances, especially for impacted majors.",
  },
  {
    q: "What happens if I'm waitlisted?",
    a: "Submit a Statement of Intent to Register (SIR) at another school you've been accepted to, then write a waitlist update letter to the school that waitlisted you demonstrating continued interest and any new achievements.",
  },
];

export default function DeadlinesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-[#0b1f4a]">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 text-sm px-3 py-1 rounded-full mb-6 border border-yellow-400/20">
            Updated for 2025–2026 cycle
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">UC Transfer Deadlines & Info</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Everything you need to know about the California community college to UC transfer process —
            key dates, requirements, and what to do each semester.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0b1f4a] mb-10">Application Timeline</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-10">
              {timeline.map((month) => (
                <div key={month.month + month.year} className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-[#0b1f4a] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  </div>
                  <div className="mb-3">
                    <span className="font-bold text-[#0b1f4a] text-lg">{month.month}</span>
                    <span className="text-gray-400 text-sm ml-2">{month.year}</span>
                  </div>
                  <div className="space-y-3">
                    {month.items.map((item) => (
                      <div
                        key={item.label}
                        className={`rounded-xl p-4 border ${
                          item.important
                            ? "bg-yellow-50 border-yellow-200"
                            : "bg-white border-gray-200"
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {item.important && (
                            <span className="bg-yellow-400 text-[#0b1f4a] text-xs font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5">
                              KEY
                            </span>
                          )}
                          <div>
                            <div className="font-semibold text-[#0b1f4a] text-sm">{item.label}</div>
                            <div className="text-gray-500 text-sm mt-0.5">{item.detail}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-14 px-6 bg-[#0b1f4a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-10 text-center">At a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: "Nov 1–30", label: "UC Application Window" },
              { stat: "Sept 30", label: "TAG Deadline" },
              { stat: "60 units", label: "Minimum to Transfer" },
              { stat: "May 1", label: "SIR Deadline" },
            ].map((s) => (
              <div key={s.label} className="text-center bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-2xl font-bold text-yellow-400 mb-1">{s.stat}</div>
                <div className="text-blue-200 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0b1f4a] mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-[#0b1f4a] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 bg-yellow-400">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#0b1f4a] mb-3">Ready to get started?</h2>
          <p className="text-[#0b1f4a]/70 mb-6">
            Don&apos;t navigate this alone. Book a free 30-minute call and let&apos;s build your plan.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-[#0b1f4a] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0d2660] transition-colors"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
