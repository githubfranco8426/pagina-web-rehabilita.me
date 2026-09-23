"use client"

import { ArrowRight } from "lucide-react"
import { bookingAppReservarUrl, whatsappConsultasLink } from "@/lib/brand"
import { trackBookingClick, trackWhatsappClick } from "@/lib/analytics"

export function BookingWidgetSection() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-sky-900 px-7 py-14 text-white md:px-16 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta-300">Estamos para orientarte</p>
        <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          Cuéntanos qué necesitas. Te ayudamos a dar el siguiente paso.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          Puedes reservar en línea o escribirnos si aún no sabes qué atención corresponde a tu caso.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href={bookingAppReservarUrl}
            onClick={() => trackBookingClick("final_cta")}
            className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-white px-7 font-semibold text-sky-900 transition-colors hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-sky-900"
          >
            Agendar una hora
            <ArrowRight className="size-5" aria-hidden="true" />
          </a>
          <a
            href={whatsappConsultasLink("Hola, quiero saber qué atención de rehabilita.me corresponde a mi caso.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsappClick("final_cta")}
            className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/40 px-7 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
