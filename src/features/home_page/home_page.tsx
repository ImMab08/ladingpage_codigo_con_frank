import { HeroSection } from "./sections/hero_section";
import { CarrouselSection } from "./sections/carrousel_section";
import { GameSection } from "./sections/game_section";
import { WhySection } from "./sections/why_section";
import { TestimonialsSection } from "./sections/testimonials-section";
import { PricingSection } from "./sections/pricing_section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GameSection />
      <CarrouselSection />
      <WhySection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
