import type { Metadata } from "next"
import { KidsHome } from "@/components/kids-home"

export const metadata: Metadata = {
  title: "Rehabilítame Kids | Desarrollo temprano en Iquique",
  description: "Kinesiología y Fonoaudiología infantil en Iquique. Acompañamos el desarrollo motor, la comunicación y el juego con participación de la familia.",
  alternates: { canonical: "/" },
  openGraph: { title: "Rehabilítame Kids · Movimiento, comunicación y juego", description: "Acompañamiento del desarrollo temprano con Kinesiología y Fonoaudiología infantil en Iquique.", url: "/", images: [] },
}
export default function Page() { return <KidsHome /> }
