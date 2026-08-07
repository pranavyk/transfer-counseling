function ShipWheel({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2" />
      {/* Spokes — 8 at 45° intervals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = 24 + 7 * Math.cos(angle);
        const y1 = 24 + 7 * Math.sin(angle);
        const x2 = 24 + 19 * Math.cos(angle);
        const y2 = 24 + 19 * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />;
      })}
      {/* Handle pegs on rim */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const cx = 24 + 22 * Math.cos(angle);
        const cy = 24 + 22 * Math.sin(angle);
        return <circle key={i} cx={cx} cy={cy} r="1.5" fill="currentColor" />;
      })}
    </svg>
  );
}

const services = [
  {
    title: "Starter Session",
    price: "$299",
    tag: "Good starting point",
    description: "One focused hour to map your situation, assess UC eligibility, find your best campus and major combos, and leave with a clear roadmap.",
    features: ["1-hour 1:1 strategy session", "UC eligibility + GPA assessment", "Campus and major fit analysis", "1 week of follow-up email Q&A"],
  },
  {
    title: "Full Application",
    price: "$899",
    tag: "Most students choose this",
    description: "From first draft to submission. All 4 PIQs, TAG guidance, prerequisite planning, and a full review before you hit submit.",
    features: ["Everything in Starter", "All 4 Personal Insight Questions: drafted, workshopped, and finalized", "TAG guidance for eligible campuses", "Application review before you submit", "3 months of email support"],
  },
  {
    title: "Full Year",
    price: "$1,999",
    tag: "For early planners",
    description: "Start from the beginning of your CC journey and have me with you all the way through acceptance: course selection, GPA strategy, the works.",
    features: ["Everything in Full Application", "Semester-by-semester course planning", "GPA recovery strategy if needed", "Unlimited 1:1 sessions", "Waitlist and appeal letters", "Priority 24-hr response"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#f0e8d8]">
      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 border-b border-[#2a1408]/10 pb-10">
          <div className="flex items-start gap-4">
            <ShipWheel className="w-10 h-10 text-[#c4714a] shrink-0 mt-2" />
            <h2 className="font-serif text-5xl md:text-6xl font-semibold text-[#2a1408] leading-[0.95]">
              How I<br /><span className="italic">can help.</span>
            </h2>
          </div>
          <p className="text-[#8a6050] text-sm max-w-xs">
            All packages include a free 15-min intro call. Payment plans available on request.
          </p>
        </div>

        <div className="divide-y divide-[#2a1408]/10">
          {services.map((s, i) => (
            <div key={s.title} className="group py-10 grid md:grid-cols-12 gap-6 items-start">
              {/* Index */}
              <div className="hidden md:block md:col-span-1">
                <span className="font-serif text-[#c4714a]/40 text-2xl">{String(i + 1).padStart(2, "0")}</span>
              </div>

              {/* Title + tag */}
              <div className="md:col-span-3">
                <span className="text-xs font-medium text-[#7a9e7e] uppercase tracking-widest">{s.tag}</span>
                <h3 className="font-serif text-2xl font-semibold text-[#2a1408] mt-1">{s.title}</h3>
              </div>

              {/* Description + features */}
              <div className="md:col-span-5">
                <p className="text-[#8a6050] text-sm leading-relaxed mb-4">{s.description}</p>
                <ul className="space-y-1.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#6b4f38]">
                      <span className="text-[#c4714a] mt-0.5 text-xs shrink-0">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price + CTA */}
              <div className="md:col-span-3 flex flex-col items-start md:items-end gap-3">
                <div className="font-serif text-4xl font-semibold text-[#2a1408]">{s.price}</div>
                <a
                  href="#contact"
                  className="bg-[#7ab4d4] text-[#1e1208] text-sm px-6 py-2.5 font-semibold hover:bg-[#8fc4e4] transition-colors rounded-full"
                >
                  Get started
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Free consultation callout */}
        <div className="mt-12 rounded-2xl bg-[#2a1408] p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#7a9e7e] animate-pulse shrink-0" />
              <span className="text-xs text-[#7a9e7e] font-medium uppercase tracking-widest">Free, no commitment</span>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl font-semibold text-[#f0e8d8] leading-tight mb-3">
              Not sure where to start?
            </h3>
            <p className="text-[#c9b8a8] text-sm leading-relaxed">
              Book a free 15-minute consultation. We&apos;ll talk through your GPA, your target campuses, and whether working together makes sense. No pressure to commit to anything.
            </p>
          </div>
          <a
            href="https://calendly.com/pranavyk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#7ab4d4] text-[#1e1208] text-sm px-7 py-3.5 font-semibold hover:bg-[#8fc4e4] transition-colors rounded-full shrink-0 text-center whitespace-nowrap"
          >
            Book 15-min call →
          </a>
        </div>

      </div>
    </section>
  );
}
