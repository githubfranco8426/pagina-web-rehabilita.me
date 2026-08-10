"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { brand, whatsappConsultasLink } from "@/lib/brand"
import { fadeInUp, viewportOnce } from "@/lib/motion"
import { WhatsappIcon } from "@/components/whatsapp-icon"

const faqs = [
  {
    question: "¿Necesito una derivación médica para agendar hora?",
    answer:
      "No es obligatorio. Puedes agendar directamente con nosotros y, en la primera sesión, evaluamos tu caso para definir el mejor plan de tratamiento.",
  },
  {
    question: "¿Atienden a domicilio en toda la región?",
    answer:
      "Atendemos a domicilio en Iquique y Alto Hospicio. Si no estás seguro si cubrimos tu sector, escríbenos por WhatsApp y te confirmamos.",
  },
  {
    question: "¿Puedo agendar una sesión online?",
    answer:
      "Sí. La modalidad online está disponible para dar continuidad a un tratamiento ya iniciado o si te encuentras fuera de la región.",
  },
  {
    question: "¿Con cuánta anticipación debo reservar mi hora?",
    answer:
      "Recomendamos agendar con al menos 2 a 3 días de anticipación, aunque muchas veces tenemos disponibilidad para la misma semana.",
  },
  {
    question: "¿Qué pasa si necesito reagendar o cancelar?",
    answer:
      "Puedes reagendar o cancelar tu hora escribiéndonos por WhatsApp con la mayor anticipación posible, para poder liberar el cupo a otro paciente.",
  },
  {
    question: "¿Qué medios de pago aceptan?",
    answer:
      "Aceptamos efectivo y transferencia. Coordina el detalle directamente con nosotros al momento de confirmar tu hora.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-foreground text-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-background/40 mb-8">
            Preguntas frecuentes
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extralight leading-[1.15] tracking-tight text-balance">
            Lo que más nos preguntan antes de agendar
          </h2>
          <p className="text-sm leading-[1.75] text-background/55 mt-6 max-w-md">
            Si tu duda no está aquí, escríbenos por WhatsApp y te respondemos directamente.
          </p>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={whatsappConsultasLink()}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] text-white pl-3 pr-5 py-2.5 text-sm font-medium hover:bg-[#1ebe57] transition-colors duration-300"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20">
              <WhatsappIcon className="h-4 w-4" />
            </span>
            {brand.contact.whatsappConsultasDisplay}
          </motion.a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          transition={{ delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question} className="border-background/15">
                <AccordionTrigger className="text-left text-sm md:text-base font-light text-background hover:no-underline [&>svg]:text-background/40">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-[1.75] text-background/55">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
