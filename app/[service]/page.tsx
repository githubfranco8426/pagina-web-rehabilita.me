import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsappFab } from "@/components/whatsapp-fab"
import { ContextualCta } from "@/components/contextual-cta"
import { PageFaq } from "@/components/page-faq"
import { EvaluationSteps } from "@/components/rehabilitation-sections"
import { getRehabilitationPage, rehabilitationPages } from "@/lib/rehabilitation"

type Props = { params: Promise<{ service: string }> }
export const dynamicParams = false

export function generateStaticParams() {
  return rehabilitationPages.map(page => ({ service: page.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params
  const page = getRehabilitationPage(service)
  if (!page) notFound()
  return {
    title: `${page.label} en Iquique y Alto Hospicio | rehabilita.me`,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: { title: page.title, description: page.description, url: `/${page.slug}`, type: "website", images: [{ url: page.image, alt: page.imageAlt }] },
  }
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params
  const page = getRehabilitationPage(service)
  if (!page) notFound()
  const related = rehabilitationPages.filter(item => item.slug !== page.slug)
  return (
    <>
      <Navigation />
      <main id="contenido">
        <section className="bg-sky-50 px-5 pb-16 pt-8 md:px-8 md:pb-24">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Ruta de navegación" className="mb-10 flex flex-wrap gap-2 text-sm text-sky-800"><Link className="underline underline-offset-4" href="/">Inicio</Link><span aria-hidden="true">/</span><span aria-current="page">{page.label}</span></nav>
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-sky-800">Iquique y Alto Hospicio · Atención domiciliaria</p>
                <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight text-sky-900 md:text-5xl">{page.title}</h1>
                <p className="mt-6 text-lg leading-relaxed text-foreground/80">{page.intro}</p>
                <div className="mt-8"><ContextualCta service={page.label} source="landing_hero" /></div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Si no sabes qué profesional necesitas, te orientamos antes de agendar.</p>
              </div>
              <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] bg-sky-100 sm:min-h-[420px]"><Image src={page.image} alt={page.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 540px" className="object-cover object-top" /></div>
            </div>
          </div>
        </section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"><h2 className="text-3xl font-semibold tracking-tight text-sky-900">¿En qué situaciones puede ayudar una evaluación?</h2><ul className="space-y-4">{page.situations.map(item => <li key={item} className="border-l-2 border-sky-600 pl-5 text-lg leading-relaxed text-foreground/80">{item}</li>)}</ul></div></section>
        <section className="bg-sky-900 px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto max-w-7xl"><h2 className="text-3xl font-semibold tracking-tight">Objetivos según tu caso</h2><div className="mt-10 grid gap-8 md:grid-cols-3">{page.goals.map(goal => <div key={goal.title}><h3 className="text-xl font-semibold">{goal.title}</h3><p className="mt-4 text-base leading-relaxed text-white/85">{goal.text}</p></div>)}</div><p className="mt-10 border-t border-white/25 pt-6 text-base leading-relaxed text-white/85">El plan se define tras evaluar y se revisa según la evolución. Puedes conocer a <Link href="/#nosotros" className="font-semibold underline underline-offset-4">nuestro equipo de Kinesiología y Fonoaudiología</Link>.</p></div></section>
        <EvaluationSteps />
        <PageFaq faqs={page.faqs} page={page.slug} />
        <section className="px-5 py-16 md:px-8"><div className="mx-auto max-w-7xl"><h2 className="text-3xl font-semibold text-sky-900">Atención en tu hogar</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Atendemos a domicilio en Iquique y Alto Hospicio. Consúltanos para confirmar tu sector y coordinar una evaluación. También contamos con atención en consulta y online según el servicio.</p><div className="mt-8"><ContextualCta service={page.label} source="landing_final" /></div><h2 className="mt-16 text-2xl font-semibold text-sky-900">Otras necesidades de rehabilitación</h2><ul className="mt-5 grid gap-3 sm:grid-cols-2">{related.map(item => <li key={item.slug}><Link href={`/${item.slug}`} className="inline-flex min-h-11 items-center text-base font-medium text-sky-800 underline underline-offset-4">{item.label}</Link></li>)}</ul></div></section>
      </main>
      <Footer />
      <WhatsappFab service={page.label} />
    </>
  )
}
