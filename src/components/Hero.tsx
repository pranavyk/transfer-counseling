export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 bg-[#0b1f4a]">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 text-sm px-3 py-1 rounded-full mb-6 border border-yellow-400/20">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            Now accepting students for Fall 2026 transfers
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Get into the UC you deserve.<br />
            <span className="text-yellow-400">From someone who did it.</span>
          </h1>
          <p className="text-xl text-blue-200 mb-8 leading-relaxed">
            Accepted to UC Berkeley, UCSD, and UIUC as a transfer student. Now based in Cupertino,
            helping Bay Area students navigate the transfer process from start to finish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-yellow-400 text-[#0b1f4a] px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-colors text-center text-lg"
            >
              Book a Free Consultation
            </a>
            <a
              href="#services"
              className="border border-white/20 text-white px-8 py-4 rounded-xl font-medium hover:border-white/50 transition-colors text-center text-lg"
            >
              See Services
            </a>
          </div>
          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
            <div>
              <div className="text-2xl font-bold text-yellow-400">3</div>
              <div className="text-sm text-blue-300">UC acceptances</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-yellow-400">Berkeley</div>
              <div className="text-sm text-blue-300">+ UCSD + UIUC</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-yellow-400">Local</div>
              <div className="text-sm text-blue-300">Cupertino area</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
