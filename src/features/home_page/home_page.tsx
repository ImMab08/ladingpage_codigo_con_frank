import { HeroSection } from "./sections/hero_section";
import { AboutSection } from "./sections/about-section";
import { TestimonialsSection } from "./sections/testimonials-section";
import { PricingSection } from "./sections/pricing-section";
import { CTASection } from "./sections/cta-section";
import RoadMapSection from "./sections/road_map_section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RoadMapSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </>
  );
}
