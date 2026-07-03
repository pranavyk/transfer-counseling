const services = [
  {
    title: "Starter Package",
    price: "$299",
    description: "Perfect for students just starting to explore the transfer path.",
    features: [
      "1-hour strategy session",
      "UC eligibility assessment",
      "Campus & major fit analysis",
      "Personalized transfer roadmap",
      "Email follow-up Q&A (1 week)",
    ],
    highlight: false,
    cta: "Get Started",
  },
  {
    title: "Full Application Package",
    price: "$899",
    description: "End-to-end support through your entire UC application cycle.",
    features: [
      "Everything in Starter",
      "All 4 Personal Insight Question essays",
      "TAG application guidance",
      "Major prep & prerequisite planning",
      "3 months of email support",
      "Application review before submission",
    ],
    highlight: true,
    cta: "Most Popular",
  },
  {
    title: "Premium — Full Year",
    price: "$1,999",
    description: "White-glove support from community college through acceptance.",
    features: [
      "Everything in Full Application",
      "Unlimited 1:1 sessions",
      "Course selection each semester",
      "GPA recovery strategy",
      "Waitlist & appeal letters",
      "Priority response (24hr)",
    ],
    highlight: false,
    cta: "Apply Now",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#0b1f4a] mb-4">Services & Pricing</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Clear pricing, no hidden fees. Choose the level of support that fits your situation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`rounded-2xl p-8 flex flex-col ${
                s.highlight
                  ? "bg-[#0b1f4a] text-white shadow-xl shadow-blue-900/20 scale-105"
                  : "bg-gray-50 text-gray-900 border border-gray-200"
              }`}
            >
              <div className="mb-6">
                <h3 className={`font-semibold text-lg mb-1 ${s.highlight ? "text-yellow-400" : "text-[#0b1f4a]"}`}>
                  {s.title}
                </h3>
                <div className={`text-4xl font-bold mb-3 ${s.highlight ? "text-white" : "text-[#0b1f4a]"}`}>
                  {s.price}
                </div>
                <p className={`text-sm ${s.highlight ? "text-blue-200" : "text-gray-500"}`}>
                  {s.description}
                </p>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg className={`w-4 h-4 mt-0.5 shrink-0 ${s.highlight ? "text-yellow-400" : "text-[#0b1f4a]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={s.highlight ? "text-blue-100" : "text-gray-600"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
                  s.highlight
                    ? "bg-yellow-400 text-[#0b1f4a] hover:bg-yellow-300"
                    : "bg-[#0b1f4a] text-white hover:bg-[#0d2660]"
                }`}
              >
                {s.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400 mt-8">
          Payment plans available. All packages include a free 30-min intro call.
        </p>
      </div>
    </section>
  );
}
