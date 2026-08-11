"use client"

import { motion } from "framer-motion"
import { fadeInUp, viewportOnce } from "@/lib/motion"
import { DoctoraliaWidget } from "@/components/doctoralia-widget"

export function BookingWidgetSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      className="px-6 py-16 md:px-12 lg:px-20 border-t border-border"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-4">
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50">Muchas gracias por agendar</p>
        <h2 className="text-2xl md:text-3xl font-extralight tracking-tight text-foreground text-balance">
          Puedes dejarnos una opinión o revisar opiniones en Doctoralia
        </h2>
        <div className="mt-4">
          <DoctoraliaWidget />
        </div>
      </div>
    </motion.section>
  )
}
