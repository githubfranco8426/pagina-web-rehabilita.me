"use client"

import { Blog7 } from "@/components/ui/blog7"
import { brand } from "@/lib/brand"

const posts = [
  {
    id: "post-1",
    title: "Lo que sí y lo que no sobre la kinesiología respiratoria",
    summary:
      "Aclaramos los mitos más comunes sobre nebulización, secreciones y cuándo es realmente necesario consultar a un kinesiólogo respiratorio.",
    label: "Mitos vs. realidad",
    author: "rehabilita.me",
    published: "Instagram",
    url: brand.contact.instagramUrl,
    image: "/images/nebulizador-flatlay.webp",
    masLeido: true,
  },
  {
    id: "post-2",
    title: "Procesos de recuperación de pacientes, contados paso a paso",
    summary:
      "Con el permiso de cada familia, mostramos avances reales de kinesiología a domicilio: de la hospitalización a caminar de nuevo.",
    label: "Casos reales",
    author: "rehabilita.me",
    published: "Instagram",
    url: brand.contact.instagramUrl,
    image: "/images/domicilio-caminador.webp",
  },
  {
    id: "post-3",
    title: "Cuidados en casa para niños y adultos con condiciones respiratorias",
    summary:
      "Consejos prácticos de manejo de inhaladores, posiciones y señales de alerta para acompañar el tratamiento entre sesiones.",
    label: "Consejos prácticos",
    author: "rehabilita.me",
    published: "Instagram",
    url: brand.contact.instagramUrl,
    image: "/images/inhalador-adulto.webp",
  },
]

export function JournalSection() {
  return (
    <section id="instagram">
      <Blog7
        tagline="Contenido educativo"
        heading="Nos encuentras todos los días en Instagram"
        description={`Mitos vs. realidad, casos reales y consejos prácticos sobre kinesiología respiratoria, maxilofacial y fonoaudiología. Síguenos en ${brand.contact.instagramHandle}.`}
        buttonText={`Seguir ${brand.contact.instagramHandle}`}
        buttonUrl={brand.contact.instagramUrl}
        posts={posts}
      />
    </section>
  )
}
