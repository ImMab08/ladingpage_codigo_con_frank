import { HeroSection } from "./sections/hero_section";
import { CarrouselSection } from "./sections/carrousel_section";
import { GameSection } from "./sections/game_section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GameSection />
      <CarrouselSection />

    </>
  );
}
