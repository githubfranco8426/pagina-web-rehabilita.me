export const brand = {
  name: "rehabilita.me",
  legalName: "Althia Med · Kinesiología y Fonoaudiología",
  tagline: "Kinesiología respiratoria y fonoaudiología en Iquique",
  contact: {
    whatsapp: "56930286388",
    whatsappDisplay: "+56 9 3028 6388",
    whatsappConsultas: "56937381137",
    whatsappConsultasDisplay: "+56 9 3738 1137",
    whatsappMessageDefault: "Hola, quiero agendar una hora en rehabilita.me",
    instagramUrl: "https://www.instagram.com/rehabilita.meiqq/",
    instagramHandle: "@rehabilita.meiqq",
    address: "José Fco. Vergara #3391, oficina 202, Iquique",
    addressNote: "Atención a domicilio en Iquique y Alto Hospicio",
    city: "Iquique, Chile",
  },
}

export function whatsappLink(customMessage?: string) {
  const msg = encodeURIComponent(customMessage || brand.contact.whatsappMessageDefault)
  return `https://wa.me/${brand.contact.whatsapp}?text=${msg}`
}

export function whatsappConsultasLink(customMessage?: string) {
  const msg = encodeURIComponent(customMessage || brand.contact.whatsappMessageDefault)
  return `https://wa.me/${brand.contact.whatsappConsultas}?text=${msg}`
}

export const reservaOnlineUrl = "https://beta-sacmed.novacaribe.com/ReservaOnline/11717"

// App-Centro-Rehabilitame — app de reservas propia (Next.js + Supabase).
// Actualiza NEXT_PUBLIC_BOOKING_APP_URL en .env.local cuando esté desplegada.
export const bookingAppUrl = process.env.NEXT_PUBLIC_BOOKING_APP_URL || "http://localhost:3001"

// Apunta al inicio de la app (elegir especialidad/profesional) en vez de
// saltar directo a la lista de servicios en /reservar.
export const bookingAppReservarUrl = bookingAppUrl
