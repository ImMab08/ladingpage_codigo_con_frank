"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { slides } from "@/src/features/data/road_map_data";
import { BackgroundStarts } from "@/src/components/background_starts";

export function CarrouselSection() {
  const TOTAL_SLIDES = slides.length;

  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [currentTranslate, setCurrentTranslate] = useState(0);

  const startX = useRef(0);
  const activeRef = useRef(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  /* ---------------- HELPERS ---------------- */
  const getSlideWidth = () => sliderRef.current?.offsetWidth || 0;

  const snapToSlide = useCallback((newIndex: number) => {
    setActive(newIndex);
    setCurrentTranslate(-newIndex * getSlideWidth());
  }, []);

  /* ---------------- AUTO SLIDE ---------------- */
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    if (isDragging) return;

    const interval = setInterval(() => {
      const next = (activeRef.current + 1) % TOTAL_SLIDES;
      snapToSlide(next);
    }, 8000);

    return () => clearInterval(interval);
  }, [isDragging, TOTAL_SLIDES, snapToSlide]);

  /* 🔑 RESIZE FIX */
  useEffect(() => {
    const onResize = () => setCurrentTranslate(-active * getSlideWidth());

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active]);

  /* ---------------- DRAG START ---------------- */
  const startDrag = (clientX: number) => {
    setIsDragging(true);
    startX.current = clientX;
  };

  /* ---------------- DRAG MOVE ---------------- */
  const onDragMove = (clientX: number) => {
    if (!isDragging) return;

    const delta = clientX - startX.current;
    setCurrentTranslate(-active * getSlideWidth() + delta);
  };

  /* ---------------- DRAG END ---------------- */
  const endDrag = () => {
    if (!isDragging) return;

    const movedBy = currentTranslate + active * getSlideWidth();
    const threshold = getSlideWidth() * 0.2;

    if (movedBy < -threshold && active < TOTAL_SLIDES - 1) {
      snapToSlide(active + 1);
    } else if (movedBy > threshold && active > 0) {
      snapToSlide(active - 1);
    } else {
      snapToSlide(active);
    }

    setIsDragging(false);
  };

  /* ---------------- RENDER ---------------- */
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row  gap-16">
        {/* Titulo  */}
        <div className="w-full md:w-1/2 text-center md:text-start">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-8 md:leading-14">
            Lo que{" "}
            <span className="bg-linear-to-r from-blue-400 via-green-400 to-green-500 bg-clip-text text-transparent">
              crearán y <br />
              aprenderán
            </span>{" "}
            en sus misiones
          </h2>

          <p className="text-xs md:text-base font-sans text-muted-foreground max-w-xl mx-auto md:mx-0">
            Cada clase es una aventura. <br className="block md:hidden" />
            Cada línea de código, un logro.
          </p>
        </div>

        {/* Crrousel  */}
        <div className="w-full md:w-1/2 relative">
          <div
            className="overflow-hidden cursor-grab select-none"
            onMouseDown={(e) => startDrag(e.clientX)}
            onMouseMove={(e) => onDragMove(e.clientX)}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            onTouchStart={(e) => startDrag(e.touches[0].clientX)}
            onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
            onTouchEnd={endDrag}
          >
            <div
              ref={sliderRef}
              className={`flex ${
                isDragging ? "" : "transition-transform duration-500 ease-out"
              }`}
              style={{
                transform: `translateX(${currentTranslate}px)`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="min-w-full flex flex-col items-center md:items-start text-center md:text-left px-4"
                >
                  {/* TEXTO DEL SLIDE */}
                  <div className="max-w-md space-y-4 mb-6">
                    <div className="">
                      <p className="text-2xl font-bold leading-5">{slide.titleTop}</p>
                      <p className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-400 via-green-400 to-green-500 bg-clip-text text-transparent">
                        {slide.titleMain}
                      </p>
                    </div>

                    <p className="text-sm md:text-base text-text-primary/80">
                      {slide.text}
                    </p>
                  </div>

                  {/* IMAGEN */}
                  <Image
                    src={slide.image}
                    width={500}
                    height={500}
                    alt={slide.titleMain}
                    draggable={false}
                    className="w-72 md:w-96 h-auto pointer-events-none select-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center md:justify-start gap-3 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => snapToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  active === index
                    ? "w-10 h-2 bg-text-tertiary"
                    : "w-2 h-2 bg-text-primary/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
