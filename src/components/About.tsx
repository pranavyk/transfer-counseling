function TreeOfLife({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer circle */}
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" />
      {/* Trunk */}
      <line x1="24" y1="38" x2="24" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Roots */}
      <path d="M24 38 Q20 42 16 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M24 38 Q28 42 32 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M24 40 Q22 44 19 44" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M24 40 Q26 44 29 44" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      {/* Main branches */}
      <path d="M24 26 Q18 22 14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M24 26 Q30 22 34 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M24 26 Q22 20 20 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M24 26 Q26 20 28 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M24 26 Q24 19 24 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Secondary branches */}
      <path d="M18 21 Q14 20 11 22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M30 21 Q34 20 37 22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M21 17 Q18 14 16 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M27 17 Q30 14 32 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      {/* Leaf dots */}
      <circle cx="13" cy="17" r="1.5" fill="currentColor" />
      <circle cx="35" cy="17" r="1.5" fill="currentColor" />
      <circle cx="15" cy="10" r="1.5" fill="currentColor" />
      <circle cx="33" cy="10" r="1.5" fill="currentColor" />
      <circle cx="24" cy="11" r="1.5" fill="currentColor" />
      <circle cx="10" cy="23" r="1.2" fill="currentColor" />
      <circle cx="38" cy="23" r="1.2" fill="currentColor" />
      <circle cx="19" cy="13" r="1.2" fill="currentColor" />
      <circle cx="29" cy="13" r="1.2" fill="currentColor" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#faf7f0]">
      <div className="max-w-5xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <TreeOfLife className="w-10 h-10 text-[#7a9e7e] shrink-0" />
              <h2 className="font-serif text-5xl md:text-6xl font-semibold text-[#2a1408] leading-[0.95]">
                Not a firm.<br /><span className="italic">One person</span><br />who did this.
              </h2>
            </div>
            <div className="space-y-4 text-[#8a6050] leading-relaxed">
              <p>
                I graduated high school with a 2.7 GPA. By the skin of my teeth.
              </p>
              <p>
                Not because I wasn&apos;t capable. I just didn&apos;t have a system. High school felt like something happening to me, not something I was navigating with any intention.
              </p>
              <p>
                When my results came in, the message was clear: the traditional four-year path wasn&apos;t going to happen right away. And I had a choice about how to look at that.
              </p>
              <p>
                What I found when I actually looked at community college changed how I think about the whole thing. The UC transfer system is genuinely one of the best-designed educational pathways in the country. IGETC, TAG guarantees, articulation agreements. These aren&apos;t backdoors. They&apos;re official channels that reward students who understand how to use them. The problem is almost nobody teaches you this. The students who need it most are the least likely to figure it out on their own.
              </p>
              <p>
                So I learned it. I enrolled at De Anza. Then Foothill. Eventually five colleges total, not by accident but on purpose. Each one gave me access to specific courses, articulation agreements, and advantages the others didn&apos;t. I mapped everything: which classes counted toward which UC major, which campus and major combinations gave me the best odds, where I could build the strongest possible transfer application at the lowest cost.
              </p>
              <p>
                I got into <strong className="text-[#2a1408]">UC Berkeley, UCSD, UIUC, and two other top programs</strong>. I chose UCSD, Math and CS, Class of 2026, because it was the right call for where I wanted to go.
              </p>
              <p>
                The reason I started doing this professionally is almost accidental. I started helping friends. Casually, over text. A friend with a 3.1 GPA who&apos;d convinced himself Berkeley was off the table. A parent who couldn&apos;t parse the UC application. I&apos;d walk them through it the same way I wished someone had walked me through it: plainly, with real context about what actually matters and what doesn&apos;t.
              </p>
              <p>
                They got in. Multiple times. To schools they&apos;d written off.
              </p>
              <p>
                That&apos;s when I understood: what I know isn&apos;t common knowledge, and most families navigating this are either flying blind or paying a lot to a firm where their student will never talk to someone who actually did this.
              </p>
              <p>
                I grew up in Sunnyvale. I&apos;ve studied at De Anza, Foothill, and three others. I know what Berkeley&apos;s transfer review actually weighs, and I know what UCSD is like to attend because I was there. Not from research. From living it.
              </p>
              <p>
                I take a small number of students each cycle on purpose. This work is personal. I want to actually know your situation, track your progress, and be there when decisions come out. That&apos;s not possible at scale.
              </p>
            </div>
          </div>

          {/* Credential callouts */}
          <div className="divide-y divide-[#2a1408]/10 border-t border-[#2a1408]/10">
            {[
              {
                heading: "Started with a 2.7 HS GPA",
                body: "I know what it feels like when the system tells you the door is closed. I also know exactly how to find the other doors.",
              },
              {
                heading: "Berkeley, UCSD & UIUC admit",
                body: "As a transfer, not a freshman. I know what the application looks like from a CC student's perspective, including the parts no one talks about.",
              },
              {
                heading: "UCSD Math + CS, Class of 2026",
                body: "I can speak to what the campus is actually like, what majors are competitive, and how to thrive once you're there.",
              },
              {
                heading: "Sunnyvale local, 5-college strategy",
                body: "De Anza, Foothill, and three others. Used deliberately to build the strongest possible application at the lowest cost.",
              },
              {
                heading: "One-on-one, limited spots",
                body: "I take a small number of students each cycle intentionally. You get direct access to me, not an intake form.",
              },
            ].map((item) => (
              <div key={item.heading} className="py-6">
                <div className="font-semibold text-[#2a1408] mb-1.5 flex items-center gap-2">
                  <span className="text-[#c4714a] text-xs">✦</span>
                  {item.heading}
                </div>
                <div className="text-[#8a6050] text-sm leading-relaxed pl-5">{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
