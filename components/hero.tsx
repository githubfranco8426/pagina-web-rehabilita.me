"use client"

import { motion } from "framer-motion"
import { Calendar, Stethoscope, Instagram, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { bookingAppReservarUrl, brand } from "@/lib/brand"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const floatingVariants = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
  },
}

const stats = [
  { icon: Award, value: "10+", label: "Años de trayectoria" },
  { icon: Calendar, value: "3", label: "Modalidades de atención" },
]

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-sky-50 via-background to-terracotta-50 px-6 pt-32 pb-20 md:px-12 lg:px-20 md:pt-40 md:pb-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
        {/* Left: text content */}
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 mb-8"
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-emerald-500"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-xs tracking-wide text-muted-foreground">Disponible para atenciones</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-extralight leading-[1.15] tracking-tight text-foreground text-balance"
          >
            Cuando respirar cuesta, <span className="text-terracotta-500">cada minuto importa.</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mt-6 max-w-md flex flex-col gap-4">
            <p className="text-sm md:text-base leading-[1.75] text-muted-foreground">
              Porque tu tranquilidad y tu salud son la prioridad. En Rehabilita.me combinamos
              experiencia clínica y cuidado humano para ayudarte a recuperar tu bienestar.
            </p>
            <p className="text-sm md:text-base leading-[1.75] text-muted-foreground">
              Cuidamos de ti con servicios de kinesiología respiratoria, maxilofacial y
              fonoaudiología, para toda la familia.
            </p>
            <p className="text-sm md:text-base leading-[1.75] text-muted-foreground">
              🏡 Atención a domicilio en Iquique, en consulta y vía online.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-sky-500 hover:bg-sky-600 text-white px-6 h-12 text-xs tracking-[0.1em] uppercase gap-2"
            >
              <a href={bookingAppReservarUrl} target="_blank" rel="noopener">
                <Calendar className="h-4 w-4" />
                Quiero agendar una consulta
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-border px-6 h-12 text-xs tracking-[0.1em] uppercase gap-2 bg-transparent"
            >
              <a href="#servicios">
                <Stethoscope className="h-4 w-4" />
                Conocer servicios
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-border px-6 h-12 text-xs tracking-[0.1em] uppercase gap-2 bg-transparent"
            >
              <a href={brand.contact.instagramUrl} target="_blank" rel="noopener">
                <Instagram className="h-4 w-4" />
                Seguir en Instagram
              </a>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xl font-medium text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: image collage */}
        <motion.div
          className="relative h-[380px] w-full sm:h-[460px] lg:h-[500px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative shapes */}
          <motion.div
            className="absolute -top-4 left-1/4 h-16 w-16 rounded-full bg-sky-200/60"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-0 right-1/4 h-12 w-12 rounded-lg bg-terracotta-200/60"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: "0.5s" }}
          />
          <motion.div
            className="absolute bottom-1/4 left-4 h-6 w-6 rounded-full bg-olive-100"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: "1s" }}
          />

          {/* Images */}
          <motion.div
            className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-2xl bg-background p-2 shadow-xl sm:h-60 sm:w-60"
            style={{ transformOrigin: "bottom center" }}
            variants={imageVariants}
          >
            <img
              src="/images/foto-franco-clinico.png"
              alt="Franco Tabilo, kinesiólogo respiratorio"
              className="h-full w-full rounded-xl object-cover object-top"
            />
          </motion.div>
          <motion.div
            className="absolute right-0 top-1/3 h-40 w-40 rounded-2xl bg-background p-2 shadow-xl sm:h-52 sm:w-52"
            style={{ transformOrigin: "left center" }}
            variants={imageVariants}
          >
            <img
              src="/images/foto-bar-clinico.png"
              alt="Barbara Covarrubias, fonoaudióloga"
              className="h-full w-full rounded-xl object-cover object-top"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 h-32 w-32 rounded-2xl bg-background p-2 shadow-xl sm:h-44 sm:w-44"
            style={{ transformOrigin: "top right" }}
            variants={imageVariants}
          >
            <img
              src="/images/domicilio-paciente.webp"
              alt="Atención kinesiológica a domicilio"
              className="h-full w-full rounded-xl object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
