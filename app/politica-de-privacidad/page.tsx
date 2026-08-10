import type { Metadata } from "next"
import Link from "next/link"
import { brand } from "@/lib/brand"

export const metadata: Metadata = {
  title: "Política de Privacidad · rehabilita.me",
  description: "Cómo rehabilita.me recopila, usa y protege tus datos personales.",
}

export default function PoliticaDePrivacidadPage() {
  const lastUpdated = "10 de agosto de 2026"

  return (
    <main className="mx-auto max-w-3xl px-6 py-24 md:px-12 md:py-32">
      <Link
        href="/"
        className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
      >
        ← Volver al inicio
      </Link>

      <h1 className="mt-8 text-3xl md:text-4xl font-extralight tracking-tight text-foreground text-balance">
        Política de Privacidad
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Última actualización: {lastUpdated}</p>

      <div className="mt-12 space-y-10 text-sm leading-[1.8] text-muted-foreground">
        <section>
          <h2 className="text-lg font-medium text-foreground mb-3">1. Quiénes somos</h2>
          <p>
            {brand.name} ({brand.legalName}) es un centro de kinesiología respiratoria, maxilofacial y
            fonoaudiología ubicado en {brand.contact.address}, {brand.contact.city}. Esta política explica
            qué datos personales recopilamos cuando visitas nuestro sitio o agendas una hora con nosotros, y
            cómo los usamos, guardamos y protegemos.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground mb-3">2. Qué datos recopilamos</h2>
          <p className="mb-3">Dependiendo de cómo interactúes con nosotros, podemos recopilar:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Nombre completo, teléfono y correo electrónico, al agendar una hora o escribirnos.</li>
            <li>
              Información clínica relevante para tu atención (motivo de consulta, historia clínica, evolución
              del tratamiento), entregada por ti o derivada de otro profesional de salud.
            </li>
            <li>Dirección, cuando agendas una atención a domicilio.</li>
            <li>
              Datos de navegación básicos del sitio web (páginas visitadas, dispositivo), si usamos
              herramientas de analítica o publicidad como Google Ads.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground mb-3">3. Para qué usamos tus datos</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Agendar, confirmar y dar seguimiento a tus horas de atención.</li>
            <li>Entregar el tratamiento kinesiológico o fonoaudiológico correspondiente.</li>
            <li>Comunicarnos contigo por WhatsApp, teléfono o correo sobre tu atención.</li>
            <li>Mejorar nuestros servicios y, si corresponde, medir el rendimiento de campañas publicitarias.</li>
          </ul>
          <p className="mt-3">No vendemos ni compartimos tus datos con terceros para fines comerciales ajenos a tu atención.</p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground mb-3">4. Con quién compartimos tu información</h2>
          <p>
            Tu información clínica solo se comparte con otros profesionales de salud cuando es necesario para
            tu tratamiento (por ejemplo, coordinación con un odontólogo u otro especialista), y siempre bajo
            confidencialidad profesional. Podemos usar proveedores tecnológicos (como plataformas de agenda o
            mensajería) que procesan datos en nuestro nombre, bajo las mismas condiciones de resguardo.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground mb-3">5. Cómo protegemos tus datos</h2>
          <p>
            Tomamos medidas razonables para proteger tu información contra acceso no autorizado, pérdida o
            uso indebido, tanto en nuestros sistemas de agenda como en las comunicaciones por WhatsApp o
            correo electrónico.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground mb-3">6. Tus derechos</h2>
          <p>
            De acuerdo con la Ley N° 19.628 sobre Protección de la Vida Privada, puedes solicitar acceder,
            corregir, actualizar o eliminar tus datos personales en cualquier momento, escribiéndonos por
            WhatsApp al {brand.contact.whatsappDisplay} o a nuestros canales de contacto.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground mb-3">7. Cambios a esta política</h2>
          <p>
            Podemos actualizar esta política ocasionalmente. La fecha de la última actualización aparece al
            inicio de esta página.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground mb-3">8. Contacto</h2>
          <p>
            Si tienes dudas sobre esta política o el tratamiento de tus datos, escríbenos:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>WhatsApp: {brand.contact.whatsappDisplay}</li>
            <li>Instagram: {brand.contact.instagramHandle}</li>
            <li>Dirección: {brand.contact.address}</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
