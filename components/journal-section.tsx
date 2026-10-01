import { ArrowUpRight, HeartHandshake, MessageCircle, Wind } from "lucide-react"
import { brand } from "@/lib/brand"
import Link from "next/link"

const topics = [
  {
    icon: Wind,
    category: "Respiración",
    title: "Entender qué pasa cuando respirar cuesta.",
    description: "Preguntas frecuentes, mitos y cuidados cotidianos explicados con claridad.",
  },
  {
    icon: HeartHandshake,
    category: "Rehabilitación",
    title: "Acompañar la recuperación paso a paso.",
    description: "Ideas prácticas para pacientes y familias durante el proceso en casa.",
  },
  {
    icon: MessageCircle,
    category: "Fonoaudiología",
    title: "Cuidar cómo nos comunicamos y alimentamos.",
    description: "Información útil sobre habla, voz, lactancia y deglución.",
  },
]

export function JournalSection() {
  return (
    <section id="instagram" className="bg-sky-50/70 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">Contenido educativo</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-sky-900 md:text-5xl">
              Respuestas claras para cuidar mejor.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/75">
              Orientación para acompañar la recuperación en casa, después del alta o ante dificultades de comunicación y alimentación.
            </p>
          </div>
          <a
            href={brand.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-sky-700/25 bg-background px-6 font-semibold text-sky-800 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
          >
            Seguir {brand.contact.instagramHandle}
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </a>
        </div>

        <Link href="/recursos" className="mt-7 inline-flex min-h-11 items-center font-semibold text-sky-800 underline underline-offset-4">Leer nuestras guías para familias</Link>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {topics.map((topic) => (
            <div key={topic.category} className="rounded-3xl border border-sky-900/10 bg-background p-7 shadow-[0_15px_40px_-30px_rgba(27,54,93,.4)]">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                <topic.icon className="size-6" aria-hidden="true" />
              </span>
              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta-700">{topic.category}</p>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-sky-900">{topic.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/70">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
