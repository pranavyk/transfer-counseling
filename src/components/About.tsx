export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0b1f4a] mb-6">Why work with me?</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I grew up in Cupertino and went through exactly what your student is facing right now —
              the pressure, the uncertainty, the sense that the window is closing.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              As a transfer applicant, I was accepted to <strong className="text-[#0b1f4a]">UC Berkeley, UCSD, and UIUC</strong>.
              I know the process inside out — what the readers actually look for in Personal Insight
              Questions, how to position a GPA that isn&apos;t perfect, which TAGs are worth pursuing,
              and how to choose the right major and campus combination.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I&apos;m not a company. You work directly with me, one-on-one. I know the Bay Area
              community college landscape — De Anza, Foothill, Ohlone — and I know what works.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Accepted: UC Berkeley, UCSD, UIUC",
                "Graduated from UCSD",
                "Bay Area local — Cupertino based",
                "Familiar with De Anza, Foothill, Ohlone",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-[#0b1f4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#0b1f4a] rounded-2xl p-8 text-white">
            <div className="text-5xl font-bold text-yellow-400 mb-2">100%</div>
            <div className="text-white font-semibold mb-1">First-hand experience</div>
            <div className="text-blue-300 text-sm mb-8">Not theory — I did this myself.</div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-blue-200">UC Application Strategy</span>
                  <span className="font-medium text-yellow-400">Expert</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full">
                  <div className="h-2 bg-yellow-400 rounded-full w-[95%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-blue-200">Personal Insight Questions</span>
                  <span className="font-medium text-yellow-400">Expert</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full">
                  <div className="h-2 bg-yellow-400 rounded-full w-[93%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-blue-200">Bay Area CC Curriculum</span>
                  <span className="font-medium text-yellow-400">Expert</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full">
                  <div className="h-2 bg-yellow-400 rounded-full w-[90%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
