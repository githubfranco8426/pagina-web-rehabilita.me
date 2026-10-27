import type { ReactNode } from 'react'
import { ShopCartProvider } from '@/components/shop-cart-provider'

export default function ShopLayout({ children }: { children: ReactNode }) {
  return <ShopCartProvider><link rel="stylesheet" href="/shop-assets/shop.css" />{children}</ShopCartProvider>
}
