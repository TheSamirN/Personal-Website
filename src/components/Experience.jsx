const timeline = [
  {
    period: 'Jan 2023 — Present',
    role: 'Software Developer',
    company: 'Tangerine (owned by Scotiabank)',
    type: 'Full-Time',
  },
  {
    period: 'Jun 2022 — Jan 2023',
    role: 'Quality Engineer',
    company: 'Tangerine (owned by Scotiabank)',
    type: 'Full-Time',
  },
  {
    period: 'May 2021 — Aug 2021',
    role: 'Digital Forensic Investigator',
    company: 'Scotiabank',
    type: 'Internship',
  },
]

const education = [
  {
    period: 'Sep 2020 — Sep 2022',
    degree: 'Advanced Diploma in Computer Programming & Analysis',
    school: 'Seneca College',
  },
  {
    period: 'Sep 2014 — Sep 2019',
    degree: 'Bachelor of Arts in Professional Writing & Marketing',
    school: 'York University',
  },
]

export default function Experience() {
  return (
    <>
      <section className="py-32 px-8 md:px-16 bg-muted/30" id="experience">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">03 — Journey</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4">Professional <br />Timeline</h2>
          </div>
          <div className="space-y-0">
            {timeline.map(({ period, role, company, type }, i) => (
              <div
                key={period}
                className={`group border-t ${i === timeline.length - 1 ? 'border-b' : ''} border-border py-12 grid grid-cols-1 md:grid-cols-4 items-baseline hover:bg-background/50 transition-colors px-4 -mx-4`}
              >
                {i === 0 && (
                  <div className="md:hidden mb-4">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </span>
                      <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">Current Employer</span>
                    </span>
                  </div>
                )}
                <span className="font-mono text-sm text-muted-foreground">{period}</span>
                <div className="md:col-span-2 mt-4 md:mt-0">
                  {i === 0 && (
                    <div className="hidden md:block mb-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-2">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">Current Employer</span>
                      </span>
                    </div>
                  )}
                  <h4 className="text-2xl font-serif">{role}</h4>
                  <p className="text-muted-foreground mt-2">{company}</p>
                </div>
                <div className="mt-4 md:mt-0 md:text-right">
                  <span className="text-xs uppercase tracking-widest font-mono group-hover:translate-x-2 transition-transform inline-block">{type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-0 pb-6 px-8 md:px-16 bg-muted/30" id="education">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">04 — Education</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4">Education</h2>
          </div>
          <div className="space-y-0">
            {education.map(({ period, degree, school }, i) => (
              <div
                key={period}
                className={`group border-t ${i === education.length - 1 ? 'border-b' : ''} border-border py-12 grid grid-cols-1 md:grid-cols-3 items-baseline hover:bg-background/50 transition-colors px-4 -mx-4`}
              >
                <span className="font-mono text-sm text-muted-foreground">{period}</span>
                <div className="md:col-span-2 mt-4 md:mt-0">
                  <h4 className="text-2xl font-serif">{degree}</h4>
                  <p className="text-muted-foreground mt-2">{school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
