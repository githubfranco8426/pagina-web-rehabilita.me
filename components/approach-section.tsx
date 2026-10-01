"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { ArrowRight, Building2, Home, MapPin, Video } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { bookingAppReservarUrl, brand } from "@/lib/brand"
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion"

const ClinicMap = dynamic(() => import("@/components/ui/clinic-map").then((mod) => mod.ClinicMap), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-muted animate-pulse" />,
})

const modalities = [
  {
    number: "01",
    title: "Consulta particular",
    description:
      "Evaluación, atención y seguimiento de tratamiento de kinesiología respiratoria, kinesiología maxilofacial y fonoaudiología: frenillo lingual, lactancia y neuro-adultos.",
    icon: Building2,
    color: "sky",
  },
  {
    number: "02",
    title: "Domicilio",
    description:
      "Vamos a tu domicilio en Iquique y Alto Hospicio. Así puedes recibir atención en tu propio entorno cuando trasladarte resulta difícil.",
    icon: Home,
    color: "terracotta",
  },
  {
    number: "03",
    title: "Online",
    description:
      "Si decides darle continuidad a tu tratamiento o te encuentras fuera de la región, agenda en esta modalidad.",
    icon: Video,
    color: "sky",
  },
] as const

const numberColor = {
  sky: "text-sky-600",
  terracotta: "text-terracotta-600",
} as const

const lineColor = {
  sky: "bg-sky-500",
  terracotta: "bg-terracotta-500",
} as const

const iconBadge = {
  sky: "bg-sky-500/10 text-sky-600",
  terracotta: "bg-terracotta-500/10 text-terracotta-600",
} as const

function ModalityCard({ modality }: { modality: (typeof modalities)[number] }) {
  const Icon = modality.icon

  return (
    <motion.div variants={staggerItem} className="bg-background p-8 md:p-10 group">
      <div className="flex items-center justify-between mb-8">
        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${iconBadge[modality.color]}`}>
          <Icon className="h-5 w-5" />
        </span>
        <span className={`text-[11px] tracking-[0.15em] font-medium ${numberColor[modality.color]}`}>
          ({modality.number})
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-extralight tracking-tight text-foreground mb-5 group-hover:translate-x-1 transition-transform duration-500">
        {modality.title}
      </h3>
      <div className={`w-8 h-px mb-5 group-hover:w-12 transition-all duration-500 ${lineColor[modality.color]}`} />
      <p className="text-sm leading-[1.75] text-muted-foreground max-w-sm">{modality.description}</p>
    </motion.div>
  )
}

export function ApproachSection() {
  const [mapVisible, setMapVisible] = useState(false)
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(brand.contact.address)}`

  return (
    <section id="approach" className="px-6 py-28 md:px-12 lg:px-20 md:py-36">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
        className="mb-20 pb-6 border-b border-border"
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Cómo trabajamos</p>
        <h2 className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground">
          Tres formas de atenderte
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="grid grid-cols-1 gap-px bg-border"
        >
          {modalities.map((modality) => (
            <ModalityCard key={modality.number} modality={modality} />
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="grid grid-cols-1 gap-px bg-border"
        >
          <div className="bg-background p-8 md:p-12 flex flex-col justify-center">
            <span className="text-[11px] tracking-[0.15em] uppercase font-medium text-sky-600">Ubicación</span>
            <h3 className="text-xl md:text-2xl font-extralight tracking-tight text-foreground mt-5 mb-5">
              Nuestra consulta presencial
            </h3>
            <div className="w-8 h-px mb-5 bg-sky-500" />
            <p className="text-sm leading-[1.75] text-muted-foreground max-w-sm">{brand.contact.address}</p>
            <p className="text-sm leading-[1.75] text-muted-foreground max-w-sm mt-2">{brand.contact.city}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="w-fit rounded-full bg-sky-500 text-white px-6 h-11 font-medium hover:bg-sky-600 transition-colors">
                <a href={bookingAppReservarUrl} target="_blank" rel="noopener">Agendar hora <ArrowRight className="size-4" /></a>
              </Button>
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center gap-2 rounded-full border border-sky-700/20 px-5 text-sm font-medium text-sky-800 transition hover:bg-sky-50">
                <MapPin className="size-4" /> Cómo llegar
              </a>
            </div>
          </div>
          <div className="relative h-[320px] w-full min-w-0 bg-sky-50 lg:h-[420px]">
            {mapVisible ? (
              <ClinicMap />
            ) : (
              <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                <MapPin className="size-8 text-sky-700" aria-hidden="true" />
                <p className="mt-4 font-medium text-foreground">Consulta presencial en Iquique</p>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">Activa el mapa interactivo sólo si necesitas explorar la ubicación.</p>
                <button type="button" onClick={() => setMapVisible(true)} className="mt-5 rounded-full bg-sky-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-2">
                  Ver mapa interactivo
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
