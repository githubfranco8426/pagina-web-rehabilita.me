"use client"

import { useState } from "react"
import { ArrowRight, Baby, Brain, ChevronLeft, HeartPulse, Stethoscope, Wind } from "lucide-react"
import { bookingAppReservarUrl, whatsappConsultasLink } from "@/lib/brand"
import { trackBookingClick, trackEngagement, trackWhatsappClick } from "@/lib/analytics"

type Need = "respiracion" | "lactancia" | "habla" | "maxilofacial" | "deglucion"

const needs: { id: Need; label: string; description: string; icon: typeof Wind }[] = [
  { id: "respiracion", label: "Respiración", description: "Tos, flemas, falta de aire o recuperación post alta", icon: Wind },
  { id: "lactancia", label: "Lactancia o frenillo", description: "Succión, agarre, dolor o dudas en los primeros meses", icon: Baby },
  { id: "habla", label: "Habla o comunicación", description: "Voz, lenguaje o comunicación después de una condición neurológica", icon: Brain },
  { id: "maxilofacial", label: "Mandíbula o cara", description: "Dolor mandibular, ATM o rehabilitación maxilofacial", icon: Stethoscope },
  { id: "deglucion", label: "Deglución", description: "Dificultad o inseguridad al comer y beber", icon: HeartPulse },
]

const recommendations: Record<Need, { title: string; copy: string; message: string; accent: string }> = {
  respiracion: {
    title: "Kinesiología respiratoria",
    copy: "Evaluamos el caso y te orientamos sobre la atención más adecuada, en consulta o domicilio.",
    message: "Hola, necesito orientación sobre kinesiología respiratoria.",
    accent: "text-sky-700 bg-sky-50 border-sky-200",
  },
  lactancia: {
    title: "Fonoaudiología: lactancia y frenillo",
    copy: "Podemos evaluar succión, frenillo lingual y acompañar el proceso de lactancia.",
    message: "Hola, necesito orientación sobre lactancia o frenillo lingual.",
    accent: "text-terracotta-700 bg-terracotta-50 border-terracotta-200",
  },
  habla: {
    title: "Fonoaudiología para adultos",
    copy: "Acompañamos procesos de habla, voz y comunicación con objetivos claros para cada persona.",
    message: "Hola, necesito orientación sobre fonoaudiología para habla o comunicación.",
    accent: "text-terracotta-700 bg-terracotta-50 border-terracotta-200",
  },
  maxilofacial: {
    title: "Kinesiología maxilofacial",
    copy: "Trabajamos la musculatura facial y mandibular, coordinándonos con tu odontólogo cuando corresponde.",
    message: "Hola, necesito orientación sobre kinesiología maxilofacial o dolor mandibular.",
    accent: "text-sky-700 bg-sky-50 border-sky-200",
  },
  deglucion: {
    title: "Fonoaudiología para deglución",
    copy: "Evaluamos dificultades al comer y beber para definir una atención segura y personalizada.",
    message: "Hola, necesito orientación sobre dificultades de deglución.",
    accent: "text-terracotta-700 bg-terracotta-50 border-terracotta-200",
  },
}

export function ServiceFinder() {
  const [selectedNeed, setSelectedNeed] = useState<Need | null>(null)
  const result = selectedNeed ? recommendations[selectedNeed] : null

  function chooseNeed(need: Need) {
    setSelectedNeed(need)
    const recommendation = recommendations[need]
    window.dispatchEvent(new CustomEvent("rehabilitame:service-selected", { detail: { message: recommendation.message } }))
    trackEngagement("service_finder_answered", { need })
  }

  return (
    <section aria-labelledby="service-finder-title" className="px-6 py-20 md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-sky-900/10 bg-white p-6 shadow-sm md:p-10">
        <div className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-sky-700">Encuentra tu atención</p>
          <h2 id="service-finder-title" className="mt-3 text-3xl font-light tracking-tight text-foreground md:text-4xl">
            ¿En qué necesitas ayuda?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Elige la situación que más se parece a la tuya. Te orientamos en un paso, sin pedir datos personales.
          </p>
        </div>

        {!result ? (
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {needs.map((need) => {
              const Icon = need.icon
              return (
                <button
                  key={need.id}
                  type="button"
                  onClick={() => chooseNeed(need.id)}
                  className="group rounded-2xl border border-border bg-background p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
                >
                  <Icon className="size-5 text-sky-700 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                  <span className="mt-4 block font-medium text-foreground">{need.label}</span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">{need.description}</span>
                </button>
              )
            })}
          </div>
        ) : (
          <div className={`mt-8 rounded-2xl border p-6 md:flex md:items-center md:justify-between md:gap-8 ${result.accent}`}>
            <div className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-[0.16em] opacity-70">Te recomendamos</p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight">{result.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-80">{result.copy}</p>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row md:mt-0">
              <a href={bookingAppReservarUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackBookingClick(`finder_${selectedNeed}`)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-sky-700 px-5 text-sm font-medium text-white transition hover:bg-sky-800">
                Agendar evaluación <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a href={whatsappConsultasLink(result.message)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsappClick(`finder_${selectedNeed}`)} className="inline-flex min-h-11 items-center justify-center rounded-full border border-current/30 px-5 text-sm font-medium transition hover:bg-white/50">
                Resolver una duda
              </a>
              <button type="button" onClick={() => setSelectedNeed(null)} className="inline-flex min-h-11 items-center justify-center gap-1 text-sm font-medium underline underline-offset-4">
                <ChevronLeft className="size-4" aria-hidden="true" /> Cambiar
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
