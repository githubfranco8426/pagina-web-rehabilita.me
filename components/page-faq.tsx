"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { trackEngagement } from "@/lib/analytics"

export function PageFaq({ faqs, page }: { faqs: { question: string; answer: string }[]; page: string }) {
  return (
    <section className="bg-sky-50 px-5 py-16 md:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold text-sky-900">Antes de coordinar tu evaluación</h2>
        <Accordion className="mt-6" type="single" collapsible onValueChange={value => value && trackEngagement("faq_opened", { page_type: page, faq_id: value })}>
          {faqs.map((faq, index) => <AccordionItem key={faq.question} value={`faq_${index + 1}`} className="border-sky-900/20"><AccordionTrigger className="text-left text-base font-medium text-sky-900">{faq.question}</AccordionTrigger><AccordionContent className="text-base leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent></AccordionItem>)}
        </Accordion>
      </div>
    </section>
  )
}
