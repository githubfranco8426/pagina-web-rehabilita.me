"use client"

import { useState } from "react"
import { ArrowRight, Baby, Brain, ChevronLeft, ChevronDown, HeartPulse, Stethoscope, Wind } from "lucide-react"
import { bookingAppReservarUrl, whatsappConsultasLink } from "@/lib/brand"
import { trackBookingClick, trackEngagement, trackWhatsappClick } from "@/lib/analytics"

type Need = "postalta" | "neuro" | "autonomia" | "respiracion" | "lactancia" | "habla" | "maxilofacial" | "deglucion"

const needs: { id: Need; label: string; description: string; icon: typeof Wind }[] = [
  { id: "postalta", label: "Después de una hospitalización", description: "Volver a casa después de una estadía en UCI o un alta hospitalaria", icon: HeartPulse },
  { id: "neuro", label: "ACV o condición neurológica", description: "Movimiento, comunicación y actividades cotidianas", icon: Brain },
  { id: "autonomia", label: "Pérdida de autonomía", description: "Levantarse, caminar o realizar actividades en casa", icon: HeartPulse },
  { id: "respiracion", label: "Respiración", description: "Tos, flemas, falta de aire o recuperación post alta", icon: Wind },
  { id: "lactancia", label: "Lactancia o frenillo", description: "Succión, agarre, dolor o dudas en los primeros meses", icon: Baby },
  { id: "habla", label: "Habla o comunicación", description: "Voz, lenguaje o comunicación después de una condición neurológica", icon: Brain },
  { id: "maxilofacial", label: "Mandíbula o cara", description: "Dolor mandibular, ATM o rehabilitación maxilofacial", icon: Stethoscope },
  { id: "deglucion", label: "Deglución", description: "Dificultad o inseguridad al comer y beber", icon: HeartPulse },
]

const recommendations: Record<Need, { title: string; copy: string; message: string; accent: string }> = {
  postalta: {
    title: "Rehabilitación post hospitalización",
    copy: "Evaluamos fuerza, movilidad, respiración y las necesidades de comunicación o deglución para orientar la recuperación en casa.",
    message: "Hola, quisiera coordinar una evaluación de rehabilitación después de una hospitalización.",
    accent: "text-sky-800 bg-sky-50 border-sky-200",
  },
  neuro: {
    title: "Rehabilitación neurológica en casa",
    copy: "Cuéntanos qué actividades le cuestan a tu familiar. Evaluamos el caso para definir objetivos y las disciplinas pertinentes.",
    message: "Hola, necesito orientación sobre rehabilitación neurológica a domicilio.",
    accent: "text-sky-800 bg-sky-50 border-sky-200",
  },
  autonomia: {
    title: "Recuperación funcional en el hogar",
    copy: "Orientamos la evaluación de movilidad y actividades cotidianas. Si se requiere Terapia Ocupacional, conversamos sobre su coordinación con el equipo tratante.",
    message: "Hola, necesito orientación para recuperar movilidad y autonomía en casa.",
    accent: "text-sky-800 bg-sky-50 border-sky-200",
  },
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
  const [open, setOpen] = useState(false)
  const [selectedNeed, setSelectedNeed] = useState<Need | null>(null)
  const result = selectedNeed ? recommendations[selectedNeed] : null

  function chooseNeed(need: Need) {
    setSelectedNeed(need)
    const recommendation = recommendations[need]
    window.dispatchEvent(new CustomEvent("rehabilitame:service-selected", { detail: { message: recommendation.message } }))
    trackEngagement("service_path_selected", { path: need })
  }

  return (
    <div className="mt-6">
      <button type="button" aria-expanded={open} aria-controls="service-finder-panel" onClick={() => { setOpen(!open); if (!open) trackEngagement("service_finder_opened", { source: "home_services" }) }} className="inline-flex min-h-11 items-center gap-3 rounded-full border border-sky-900/20 bg-white px-5 py-3 text-sm font-semibold text-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700">
        No sé qué atención necesito <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      <div id="service-finder-panel" hidden={!open} className="mt-5 rounded-3xl border border-sky-900/10 bg-white p-6 md:p-8">
        <div className="max-w-2xl">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">Te ayudamos a elegir</h3>
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
          <div aria-live="polite" className={`mt-8 rounded-2xl border p-6 lg:flex lg:items-center lg:justify-between lg:gap-8 ${result.accent}`}>
            <div className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-[0.16em] opacity-70">Te recomendamos</p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight">{result.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-80">{result.copy}</p>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-0">
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
    </div>
  )
}
