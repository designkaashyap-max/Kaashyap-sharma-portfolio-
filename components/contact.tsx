import { ArrowUpRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pt-24 md:pt-32">
      <p className="text-xs uppercase tracking-[0.3em] text-muted">
        <span className="text-accent">05</span> — Let&apos;s talk
      </p>
      <h2 className="mt-6 font-display text-[18vw] leading-[0.85] md:text-[12vw]">
        Let&apos;s work
        <br />
        <span className="text-accent">together</span>
      </h2>
      <div className="mt-16 grid gap-6 border-t border-line pt-10 md:grid-cols-2">
        <a
          href="mailto:designkaashyap@gmail.com"
          className="group flex items-center justify-between rounded-lg border border-line p-6 transition-colors hover:border-accent"
        >
          <span>
            <span className="block text-xs uppercase tracking-[0.2em] text-muted">Email</span>
            <span className="mt-2 block text-lg md:text-2xl">designkaashyap@gmail.com</span>
          </span>
          <ArrowUpRight className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
        </a>
        <a
          href="tel:+91722294616"
          className="group flex items-center justify-between rounded-lg border border-line p-6 transition-colors hover:border-accent"
        >
          <span>
            <span className="block text-xs uppercase tracking-[0.2em] text-muted">Phone</span>
            <span className="mt-2 block text-lg md:text-2xl">+91 722294616</span>
          </span>
          <ArrowUpRight className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
        </a>
      </div>
      <footer className="mt-24 flex flex-col gap-2 border-t border-line py-8 text-sm text-muted md:flex-row md:justify-between">
        <p>{"© 2026 Kaashyap Sharma. All rights reserved."}</p>
        <p>Graphic Design Portfolio · Indore, India</p>
      </footer>
    </section>
  )
}
