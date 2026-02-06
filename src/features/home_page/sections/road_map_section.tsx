"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { slides } from "@/src/features/data/road_map_data";

export default function RoadMapSection() {
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
    <section className="relative h-full py-32 md:py-0 md:h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        className="size-full overflow-hidden max-w-6xl select-none cursor-grab flex items-center justify-center touch-pan-y relative"
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
          className={`size-full flex ${
            isDragging ? "" : "transition-transform duration-500 ease-out"
          }`}
          style={{
            transform: `translateX(${currentTranslate}px)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-full relative overflow-hidden"
            >
              <div className="size-full max-w-6xl mx-auto px-6 md:p-10 flex">
                <div className="flex size-full md:gap-12 items-center relative flex-col justify-center md:justify-normal lg:flex-row">
                  {/* TEXTO */}
                  <div className="relative max-w-md space-y-3 md:space-y-5 text-center lg:text-left lg:-top-32 lg:left-32">
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
                  <div className="relative flex justify-center mt-10 lg:mt-0 lg:absolute lg:right-32 lg:bottom-32">
                    <Image
                      src={slide.image}
                      width={500}
                      height={500}
                      alt={slide.titleMain}
                      draggable={false}
                      className="w-80 lg:w-125 h-auto select-none pointer-events-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-16 flex gap-3 p-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => snapToSlide(index)}
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
