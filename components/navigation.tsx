"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { bookingAppReservarUrl } from "@/lib/brand"
import { trackBookingClick } from "@/lib/analytics"

const links = [
  { label: "A domicilio", href: "/rehabilitacion-domiciliaria" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Equipo", href: "/#nosotros" },
  { label: "Recursos", href: "/recursos" },
]

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-sky-900/10 bg-background/95 backdrop-blur-lg">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:ring-2 focus:ring-sky-600"
      >
        Saltar al contenido
      </a>
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-5 md:px-8" aria-label="Navegación principal">
        <Link href="/" aria-label="rehabilita.me, inicio" className="inline-flex min-h-11 items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600" onClick={() => setMenuOpen(false)}>
          <Image src="/images/logo-pagina.png" alt="" width={42} height={42} className="size-10 rounded-full object-cover" priority />
          <span className="hidden text-lg font-semibold tracking-[-0.04em] text-sky-800 sm:inline">rehabilita<span className="text-terracotta-600">.me</span></span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="rounded-sm text-sm font-medium text-foreground/75 transition-colors hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={bookingAppReservarUrl}
            onClick={() => trackBookingClick("nav")}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-sky-700 px-3 text-sm font-semibold text-white transition-colors hover:bg-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 sm:px-4 md:px-6"
          >
            <span className="sm:hidden">Agendar</span><span className="hidden sm:inline">Agendar evaluación</span>
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-sky-900/15 text-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 lg:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="menu-movil" className="border-t border-sky-900/10 bg-background px-5 pb-5 pt-2 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="flex min-h-12 items-center border-b border-sky-900/10 text-base font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
