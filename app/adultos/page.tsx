import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { ReimbursementSection } from "@/components/reimbursement-section"
import { Marquee } from "@/components/marquee"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { EditorialBreak } from "@/components/editorial-break"
import { ApproachSection } from "@/components/approach-section"
import { CasesSection } from "@/components/cases-section"
import { JournalSection } from "@/components/journal-section"
import { FaqSection } from "@/components/faq-section"
import { BookingWidgetSection } from "@/components/booking-widget-section"
import { Footer } from "@/components/footer"
import { WhatsappFab } from "@/components/whatsapp-fab"
import { RehabilitationPaths, EvaluationSteps } from "@/components/rehabilitation-sections"

export const metadata = {
  title: "Rehabilítame Adultos | Rehabilitación en Iquique y Alto Hospicio",
  description: "Kinesiología y Fonoaudiología para adultos. Atención coordinada de rehabilitación en Iquique y Alto Hospicio.",
  alternates: { canonical: "/adultos" },
  openGraph: { title: "Rehabilítame Adultos", url: "/adultos", images: [{ url: "/images/domicilio-paciente-portada.webp", alt: "Rehabilitación a domicilio" }] },
}

export default function Page() {
  return (
    <>
      <Navigation />
      <main id="contenido">
        <Hero />
        <Marquee />
        <RehabilitationPaths />
        <ServicesSection />
        <AboutSection />
        <EvaluationSteps />
        <EditorialBreak />
        <CasesSection />
        <ApproachSection />
        <JournalSection />
        <ReimbursementSection />
        <FaqSection />
        <BookingWidgetSection />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  )
}
