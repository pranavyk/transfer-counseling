const testimonials = [
  {
    quote: "I had a 3.4 GPA and thought Berkeley was out of reach. After working through my essays and application strategy with Pranav, I got in. The whole process finally made sense.",
    name: "Michelle L.",
    detail: "Transferred to UC Berkeley — Computer Science",
    initials: "ML",
  },
  {
    quote: "My son didn't know where to start with the TAG process. The roadmap Pranav built for him was incredibly clear, and he got his guarantee to UC Davis within a month of working together.",
    name: "Parent — Sunnyvale",
    detail: "Student transferred to UC Davis — Economics",
    initials: "P",
  },
  {
    quote: "Worth every dollar. The PIQ coaching alone made my essays 10x better. I went from no plan to getting into UCSD and UCLA. Pranav knows exactly what these schools are looking for.",
    name: "Kevin T.",
    detail: "Transferred to UCSD — Cognitive Science",
    initials: "KT",
  },
  {
    quote: "As a parent who didn't go through the American college system, I had no idea how transfers worked. Pranav explained everything clearly and my daughter got into UC Irvine.",
    name: "Parent — Cupertino",
    detail: "Student transferred to UC Irvine — Biology",
    initials: "P",
  },
  {
    quote: "I came in with a 3.1 GPA feeling hopeless. Pranav helped me position my story, pick the right major/campus combos, and I ended up with two UC acceptances.",
    name: "Jason M.",
    detail: "Transferred to UC Santa Barbara — Sociology",
    initials: "JM",
  },
  {
    quote: "Unlike the big counseling companies, you actually work with Pranav directly. He knows De Anza's curriculum inside out and helped me map every class I needed.",
    name: "Tiffany W.",
    detail: "Transferred to UC San Diego — Global Studies",
    initials: "TW",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#0b1f4a] mb-4">Results</h2>
          <p className="text-lg text-gray-500">Real students, real outcomes.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name + t.detail} className="bg-gray-50 rounded-2xl p-7 border border-gray-200 flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-5 flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0b1f4a] flex items-center justify-center text-yellow-400 text-xs font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-[#0b1f4a] text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{t.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400 mt-8">
          * Testimonials represent real outcomes. Individual results vary.
        </p>
      </div>
    </section>
  );
}
