"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight, Wind, Baby, Activity, Ear, Brain, Utensils } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { bookingAppReservarUrl, whatsappConsultasLink } from "@/lib/brand"
import { trackBookingClick, trackWhatsappClick } from "@/lib/analytics"
import { fadeInUp, viewportOnce } from "@/lib/motion"
import { WhatsappIcon } from "@/components/whatsapp-icon"

const kinesiologiaServices: {
  icon: React.ElementType
  title: string
  category: string
  accent: "sky" | "terracotta"
  description: string
}[] = [
  {
    icon: Wind,
    title: "Respiratorio adulto",
    category: "Kinesiología respiratoria",
    accent: "sky",
    description:
      "Manejo de secreciones, entrenamiento de la musculatura respiratoria y recuperación funcional tras una enfermedad respiratoria o una hospitalización.",
  },
  {
    icon: Baby,
    title: "Respiratorio infantil",
    category: "Kinesiología respiratoria",
    accent: "sky",
    description:
      "Acompañamiento respiratorio para niños y niñas, desde recién nacidos hasta escolares, con foco en la familia.",
  },
  {
    icon: Activity,
    title: "Maxilofacial",
    category: "Kinesiología maxilofacial",
    accent: "sky",
    description:
      "Trabajo conjunto con odontólogos en rehabilitación de la musculatura facial y de la articulación temporomandibular.",
  },
]

const fonoaudiologiaServices: (typeof kinesiologiaServices)[number][] = [
  {
    icon: Ear,
    title: "Frenillo y lactancia",
    category: "Fonoaudiología",
    accent: "terracotta",
    description:
      "Evaluación de frenillo lingual corto, respiración oral y dificultades de lactancia en los primeros meses de vida.",
  },
  {
    icon: Brain,
    title: "Neuro-adultos",
    category: "Fonoaudiología",
    accent: "terracotta",
    description:
      "Rehabilitación del habla, la voz y la deglución en personas adultas después de un ACV u otra condición neurológica.",
  },
  {
    icon: Utensils,
    title: "Deglución",
    category: "Fonoaudiología",
    accent: "terracotta",
    description:
      "Evaluación y rehabilitación de trastornos de la deglución (disfagia), en adultos mayores, post-hospitalización o enfermedades neurológicas, para comer y beber de forma segura.",
  },
]

const accentClasses = {
  sky: {
    badge: "bg-sky-500/10 text-sky-600",
    tag: "text-sky-600",
    border: "border-sky-600/40 hover:border-sky-600",
  },
  terracotta: {
    badge: "bg-terracotta-500/10 text-terracotta-600",
    tag: "text-terracotta-600",
    border: "border-terracotta-600/40 hover:border-terracotta-600",
  },
} as const

function ServiceCard({
  service,
  index,
  active,
}: {
  service: (typeof kinesiologiaServices)[number]
  index: number
  active: boolean
}) {
  const Icon = service.icon

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className={cn(
        "p-8 md:p-9 rounded-2xl transition-colors duration-300 flex flex-col gap-6",
        active
          ? "bg-sky-500 text-white shadow-2xl shadow-sky-500/20"
          : "bg-card text-card-foreground border border-border",
      )}
    >
      <div
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
          active ? "bg-white/20" : accentClasses[service.accent].badge,
        )}
      >
        <Icon className="h-5 w-5" />
      </div>

      <div className="space-y-3">
        <p
          className={cn(
            "text-[11px] tracking-[0.15em] uppercase",
            active ? "text-white/70" : accentClasses[service.accent].tag,
          )}
        >
          {service.category}
        </p>
        <h3 className="text-xl font-light tracking-tight">{service.title}</h3>
        <p className={cn("text-sm leading-[1.7]", active ? "text-white/80" : "text-muted-foreground")}>
          {service.description}
        </p>
        <a
          href={bookingAppReservarUrl}
          target="_blank"
          rel="noopener"
          onClick={() => trackBookingClick(`service_card_${service.title}`)}
          className={cn(
            "inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase border-b pb-0.5 transition-colors duration-300",
            active ? "text-white border-white/40 hover:border-white" : `text-foreground ${accentClasses[service.accent].border}`,
          )}
        >
          Agendar este servicio
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.div>
  )
}

export function ServicesSection() {
  return (
    <section id="servicios" className="py-28 md:py-36 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="lg:col-span-4 lg:sticky lg:top-32"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Servicios</p>
          <p className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground mb-5 text-balance">
            Un centro, un mismo objetivo
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-5">
            En rehabilita.me abordamos cada caso desde una evaluación individual, entendiendo que la
            recuperación depende de múltiples factores: historia clínica, entorno, capacidad
            respiratoria, movilidad y objetivos personales de cada paciente.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            Trabajamos con un enfoque cercano y práctico — muchas veces en tu propio hogar — para que
            entiendas tu proceso y participes activamente en tu recuperación.
          </p>

          <p className="text-[11px] tracking-[0.15em] text-muted-foreground/50 mb-6 max-w-xs">
            Si no sabes cuál corresponde a tu caso, escríbenos y te orientamos antes de agendar.
          </p>

          <div className="flex items-center gap-3">
            <Button
              asChild
              className="bg-sky-500 text-white rounded-full px-6 h-11 font-medium hover:bg-sky-600 transition-colors"
            >
              <a
                href={bookingAppReservarUrl}
                target="_blank"
                rel="noopener"
                onClick={() => trackBookingClick("services_main")}
              >
                Agendar hora
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={whatsappConsultasLink("Hola, no estoy seguro/a qué servicio necesito, ¿me pueden orientar?")}
              target="_blank"
              rel="noopener"
              onClick={() => trackWhatsappClick("services_orientacion")}
              aria-label="Escríbenos por WhatsApp"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-colors duration-300 hover:bg-[#1ebe57]"
            >
              <WhatsappIcon className="h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>

        <div className="lg:col-span-8 flex flex-col gap-16">
          <div id="kinesiologia">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-sky-600 mb-6">
              Kinesiología respiratoria y maxilofacial
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {kinesiologiaServices.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} active={index === 0} />
              ))}
            </div>
          </div>

          <div id="fonoaudiologia">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-terracotta-600 mb-6">
              Fonoaudiología
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fonoaudiologiaServices.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} active={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
