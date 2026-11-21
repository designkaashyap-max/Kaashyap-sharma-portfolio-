import { Star } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

const testimonials = [
  {
    quote:
      "We absolutely loved the logo design! The creative typography and playful aesthetic perfectly represent our brand identity. Clean, unique, and eye-catching work delivered professionally.",
    name: "Crunchbase Company",
    role: "Project Manager",
  },
  {
    quote:
      "We are very satisfied with the design work. The layout looks professional, informative, and visually appealing while perfectly representing our healthcare services and brand identity.",
    name: "Shivay Physiotherapy",
    role: "Owner",
  },
  {
    quote:
      'A sharp, high-octane design that elevates our visual presence. Great work on the "blueprint-meets-modern-render" style!',
    name: "Poster Hub",
    role: "Project Manager",
  },
]

export function Testimonials() {
  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionLabel index="04">Client testimonials</SectionLabel>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name} className="flex flex-col justify-between gap-10 rounded-lg border border-line bg-background p-8">
              <div>
                <div className="flex gap-1 text-accent" role="img" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-6 leading-relaxed">{`"${t.quote}"`}</blockquote>
              </div>
              <div className="border-t border-line pt-4">
                <p className="font-medium">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
