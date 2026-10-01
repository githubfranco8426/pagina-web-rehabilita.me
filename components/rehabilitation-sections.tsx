import Link from "next/link"
import { Activity, Brain, HeartHandshake, Wind } from "lucide-react"
import { homePaths } from "@/lib/rehabilitation"
import { ContextualCta } from "@/components/contextual-cta"
import { ServiceFinder } from "@/components/service-finder"

const icons = [HeartHandshake, Brain, Wind, Activity]

export function RehabilitationPaths() {
  return (
    <section id="servicios" className="scroll-mt-24 bg-sky-50 px-5 py-20 md:px-8 md:py-24">
      <span id="domicilio" className="block scroll-mt-24" aria-hidden="true" />
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-800">Rehabilitación en casa</p>
        <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-sky-900 md:text-5xl">¿En qué podemos ayudarte?</h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/80">Si volvió del hospital, perdió movilidad o necesita apoyo para comunicarse y alimentarse, te ayudamos a definir el siguiente paso.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homePaths.map((page, index) => {
            const Icon = icons[index]
            return (
              <Link key={page.slug} href={`/${page.slug}`} className="group flex flex-col rounded-3xl border border-sky-900/15 bg-white p-6 transition-colors hover:border-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700">
                <Icon className="size-7 text-sky-700" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-semibold leading-snug text-sky-900">{page.label}</h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">{page.situations[0]}</p>
                <span className="mt-6 text-sm font-semibold text-sky-800 underline underline-offset-4">Conocer esta atención</span>
              </Link>
            )
          })}
        </div>
        <div className="mt-9"><ContextualCta source="home_paths" /></div>
        <ServiceFinder />
      </div>
    </section>
  )
}

export function EvaluationSteps() {
  const steps = [
    { title: "Nos cuentas el caso", text: "Escríbenos si tienes dudas sobre qué atención necesita tu familiar o reserva una evaluación." },
    { title: "Evaluamos las necesidades", text: "Consideramos la condición, las indicaciones del equipo tratante y las actividades que resultan difíciles en el hogar." },
    { title: "Acordamos objetivos", text: "Definimos el plan y revisamos avances con la persona y su familia. Coordinamos las disciplinas que corresponden." },
  ]
  return (
    <section className="px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-semibold tracking-tight text-sky-900 md:text-4xl">Cómo empezamos, paso a paso</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => <li key={step.title} className="border-t-2 border-sky-200 pt-6"><span className="text-sm font-semibold text-sky-800">0{index + 1}</span><h3 className="mt-3 text-xl font-semibold text-sky-900">{step.title}</h3><p className="mt-4 text-base leading-relaxed text-muted-foreground">{step.text}</p></li>)}
        </ol>
      </div>
    </section>
  )
}
