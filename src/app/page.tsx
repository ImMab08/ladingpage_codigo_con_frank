import { HeroSection } from "@/src/components/hero-section"
import { BenefitsSection } from "@/src/components/benefits-section"
import { AboutSection } from "@/src/components/about-section"
import { TestimonialsSection } from "@/src/components/testimonials-section"
import { PricingSection } from "@/src/components/pricing-section"
import { CTASection } from "@/src/components/cta-section"
import { Footer } from "@/src/components/footer"
import { Navbar } from "@/src/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}
