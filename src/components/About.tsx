export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#eef2f9]">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <p className="text-yellow-600 font-medium text-sm tracking-widest uppercase mb-4">About me</p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-serif text-4xl font-semibold text-[#0b1f4a] leading-snug mb-6">
              I&apos;m not a counseling firm.<br />I&apos;m one person who did this.
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                I grew up in Sunnyvale, navigated the CC system, and applied to the UCs as a transfer student.
                I got into <strong className="text-[#0b1f4a]">UC Berkeley, UCSD, UIUC, and two other top programs</strong> and graduated from UCSD with a degree in Math and CS.
              </p>
              <p>
                What made the difference was strategy. I spread coursework deliberately across 5 colleges, kept costs low, and stacked every advantage the system allows: IGETC, TAG, articulation agreements, and the right major and campus combinations for my profile.
              </p>
              <p>
                When you work with me, you work with <em>me</em>, not a junior counselor at a big company.
                I know the Bay Area CC landscape because I studied in it. I know what Berkeley and UCSD actually look for because I wrote the essays that got me in.
              </p>
            </div>
          </div>

          {/* Credential callouts */}
          <div className="space-y-4 pt-2">
            {[
              {
                heading: "Accepted to Berkeley, UCSD & UIUC",
                body: "As a transfer, not a freshman. I know exactly what the application looks like from a CC student's perspective, including the parts no one talks about.",
              },
              {
                heading: "Graduated from UCSD",
                body: "Class of 2026. I can speak to what the campus is actually like, what majors are competitive, and how to thrive once you're there.",
              },
              {
                heading: "Sunnyvale local",
                body: "I know the Bay Area CC system from the inside. I used De Anza, Foothill, and three other colleges strategically to build the strongest possible transfer application at the lowest possible cost.",
              },
              {
                heading: "One-on-one only",
                body: "I take a limited number of students each cycle intentionally. You get direct access to me, not an intake form.",
              },
            ].map((item) => (
              <div key={item.heading} className="flex gap-4 p-5 bg-[#f5f8fd] border border-blue-100 rounded-2xl shadow-sm">
                <div className="w-1.5 rounded-full bg-yellow-400 shrink-0 self-stretch" />
                <div>
                  <div className="font-semibold text-[#0b1f4a] mb-1">{item.heading}</div>
                  <div className="text-stone-500 text-sm leading-relaxed">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
