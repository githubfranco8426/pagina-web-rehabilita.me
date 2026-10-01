import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { JournalSection } from "@/components/journal-section"
import { resources } from "@/lib/resources"

export const metadata: Metadata = {
  title: "Recursos para pacientes y familias | Rehabilitame",
  description: "Orientación para acompañar la rehabilitación en casa después de una hospitalización o un ACV. Recursos de Rehabilitame en Iquique y Alto Hospicio.",
  alternates: { canonical: "/recursos" },
  openGraph: { title: "Recursos para acompañar la recuperación en casa", description: "Orientación para pacientes y familias de Rehabilitame.", url: "/recursos", images: ["/images/domicilio-paciente.webp"] },
}

export default function ResourcesPage() {
  return <><Navigation /><main id="contenido"><section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-7xl"><p className="text-sm font-semibold uppercase tracking-widest text-sky-800">Para pacientes y familias</p><h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-sky-900 md:text-5xl">Acompañar la recuperación, paso a paso.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Ideas para organizar tus dudas y preparar la evaluación. Cada proceso es distinto; el equipo tratante define las recomendaciones de tu familiar.</p><div className="mt-12 grid gap-6 md:grid-cols-2">{resources.map(resource => <Link key={resource.slug} href={`/recursos/${resource.slug}`} className="rounded-3xl border border-sky-900/15 bg-white p-7 hover:border-sky-700"><h2 className="text-2xl font-semibold leading-snug text-sky-900">{resource.title}</h2><p className="mt-4 text-base leading-relaxed text-muted-foreground">{resource.description}</p><span className="mt-6 inline-block text-base font-semibold text-sky-800 underline underline-offset-4">Leer esta guía</span></Link>)}</div></div></section><JournalSection /></main><Footer /></>
}
