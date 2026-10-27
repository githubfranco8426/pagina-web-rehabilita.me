import { shopProducts, type ShopProduct } from './shop-products'

export type CartItem = { productId: string; quantity: number }
export const MAX_QUANTITY = 20
export const CART_STORAGE_KEY = 'rehabilitame-shop-cart:v1'

export function parseCart(input: unknown): CartItem[] {
  if (!Array.isArray(input) || input.length > shopProducts.length) throw new Error('Selección no válida.')
  const ids = new Set<string>()
  return input.map(item => {
    if (!item || typeof item !== 'object' || !shopProducts.some(p => p.id === item.productId) ||
      !Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > MAX_QUANTITY || ids.has(item.productId)) {
      throw new Error('Revisa los productos y cantidades de tu carrito.')
    }
    ids.add(item.productId)
    return { productId: item.productId, quantity: item.quantity }
  })
}

export function restoreCart(raw: string | null): CartItem[] {
  if (!raw || raw.length > 4096) return []
  try { return parseCart(JSON.parse(raw)) } catch { return [] }
}

export function quoteCart(items: CartItem[], catalog: ShopProduct[] = shopProducts) {
  const lines = items.map(item => {
    const product = catalog.find(p => p.id === item.productId)
    if (!product) throw new Error('Producto no disponible en el catálogo.')
    const price = product.priceCLP
    const unitPriceCLP = Number.isSafeInteger(price) && price !== null && price > 0 ? price : null
    return { ...item, name: product.name, isExample: product.isExample,
      unitPriceCLP, lineTotalCLP: unitPriceCLP === null ? null : unitPriceCLP * item.quantity }
  })
  const subtotalCLP = lines.length && lines.every(line => line.lineTotalCLP !== null)
    ? lines.reduce((sum, line) => sum + line.lineTotalCLP!, 0) : null
  return { lines, subtotalCLP, shippingCLP: null, totalCLP: null,
    payments: { webpay: false, transfer: false },
    canPay: false,
    notice: 'Catálogo de ejemplo. Debemos confirmar productos, precios, disponibilidad y entrega antes de aceptar pagos.' }
}
