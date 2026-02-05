"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { slides } from "@/src/features/data/road_map_data";

export default function RoadMapSection() {
  const TOTAL_SLIDES = 4;

  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const deltaX = useRef(0);

  // Touch refs (mobile)
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  /* ---------------- AUTO SLIDE ---------------- */
  useEffect(() => {
    if (isDragging) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % TOTAL_SLIDES);
    }, 80000);

    return () => clearInterval(interval);
  }, [isDragging]);

  /* ---------------- MOUSE DRAG ---------------- */
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    deltaX.current = e.clientX - startX.current;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (deltaX.current > 120 && active > 0) {
      setActive(active - 1);
    } else if (deltaX.current < -120 && active < TOTAL_SLIDES - 1) {
      setActive(active + 1);
    }

    deltaX.current = 0;
  };

  /* ---------------- TOUCH (MOBILE) ---------------- */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchDeltaX.current =
      e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (touchDeltaX.current > 80 && active > 0) {
      setActive(active - 1);
    } else if (touchDeltaX.current < -80 && active < TOTAL_SLIDES - 1) {
      setActive(active + 1);
    }

    touchDeltaX.current = 0;
  };

  /* ---------------- RENDER ---------------- */
  return (
    <section className="relative h-full py-48 md:py-0 md:h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* SLIDER */}
      <div
        className="size-full overflow-hidden max-w-6xl select-none cursor-pointer flex items-center justify-center touch-pan-y"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="size-full flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-full relative overflow-hidden"
            >
              <div className="size-full max-w-6xl mx-auto px-6 md:p-10 flex">
                {/* CONTENEDOR PRINCIPAL */}
                <div
                  className="
                    flex size-full gap-12 items-center relative
                    flex-col justify-center md:justify-normal
                    lg:flex-row
                  "
                >
                  {/* TEXTO */}
                  <div
                    className="
                      relative max-w-md space-y-3 md:space-y-5
                      text-center
                      lg:text-left
                      lg:-top-32 lg:left-32
                    "
                  >
                    <div>
                      <p className="text-2xl font-bold leading-5 md:leading-2">
                        {slide.titleTop}
                      </p>
                      <p className="text-4xl md:text-5xl text-text-tertiary font-bold">
                        {slide.titleMain}
                      </p>
                    </div>

                    <p className="text-sm md:text-base text-text-primary/80">
                      {slide.text}
                    </p>
                  </div>

                  {/* IMAGEN */}
                  <div
                    className="
                      relative flex justify-center
                      mt-10
                      lg:mt-0
                      lg:absolute lg:right-32 lg:bottom-32
                    "
                  >
                    <Image
                      src={slide.image}
                      width={500}
                      height={500}
                      alt={slide.titleMain}
                      className="w-80 lg:w-125 h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-20 flex gap-3 pointer-events-none md:pointer-events-auto">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              active === index
                ? "w-10 h-2 bg-text-tertiary"
                : "w-2 h-2 bg-text-primary/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
