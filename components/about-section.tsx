"use client"

import { motion } from "framer-motion"
import { UserRound } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion"

const stats = [
  { value: "2", label: "Profesionales en un mismo equipo", color: "text-sky-400" },
  { value: "3", label: "Modalidades: consulta, domicilio y online", color: "text-terracotta-400" },
]

const team = [
  {
    name: "Franco E. Tabilo Díaz",
    role: "Kinesiólogo respiratorio · Infantil y adulto",
    bio: "Especialista en medicina de urgencia - Intensivo pediátrico, con postgrado en terapia respiratoria y maxilofacial.",
    image: "/images/foto-franco-clinico.png",
    imagePosition: "object-top",
    color: "text-sky-500",
  },
  {
    name: "Bárbara E. Covarrubias Piñero",
    role: "Fonoaudióloga · Niños y adultos",
    bio: "Especialista en deterioro cognitivo, con postgrado en neurorehabilitación y en lactancia materna-frenillo lingual.",
    image: "/images/foto-bar-clinico.png",
    imagePosition: "object-top",
    color: "text-terracotta-500",
  },
]

function TeamCard({ person }: { person: (typeof team)[0] }) {
  return (
    <motion.div variants={staggerItem} className="bg-background">
      <div className="overflow-hidden bg-secondary aspect-[4/3] flex items-center justify-center">
        {person.image ? (
          <img
            src={person.image}
            alt={person.name}
            className={`w-full h-full object-cover ${person.imagePosition ?? "object-center"}`}
          />
        ) : (
          <UserRound className="h-16 w-16 text-muted-foreground/30" strokeWidth={1} />
        )}
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-lg md:text-xl font-light tracking-tight text-foreground mb-1.5">
          {person.name}
        </h3>
        <p className={`text-sm tracking-[0.05em] uppercase mb-4 ${person.color}`}>
          {person.role}
        </p>
        <p className="text-sm leading-[1.7] text-muted-foreground">{person.bio}</p>
      </div>
    </motion.div>
  )
}

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-sky-900 text-background">
      <div className="px-6 py-28 md:px-12 lg:px-20 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-background/40 mb-8">Quiénes somos</p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extralight leading-[1.15] tracking-tight text-balance">
              Dos profesionales, objetivos compartidos.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            transition={{ delay: 0.15 }}
            className="flex flex-col justify-end gap-10"
          >
            <div className="flex flex-col gap-6 max-w-lg">
              <p className="text-base leading-[1.7] text-background/80">
                Nuestro equipo reúne Kinesiología y Fonoaudiología. Cuando el caso lo necesita,
                trabajamos con objetivos compartidos para acompañar la movilidad, la respiración,
                la comunicación y la alimentación.
              </p>
              <p className="text-base leading-[1.7] text-background/80">
                Trabajamos con la persona y su familia en Iquique y Alto Hospicio.
                Si necesitas apoyo de Terapia Ocupacional para las actividades diarias o adaptar
                el hogar, consúltanos para evaluar la coordinación con tu equipo tratante.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:gap-8 pt-10 border-t border-background/20">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className={`text-3xl md:text-4xl font-extralight tracking-tight ${stat.color}`}>
                    {stat.value}
                  </p>
                  <p className="text-xs tracking-[0.08em] uppercase text-background/75 mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="grid grid-cols-1 md:grid-cols-2 gap-px bg-background/10"
      >
        {team.map((person) => (
          <TeamCard key={person.name} person={person} />
        ))}
      </motion.div>
    </section>
  )
}
