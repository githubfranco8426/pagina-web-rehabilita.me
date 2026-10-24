"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Volume2, VolumeX } from "lucide-react"
import { bookingAppDomicilioUrl } from "@/lib/brand"
import { trackBookingClick } from "@/lib/analytics"
import { fadeInUp, viewportOnce } from "@/lib/motion"

export function EditorialBreak() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const inViewRef = useRef(false)
  const userPausedRef = useRef(false)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video || !("IntersectionObserver" in window)) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const observer = new IntersectionObserver(([entry]) => {
      const inView = entry.isIntersecting && entry.intersectionRatio >= 0.35
      inViewRef.current = inView

      if (!inView) {
        video.pause()
      } else if (!reducedMotion.matches && !userPausedRef.current && !video.ended) {
        void video.play().then(() => {
          if (!inViewRef.current) video.pause()
        }).catch(() => {
          // Native controls remain available when autoplay is unavailable.
        })
      }
    }, { threshold: [0, 0.35] })

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

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
            ref={videoRef}
            controls
            muted
            playsInline
            preload="none"
            poster="/images/remi-evaluacion-portada.jpg"
            width={1280}
            height={720}
            aria-label="Remi explica cómo comienza una evaluación de rehabilitación a domicilio"
            aria-describedby="remi-video-description"
            onVolumeChange={() => setIsMuted(videoRef.current?.muted ?? true)}
            onPause={() => {
              if (inViewRef.current && !videoRef.current?.ended) userPausedRef.current = true
            }}
            onPlay={() => { userPausedRef.current = false }}
            className="aspect-video w-full rounded-2xl border border-sky-900/10 bg-sky-900 shadow-lg"
          >
            <source src="/videos/remi-evaluacion-domiciliaria.mp4" type="video/mp4" />
            Tu navegador no puede reproducir este video. Puedes leer su contenido debajo.
          </video>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">24 segundos · Con subtítulos</p>
            <button
              type="button"
              aria-pressed={!isMuted}
              aria-label={isMuted ? "Activar sonido del video de Remi" : "Silenciar video de Remi"}
              onClick={() => {
                if (videoRef.current) videoRef.current.muted = !videoRef.current.muted
              }}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-sky-900/20 bg-white px-4 py-2 text-sm font-semibold text-sky-800 transition-colors hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
            >
              {isMuted ? <VolumeX className="size-4" aria-hidden="true" /> : <Volume2 className="size-4" aria-hidden="true" />}
              {isMuted ? "Activar sonido" : "Silenciar"}
            </button>
          </div>
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
