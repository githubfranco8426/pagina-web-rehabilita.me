import Link from "next/link"
import { Brain, HeartHandshake } from "lucide-react"
import { homePaths } from "@/lib/rehabilitation"
import { ContextualCta } from "@/components/contextual-cta"
import { ServiceFinder } from "@/components/service-finder"
import { whatsappConsultasLink } from "@/lib/brand"

const icons = [HeartHandshake, Brain]

export function RehabilitationPaths() {
  return (
    <section id="servicios" className="scroll-mt-24 bg-sky-50 px-5 py-20 md:px-8 md:py-24">
      <span id="domicilio" className="block scroll-mt-24" aria-hidden="true" />
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-800">Servicios premium · Rehabilitación en casa</p>
        <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-sky-900 md:text-5xl">¿En qué podemos ayudarte?</h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/80">Si volvió del hospital, perdió movilidad o necesita apoyo para comunicarse y alimentarse, te ayudamos a definir el siguiente paso.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {homePaths.filter(page => ["rehabilitacion-post-hospitalizacion", "rehabilitacion-neurologica-domicilio"].includes(page.slug)).map((page, index) => {
            const Icon = icons[index]
            const postHospital = page.slug === "rehabilitacion-post-hospitalizacion"
            const acv = page.slug === "rehabilitacion-neurologica-domicilio"
            return (
              <Link key={page.slug} href={postHospital ? whatsappConsultasLink("Hola, estuve hospitalizado y quisiera contarles mi situación después del alta.") : acv ? whatsappConsultasLink("Hola, quisiera orientación sobre rehabilitación después de un ACV para mi familiar.") : `/${page.slug}`} className="group flex flex-col rounded-3xl border border-[#D7B56D]/60 bg-[#0D253F] p-7 shadow-lg transition-colors hover:border-[#D7B56D] hover:bg-[#12324F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7B56D] focus-visible:ring-offset-4 md:p-10">
                <div className="flex items-center justify-between"><Icon className="size-9 text-[#D7B56D]" aria-hidden="true" /><span className="text-sm font-semibold tracking-widest text-[#D7B56D]" aria-hidden="true">0{index + 1}</span></div>
                {(postHospital || acv) && <p className="mt-7 text-xs font-semibold uppercase tracking-widest text-[#D7B56D]">{postHospital ? "Post hospitalización" : "Rehabilitación neurológica"}</p>}
                <h3 className={`${postHospital || acv ? "mt-2" : "mt-6"} text-2xl font-semibold leading-snug text-white md:text-3xl`}>{postHospital ? "¿Estuviste hospitalizado o en UCI?" : acv ? "¿Tu familiar tuvo un ACV?" : page.label}</h3>
                <p className="mt-5 max-w-md flex-1 text-lg leading-relaxed text-white/85">{postHospital ? "¿Sientes que te falta fuerza o que te cuesta más hacer las cosas después del alta?" : acv ? "¿Notas que tiene dificultad para caminar o hablar?" : page.situations[0]}</p>
                <span className="mt-9 border-t border-[#D7B56D]/30 pt-5 text-base font-semibold text-[#D7B56D] underline underline-offset-4">{postHospital ? "Cuéntanos más. Queremos conocer tu situación." : acv ? "Escríbenos" : "Conocer esta atención"}</span>
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
