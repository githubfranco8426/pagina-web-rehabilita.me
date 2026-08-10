"use client"

import { useCallback, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Stethoscope, HeartPulse } from "lucide-react"
import { useServiceToast } from "@/lib/service-toast-context"

const icons = {
  sky: Stethoscope,
  terracotta: HeartPulse,
} as const

const accentClasses = {
  sky: "text-sky-500 bg-sky-500/10",
  terracotta: "text-terracotta-500 bg-terracotta-500/10",
} as const

function AnimatedServiceToast({
  id,
  title,
  message,
  variant,
}: {
  id: number
  title: string
  message: string
  variant: keyof typeof icons
}) {
  const { removeToast } = useServiceToast()
  const Icon = icons[variant]

  const handleRemove = useCallback(() => removeToast(id), [id, removeToast])

  useEffect(() => {
    const timer = setTimeout(handleRemove, 4000)
    return () => clearTimeout(timer)
  }, [handleRemove])

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.5 }}
      transition={{ type: "spring", stiffness: 500, damping: 40 }}
      className="flex w-80 items-start gap-3 rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur-md"
    >
      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${accentClasses[variant]}`}>
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{message}</p>
      </div>
    </motion.div>
  )
}

export function ServiceToastContainer() {
  const { toasts } = useServiceToast()

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col-reverse gap-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <AnimatedServiceToast key={toast.id} {...toast} />
        ))}
      </AnimatePresence>
    </div>
  )
}
