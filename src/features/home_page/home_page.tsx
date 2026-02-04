import React from "react";
import { HeroSection } from "./sections/hero-section";
import { BenefitsSection } from "./sections/benefits-section";
import { AboutSection } from "./sections/about-section";
import { TestimonialsSection } from "./sections/testimonials-section";
import { PricingSection } from "./sections/pricing-section";
import { CTASection } from "./sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </>
  );
}
