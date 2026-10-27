import type { Metadata } from 'next'
import { ShopCart } from '@/components/shop-cart'

export const metadata: Metadata = {
  title: 'Carrito de ejemplo | Rehabilítame Shop',
  robots: { index: false, follow: false },
  alternates: { canonical: '/shop/carrito' },
  openGraph: { title: 'Carrito de ejemplo | Rehabilítame Shop', url: '/shop/carrito', images: [] },
}

export default function CartPage() { return <ShopCart /> }
