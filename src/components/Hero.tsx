export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Now accepting students for Fall 2026 transfers
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Get into the UC you deserve.<br />
            <span className="text-blue-600">From someone who did it.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Accepted to UC Berkeley, UCSD, and UIUC as a transfer student. Now based in Cupertino,
            helping Bay Area students navigate the transfer process from start to finish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors text-center text-lg"
            >
              Book a Free Consultation
            </a>
            <a
              href="#services"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-medium hover:border-gray-400 transition-colors text-center text-lg"
            >
              See Services
            </a>
          </div>
          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-gray-200">
            <div>
              <div className="text-2xl font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-500">UC acceptances</div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <div className="text-2xl font-bold text-gray-900">Berkeley</div>
              <div className="text-sm text-gray-500">+ UCSD + UIUC</div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <div className="text-2xl font-bold text-gray-900">Local</div>
              <div className="text-sm text-gray-500">Cupertino area</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
