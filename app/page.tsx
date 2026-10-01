import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ServiceFinder } from "@/components/service-finder"
import { EditorialBreak } from "@/components/editorial-break"
import { ApproachSection } from "@/components/approach-section"
import { CasesSection } from "@/components/cases-section"
import { JournalSection } from "@/components/journal-section"
import { FaqSection } from "@/components/faq-section"
import { BookingWidgetSection } from "@/components/booking-widget-section"
import { Footer } from "@/components/footer"
import { WhatsappFab } from "@/components/whatsapp-fab"
import { RehabilitationPaths, EvaluationSteps } from "@/components/rehabilitation-sections"

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <RehabilitationPaths />
        <ServiceFinder />
        <AboutSection />
        <EvaluationSteps />
        <ServicesSection />
        <EditorialBreak />
        <CasesSection />
        <ApproachSection />
        <JournalSection />
        <FaqSection />
        <BookingWidgetSection />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  )
}
