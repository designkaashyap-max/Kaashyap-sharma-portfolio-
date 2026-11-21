import type { Metadata, Viewport } from "next"
import { Bebas_Neue, Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" })

export const metadata: Metadata = {
  title: "Kaashyap Sharma — Graphic Designer & Visual Creative",
  description:
    "Kaashyap Sharma is a graphic designer and visual creative specializing in branding, visual identity, digital design, typography, posters, and creative storytelling.",
  keywords: [
    "Kaashyap Sharma",
    "Graphic Designer",
    "Brand Identity",
    "Typography",
    "Poster Design",
    "Digital Design",
    "Indore",
  ],
  authors: [{ name: "Kaashyap Sharma" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    title: "Kaashyap Sharma — Graphic Designer & Visual Creative",
    description: "I design visual experiences that make people stop and look.",
    images: ["/work/r34.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaashyap Sharma — Graphic Designer & Visual Creative",
    description: "I design visual experiences that make people stop and look.",
    images: ["/work/r34.png"],
  },
}

export const viewport: Viewport = {
  themeColor: "#090909",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
