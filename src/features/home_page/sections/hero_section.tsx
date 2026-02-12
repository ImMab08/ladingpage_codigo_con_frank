"use client";

import Image from "next/image";

import { IconCheckCircleFill } from "@/src/shared/icons/icon_check_circle_fill";
import { ButtonWhatsapp } from "@/src/components/button_whatsapp";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full pt-20 overflow-hidden isolate">

      {/* Fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/img/niño_programando.jpg"
          alt="Niños aprendiendo programación"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay base */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Gradiente lateral para foco en texto */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-6 h-full flex items-center">
              

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Lado izquierdo */}
          <div className="space-y-8">
            <div className="space-y-2 ">
              <div className="leading-none">
                <h1 className="relative left-2 -bottom-2 text-3xl md:text-5xl font-extrabold leading-8 tracking-tight">
                  Aprende
                </h1>

                <h2
                  className="
                    text-7xl md:text-9xl font-extrabold tracking-tight
                    leading-20 md:leading-32
                    bg-linear-to-r from-green-400 via-yellow-400 to-indigo-600
                    bg-clip-text text-transparent
                  "
                >
                  Python
                </h2>

                <h3 className="relative -top-5 left-32 md:left-64 text-3xl md:text-5xl font-extrabold leading-12 md:leading-10 md:tracking-tight">
                  jugando
                </h3>
              </div>

              <p className="text-base font-sans md:text-lg max-w-lg font-medium text-muted-foreground">
                Clases interactivas para niños y jóvenes de{" "}
                <span className="text-foreground font-bold">8 a 16 años</span>,
                donde el código se convierte en un juego. Cada clase es una
                misión.
              </p>
            </div>

            {/* Botón */}
            <ButtonWhatsapp text="¡Quiero mi curso!" />

            {/* Referencia social */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-anotherbg border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs text-muted-foreground">{i}</span>
                  </div>
                ))}
              </div>
              <div className="font-sans">
                <p className="text-smfont-medium text-foreground">
                  +50 pilotos entrenados
                </p>
                <p className="text-xs text-muted-foreground">
                  Ya completaron sus primeras misiones en Python
                </p>
              </div>
            </div>
          </div>

          {/* Lado derecho */}
          <div className="relative hidden lg:block">
            {/* Difuminados */}
            <div className="absolute -top-5 -left-10 w-48 h-48 bg-blue-500/80 rounded-full blur-3xl z-0" />
            <div className="absolute -top-5 left-20 w-48 h-48 bg-green-500/80 rounded-full blur-3xl z-0" />
            <div className="absolute -top-5 left-48 w-48 h-48 bg-purple-500/80 rounded-full blur-3xl z-0" />

            <div className="absolute -bottom-2 -left-5 w-32 h-32 bg-yellow-500/70 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-2 left-32 w-32 h-32 bg-green-500/80 rounded-full blur-3xl z-0" />

            <div className="absolute -bottom-5 -right-2 w-72 h-72 bg-blue-500/80 rounded-full blur-3xl z-0" />
            <div className="absolute top-0 -right-2 w-32 h-32 bg-red-500/90 rounded-full blur-3xl z-0" />
            <div className="absolute top-20 right-5 w-32 h-32 bg-yellow-500/90 rounded-full blur-3xl z-0" />
            <div className="absolute top-20 right-6 w-32 h-32 bg-green-500/90 rounded-full blur-3xl z-0" />

            {/* Bloques */}
            <div className="absolute -top-10 -right-10 bg-card/80 rounded-lg border border-border p-6 shadow-2xl shadow-primary/5 w-md h-60"></div>
            <div className="absolute bottom-3 -left-5 bg-card/80 rounded-lg border border-border p-6 shadow-2xl shadow-primary/5 w-64 h-20"></div>

            {/* PYTHON CARD */}
            <div className="relative bg-card backdrop-blur rounded-lg border border-border p-6 shadow-2xl shadow-primary/10 z-10">
              {/* Header estilo editor */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-destructive/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-tertiary/60" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">
                  mission.py
                </span>
              </div>

              <pre className="font-mono text-sm leading-relaxed">
                <code>
                  <span className="text-muted-foreground">
                    {"# Bienvenido a tu primera misión"}
                  </span>
                  {"\n"}
                  <span className="text-purple-500">class</span>{" "}
                  <span className="text-blue-400">Estudiante</span>:{"\n  "}
                  <span className="text-purple-500">def</span>{" "}
                  <span className="text-green-400">__init__</span>(
                  <span className="text-foreground">self</span>):{"\n    "}
                  <span className="text-secondary/60">self</span>.
                  <span className="text-secondary/60">nombre</span> ={" "}
                  <span className="text-yellow-400">{"Tú"}</span>
                  {"\n    "}
                  <span className="text-secondary/60">self</span>.
                  <span className="text-secondary/60">nivel</span> ={" "}
                  <span className="text-yellow-400">1</span>
                  {"\n\n"}
                  <span className="text-purple-500">def</span>{" "}
                  <span className="text-green-400">completar_mision</span>(
                  <span className="text-foreground">estudiante</span>):
                  {"\n    "}
                  <span className="text-purple-500">print</span>(
                  <span className="text-yellow-400">
                    {'"🚀 ¡Misión completada!"'}
                  </span>
                  ){"\n\n"}
                  <span className="text-muted-foreground">
                    {"# Tu aventura comienza ahora"}
                  </span>
                </code>
              </pre>

              {/* Glow */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500/20 rounded-xl blur-xl" />
            </div>

            {/* BADGE */}
            <div className="w-full flex items-center justify-center mt-3 font-sans ">
              <div className="relative inline-flex items-center gap-2 px-4 py-2 bg-card/80 rounded-xl shadow-xl border border-border">
                <span className="text-sm font-semibold text-text-primary">
                  Sin experiencia previa · Grupos pequeños · Acompañamiento real
                </span>

                <IconCheckCircleFill className="fill-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fade inferior */}
      <div className="
          absolute bottom-0 left-0 right-0
          h-48
          bg-linear-to-t
          from-primary
          to-transparent
          z-10
        "
      />
    </section>
  );
}
