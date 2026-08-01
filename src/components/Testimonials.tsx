const testimonials = [
  {
    quote: "I had a 3.4 GPA and had basically written off Berkeley. Pranav helped me figure out how to actually tell my story in the PIQs. I got in.",
    name: "Michelle L.",
    detail: "UC Berkeley, Computer Science",
  },
  {
    quote: "My son had no idea where to start. The roadmap Pranav made was incredibly clear. He was able to set up his TAG admission guarantee to Davis within two weeks of starting.",
    name: "Parent, Santa Clara, CA",
    detail: "UC Davis, Economics",
  },
  {
    quote: "I came to Pranav with a 3.1 GPA feeling like the window had closed. He helped me position my story the right way and I got two UC acceptances.",
    name: "Jason M.",
    detail: "UC Santa Barbara, Sociology",
  },
  {
    quote: "As a parent who didn't go through American college admissions, I had so many questions. Pranav was patient, clear, and genuinely helpful.",
    name: "Parent, Sunnyvale",
    detail: "UC Irvine, Biology",
  },
  {
    quote: "Unlike the big companies, you actually talk to Pranav. He knows De Anza's curriculum cold. That made a real difference in my planning.",
    name: "Tiffany W.",
    detail: "UC San Diego, Global Studies",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-[#f0e8d8]">
      <div className="max-w-5xl mx-auto">

        {/* Cohort availability */}
        <div className="mb-10 inline-flex items-center gap-3 border border-[#7a9e7e]/40 bg-[#7a9e7e]/10 rounded-full px-5 py-2.5">
          <span className="w-2 h-2 rounded-full bg-[#7a9e7e] animate-pulse shrink-0" />
          <span className="text-sm text-[#3a5e3e] font-medium">Fall 2026 Cohort: 4 spots open</span>
        </div>

        <h2 className="font-serif text-5xl md:text-6xl font-semibold text-[#2a1408] mb-14 leading-[0.95]">
          In their<br /><span className="italic">own words.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`rounded-2xl p-7 ${
                i === 0
                  ? "bg-[#2a1408] md:col-span-2"
                  : "bg-[#faf7f0] border border-[#e8d5b5]"
              }`}
            >
              <p className={`font-serif text-xl leading-relaxed mb-5 ${
                i === 0 ? "text-[#f0e8d8] md:text-2xl max-w-3xl" : "text-[#2a1408]"
              }`}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <span className={`font-medium text-sm ${i === 0 ? "text-[#c4714a]" : "text-[#2a1408]"}`}>{t.name}</span>
                <span className={`text-sm ml-1.5 ${i === 0 ? "text-[#c9b8a8]" : "text-[#b0927a]"}`}>· {t.detail}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[#b0927a] text-xs mt-8 text-center">
          Testimonials represent real outcomes. Individual results vary.
        </p>
      </div>
    </section>
  );
}
