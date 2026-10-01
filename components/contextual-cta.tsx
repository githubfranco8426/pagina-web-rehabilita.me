"use client"

import { bookingAppReservarUrl, rehabilitationMessage, whatsappConsultasLink } from "@/lib/brand"
import { trackBookingClick, trackWhatsappClick } from "@/lib/analytics"

export function ContextualCta({ service = "rehabilitación", source, dark = false }: { service?: string; source: string; dark?: boolean }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a href={whatsappConsultasLink(rehabilitationMessage(service))} target="_blank" rel="noopener noreferrer"
        onClick={() => trackWhatsappClick(source, service)}
        className={`inline-flex min-h-14 items-center justify-center rounded-full px-6 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${dark ? "bg-white text-sky-900 hover:bg-sky-50 focus-visible:ring-white focus-visible:ring-offset-sky-900" : "bg-sky-700 text-white hover:bg-sky-800 focus-visible:ring-sky-700"}`}>
        Cuéntanos tu caso
      </a>
      <a href={bookingAppReservarUrl} onClick={() => trackBookingClick(source, service)}
        className={`inline-flex min-h-14 items-center justify-center rounded-full border px-6 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 ${dark ? "border-white/60 text-white hover:bg-white/10 focus-visible:ring-white" : "border-sky-800/30 bg-white text-sky-800 hover:bg-sky-50 focus-visible:ring-sky-700"}`}>
        Agendar evaluación
      </a>
    </div>
  )
}
