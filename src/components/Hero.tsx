import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen px-6 bg-[#faf7f0] pt-28 pb-16 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Top label row */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs text-[#b0927a] tracking-widest uppercase">UC Transfer Counseling · Sunnyvale, CA</p>
          <div className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7a9e7e] animate-pulse" />
            <span className="text-xs text-[#7a9e7e] font-medium tracking-wide">Fall 2026 Cohort: Now Accepting 4 Clients</span>
          </div>
        </div>

        {/* Giant headline + photo */}
        <div className="relative md:min-h-[380px]">
          <h1 className="font-serif text-[clamp(3rem,8vw,7rem)] font-semibold text-[#2a1408] leading-[0.95] tracking-tight mb-0 relative z-10 md:pr-72">
            I got into<br />
            <span className="italic text-[#c4714a]">Berkeley</span><br />
            as a transfer.
          </h1>

          {/* Photo floated right */}
          <div className="hidden md:block absolute top-0 right-0 w-64 z-20">
            <div className="relative">
              <div className="absolute -bottom-2 -right-2 w-full h-full rounded-xl bg-[#c4714a] z-0" />
              <div className="relative z-10 rounded-xl ring-[3px] ring-[#2a1408] aspect-[3/4] overflow-hidden">
                <Image
                  src="/pranav.jpg"
                  alt="Pranav"
                  fill
                  className="object-cover object-top saturate-110 brightness-95"
                  priority
                />
              </div>
            </div>
            <div className="text-center mt-3">
              <p className="font-serif text-sm font-semibold text-[#2a1408]">Pranav</p>
              <p className="text-[#c4714a] text-xs">UCSD Math+CS &apos;26 · Berkeley, UIUC CS</p>
            </div>
          </div>
        </div>

        {/* Divider + subtext */}
        <div className="mt-8 md:mt-6 pt-8 border-t border-[#2a1408]/10 grid md:grid-cols-2 gap-8 items-end">
          <p className="text-[#8a6050] text-lg leading-relaxed">
            I&apos;m Pranav. I got into UC Berkeley, UCSD, UIUC, and two other top programs by deliberately spreading coursework across 5 colleges to stack every advantage the system allows. Now I help Bay Area students do the same thing, one-on-one.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 flex-wrap">
              <a href="/#contact" className="bg-[#7ab4d4] text-[#1e1208] px-6 py-3 text-sm font-semibold hover:bg-[#8fc4e4] transition-colors rounded-full">
                Work with me
              </a>
              <a href="/deadlines" className="text-[#2a1408] text-sm font-medium underline underline-offset-4 hover:text-[#c4714a] transition-colors py-3">
                See timelines →
              </a>
            </div>
            {/* Mobile cohort badge */}
            <div className="md:hidden flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-[#7a9e7e] animate-pulse" />
              <span className="text-xs text-[#7a9e7e] font-medium">Fall 2026 Cohort: 4 spots open</span>
            </div>
            {/* Mobile photo */}
            <div className="md:hidden mt-2">
              <div className="relative w-48">
                <div className="absolute -bottom-2 -right-2 w-full h-full rounded-xl bg-[#c4714a] z-0" />
                <div className="relative z-10 rounded-xl ring-[3px] ring-[#2a1408] aspect-[3/4] overflow-hidden">
                  <Image src="/pranav.jpg" alt="Pranav" fill className="object-cover object-top saturate-110 brightness-95" priority />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-[#2a1408]/10 pt-8">
          <div>
            <span className="font-serif text-3xl font-semibold text-[#c4714a]">5</span>
            <span className="text-[#b0927a] text-sm ml-2">T10 acceptances</span>
          </div>
          <div>
            <span className="font-serif text-3xl font-semibold text-[#c4714a]">5</span>
            <span className="text-[#b0927a] text-sm ml-2">colleges leveraged</span>
          </div>
        </div>

      </div>
    </section>
  );
}
