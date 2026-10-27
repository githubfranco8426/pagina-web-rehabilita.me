'use client'

import { useRef, useState } from 'react'
import { shopProducts, type ShopProduct } from '@/lib/shop-products'
import { whatsappConsultasLink } from '@/lib/brand'
import Link from 'next/link'
import { useShopCart } from '@/components/shop-cart-provider'

const categories = ['Todas', 'Fonoaudiología', 'Terapia ocupacional', 'Kinesiología', 'Educación diferencial']
const normalize = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

export function Shop() {
  const cart = useShopCart()
  const [cartNotice, setCartNotice] = useState('')
  const cartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0)
  function addToCart(product: ShopProduct) {
    cart.addItem(product.id)
    setCartNotice(`${product.name}: selección actualizada. Puedes revisarla en el carrito de ejemplo.`)
  }
  const [category, setCategory] = useState('Todas')
  const [query, setQuery] = useState('')
  const [mode, setMode] = useState('Todas')
  const [selected, setSelected] = useState<ShopProduct | null>(null)
  const [message, setMessage] = useState('')
  const [copyStatus, setCopyStatus] = useState('')
  const detail = useRef<HTMLDialogElement>(null)
  const consultation = useRef<HTMLDialogElement>(null)
  const messageField = useRef<HTMLTextAreaElement>(null)

  const filtered = shopProducts.filter(product =>
    (category === 'Todas' || product.category === category) &&
    (mode === 'Todas' || product.mode === mode) &&
    normalize(product.name + ' ' + product.objective).includes(normalize(query.trim()))
  )

  function openProduct(product: ShopProduct) {
    setSelected(product)
    detail.current?.showModal()
  }

  function prepareConsultation(product?: ShopProduct) {
    detail.current?.close()
    setMessage(`Hola, vi el catálogo de ejemplo de Rehabilítame Shop y quisiera consultar por ${product ? `${product.name} (${product.id})` : 'insumos y recursos terapéuticos para profesionales'}. Entiendo que la tienda está en preparación. ¿Pueden orientarme sobre las especificaciones, el precio, la disponibilidad y las opciones de entrega en Iquique o Alto Hospicio?`)
    setCopyStatus('')
    consultation.current?.showModal()
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message)
      setCopyStatus('Mensaje copiado. Puedes pegarlo en WhatsApp.')
    } catch {
      messageField.current?.select()
      setCopyStatus('Selecciona y copia el mensaje manualmente.')
    }
  }

  function downloadCatalog() {
    const content = 'CATÁLOGO DE EJEMPLO — REHABILÍTAME SHOP\nTienda en preparación. Sin oferta comercial, precios ni stock confirmados.\n\n' +
      shopProducts.map(p => `${p.id} · ${p.name}\nEspecialidad: ${p.category}\nObjetivo propuesto: ${p.objective}\nEspecificaciones: ${p.spec}\nPrecio: por confirmar\nDisponibilidad: no confirmada\nModalidad propuesta: ${p.mode}\n`).join('\n')
    const url = URL.createObjectURL(new Blob([content], { type: 'text/plain;charset=utf-8' }))
    const link = document.createElement('a')
    link.href = url
    link.download = 'catalogo-EJEMPLO-rehabilitame-shop.txt'
    link.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  return <div className="rm-shop">
    <a className="skip" href="#catalogo">Saltar al catálogo</a>
    <div className="draft launch">TIENDA EN PREPARACIÓN · Catálogo de ejemplo · Precios y disponibilidad por confirmar</div>
    <header>
      <a href="/shop" aria-label="Rehabilítame Shop, inicio"><img className="logo" src="/shop-assets/rehabilitame-shop.svg" width="1050" height="240" alt="Rehabilítame Shop" /></a>
      <nav aria-label="Navegación de Shop"><a href="#catalogo">Catálogo</a><Link className="cart-link" href="/shop/carrito">Carrito de ejemplo ({cartCount})</Link><a href="/">Servicios clínicos ↗</a></nav>
    </header>
    <main id="contenido">
      <section className="hero"><div>
        <p className="eyebrow">PARA QUIENES ACOMPAÑAN CADA AVANCE</p>
        <h1>Recursos para tu<br />práctica profesional.</h1>
        <p className="lead">Insumos y recursos terapéuticos<br />para profesionales</p>
        <p className="location">Iquique · Alto Hospicio</p>
        <a className="button gold" href="#catalogo">Explorar catálogo <span aria-hidden="true">↗</span></a>
        <p className="hero-note">Fonoaudiología y terapia ocupacional · Selección piloto</p>
      </div><div className="hero-art" aria-label="Ilustración conceptual de recursos, no fotografía de productos">
        <div className="sheet"><span>REHABILÍTAME SHOP</span><div className="line" /><b>Una herramienta.<br />Muchas posibilidades.</b><div className="tiles" aria-hidden="true"><i>▱</i><i>◯</i><i>⌁</i></div><small>SELECCIÓN PROFESIONAL</small></div>
        <div className="seal" aria-hidden="true">RM<span>SHOP</span></div><p>Ilustración conceptual · Productos por definir</p>
      </div></section>
      <div className="principles"><span><b>01</b> Selección por especialidad</span><span><b>02</b> Inventario limitado y por encargo</span><span><b>03</b> Consulta antes de comprar</span></div>
      <section id="catalogo" className="catalog">
        <div className="section-head"><div><p className="eyebrow">ELIGE SEGÚN TU PRÁCTICA</p><h2>Catálogo profesional</h2></div><button className="text-button" onClick={downloadCatalog}>Descargar catálogo de ejemplo ↓</button></div>
        <p className="muted">Estamos preparando nuestra selección. Todas las fichas son ejemplos ilustrativos y no representan una oferta comercial.</p>
        <p role="status" className="cart-feedback">{cartNotice}</p>
        <div className="categories" role="group" aria-label="Especialidades">{categories.map(item => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
        <div className="filters">
          <label>Buscar recurso<input type="search" placeholder="Nombre u objetivo terapéutico" value={query} onChange={event => setQuery(event.target.value)} /></label>
          <label>Modalidad propuesta<select value={mode} onChange={event => setMode(event.target.value)}><option value="Todas">Todas las modalidades</option><option>Inventario limitado</option><option>Por encargo</option></select></label>
          <button className="text-button" onClick={() => {setCategory('Todas');setQuery('');setMode('Todas')}}>Limpiar filtros</button>
        </div>
        <p role="status" className="muted">{filtered.length} {filtered.length === 1 ? 'recurso' : 'recursos'} de ejemplo · Precios y disponibilidad sin confirmar</p>
        <div className="grid">{filtered.length ? filtered.map(product => <article className="card" key={product.id}>
          <div className={`visual ${product.cls}`} aria-hidden="true"><small>EJEMPLO ILUSTRATIVO</small><span>{product.art}</span></div>
          <div className="card-content"><div className="tag">{product.category}</div><h3>{product.name}</h3><p>{product.objective}</p>
            <div className="meta"><strong>Precio: por confirmar</strong>Disponibilidad: no confirmada<br />Modalidad propuesta: {product.mode.toLowerCase()}</div>
            <div className="card-actions"><button aria-label={`Ver ficha: ${product.name}`} onClick={() => openProduct(product)}>Ver ficha y consultar ↗</button><button className="cart-add" disabled={!cart.hydrated} aria-label={`Agregar al carrito de ejemplo: ${product.name}`} onClick={() => addToCart(product)}>Agregar al carrito de ejemplo +</button></div>
          </div>
        </article>) : <div className="empty">No hay ejemplos con estos filtros. Prueba otra búsqueda o limpia los filtros.</div>}</div>
      </section>
      <section id="encargos" className="how"><div><p className="eyebrow">UN PILOTO, CERCA DE TU CONSULTA</p><h2>Primero, conversemos<br />sobre lo que necesitas.</h2><p>La propuesta combina una selección pequeña con productos por encargo. Precio, especificaciones y plazos se confirman antes de aceptar un pedido.</p><button className="button gold" onClick={() => prepareConsultation()}>Consultar por WhatsApp ↗</button></div>
        <ol><li><b>Elige un recurso</b><span>Revisa su objetivo y la información de la ficha.</span></li><li><b>Consulta los detalles</b><span>Confirma características, precio y disponibilidad.</span></li><li><b>Coordina tu pedido</b><span>Entrega o retiro por definir para Iquique y Alto Hospicio.</span></li></ol>
      </section>
    </main>
    <footer><img src="/shop-assets/rehabilitame-shop.svg" width="1050" height="240" alt="Rehabilítame Shop" /><p>Insumos y recursos terapéuticos para profesionales</p><p><a href="/">Volver a servicios clínicos</a> · <a href="/politica-de-privacidad">Privacidad</a></p><small>Tienda en preparación · Catálogo de ejemplo<br />Las consultas no constituyen pedidos ni reservas.</small></footer>
    <dialog ref={detail} aria-labelledby="detail-title"><button className="close" aria-label="Cerrar ficha" onClick={() => detail.current?.close()}>×</button>
      {selected ? <><p className="eyebrow">FICHA DE EJEMPLO · {selected.id}</p><h2 id="detail-title">{selected.name}</h2><p>{selected.category}</p>
        <dl><dt>Objetivo propuesto</dt><dd>{selected.objective}</dd><dt>Especificaciones</dt><dd>{selected.spec}</dd><dt>Precio</dt><dd>Por confirmar. No hay precio de venta definido.</dd><dt>Disponibilidad</dt><dd>No confirmada. No se han verificado existencias.</dd><dt>Modalidad propuesta</dt><dd>{selected.mode}. No constituye disponibilidad ni plazo de entrega.</dd></dl>
        <p className="muted">Contenido de ejemplo. La selección y el uso deben ser revisados por el profesional. No se atribuyen resultados clínicos al producto.</p><div className="consult-actions"><button className="button gold" disabled={!cart.hydrated} onClick={() => {addToCart(selected);detail.current?.close()}}>Agregar al carrito de ejemplo +</button><button className="button" onClick={() => prepareConsultation(selected)}>Consultar por WhatsApp ↗</button></div></> : null}
    </dialog>
    <dialog ref={consultation} aria-labelledby="consult-title"><button className="close" aria-label="Cerrar consulta" onClick={() => consultation.current?.close()}>×</button><p className="eyebrow">REHABILÍTAME SHOP</p><h2 id="consult-title">Consulta por WhatsApp</h2><p>Consulta al equipo sobre la tienda en preparación. Los productos de este catálogo son ejemplos y no tienen precio ni disponibilidad confirmados.</p><label>Mensaje de consulta<textarea ref={messageField} rows={7} readOnly value={message} /></label><p className="muted">Abrir WhatsApp prepara el mensaje. Tú decides si enviarlo. Evita incluir datos de pacientes.</p><div className="consult-actions"><a className="button gold" href={whatsappConsultasLink(message)} target="_blank" rel="noopener noreferrer">Abrir WhatsApp ↗</a><button className="button" onClick={copyMessage}>Copiar mensaje</button></div><p role="status">{copyStatus}</p></dialog>
  </div>
}
