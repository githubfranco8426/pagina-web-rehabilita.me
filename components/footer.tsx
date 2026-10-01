"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { brand, whatsappConsultasLink } from "@/lib/brand"
import { trackWhatsappClick } from "@/lib/analytics"
import { fadeIn, viewportOnce } from "@/lib/motion"

const footerLinks = [
  { label: "Rehabilitación a domicilio", href: "/rehabilitacion-domiciliaria" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Sobre nosotros", href: "/#nosotros" },
  { label: "Recursos", href: "/recursos" },
  { label: "Preguntas frecuentes", href: "/#faq" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeIn}
      className="px-6 py-16 md:px-12 lg:px-20 border-t border-border"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
        <div className="md:col-span-5">
          <Link href="/" className="flex items-center gap-2.5">
            <img
              src="/images/logo-pagina.png"
              alt="Rehabilita.me"
              className="h-9 w-9 rounded-full object-cover shrink-0"
            />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-foreground">
              rehabilita<span className="opacity-60">.me</span>
            </span>
          </Link>
          <p className="text-sm leading-[1.75] text-muted-foreground mt-5 max-w-xs">
            Rehabilitación especializada en tu hogar. Kinesiología y Fonoaudiología en Iquique y Alto Hospicio.
          </p>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-5">Navegación</p>
          <div className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 md:col-start-11">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-5">Contacto</p>
          <div className="flex flex-col gap-3">
            <a
              href={whatsappConsultasLink()}
              target="_blank"
              rel="noopener"
              onClick={() => trackWhatsappClick("footer")}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
            >
              WhatsApp — {brand.contact.whatsappConsultasDisplay}
            </a>
            <a
              href={brand.contact.instagramUrl}
              target="_blank"
              rel="noopener"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-border gap-4">
        <p className="text-[11px] tracking-[0.1em] text-muted-foreground/50">
          © {year} rehabilita.me · Iquique
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/politica-de-privacidad"
            className="text-[11px] tracking-[0.1em] text-muted-foreground/50 hover:text-foreground transition-colors duration-300"
          >
            Política de Privacidad
          </Link>
          <p className="text-[11px] tracking-[0.1em] text-muted-foreground/50">Iquique & Alto Hospicio</p>
        </div>
      </div>
    </motion.footer>
  )
}
