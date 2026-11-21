import { SectionLabel } from "@/components/section-label"

const services = [
  {
    title: "Digital Design",
    body: "Ensuring every touchpoint of your brand feels cohesive, professional, and prepared for growth.",
  },
  {
    title: "Branding",
    body: "Integrated brand identities designed to live and breathe across every platform.",
  },
  {
    title: "Illustration",
    body: "A proprietary visual language — from custom iconography sets to signature character styles — that makes your brand instantly recognizable without saying a word.",
  },
]

export function Services() {
  return (
    <section id="services" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionLabel index="02">What I do</SectionLabel>
        <ul className="mt-12 flex flex-col">
          {services.map((service, i) => (
            <li
              key={service.title}
              className="group grid gap-4 border-b border-line py-10 md:grid-cols-12 md:items-baseline"
            >
              <span className="font-display text-2xl text-muted md:col-span-1">0{i + 1}</span>
              <h3 className="font-display text-5xl transition-colors group-hover:text-accent md:col-span-5 md:text-7xl">
                {service.title}
              </h3>
              <p className="max-w-md leading-relaxed text-muted md:col-span-6">{service.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
