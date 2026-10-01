"use client"

import { motion } from "framer-motion"
import { fadeInUp, viewportOnce } from "@/lib/motion"

export function EditorialBreak() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-[#eefafa]"
        >
          <motion.img
            src="/images/cuida-como-respiras.jpg"
            alt="Ilustración infantil que muestra el movimiento de las costillas y el flujo del aire al respirar"
            className="h-full w-full object-contain"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          transition={{ delay: 0.15 }}
          className="lg:col-span-4 lg:col-start-9"
        >
          <div className="w-10 h-px bg-terracotta-500 mb-8" />
          <blockquote className="text-xl md:text-2xl lg:text-[1.65rem] font-extralight leading-[1.35] tracking-tight text-foreground text-balance">
            {'"'}Cuidar cómo respiras y cómo te comunicas es cuidar cómo vives.{'"'}
          </blockquote>
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mt-8">
            Franco E. Tabilo Díaz · Kinesiólogo
          </p>
        </motion.div>
      </div>
    </section>
  )
}
