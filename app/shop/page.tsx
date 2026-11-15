import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Tienda temporalmente pausada | Rehabilítame",
  description: "La tienda de Rehabilítame se encuentra temporalmente pausada.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/shop" },
  openGraph: { title: "Rehabilítame", description: "La tienda se encuentra temporalmente pausada.", url: "/shop", images: [] },
}
export default function ShopPage() {
  return <main id="contenido" className="mx-auto flex min-h-screen max-w-2xl flex-col items-start justify-center gap-6 px-6 py-20">
    <p className="text-sm font-bold uppercase tracking-widest">Rehabilítame</p>
    <h1 className="text-4xl font-bold">Nuestra tienda está temporalmente pausada.</h1>
    <p className="text-lg text-muted-foreground">Puedes conocer nuestras líneas de atención y consultar disponibilidad.</p>
    <Link href="/" className="rounded-full bg-sky-900 px-6 py-3 font-bold text-white">Ir a Rehabilítame Kids</Link>
    <Link href="/adultos" className="underline underline-offset-4">Atención de adultos</Link>
  </main>
}
