import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 bg-[#eef2f9] pt-20">
      <div className="max-w-5xl mx-auto w-full py-20">

        {/* Subheading quote */}
        <div className="border-l-4 border-yellow-400 pl-4 mb-12">
          <p className="font-serif text-2xl md:text-3xl font-semibold text-[#0b1f4a] leading-snug">
            Rejection is redirection.{" "}
            <span className="text-[#0b1f4a]/50 font-normal">Let&apos;s walk the smarter path.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center">

          {/* Left — copy */}
          <div className="md:col-span-3">
            <p className="text-yellow-600 font-medium text-sm tracking-widest uppercase mb-6">
              UC Transfer Counseling · Sunnyvale, CA
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-semibold text-[#0b1f4a] leading-[1.1] mb-6">
              I got into Berkeley as a transfer.{" "}
              <span className="italic text-yellow-500">Let me help you do the same.</span>
            </h1>
            <p className="text-stone-500 text-lg leading-relaxed mb-8 max-w-xl">
              I&apos;m Pranav, a Sunnyvale local and recent UCSD Math+CS grad. I was accepted to UC Berkeley, UCSD, UIUC, and two other top programs by strategically spreading coursework across 5 colleges to transfer affordably with every possible advantage. Now I help Bay Area students do the same.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/#contact"
                className="bg-[#0b1f4a] text-white px-7 py-3.5 rounded-full font-medium hover:bg-[#0d2660] transition-colors text-center"
              >
                Work with me
              </a>
              <a
                href="/deadlines"
                className="border border-stone-300 text-stone-600 px-7 py-3.5 rounded-full font-medium hover:border-stone-400 hover:text-stone-800 transition-colors text-center"
              >
                See key deadlines →
              </a>
            </div>
          </div>

          {/* Right — photo + stat cards */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {/* Photo with styled frame */}
            <div className="relative">
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-yellow-400 z-0" />
              <div className="relative z-10 rounded-2xl ring-4 ring-[#0b1f4a] aspect-[3/4] overflow-hidden">
                <Image
                  src="/pranav.jpg"
                  alt="Pranav — UC Transfer Counselor"
                  fill
                  className="object-cover object-center saturate-125 brightness-90"
                  priority
                />
              </div>
            </div>

            {/* Name tag below photo */}
            <div className="relative z-10 text-center mt-2">
              <p className="font-serif font-semibold text-[#0b1f4a]">Pranav</p>
              <p className="text-yellow-600 text-sm">UCSD Math + CS &apos;26 · Berkeley, UIUC CS admit</p>
            </div>

            {/* Stat pills */}
            <div className="grid grid-cols-2 gap-3 mt-1">
              <div className="bg-white/70 border border-blue-100 rounded-xl p-4 text-center shadow-sm">
                <div className="font-serif text-2xl font-semibold text-[#0b1f4a]">5</div>
                <div className="text-xs text-stone-400 mt-0.5 leading-tight">T10 acceptances,<br/>selective majors</div>
              </div>
              <div className="bg-yellow-400 rounded-xl p-4 text-center">
                <div className="text-xs font-semibold text-[#0b1f4a] leading-relaxed">CS · Math<br/>Cog Sci · Psych</div>
                <div className="text-xs text-[#0b1f4a]/70 mt-1">specialized</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
