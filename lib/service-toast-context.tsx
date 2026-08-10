"use client"

import type React from "react"
import { createContext, useCallback, useContext, useRef, useState } from "react"

type ServiceToastVariant = "sky" | "terracotta"

interface ServiceToast {
  id: number
  title: string
  message: string
  variant: ServiceToastVariant
}

interface ServiceToastContextType {
  toasts: ServiceToast[]
  addToast: (title: string, message: string, variant: ServiceToastVariant) => void
  removeToast: (id: number) => void
}

const ServiceToastContext = createContext<ServiceToastContextType | undefined>(undefined)

export function useServiceToast() {
  const context = useContext(ServiceToastContext)
  if (!context) {
    throw new Error("useServiceToast must be used within a ServiceToastProvider")
  }
  return context
}

export function ServiceToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ServiceToast[]>([])
  const nextId = useRef(0)

  const addToast = useCallback((title: string, message: string, variant: ServiceToastVariant) => {
    const id = nextId.current++
    setToasts((prev) => [...prev, { id, title, message, variant }])
  }, [])

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  return (
    <ServiceToastContext.Provider value={{ toasts, addToast, removeToast }}>{children}</ServiceToastContext.Provider>
  )
}
