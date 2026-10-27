'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useShopCart } from '@/components/shop-cart-provider'
import { MAX_QUANTITY, quoteCart } from '@/lib/shop-cart'
import { shopProducts } from '@/lib/shop-products'
import { whatsappConsultasLink } from '@/lib/brand'

const clp = (value: number | null) => value === null ? 'Por confirmar' : new Intl.NumberFormat('es-CL', {style:'currency',currency:'CLP',maximumFractionDigits:0}).format(value)

export function ShopCart() {
  const { items, hydrated, persistenceAvailable, setQuantity, removeItem, clear } = useShopCart()
  const [checking, setChecking] = useState(false)
  const [feedback, setFeedback] = useState('')
  const quote = quoteCart(items)
  const units = items.reduce((sum, item) => sum + item.quantity, 0)
  const message = 'Hola, quisiera cotizar esta selección del catálogo de ejemplo de Rehabilítame Shop:\n' +
    quote.lines.map(line => `${line.quantity} × ${line.name} (${line.productId})`).join('\n') +
    '\nEntiendo que no es un pedido confirmado. ¿Pueden confirmar especificaciones, precio, disponibilidad y entrega en Iquique o Alto Hospicio?'

  async function reviewCart() {
    setChecking(true)
    setFeedback('')
    try {
      const response = await fetch('/api/shop/cart', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({items})})
      const result = await response.json()
      setFeedback(response.ok ? result.notice : result.error || 'No pudimos revisar la selección. Intenta nuevamente.')
    } catch { setFeedback('No pudimos conectar. Conservamos tu carrito; intenta nuevamente.') }
    finally { setChecking(false) }
  }

  return <div className="rm-shop">
    <div className="draft">CARRITO DE EJEMPLO · Precios y disponibilidad por confirmar · Pagos aún no habilitados</div>
    <header><Link href="/shop" aria-label="Rehabilítame Shop, inicio"><img className="logo" src="/shop-assets/rehabilitame-shop.svg" width="1050" height="240" alt="Rehabilítame Shop" /></Link><nav aria-label="Navegación del carrito"><Link href="/shop#catalogo">Seguir explorando</Link><a href="/">Servicios clínicos ↗</a></nav></header>
    <main className="cart-page" id="contenido"><p className="eyebrow">TU SELECCIÓN PROFESIONAL</p><h1>Tu carrito</h1>
      <p className="muted">Reúne los recursos que te interesan. Esta selección no reserva productos ni genera un cobro.</p>
      {!hydrated ? <p role="status">Cargando tu selección…</p> : !items.length ? <section className="cart-empty"><h2>Tu carrito está vacío</h2><p>Explora el catálogo y agrega recursos para revisar tu selección.</p><Link className="button gold" href="/shop#catalogo">Explorar catálogo ↗</Link></section> : <div className="cart-layout">
        <section aria-label="Productos del carrito"><div className="cart-list-head"><p>{units} {units === 1 ? 'unidad de ejemplo' : 'unidades de ejemplo'}</p><button className="text-button" onClick={() => {clear();setFeedback('')}}>Vaciar carrito</button></div>
          {quote.lines.map(line => {
            const product = shopProducts.find(p => p.id === line.productId)!
            return <article className="cart-item" key={line.productId}><div className={`cart-thumb visual ${product.cls}`} aria-hidden="true"><span>{product.art}</span></div><div className="cart-item-content"><p className="tag">EJEMPLO · {product.category}</p><h2>{line.name}</h2><p className="muted">Ref. {line.productId} · Disponibilidad no confirmada</p><p className="cart-price">Precio unitario: {clp(line.unitPriceCLP)}</p>
              <div className="cart-quantity"><button aria-label={`Disminuir cantidad: ${line.name}`} disabled={line.quantity <= 1} onClick={() => {setQuantity(line.productId,line.quantity-1);setFeedback('')}}>−</button><label>Cantidad de {line.name}<select aria-label={`Cantidad: ${line.name}`} value={line.quantity} onChange={event => {setQuantity(line.productId,Number(event.target.value));setFeedback('')}}>{Array.from({length:MAX_QUANTITY},(_,i) => <option key={i+1} value={i+1}>{i+1}</option>)}</select></label><button aria-label={`Aumentar cantidad: ${line.name}`} disabled={line.quantity >= MAX_QUANTITY} onClick={() => {setQuantity(line.productId,line.quantity+1);setFeedback('')}}>+</button><button className="text-button" aria-label={`Quitar: ${line.name}`} onClick={() => {removeItem(line.productId);setFeedback('')}}>Quitar</button></div>
            </div></article>
          })}
          {!persistenceAvailable ? <p className="cart-notice">Tu navegador no permite guardar el carrito al cerrar esta página.</p> : <p className="muted">Tu selección se guarda en este navegador. Puedes volver al catálogo y seguir agregando recursos.</p>}
        </section>
        <aside className="cart-summary" aria-labelledby="summary-title"><p className="eyebrow">ANTES DE COMPRAR</p><h2 id="summary-title">Resumen</h2><dl><dt>Subtotal</dt><dd>{clp(quote.subtotalCLP)}</dd><dt>Entrega</dt><dd>Por coordinar</dd><dt>Total</dt><dd>Por confirmar</dd></dl><p className="cart-notice">Los ejemplos no tienen precio ni stock confirmado. El carrito no representa una oferta de venta.</p><button className="button" disabled={checking} onClick={reviewCart}>{checking ? 'Revisando…' : 'Revisar selección'}</button><p role="status" className="cart-feedback">{feedback}</p>
          <h3>Medios de pago previstos</h3><div className="payment-option"><b>Webpay Plus</b><span>Tarjetas · Pendiente de habilitación del comercio</span></div><div className="payment-option"><b>Transferencia bancaria</b><span>Pendiente de cuenta bancaria y confirmación del pedido</span></div><p className="muted">Los pagos se habilitarán cuando estén confirmados el catálogo, los precios y los medios de pago.</p><a className="button gold" href={whatsappConsultasLink(message)} target="_blank" rel="noopener noreferrer">Cotizar selección por WhatsApp ↗</a>
        </aside>
      </div>}
    </main><footer><p>Insumos y recursos terapéuticos para profesionales</p><Link href="/shop">Volver a Rehabilítame Shop</Link> · <a href="/politica-de-privacidad">Privacidad</a></footer>
  </div>
}
