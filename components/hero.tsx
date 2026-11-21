import { ArrowDownRight } from "lucide-react"

const marquee = ["Branding", "Typography", "Posters", "Digital Design", "Illustration", "Visual Identity"]

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-end pt-24">
      <div className="mx-auto w-full max-w-7xl px-6 pb-16">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted">
          Graphic Designer · Indore, India · Portfolio 2026
        </p>
        <h1 className="font-display text-[22vw] leading-[0.82] tracking-tight md:text-[15vw]">
          Kaashyap
          <br />
          <span className="text-accent">Sharma</span>
        </h1>
        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-lg leading-relaxed text-muted text-pretty">
            I design visual experiences that make people stop and look — premium visuals that help brands connect with
            people.
          </p>
          <a
            href="#work"
            className="group inline-flex items-center gap-3 self-start border-b border-foreground pb-1 text-sm uppercase tracking-[0.2em] md:self-auto"
          >
            View selected work
            <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="overflow-hidden border-y border-line py-4" aria-hidden="true">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-4xl text-foreground/80">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              {item}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
