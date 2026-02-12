"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { slides } from "@/src/features/data/road_map_data";
import { BackgroundStarts } from "@/src/components/background_starts";
import { IconCheckCircle } from "@/src/shared/icons/icon_check_circle";

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
    <section className="relative py-20 md:py-28 overflow-hidden">
      <BackgroundStarts />
      <div className="max-w-6xl mx-auto px-6">
        {/* GRID PRINCIPAL */}
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          {/* COLUMNA IZQUIERDA */}
          <div className="max-w-xs md:max-w-6xl w-full text-center md:text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-8 md:leading-14">
              Lo que{" "}
              <span className="bg-linear-to-r from-blue-400 via-green-400 to-green-500 bg-clip-text text-transparent">
                crearán y <br className="hidden md:block" />
                aprenderán
              </span>{" "}
              en sus misiones
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-md md:max-w-lg mx-auto md:mx-0">
              Cada clase es una aventura. Cada línea de código, un logro.
            </p>

            <ul className="space-y-3 text-base md:text-lg">
              <li className="flex items-start md:items-center gap-3">
                <IconCheckCircle className="text-text-tertiary" />
                <p>Videojuego con <span className="text-text-tertiary">Python</span>.</p>
              </li>
              <li className="flex items-start md:items-center gap-3">
                <IconCheckCircle className="text-text-tertiary" />
                <p>Estructuras <span className="text-text-tertiary">POO</span>.</p>
              </li>
              <li className="flex items-start md:items-center gap-3">
                <IconCheckCircle className="text-text-tertiary" />
                <p>Lógica y buenas<span className="text-text-tertiary">prácticas</span>.</p>
              </li>
              <li className="flex items-start md:items-center gap-3">
                <IconCheckCircle className="text-text-tertiary" />
                <p>Control de <span className="text-text-tertiary">vversiones</span>.</p>
              </li>
            </ul>
          </div>

          {/* COLUMNA DERECHA */}
          <div className="relative w-full overflow-hidden">
            <div className="relative rounded-2xl bg-primary/30 backdrop-blur-lg border border-white/10 p-6 sm:p-8 md:p-10">
              {/* CARRUSEL */}
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
                    isDragging
                      ? ""
                      : "transition-transform duration-500 ease-out"
                  }`}
                  style={{
                    transform: `translateX(${currentTranslate}px)`,
                  }}
                >
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className="min-w-full flex flex-col items-center text-center px-2 sm:px-4"
                    >
                      {/* TEXTO DEL SLIDE */}
                      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                        <div>
                          <p className="text-lg sm:text-xl font-semibold">
                            {slide.titleTop}
                          </p>

                          <p className="text-2xl sm:text-3xl md:text-4xl font-bold  bg-linear-to-r from-blue-400 via-green-400 to-green-500  bg-clip-text text-transparent">
                            {slide.titleMain}
                          </p>
                        </div>

                        <p className="text-xs sm:text-sm md:text-base text-text-primary/80 max-w-xs sm:max-w-md mx-auto">
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
                        className="w-56 sm:w-72 md:w-96 h-auto pointer-events-none select-none"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* DOTS */}
              <div className="flex justify-center gap-3 mt-6 sm:mt-8">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => snapToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      active === index
                        ? "w-8 sm:w-10 h-2 bg-tertiary"
                        : "w-2 h-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
