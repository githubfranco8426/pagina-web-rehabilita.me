"use client"

import Image from "next/image"
import { ArrowRight, MapPin } from "lucide-react"
import { bookingAppReservarUrl } from "@/lib/brand"
import { trackBookingClick } from "@/lib/analytics"

export function Hero() {
  return (
    <section id="contenido" className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-background to-terracotta-50/45">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-12 md:px-8 md:py-20 lg:grid-cols-[1.06fr_.94fr] lg:gap-16">
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-700/15 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-800">
            <MapPin className="size-4" aria-hidden="true" />
            Atención en Iquique y Alto Hospicio
          </p>
          <h1 className="max-w-[13ch] text-balance text-[clamp(2.65rem,5vw,4.65rem)] font-semibold leading-[1.06] tracking-[-0.055em] text-sky-900">
            Recuperarte es más fácil cuando te acompañan.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
            Kinesiología respiratoria, maxilofacial y fonoaudiología para ti y tu familia.
            Te atendemos en consulta, a domicilio y online.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={bookingAppReservarUrl}
              onClick={() => trackBookingClick("hero")}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-sky-700 px-7 text-base font-semibold text-white transition-colors hover:bg-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
            >
              Agendar una hora
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>
            <a
              href="#servicios"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-sky-800/25 bg-white/80 px-7 text-base font-semibold text-sky-800 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
            >
              Ver servicios
            </a>
          </div>
          <p className="mt-8 text-sm font-medium leading-relaxed text-foreground/65">
            Respiratorio infantil y adulto <span aria-hidden="true">·</span> Maxilofacial <span aria-hidden="true">·</span> Fonoaudiología
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[540px]">
          <div className="relative h-[410px] overflow-hidden rounded-[2rem] bg-sky-100 shadow-[0_25px_70px_-35px_rgba(27,54,93,.45)] sm:h-[510px] lg:h-[570px]">
            <Image
              src="/images/domicilio-paciente.webp"
              alt="Franco Tabilo junto a una paciente durante una atención en domicilio"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-cover object-[center_38%]"
            />
            <div
              className="absolute inset-x-0 bottom-0 px-7 pb-7 pt-28 text-white"
              style={{ background: "linear-gradient(0deg, rgba(18, 41, 68, 0.94), rgba(18, 41, 68, 0.5) 55%, transparent)" }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/80">Atención cercana</p>
              <p className="mt-2 max-w-[20ch] text-2xl font-semibold leading-tight">En el lugar donde más lo necesitas.</p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-sky-900/10 bg-white px-5 py-4 shadow-xl sm:-left-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-600">rehabilita.me</p>
            <p className="mt-1 text-sm font-medium text-sky-900">Un equipo, atención personalizada.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
