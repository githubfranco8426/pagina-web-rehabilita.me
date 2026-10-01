"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { rehabilitationMessage, whatsappConsultasLink } from "@/lib/brand"
import { trackWhatsappClick } from "@/lib/analytics"
import { WhatsappIcon } from "@/components/whatsapp-icon"

export function WhatsappFab({ service }: { service?: string }) {
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState<string | undefined>()

  useEffect(() => {
    const hero = document.querySelector("section")
    const threshold = hero ? hero.getBoundingClientRect().height * 0.6 : 400
    const onScroll = () => setVisible(window.scrollY > threshold)
    const timer = window.setTimeout(() => setVisible(true), 12000)
    const onServiceSelected = (event: Event) => {
      const detail = (event as CustomEvent<{ message?: string }>).detail
      setMessage(detail?.message)
      setVisible(true)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("rehabilitame:service-selected", onServiceSelected)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("rehabilitame:service-selected", onServiceSelected)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          href={whatsappConsultasLink(message || (service ? rehabilitationMessage(service) : undefined))}
          target="_blank"
          rel="noopener"
          onClick={() => trackWhatsappClick(message || service ? "fab_contextual" : "fab", service)}
          aria-label="Escríbenos por WhatsApp"
          className="fixed bottom-5 right-5 z-40 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 text-white shadow-lg transition-colors hover:bg-[#1ebe57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 md:bottom-6 md:right-6"
        >
          <WhatsappIcon className="h-6 w-6" />
          <span className="hidden text-sm font-medium sm:inline">¿Tienes dudas?</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
