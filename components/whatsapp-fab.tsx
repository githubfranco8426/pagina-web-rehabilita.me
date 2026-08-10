"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { whatsappConsultasLink } from "@/lib/brand"
import { trackWhatsappClick } from "@/lib/analytics"
import { WhatsappIcon } from "@/components/whatsapp-icon"

export function WhatsappFab() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.querySelector("section")
    const threshold = hero ? hero.getBoundingClientRect().height * 0.6 : 400
    const onScroll = () => setVisible(window.scrollY > threshold)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
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
          href={whatsappConsultasLink()}
          target="_blank"
          rel="noopener"
          onClick={() => trackWhatsappClick("fab")}
          aria-label="Agendar por WhatsApp"
          className="fixed bottom-6 right-6 z-40 h-14 w-14 flex items-center justify-center bg-foreground text-background shadow-lg hover:bg-foreground/90"
        >
          <WhatsappIcon className="h-6 w-6" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
