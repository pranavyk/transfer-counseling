const testimonials = [
  {
    quote: "I had a 3.4 GPA and had basically written off Berkeley. Pranav helped me figure out how to actually tell my story in the PIQs. I got in.",
    name: "Michelle L.",
    detail: "UC Berkeley — Computer Science",
  },
  {
    quote: "My son had no idea where to start. The roadmap Pranav made was incredibly clear. He got his TAG guarantee within weeks of starting.",
    name: "Parent, Sunnyvale",
    detail: "UC Davis — Economics",
  },
  {
    quote: "Worth every dollar. The PIQ coaching alone made my essays 10x better. Got into UCSD and UCLA.",
    name: "Kevin T.",
    detail: "UC San Diego — Cognitive Science",
  },
  {
    quote: "I came to Pranav with a 3.1 GPA feeling like the window had closed. He helped me position my story the right way and I got two UC acceptances.",
    name: "Jason M.",
    detail: "UC Santa Barbara — Sociology",
  },
  {
    quote: "As a parent who didn't go through American college admissions, I had so many questions. Pranav was patient, clear, and genuinely helpful.",
    name: "Parent, Sunnyvale",
    detail: "UC Irvine — Biology",
  },
  {
    quote: "Unlike the big companies, you actually talk to Pranav. He knows De Anza's curriculum cold — that made a real difference in my planning.",
    name: "Tiffany W.",
    detail: "UC San Diego — Global Studies",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-[#dde6f4]">
      <div className="max-w-5xl mx-auto">
        <p className="text-yellow-600 font-medium text-sm tracking-widest uppercase mb-4">Results</p>
        <h2 className="font-serif text-4xl font-semibold text-[#0b1f4a] mb-14 max-w-md leading-snug">
          In their own words.
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`rounded-2xl p-7 ${
                i === 0
                  ? "bg-[#0b1f4a] md:col-span-2"
                  : "bg-[#f5f8fd] border border-blue-100"
              }`}
            >
              <p className={`font-serif text-xl leading-relaxed mb-5 ${
                i === 0 ? "text-white md:text-2xl max-w-3xl" : "text-[#0b1f4a]"
              }`}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`flex gap-0.5 ${i === 0 ? "" : ""}`}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <span className={`font-medium text-sm ${i === 0 ? "text-yellow-400" : "text-[#0b1f4a]"}`}>{t.name}</span>
                  <span className={`text-sm ml-2 ${i === 0 ? "text-blue-300" : "text-stone-400"}`}>— {t.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-stone-400 text-xs mt-8 text-center">
          Testimonials represent real outcomes. Individual results vary.
        </p>
      </div>
    </section>
  );
}
