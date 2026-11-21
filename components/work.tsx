import Image from "next/image"
import { SectionLabel } from "@/components/section-label"

type Project = {
  title: string
  category: string
  client: string
  year: string
  objective: string
  outcome?: string
  images: { src: string; alt: string }[]
}

const projects: Project[] = [
  {
    title: "Crunchbase Company",
    category: "Branding",
    client: "Crunchbase Company",
    year: "2026",
    objective:
      "A strong, memorable visual identity reflecting authentic coffee culture, craftsmanship, and a premium brand experience — communicating warmth and quality.",
    outcome: "Increased brand recognition by 70%",
    images: [{ src: "/work/crunchbase.png", alt: "Crunchbase Company badge logos and branded packaging" }],
  },
  {
    title: "Shivay Physiotherapy Centre",
    category: "Digital Design",
    client: "Shivay Physiotherapy Centre, Indore",
    year: "2025",
    objective:
      "Professional, trustworthy branding materials that communicate healthcare expertise, patient care, and rehabilitation services.",
    images: [{ src: "/work/shivay.png", alt: "Shivay Physiotherapy flyer and visiting card designs" }],
  },
  {
    title: "Automotive Poster Series",
    category: "Digital Design",
    client: "Poster Hub",
    year: "2024",
    objective:
      "Capture speed, precision, innovation, and exclusivity in a clean, dynamic style — engaging automobile enthusiasts across digital, print, and merchandise.",
    images: [
      { src: "/work/r34.png", alt: "Nissan Skyline GT-R R34 poster with blueprint details and red sun" },
      { src: "/work/porsche.png", alt: "Porsche GT3 RS poster with green neon outline" },
    ],
  },
  {
    title: "Udaan College Fest",
    category: "Illustration",
    client: "Acropolis Group",
    year: "2026",
    objective:
      "Engaging fest flyers that promote the event, drive student participation, and reflect the creativity and energy of the college across digital and print.",
    images: [{ src: "/work/udaan.png", alt: "Bollywood Day and Udaan college fest flyers" }],
  },
]

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionLabel index="03">Selected work</SectionLabel>
          <h2 className="mt-6 font-display text-6xl leading-none md:text-8xl">Projects</h2>
        </div>
        <p className="max-w-sm text-muted">Branding, digital design, and illustration for clients in Indore and beyond.</p>
      </div>

      <div className="mt-16 flex flex-col gap-24">
        {projects.map((project, i) => (
          <article key={project.title} className="grid gap-8 md:grid-cols-12">
            <div
              className={`grid gap-4 md:col-span-8 ${project.images.length > 1 ? "grid-cols-2" : "grid-cols-1"} ${
                i % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              {project.images.map((image) => (
                <div
                  key={image.src}
                  className={`relative overflow-hidden rounded-lg bg-surface ${
                    project.images.length > 1 ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 66vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-end gap-6 md:col-span-4">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted">
                <span className="text-accent">{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-display text-5xl leading-none text-balance">{project.title}</h3>
              <dl className="flex flex-col gap-4 border-t border-line pt-6">
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted">Client</dt>
                  <dd className="mt-1">{project.client}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted">Objective</dt>
                  <dd className="mt-1 leading-relaxed text-muted">{project.objective}</dd>
                </div>
                {project.outcome && (
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted">Outcome</dt>
                    <dd className="mt-1 flex items-baseline gap-3">
                      <span className="font-display text-5xl text-accent">70%</span>
                      <span className="text-sm text-muted">{project.outcome}</span>
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
