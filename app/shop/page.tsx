import type { Metadata } from 'next'
import { Shop } from '@/components/shop'

export const metadata: Metadata = {
  title: 'Rehabilítame Shop | Insumos y recursos terapéuticos para profesionales',
  description: 'Conoce Rehabilítame Shop para profesionales de Iquique y Alto Hospicio. Catálogo de ejemplo por especialidad; precios y disponibilidad por confirmar.',
  alternates: { canonical: '/shop' },
  robots: { index: false, follow: true },
  openGraph: {title: 'Rehabilítame Shop', description: 'Insumos y recursos terapéuticos para profesionales. Catálogo de ejemplo en preparación.', url: '/shop', images: []},
}

export default function ShopPage() {
  return <><link rel="stylesheet" href="/shop-assets/shop.css" /><Shop /></>
}
