"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { Menu, X, Stethoscope, Users, GalleryHorizontalEnd, HelpCircle, Wind, Baby, Activity, Ear, Brain } from "lucide-react"
import { bookingAppReservarUrl } from "@/lib/brand"
import { ServiceToastProvider, useServiceToast } from "@/lib/service-toast-context"
import { ServiceToastContainer } from "@/components/service-toast"
import { ChipCarousel, type ChipItem } from "@/components/chip-carousel"
import { type DockItem } from "@/components/ui/magnetic-dock"
import { MagneticDockVertical } from "@/components/ui/magnetic-dock-vertical"

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre nosotros", href: "#nosotros" },
  { label: "Casos reales", href: "#casos" },
  { label: "Preguntas frecuentes", href: "#faq" },
]

const SKY_TINT: [string, string] = ["oklch(0.46 0.08 255)", "oklch(0.74 0.05 255)"]
const TERRACOTTA_TINT: [string, string] = ["oklch(0.65 0.095 72)", "oklch(0.79 0.07 74)"]

// Menú principal — componente 1 (carrusel de chips + toast)
const navChipItems: ChipItem[] = [
  { id: "servicios", Icon: Stethoscope, title: "Servicios", variant: "sky" },
  { id: "nosotros", Icon: Users, title: "Sobre nosotros", variant: "terracotta" },
  { id: "casos", Icon: GalleryHorizontalEnd, title: "Casos reales", variant: "sky" },
  { id: "faq", Icon: HelpCircle, title: "Preguntas frecuentes", variant: "terracotta" },
]

const navChipDescriptions: Record<string, string> = {
  servicios: "Kinesiología respiratoria, maxilofacial y fonoaudiología.",
  nosotros: "Conoce a la dupla detrás de rehabilita.me.",
  casos: "Historias reales de pacientes que ya se recuperaron.",
  faq: "Resolvemos tus dudas antes de agendar.",
}

// Servicios clínicos — componente 2 (dock magnético)
interface ClinicalService {
  id: string
  label: string
  description: string
  icon: React.ReactNode
  variant: "sky" | "terracotta"
}

const clinicalServices: ClinicalService[] = [
  {
    id: "respiratorio-adulto",
    label: "Respiratorio adulto",
    description: "Manejo de secreciones y recuperación funcional tras una hospitalización.",
    icon: <Wind />,
    variant: "sky",
  },
  {
    id: "respiratorio-infantil",
    label: "Respiratorio infantil",
    description: "Acompañamiento respiratorio para niños y niñas, con foco en la familia.",
    icon: <Baby />,
    variant: "sky",
  },
  {
    id: "maxilofacial",
    label: "Maxilofacial",
    description: "Rehabilitación de la musculatura facial y la articulación temporomandibular.",
    icon: <Activity />,
    variant: "sky",
  },
  {
    id: "frenillo-lactancia",
    label: "Frenillo y lactancia",
    description: "Evaluación de frenillo lingual corto y dificultades de lactancia.",
    icon: <Ear />,
    variant: "terracotta",
  },
  {
    id: "neuro-adultos",
    label: "Neuro-adultos",
    description: "Rehabilitación del habla, la voz y la deglución tras un ACV.",
    icon: <Brain />,
    variant: "terracotta",
  },
]

const clinicalDockItems: DockItem[] = clinicalServices.map((s) => ({
  id: s.id,
  label: s.label,
  icon: s.icon,
  tint: s.variant === "sky" ? SKY_TINT : TERRACOTTA_TINT,
}))

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      style={{ scaleX }}
      className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-sky-500"
    />
  )
}

function HeaderBars() {
  const { addToast } = useServiceToast()

  const handleNavChipSelect = (item: ChipItem) => {
    document.querySelector(`#${item.id}`)?.scrollIntoView({ behavior: "smooth" })
    addToast(item.title, navChipDescriptions[item.id] ?? "", item.variant)
  }

  return (
    <div className="hidden lg:block flex-1 min-w-0">
      <ChipCarousel
        items={navChipItems}
        onSelect={handleNavChipSelect}
        ariaLabel="el menú"
        bordered={false}
        scrollable={false}
        trackClassName="px-0 py-0 justify-center"
      />
    </div>
  )
}

function ClinicalServicesSidebar() {
  const { addToast } = useServiceToast()

  const handleServiceDockSelect = (id: string) => {
    const service = clinicalServices.find((s) => s.id === id)
    if (!service) return
    addToast(service.label, `Te llevamos a agendar — ${service.description}`, service.variant)
    window.open(bookingAppReservarUrl, "_blank", "noopener")
  }

  return (
    <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 md:block">
      <MagneticDockVertical
        items={clinicalDockItems}
        onSelect={handleServiceDockSelect}
        magnetRadius={70}
        maxScale={1.3}
        lift={8}
        idleWave={false}
        tooltip
      />
    </div>
  )
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 60)
      setHidden(currentY > lastScrollY && currentY > 400)
      setLastScrollY(currentY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <ServiceToastProvider>
      <motion.header
        animate={{ y: hidden && !isOpen ? "-100%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-background/60 backdrop-blur-sm"
        }`}
      >
        <nav className="flex items-center justify-between gap-4 px-6 py-4 md:px-12 lg:px-20">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src="/images/logo-pagina.png"
              alt="Rehabilita.me"
              className="h-10 w-10 rounded-full object-cover shrink-0"
            />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-foreground">
              rehabilita<span className="text-sky-500">.me</span>
            </span>
          </Link>

          <HeaderBars />

          <div className="hidden md:flex items-center gap-3 shrink-0 ml-auto">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              href={bookingAppReservarUrl}
              target="_blank"
              rel="noopener"
              className="text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors duration-500"
            >
              Agendar hora
            </motion.a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground shrink-0"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <ScrollProgress />

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden bg-background"
            >
              <div className="flex flex-col px-6 py-10 gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-light tracking-tight text-foreground hover:text-muted-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.a
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.05, ease: "easeOut" }}
                  whileTap={{ scale: 0.97 }}
                  href={bookingAppReservarUrl}
                  target="_blank"
                  rel="noopener"
                  onClick={() => setIsOpen(false)}
                  className="text-sm tracking-[0.15em] uppercase px-4 py-3 rounded-full bg-sky-500 text-white text-center mt-2"
                >
                  Agendar hora
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      <ClinicalServicesSidebar />
      <ServiceToastContainer />
    </ServiceToastProvider>
  )
}
