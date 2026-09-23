"use client"

import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp, viewportOnce } from "@/lib/motion"
import { trackEngagement } from "@/lib/analytics"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const testimonials = [
  { text: "Sesiones de kinesiología a domicilio para recuperar autonomía al caminar, con apoyo de andador y trabajo progresivo.", name: "Recuperar la marcha, paso a paso", role: "Kinesiología a domicilio" },
  { text: "Seguimiento kinésico respiratorio en casa tras una hospitalización prolongada, coordinado con el resto del equipo tratante.", name: "Acompañamiento respiratorio post alta", role: "Kinesiología respiratoria" },
  { text: "Franco nos acompañó en todo el proceso respiratorio de mi papá tras el alta. La atención a domicilio nos dio mucha tranquilidad.", name: "Marcela R.", role: "Familiar, kinesiología respiratoria" },
  { text: "El seguimiento del frenillo lingual de mi bebé fue muy claro y cercano. Nos explicaron cada paso de la lactancia.", name: "Camila S.", role: "Madre, frenillo y lactancia" },
  { text: "La terapia maxilofacial mejoró bastante mi dolor articular. El trabajo conjunto con mi odontólogo se sintió muy coordinado.", name: "Daniela V.", role: "Paciente, kinesiología maxilofacial" },
  { text: "El acompañamiento fonoaudiológico con mi papá, que tiene deterioro cognitivo, ha sido clave para mantener su comunicación.", name: "Andrés T.", role: "Familiar, fonoaudiología neuro-adultos" },
]

export function CasesSection() {
  return (
    <section id="casos" className="px-6 py-28 md:px-12 lg:px-20 md:py-36">
      <div className="mx-auto max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeInUp} className="mb-12 flex flex-col gap-6 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Casos reales</p>
            <h2 className="text-3xl font-extralight tracking-tight text-foreground md:text-[2.75rem]">Historias de pacientes que hemos acompañado</h2>
            <p className="mt-4 max-w-xl text-sm leading-[1.75] text-muted-foreground">Con el permiso de cada paciente y su familia, compartimos algunos procesos reales de recuperación.</p>
          </div>
          <p className="text-sm text-muted-foreground">Desliza o usa las flechas para conocer más historias.</p>
        </motion.div>

        <Carousel opts={{ align: "start", loop: true }} className="px-0 md:px-14" onPointerDownCapture={() => trackEngagement("testimonials_interacted")}>
          <CarouselContent className="-ml-5">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name} className="pl-5 md:basis-1/2 lg:basis-1/3">
                <article className="flex h-full min-h-72 flex-col rounded-2xl border border-border bg-card p-7 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <Quote className="size-7 text-terracotta-500" aria-hidden="true" />
                  <blockquote className="mt-6 flex-1 text-base leading-relaxed text-foreground">“{testimonial.text}”</blockquote>
                  <footer className="mt-8 border-t border-border pt-4">
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{testimonial.role}</p>
                  </footer>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious aria-label="Ver testimonio anterior" className="hidden size-11 border-border bg-background hover:bg-muted md:inline-flex" onClick={() => trackEngagement("testimonials_previous")}>
            <ArrowLeft className="size-4" />
          </CarouselPrevious>
          <CarouselNext aria-label="Ver siguiente testimonio" className="hidden size-11 border-border bg-background hover:bg-muted md:inline-flex" onClick={() => trackEngagement("testimonials_next")}>
            <ArrowRight className="size-4" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  )
}
