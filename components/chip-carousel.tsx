"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export interface ChipItem {
  id: string
  Icon: React.ElementType
  title: string
  variant: "sky" | "terracotta"
}

const accentClasses = {
  sky: "bg-sky-500/10 text-sky-600",
  terracotta: "bg-terracotta-500/10 text-terracotta-600",
} as const

function Chip({ item, onSelect }: { item: ChipItem; onSelect: (item: ChipItem) => void }) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => onSelect(item)}
      className="flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-background/80 px-4 py-2 text-left transition-colors duration-300 hover:border-foreground/30"
      style={{ scrollSnapAlign: "start" }}
    >
      <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${accentClasses[item.variant]}`}>
        <item.Icon className="h-3.5 w-3.5" />
      </span>
      <span className="whitespace-nowrap text-[11px] tracking-[0.1em] uppercase text-foreground">{item.title}</span>
    </motion.button>
  )
}

interface ChipCarouselProps {
  items: ChipItem[]
  onSelect: (item: ChipItem) => void
  ariaLabel?: string
  bordered?: boolean
  trackClassName?: string
  scrollable?: boolean
}

export function ChipCarousel({
  items,
  onSelect,
  ariaLabel = "elementos",
  bordered = true,
  trackClassName,
  scrollable = true,
}: ChipCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateScrollButtons = () => {
    const el = trackRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }

  useEffect(() => {
    updateScrollButtons()
    const el = trackRef.current
    if (!el) return
    el.addEventListener("scroll", updateScrollButtons, { passive: true })
    window.addEventListener("resize", updateScrollButtons)
    return () => {
      el.removeEventListener("scroll", updateScrollButtons)
      window.removeEventListener("resize", updateScrollButtons)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    const el = trackRef.current
    if (!el) return
    const distance = el.clientWidth * 0.6
    el.scrollBy({ left: direction === "left" ? -distance : distance, behavior: "smooth" })
  }

  return (
    <div className={`relative ${bordered ? "border-t border-border/60" : ""}`}>
      <div
        ref={trackRef}
        className={`no-scrollbar flex flex-nowrap items-center gap-2.5 ${
          scrollable ? "overflow-x-auto" : "overflow-hidden"
        } ${trackClassName ?? "px-6 py-2.5 md:px-12 lg:px-20"}`}
        style={scrollable ? { scrollSnapType: "x proximity" } : undefined}
      >
        {items.map((item) => (
          <Chip key={item.id} item={item} onSelect={onSelect} />
        ))}
      </div>

      {scrollable && (
        <>
          <AnimatePresence>
            {canScrollLeft && (
              <motion.button
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => scroll("left")}
                aria-label={`Desplazar ${ariaLabel} a la izquierda`}
                className="absolute left-1 top-1/2 hidden -translate-y-1/2 rounded-full border border-border bg-background/90 p-1.5 shadow-sm md:flex"
              >
                <ChevronLeft className="h-3.5 w-3.5 text-foreground" />
              </motion.button>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {canScrollRight && (
              <motion.button
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => scroll("right")}
                aria-label={`Desplazar ${ariaLabel} a la derecha`}
                className="absolute right-1 top-1/2 hidden -translate-y-1/2 rounded-full border border-border bg-background/90 p-1.5 shadow-sm md:flex"
              >
                <ChevronRight className="h-3.5 w-3.5 text-foreground" />
              </motion.button>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  )
}
