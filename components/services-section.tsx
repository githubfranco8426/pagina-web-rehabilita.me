"use client"

import { Baby, Activity, Wind, ArrowUpRight } from "lucide-react"
import { whatsappConsultasLink } from "@/lib/brand"
import { trackWhatsappClick } from "@/lib/analytics"

const otherServices = [
  { icon: Wind, title: "Respiratorio infantil", text: "Evaluación respiratoria para niños y niñas, con orientación a su familia.", message: "Hola, quisiera consultar por atención respiratoria infantil.", id: "respiratorio_infantil" },
  { icon: Activity, title: "Maxilofacial", text: "Atención de la musculatura facial y mandibular, coordinada con tu odontólogo cuando corresponde.", message: "Hola, quisiera consultar por kinesiología maxilofacial.", id: "maxilofacial" },
  { icon: Baby, title: "Lactancia y frenillo", text: "Evaluación de succión y frenillo lingual para acompañar la lactancia.", message: "Hola, quisiera consultar por lactancia o frenillo lingual.", id: "lactancia" },
]

export function ServicesSection() {
  return (
    <section id="otras-atenciones" aria-labelledby="other-services-title" className="scroll-mt-24 border-t border-sky-900/10 px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 id="other-services-title" className="text-2xl font-semibold tracking-tight text-sky-900 md:text-3xl">Otras atenciones</h2>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">También puedes consultar por estas necesidades. Confirmamos contigo la modalidad y disponibilidad.</p>
        <div className="mt-7 grid gap-6 md:grid-cols-3">
          {otherServices.map(({ icon: Icon, ...service }) => (
            <article key={service.id} className="flex flex-col rounded-2xl border border-border p-5">
              <Icon className="size-5 text-sky-700" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-semibold text-sky-900">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
              <a href={whatsappConsultasLink(service.message)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsappClick(`other_service_${service.id}`)} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-sky-800 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700">
                Consultar por {service.title.toLowerCase()} <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
