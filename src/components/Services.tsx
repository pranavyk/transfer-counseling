const services = [
  {
    title: "Starter Session",
    price: "$299",
    tag: "Good starting point",
    description: "Not sure where you stand or what you need? We map everything out together in one focused session.",
    features: [
      "1-hour 1:1 strategy session",
      "UC eligibility + GPA assessment",
      "Campus and major fit analysis",
      "Personalized transfer roadmap",
      "1 week of follow-up email Q&A",
    ],
    highlight: false,
  },
  {
    title: "Full Application",
    price: "$899",
    tag: "Most students choose this",
    description: "From first draft to submission. I help you write compelling PIQs and put together the strongest possible application.",
    features: [
      "Everything in Starter",
      "All 4 Personal Insight Questions — drafted, workshopped, finalized",
      "TAG guidance for eligible campuses",
      "Major prep and prerequisite planning",
      "Application review before you submit",
      "3 months of email support",
    ],
    highlight: true,
  },
  {
    title: "Full Year",
    price: "$1,999",
    tag: "For early planners",
    description: "Start from the beginning of your CC journey and have me with you through acceptance — course selection, GPA strategy, the works.",
    features: [
      "Everything in Full Application",
      "Semester-by-semester course planning",
      "GPA recovery strategy if needed",
      "Unlimited 1:1 sessions",
      "Waitlist and appeal letters",
      "Priority 24-hr response",
    ],
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#dde6f4]">
      <div className="max-w-5xl mx-auto">
        <p className="text-yellow-600 font-medium text-sm tracking-widest uppercase mb-4">How I can help</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <h2 className="font-serif text-4xl font-semibold text-[#0b1f4a] max-w-sm leading-snug">
            Pick the level of support you need.
          </h2>
          <p className="text-stone-500 text-sm max-w-xs">
            All packages include a free 30-min intro call so we can make sure it&apos;s the right fit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`rounded-2xl p-7 flex flex-col ${
                s.highlight
                  ? "bg-[#0b1f4a] ring-2 ring-yellow-400"
                  : "bg-[#f5f8fd] border border-blue-100"
              }`}
            >
              <div className="mb-6">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  s.highlight ? "bg-yellow-400 text-[#0b1f4a]" : "bg-stone-200 text-stone-600"
                }`}>
                  {s.tag}
                </span>
                <h3 className={`font-serif text-xl font-semibold mt-4 mb-1 ${s.highlight ? "text-white" : "text-[#0b1f4a]"}`}>
                  {s.title}
                </h3>
                <div className={`text-3xl font-semibold mb-3 ${s.highlight ? "text-yellow-400" : "text-[#0b1f4a]"}`}>
                  {s.price}
                </div>
                <p className={`text-sm leading-relaxed ${s.highlight ? "text-blue-200" : "text-stone-500"}`}>
                  {s.description}
                </p>
              </div>

              <ul className="space-y-2.5 flex-1 mb-7">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className={`mt-1 text-xs ${s.highlight ? "text-yellow-400" : "text-yellow-500"}`}>✦</span>
                    <span className={s.highlight ? "text-blue-100" : "text-stone-600"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-full text-sm font-medium transition-colors ${
                  s.highlight
                    ? "bg-yellow-400 text-[#0b1f4a] hover:bg-yellow-300"
                    : "bg-[#0b1f4a] text-white hover:bg-[#0d2660]"
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-stone-400 mt-8">
          Payment plans available on request.
        </p>
      </div>
    </section>
  );
}
