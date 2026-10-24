"use client"

import { ArrowUpRight, FileCheck2, ReceiptText, ShieldCheck } from "lucide-react"
import { whatsappConsultasLink } from "@/lib/brand"
import { trackWhatsappClick } from "@/lib/analytics"

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
