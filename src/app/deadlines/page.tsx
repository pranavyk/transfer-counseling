import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UC Transfer Timelines & Info | P2Transfers",
  description: "Key UC transfer deadlines, TAG dates, application windows, and what to do each semester.",
};

const timeline = [
  {
    month: "August",
    year: "2027",
    items: [
      { label: "UC Application Opens", detail: "UC application becomes available at apply.universityofcalifornia.edu", important: true },
      { label: "TAG Window Opens", detail: "Transfer Admission Guarantee applications open for UC Davis, Irvine, Merced, Riverside, Santa Barbara, Santa Cruz", important: true },
      { label: "Start PIQ Drafts", detail: "Begin drafting your 4 Personal Insight Questions (350 words each)", important: false },
    ],
  },
  {
    month: "September",
    year: "2027",
    items: [
      { label: "TAG Deadline", detail: "September 30. TAG applications must be submitted by end of month.", important: true },
      { label: "Fall semester in full swing", detail: "Your fall grades matter. Prioritize coursework now.", important: false },
    ],
  },
  {
    month: "October",
    year: "2027",
    items: [
      { label: "Finalize Course List", detail: "Make sure your planned coursework through spring is accurate in the UC application", important: false },
      { label: "PIQ Final Drafts", detail: "Have your Personal Insight Questions reviewed and finalized before November", important: false },
    ],
  },
  {
    month: "November",
    year: "2027",
    items: [
      { label: "UC Application Window", detail: "November 1–30: Submit your UC application. Do not wait until November 30.", important: true },
      { label: "Application Deadline", detail: "November 30 at 11:59 PM PT. Hard deadline, no exceptions.", important: true },
    ],
  },
  {
    month: "December–January",
    year: "2026–27",
    items: [
      { label: "Transcripts Due", detail: "Official transcripts may be requested by individual campuses. Check your UC portal.", important: false },
      { label: "Additional Info Requests", detail: "Some campuses may request supplemental materials or additional essays", important: false },
    ],
  },
  {
    month: "March–April",
    year: "2027",
    items: [
      { label: "Admission Decisions Released", detail: "UC decisions typically released March–April. Check your MyAdmissions portal.", important: true },
      { label: "Statement of Intent to Register (SIR)", detail: "May 1 deadline. Commit to your school and pay the enrollment deposit.", important: true },
    ],
  },
  {
    month: "May 1",
    year: "2027",
    items: [
      { label: "SIR Deadline", detail: "Submit your Statement of Intent to Register. Missing this forfeits your spot.", important: true },
      { label: "Final Transcripts", detail: "Submit final transcripts after spring semester ends, usually by July 1.", important: false },
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
    a: "UC's version of college essays. You answer 4 out of 8 prompts, each 350 words max. These are critical. They're one of the few ways to actually differentiate yourself beyond GPA.",
  },
  {
    q: "Can I transfer as a junior or senior?",
    a: "UC transfers are designed for students entering as juniors (with 60+ units). You cannot transfer as a senior. Most students transfer after 2 years at a community college.",
  },
  {
    q: "What is IGETC?",
    a: "Intersegmental General Education Transfer Curriculum. It's a standardized set of lower-division GE courses you can complete at a California community college that satisfies GE requirements at any UC. Completing IGETC before transfer is highly recommended.",
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
    <div className="min-h-screen bg-[#faf7f0]">
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 bg-[#faf7f0] border-b border-[#e8d5b5]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#b0927a] tracking-widest uppercase mb-6">Updated for 2026–2027</p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-[#2a1408] mb-6 leading-[0.95]">
            Timelines<br /><span className="italic">& Info.</span>
          </h1>
          <p className="text-[#8a6050] text-lg max-w-xl leading-relaxed">
            The dates you need, what they mean, and what to do each semester.
            Compiled from my own experience going through this process.
          </p>
        </div>
      </section>

      {/* At a Glance */}
      <section className="py-10 px-6 bg-[#2a1408]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { stat: "Nov 1–30", label: "UC Application Window" },
            { stat: "Sept 30", label: "TAG Deadline" },
            { stat: "60 units", label: "Minimum to Transfer" },
            { stat: "May 1", label: "SIR Deadline" },
          ].map((s) => (
            <div key={s.label} className="text-center py-4">
              <div className="font-serif text-2xl font-semibold text-[#c4714a] mb-1">{s.stat}</div>
              <div className="text-[#c9b8a8] text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 bg-[#faf7f0]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#c4714a] font-medium text-sm tracking-widest uppercase mb-8">Month by month</p>
          <div className="relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-[#e8d5b5]" />
            <div className="space-y-10">
              {timeline.map((month) => (
                <div key={month.month + month.year} className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-[#2a1408] flex items-center justify-center ring-4 ring-[#faf7f0]">
                    <div className="w-2 h-2 rounded-full bg-[#c4714a]" />
                  </div>
                  <div className="mb-3">
                    <span className="font-serif font-semibold text-[#2a1408] text-xl">{month.month}</span>
                    <span className="text-[#b0927a] text-sm ml-2">{month.year}</span>
                  </div>
                  <div className="space-y-2.5">
                    {month.items.map((item) => (
                      <div
                        key={item.label}
                        className={`rounded-xl p-4 border ${
                          item.important
                            ? "bg-[#c4714a]/10 border-[#c4714a]/30"
                            : "bg-[#f0e8d8] border-[#e8d5b5]"
                        }`}
                      >
                        <div className="flex items-start gap-2.5">
                          {item.important && (
                            <span className="bg-[#c4714a] text-white text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 mt-0.5">
                              KEY
                            </span>
                          )}
                          <div>
                            <div className="font-medium text-[#2a1408] text-sm">{item.label}</div>
                            <div className="text-[#8a6050] text-sm mt-0.5">{item.detail}</div>
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

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#f0e8d8] border-t border-[#e8d5b5]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#c4714a] font-medium text-sm tracking-widest uppercase mb-4">Common questions</p>
          <h2 className="font-serif text-3xl font-semibold text-[#2a1408] mb-10">Things I get asked all the time.</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-[#e8d5b5] rounded-2xl p-6 bg-[#faf7f0]">
                <h3 className="font-semibold text-[#2a1408] mb-2">{faq.q}</h3>
                <p className="text-[#8a6050] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#2a1408]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-semibold text-[#faf7f0] mb-3">Still have questions?</h2>
          <p className="text-[#c9b8a8] mb-8">
            Every student&apos;s situation is different. Let&apos;s talk through yours.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-[#7ab4d4] text-[#1e1208] px-8 py-3.5 rounded-full font-semibold hover:bg-[#8fc4e4] transition-colors"
          >
            Book a free intro call
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
