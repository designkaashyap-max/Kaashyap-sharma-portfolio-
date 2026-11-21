import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Work } from "@/components/work"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}
