"use client"

import Image from "next/image"
import { ArrowUpRight, FileCheck2, ReceiptText, ShieldCheck } from "lucide-react"
import { whatsappConsultasLink } from "@/lib/brand"
import { trackWhatsappClick } from "@/lib/analytics"

const isapres = [
  { name: "Banmédica", image: "banmedica.png", url: "https://www.banmedica.cl/" },
  { name: "Colmena", image: "colmena.png", url: "https://www.colmena.cl/" },
  { name: "Consalud", image: "consalud.png", url: "https://www.consalud.cl/" },
  { name: "Cruz Blanca", image: "cruz-blanca.png", url: "https://www.cruzblanca.cl/" },
  { name: "Nueva Masvida", image: "nueva-masvida.jpg", url: "https://www.nuevamasvida.cl/" },
  { name: "Vida Tres", image: "vida-tres.png", url: "https://www.vidatres.cl/" },
  { name: "Esencial", image: "esencial.png", url: "https://www.somosesencial.cl/" },
  { name: "Isalud", image: "isalud.png", url: "https://www.isapredecodelco.cl/" },
  { name: "Fundación", image: "fundacion.png", url: "https://www.isaprefundacion.cl/" },
  { name: "Cruz del Norte", image: "cruz-del-norte.png", url: "https://www.isaprecruzdelnorte.cl/" },
]

const steps = [
  {
    icon: ShieldCheck,
    title: "Consulta tu cobertura",
    description: "Confirma con tu Isapre la cobertura de la atención y si necesitas orden médica, también para domicilio.",
  },
  {
    icon: ReceiptText,
    title: "Guarda tu boleta",
    description: "Pagas la atención y te entregamos la boleta de honorarios para presentar tu solicitud.",
  },
  {
    icon: FileCheck2,
    title: "Solicita tu reembolso",
    description: "Presenta la boleta y los antecedentes que te pida tu Isapre a través de sus canales de atención.",
  },
]

export function ReimbursementSection() {
  return (
    <section id="reembolsos" aria-labelledby="reembolsos-title" className="scroll-mt-28 border-y border-sky-900/10 bg-white px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-olive-700">Boleta para reembolso</p>
            <h2 id="reembolsos-title" className="text-balance text-3xl font-semibold leading-tight tracking-tight text-sky-900 md:text-4xl">Solicita reembolso en tu Isapre</h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-foreground/80">
            Emitimos boleta de honorarios por tu atención de Kinesiología o Fonoaudiología. Puedes presentarla para solicitar reembolso, según la cobertura de tu plan.
          </p>
        </div>
        <div className="mt-8">
          <p className="mb-4 text-sm font-medium text-foreground/75">Consulta los requisitos directamente en tu Isapre:</p>
          <ul aria-label="Sitios oficiales de las Isapres" className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {isapres.map(({ name, image, url }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ir al sitio oficial de ${name} (abre en otra pestaña)`}
                  className="flex min-h-24 items-center justify-center rounded-2xl border border-sky-900/10 bg-white px-5 py-5 transition-colors hover:border-olive-700/40 hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
                >
                  <Image src={`/images/isapres/${image}`} alt={name} width={180} height={60} className="h-12 w-full max-w-40 object-contain" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ol className="mt-9 grid gap-4 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <li key={title} className="rounded-2xl border border-sky-900/10 bg-background p-6">
              <div className="mb-5 flex items-center justify-between">
                <Icon className="size-6 text-olive-700" aria-hidden="true" />
                <span className="text-sm font-semibold text-sky-700" aria-hidden="true">0{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-sky-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-col gap-4 border-t border-sky-900/10 pt-6 md:flex-row md:items-center md:justify-between md:gap-8">
          <p className="max-w-3xl text-sm leading-relaxed text-foreground/75">La cobertura, el monto y la aprobación del reembolso dependen de tu plan y de los requisitos de tu Isapre. Confírmalos antes de atenderte.</p>
          <a
            href={whatsappConsultasLink("Hola, quisiera orientación sobre la boleta para solicitar reembolso en mi Isapre.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsappClick("reembolsos")}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start text-sm font-semibold text-sky-800 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Consultar por reembolso
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
