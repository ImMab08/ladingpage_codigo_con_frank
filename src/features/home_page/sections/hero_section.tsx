"use client";
import Link from "next/link";

import { Button } from "@/src/components/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden ">
      <div className=" max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <div className="space-y-8 ">
            <div className="">
              <h3 className="text-3xl md:text-5xl font-bold leading-4 text-balance ml-8">
                Aprende a
              </h3>
              <span className="text-6xl md:text-8xl font-extrabold text-tertiary">
                Programar
              </span>
              <h2 className="text-2xl md:text-4xl leading-5 font-bold text-tertiary text-end pr-16 md:pr-0">
                desde cero
              </h2>
              <h3 className="text-xl md:text-4xl text-center leading-10 md:leading-20 font-bold">
                con clases{" "}
                <span className="border-b-2 rounded-xl border-tertiary px-2 pb-1">
                  personalizadas
                </span>
              </h3>
            </div>

            <p className="text-base md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Clases adaptadas a tu ritmo. Desarrollo web, software y las
              tecnologías más demandadas del mercado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-tertiary text-primary-foreground hover:bg-tertiary/90 gap-2 text-base"
              >
                <Link href="#reservar">
                  Reservar mi clase
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 text-base border-border hover:bg-secondary bg-transparent"
              >
                <Link href="#sobre-mi">
                  <Play size={18} />
                  Conocer más
                </Link>
              </Button>
            </div>

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
              <div>
                <p className="text-sm font-medium text-foreground">
                  +50 estudiantes
                </p>
                <p className="text-xs text-muted-foreground">
                  Han aprendido las bases de la <br />
                  <span>programación</span>
                </p>
              </div>
            </div>
          </div>

          {/* Code Preview */}
          <div className="relative hidden lg:block space-y-4">
            <div className="relative bg-card rounded-lg border border-border p-6 shadow-2xl shadow-primary/5">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-destructive/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-tertiary/60" />
              </div>
              <pre className="font-mono text-sm leading-relaxed">
                <code>
                  <span className="text-muted-foreground">
                    {"// Tu primer paso hacia el código"}
                  </span>
                  {"\n"}
                  <span className="text-purple-500">const</span>{" "}
                  <span className="text-foreground">estudiante</span> = {"{"}
                  {"\n"}
                  {"  "}
                  <span className="text-secondary/60">nombre</span>:{" "}
                  <span className="text-yellow-400">{'"Tú"'}</span>,{"\n"}
                  {"  "}
                  <span className="text-secondary/60">meta</span>:{" "}
                  <span className="text-yellow-400">{'"Desarrollador"'}</span>,
                  {"\n"}
                  {"  "}
                  <span className="text-secondary/60">mentor</span>:{" "}
                  <span className="text-yellow-400">{'"Franky"'}</span>
                  {"\n"}
                  {"}"};{"\n\n"}
                  <span className="text-purple-500">function</span>{" "}
                  <span className="text-blue-400">aprenderProgramacion</span>(){" "}
                  {"{"}
                  {"\n"}
                  {"  "}
                  <span className="text-secondary/60">return</span>{" "}
                  <span className="text-yellow-400">{'"¡Éxito!"'}</span>;{"\n"}
                  {"}"}
                  {"\n\n"}
                  <span className="text-muted-foreground">
                    {"// Empezamos cuando tú quieras"}
                  </span>
                </code>
              </pre>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/20 rounded-lg blur-xl" />
            </div>
            <div className="flex items-end justify-end">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-anotherbg rounded-full border border-border">
                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                <span className="text-sm text-muted-foreground">
                  Cupos limitados para este mes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
