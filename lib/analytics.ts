// Helper central de tracking. No hace nada si todavía no configuraste
// NEXT_PUBLIC_GA_ID / NEXT_PUBLIC_GOOGLE_ADS_ID en .env.local — así el sitio
// funciona igual mientras tramitas esas cuentas.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", eventName, params)
}

/** Dispara cuando alguien hace clic en cualquier botón "Agendar hora". */
export function trackBookingClick(source: string) {
  trackEvent("agendar_click", { source })
}

/** Dispara cuando alguien hace clic en cualquier link de WhatsApp. */
export function trackWhatsappClick(source: string) {
  trackEvent("whatsapp_click", { source })
}
