import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContextualCta } from "@/components/contextual-cta"
import { resources } from "@/lib/resources"
import { getRehabilitationPage } from "@/lib/rehabilitation"

type Props = { params: Promise<{ slug: string }> }
export const dynamicParams = false
export function generateStaticParams() { return resources.map(resource => ({ slug: resource.slug })) }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const resource = resources.find(item => item.slug === slug)
  if (!resource) notFound()
  return { title: `${resource.title} | Rehabilitame`, description: resource.description, alternates: { canonical: `/recursos/${slug}` }, openGraph: { title: resource.title, description: resource.description, url: `/recursos/${slug}`, type: "article", images: ["/images/domicilio-paciente.webp"] } }
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params
  const resource = resources.find(item => item.slug === slug)
  if (!resource) notFound()
  const service = getRehabilitationPage(resource.service)!
  return <><Navigation /><main id="contenido" className="px-5 py-12 md:px-8 md:py-20"><article className="mx-auto max-w-3xl"><Link href="/recursos" className="inline-flex min-h-11 items-center text-base text-sky-800 underline underline-offset-4">Recursos para familias</Link><h1 className="mt-7 text-balance text-4xl font-semibold leading-tight tracking-tight text-sky-900 md:text-5xl">{resource.title}</h1><p className="mt-6 text-lg leading-relaxed text-muted-foreground">{resource.description}</p><div className="mt-12 space-y-10">{resource.sections.map(section => <section key={section.title}><h2 className="text-2xl font-semibold text-sky-900">{section.title}</h2><p className="mt-4 text-lg leading-relaxed text-muted-foreground">{section.text}</p></section>)}</div><aside className="mt-12 border-t border-sky-900/20 pt-6"><p className="text-sm leading-relaxed text-muted-foreground">Información general para preparar la consulta. Fuente de referencia: <a href={resource.source.url} target="_blank" rel="noopener noreferrer" className="text-sky-800 underline underline-offset-4">{resource.source.title}</a>.</p></aside><section className="mt-12 rounded-3xl bg-sky-50 p-6 md:p-8"><h2 className="text-2xl font-semibold text-sky-900">¿Necesitas orientación para tu familiar?</h2><p className="my-5 text-base leading-relaxed text-muted-foreground">Conoce nuestra atención de <Link href={`/${service.slug}`} className="text-sky-800 underline underline-offset-4">{service.label.toLowerCase()}</Link> en Iquique y Alto Hospicio.</p><ContextualCta source="resource_final" service={service.label} /></section></article></main><Footer /></>
}
