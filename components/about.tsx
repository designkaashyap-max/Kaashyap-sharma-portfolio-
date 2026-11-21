import { SectionLabel } from "@/components/section-label"

const skills = ["Branding & identity design", "Typography", "Creativity & idea generation", "Copywriting"]
const beliefs = ["User-centric design", "Visual storytelling", "Innovation and creativity"]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionLabel index="01">About me</SectionLabel>
      <div className="mt-10 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <h2 className="font-display text-5xl leading-none md:text-7xl text-balance">
            Hello, I&apos;m Kaashyap — a designer who believes good design should be{" "}
            <span className="text-accent">accessible</span>.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            I specialize in creating visually compelling designs that engage audiences and communicate clear messages.
            From brand identities to posters and print, I care about every touchpoint. Let&apos;s create something
            amazing together.
          </p>
          <blockquote className="mt-12 border-l-2 border-accent pl-6 text-xl italic leading-relaxed">
            {'"My goal is to create visuals that not only look premium but also help brands connect with people."'}
          </blockquote>
        </div>
        <div className="flex flex-col gap-10 md:col-span-5">
          <div className="border-t border-line pt-6">
            <h3 className="text-xs uppercase tracking-[0.3em] text-muted">Education</h3>
            <p className="mt-4 text-lg">BTech in CSE (AIML)</p>
            <p className="text-muted">Acropolis Institute of Technology and Research, Indore</p>
            <p className="mt-1 text-sm text-accent">Graduating 2029</p>
          </div>
          <div className="border-t border-line pt-6">
            <h3 className="text-xs uppercase tracking-[0.3em] text-muted">Skills</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li key={skill} className="rounded-full border border-line px-4 py-2 text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-line pt-6">
            <h3 className="text-xs uppercase tracking-[0.3em] text-muted">Core beliefs</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {beliefs.map((belief, i) => (
                <li key={belief} className="flex gap-4 text-lg">
                  <span className="font-display text-accent">0{i + 1}</span>
                  {belief}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
