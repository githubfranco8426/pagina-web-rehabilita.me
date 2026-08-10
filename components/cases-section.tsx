"use client"

import { motion } from "framer-motion"
import { fadeInUp, viewportOnce } from "@/lib/motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1"

const testimonials = [
  {
    text: "Sesiones de kinesiología a domicilio para recuperar autonomía al caminar, con apoyo de andador y trabajo progresivo.",
    image: "/images/domicilio-caminador.webp",
    name: "Recuperar la marcha, paso a paso",
    role: "Kinesiología a domicilio",
  },
  {
    text: "Seguimiento kinésico respiratorio en casa tras una hospitalización prolongada, coordinado con el resto del equipo tratante.",
    image: "/images/domicilio-paciente.webp",
    name: "Acompañamiento respiratorio post alta",
    role: "Kinesiología respiratoria",
  },
  {
    text: "Franco nos acompañó en todo el proceso respiratorio de mi papá tras el alta. La atención a domicilio nos dio mucha tranquilidad.",
    image: "/placeholder-user.jpg",
    name: "Marcela R.",
    role: "Familiar, kinesiología respiratoria",
  },
  {
    text: "El seguimiento del frenillo lingual de mi bebé fue muy claro y cercano. Nos explicaron cada paso de la lactancia.",
    image: "/placeholder-user.jpg",
    name: "Camila S.",
    role: "Madre, frenillo y lactancia",
  },
  {
    text: "Después de la hospitalización, las sesiones en casa me ayudaron a recuperar la marcha con mucha paciencia y profesionalismo.",
    image: "/placeholder-user.jpg",
    name: "Jorge P.",
    role: "Paciente, rehabilitación respiratoria",
  },
  {
    text: "La terapia maxilofacial mejoró bastante mi dolor articular. El trabajo conjunto con mi odontólogo se sintió muy coordinado.",
    image: "/placeholder-user.jpg",
    name: "Daniela V.",
    role: "Paciente, kinesiología maxilofacial",
  },
  {
    text: "El acompañamiento fonoaudiológico con mi papá, que tiene deterioro cognitivo, ha sido clave para mantener su comunicación.",
    image: "/placeholder-user.jpg",
    name: "Andrés T.",
    role: "Familiar, fonoaudiología neuro-adultos",
  },
  {
    text: "Muy agradecida por el trato humano y la disposición para resolver dudas fuera de las sesiones. Se nota la experiencia clínica.",
    image: "/placeholder-user.jpg",
    name: "Paula G.",
    role: "Paciente, atención domicilio",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 8)

export function CasesSection() {
  return (
    <section id="casos" className="px-6 py-28 md:px-12 lg:px-20 md:py-36">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
        className="mb-20 pb-6 border-b border-border"
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Casos reales</p>
        <h2 className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground mb-4">
          Historias de pacientes que hemos acompañado
        </h2>
        <p className="text-sm leading-[1.75] text-muted-foreground max-w-xl">
          Con el permiso de cada paciente y su familia, compartimos algunos procesos reales de
          recuperación en domicilio.
        </p>
      </motion.div>

      <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] overflow-hidden">
        <TestimonialsColumn testimonials={firstColumn} duration={15} />
        <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
        <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
      </div>
    </section>
  )
}
