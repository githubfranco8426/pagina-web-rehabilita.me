import { NextRequest, NextResponse } from 'next/server'
import { parseCart, quoteCart } from '@/lib/shop-cart'

export async function POST(request: NextRequest) {
  const headers = { 'Cache-Control': 'no-store' }
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return NextResponse.json({ error: 'Formato de solicitud no válido.' }, { status: 415, headers })
  }
  if (Number(request.headers.get('content-length')) > 4096) {
    return NextResponse.json({ error: 'La selección es demasiado grande.' }, { status: 413, headers })
  }
  try {
    const raw = await request.text()
    if (raw.length > 4096) return NextResponse.json({ error: 'La selección es demasiado grande.' }, { status: 413, headers })
    const payload = JSON.parse(raw)
    const items = parseCart(payload.items)
    if (!items.length) return NextResponse.json({ error: 'Agrega al menos un recurso al carrito.' }, { status: 400, headers })
    // Only IDs and quantities are accepted. Prices come from the server catalog.
    return NextResponse.json(quoteCart(items), { headers })
  } catch {
    return NextResponse.json({ error: 'Revisa los productos y cantidades de tu carrito.' }, { status: 400, headers })
  }
}
