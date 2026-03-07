const techStack = [
  { category: 'Frontend', tech: 'Angular, React, TypeScript, SCSS' },
  { category: 'Backend', tech: 'Java, Spring Boot, Node.js, REST APIs' },
  { category: 'DevOps', tech: 'Docker, Kubernetes, Jenkins, GCP' },
  { category: 'Data', tech: 'MongoDB, SQL, NgRx, RxJS' },
]

export default function About() {
  return (
    <section className="py-32 px-8 md:px-16 bg-muted/30" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">01 — Approach</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4">The Convergence of Logic and Art.</h2>
          </div>
          <div className="md:w-2/3 space-y-12">
            <p className="text-base md:text-lg font-light leading-relaxed">
              I specialize in building responsive front-end interfaces with Angular and React, backed by robust microservices with Java and Spring Boot. My workflow is rooted in Agile methodologies, CI/CD pipelines, and clean code principles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-8 border-t border-border">
              {techStack.map(({ category, tech }) => (
                <div key={category} className="group">
                  <div className="flex justify-between items-end pb-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest">{category}</span>
                    <span className="text-sm font-light">{tech}</span>
                  </div>
                  <div className="h-[1px] bg-border w-full relative">
                    <div className="absolute inset-0 bg-foreground w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
