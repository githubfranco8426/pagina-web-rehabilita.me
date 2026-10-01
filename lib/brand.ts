export const brand = {
  name: "Rehabilitame",
  legalName: "Althia Med · Kinesiología y Fonoaudiología",
  tagline: "Kinesiología y Fonoaudiología coordinadas para acompañarte en casa",
  contact: {
    whatsapp: "56930286388",
    whatsappDisplay: "+56 9 3028 6388",
    whatsappConsultas: "56937381137",
    whatsappConsultasDisplay: "+56 9 3738 1137",
    whatsappMessageDefault: "Hola, quiero orientación para una evaluación de rehabilitación a domicilio en Iquique o Alto Hospicio.",
    instagramUrl: "https://www.instagram.com/rehabilitamechile/",
    instagramHandle: "@rehabilitamechile",
    address: "José Fco. Vergara #3391, oficina 202, Iquique",
    addressNote: "Atención a domicilio en Iquique y Alto Hospicio",
    city: "Iquique, Chile",
  },
}

export function rehabilitationMessage(service: string) {
  const topic = service.toLocaleLowerCase("es-CL")
  const modality = topic.includes("domicilio") ? "" : " a domicilio"
  return `Hola, quisiera orientación sobre ${topic}${modality} en Iquique o Alto Hospicio. ¿Cómo puedo coordinar una evaluación?`
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
export const bookingAppUrl = process.env.NEXT_PUBLIC_BOOKING_APP_URL || "https://app-centro-rehabilitame.vercel.app"

// Lleva a la elección de reserva sin la portada intermedia de la app.
export const bookingAppReservarUrl = `${bookingAppUrl.replace(/\/$/, "")}/reservar`
