"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { bookingAppDomicilioUrl } from "@/lib/brand"
import { trackBookingClick } from "@/lib/analytics"
import { fadeInUp, viewportOnce } from "@/lib/motion"

export function EditorialBreak() {
  return (
    <section id="como-empezamos" aria-labelledby="remi-video-title" className="scroll-mt-28 bg-sky-50/50 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="lg:col-span-7"
        >
          <video
            controls
            playsInline
            preload="none"
            poster="/images/remi-evaluacion-portada.jpg"
            width={1280}
            height={720}
            aria-label="Remi explica cómo comienza una evaluación de rehabilitación a domicilio"
            aria-describedby="remi-video-description"
            className="aspect-video w-full rounded-2xl border border-sky-900/10 bg-sky-900 shadow-lg"
          >
            <source src="/videos/remi-evaluacion-domiciliaria.mp4" type="video/mp4" />
            Tu navegador no puede reproducir este video. Puedes leer su contenido debajo.
          </video>
          <p className="mt-3 text-sm text-muted-foreground">24 segundos · Video con voz y subtítulos</p>
          <details className="mt-4 text-sm leading-relaxed text-foreground/80">
            <summary className="w-fit cursor-pointer rounded font-medium text-sky-800 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Leer el contenido del video</summary>
            <div className="mt-3 space-y-3">
              <p>Tu familiar volvió del hospital. ¿Cómo sigue su rehabilitación en casa? Soy Remi, de Rehabilítame.</p>
              <p>Comenzamos con una evaluación para conocer qué necesita, qué actividades le cuestan y acordar objetivos junto a su familia.</p>
              <p>Kinesiología y Fonoaudiología en Iquique y Alto Hospicio. Solicita tu evaluación a domicilio. Confirmamos contigo profesional, valor y horario.</p>
            </div>
          </details>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          transition={{ delay: 0.15 }}
          className="lg:col-span-5"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-olive-700">Conoce cómo trabajamos</p>
          <h2 id="remi-video-title" className="text-balance text-3xl font-semibold leading-tight tracking-tight text-sky-900 md:text-4xl">¿Cómo empieza la rehabilitación en casa?</h2>
          <p id="remi-video-description" className="mt-5 text-base leading-relaxed text-foreground/80">
            Remi te cuenta el primer paso: una evaluación para conocer las necesidades de cada persona y acordar objetivos junto a su familia.
          </p>
          <a
            href={bookingAppDomicilioUrl}
            onClick={() => trackBookingClick("remi_video")}
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
          >
            Solicitar evaluación a domicilio
            <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
          </a>
          <p className="mt-3 text-sm leading-relaxed text-foreground/75">
            Confirmamos contigo profesional, valor y horario antes de agendar.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
