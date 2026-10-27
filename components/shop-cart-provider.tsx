'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { CART_STORAGE_KEY, MAX_QUANTITY, restoreCart, type CartItem } from '@/lib/shop-cart'
import { shopProducts } from '@/lib/shop-products'

type CartContextValue = {
  items: CartItem[]; hydrated: boolean; persistenceAvailable: boolean;
  addItem: (id: string) => void; setQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void; clear: () => void;
}
const CartContext = createContext<CartContextValue | null>(null)

export function ShopCartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [hydrated, setHydrated] = useState(false)
  const [persistenceAvailable, setPersistenceAvailable] = useState(true)

  useEffect(() => {
    try { setItems(restoreCart(localStorage.getItem(CART_STORAGE_KEY))) }
    catch { setPersistenceAvailable(false) }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try { localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items)) }
    catch { setPersistenceAvailable(false) }
  }, [items, hydrated])

  function addItem(id: string) {
    if (!hydrated || !shopProducts.some(p => p.id === id)) return
    setItems(previous => {
      const existing = previous.find(item => item.productId === id)
      return existing ? previous.map(item => item.productId === id ? { ...item, quantity: Math.min(MAX_QUANTITY, item.quantity + 1) } : item)
        : [...previous, { productId: id, quantity: 1 }]
    })
  }
  function setQuantity(id: string, quantity: number) {
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > MAX_QUANTITY) return
    setItems(previous => previous.map(item => item.productId === id ? { ...item, quantity } : item))
  }
  return <CartContext.Provider value={{items, hydrated, persistenceAvailable, addItem, setQuantity,
    removeItem: id => setItems(previous => previous.filter(item => item.productId !== id)), clear: () => setItems([])}}>{children}</CartContext.Provider>
}

export function useShopCart() {
  const value = useContext(CartContext)
  if (!value) throw new Error('ShopCartProvider is required')
  return value
}
