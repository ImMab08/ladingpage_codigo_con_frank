"use client";
import Link from "next/link";

import { Button } from "@/src/components/button";
import { ArrowRight, CircleCheck, Icon, Play } from "lucide-react";
import { IconCheckCircleFill } from "@/src/shared/icons/icon_check_circle_fill";

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
              <span
                className="
                  text-6xl md:text-8xl font-extrabold
                  bg-linear-to-r from-green-500 
                  via-teal-500 to-indigo-700 bg-clip-text 
                  text-transparent
                "
              >
                Programar
              </span>
              <h2 className="text-2xl md:text-4xl  font-bold bg-linear-to-r from-teal-500 via-sky-500 to-indigo-700 bg-clip-text text-transparent text-end pr-16 md:pr-0">
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
                className="bg-yellow-300 text-primary hover:bg-yellow-300/90 gap-2 text-base"
              >
                <Link href="#reservar">
                  Reservar mi clase
                  <ArrowRight size={18} />
                </Link>
              </Button>

              <div className="w-36 rounded-md bg-linear-to-r from-blue-500 via-purple-500 to-indigo-500 p-px">
                <div className="flex h-full w-full items-center justify-center rounded-md bg-primary space-x-2">
                  <Play size={16} color="#009dff" />

                  <Link href="#sobre-mi">Conocer más</Link>
                </div>
              </div>
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

          {/* Bloque de código */}
          <div className="relative hidden lg:block space-y-4">
            {/* Difuminados */}
            <div className="absolute -top-5 -left-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-5 left-20 w-48 h-48 bg-green-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-5 left-48 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl -z-10" />

            <div className="absolute -bottom-2 -left-5 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-2 left-32 w-32 h-32 bg-green-500/20 rounded-full blur-3xl -z-10" />

            <div className="absolute -bottom-5 -right-2 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute top-0 -right-2 w-32 h-32 bg-red-500/40 rounded-full blur-3xl -z-10" />
            <div className="absolute top-20 right-5 w-32 h-32 bg-yellow-500/40 rounded-full blur-3xl -z-10" />
            <div className="absolute top-20 right-6 w-32 h-32 bg-green-500/40 rounded-full blur-3xl -z-10" />

            {/* Bloques */}
            <div className="absolute -top-10 -right-10 bg-card/40 rounded-lg border border-border p-6 shadow-2xl shadow-primary/5 w-md h-60"></div>
            <div className="absolute bottom-3 -left-5 bg-card/60 rounded-lg border border-border p-6 shadow-2xl shadow-primary/5 w-64 h-20"></div>

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

            <div className="flex items-end justify-end select-none">
              <div className="relative inline-flex items-center gap-2 px-4 py-2 bg-yellow-300 shadow-2xl rounded-xl border border-border">
                <div className="w-4 h-4 left-5 rounded-full bg-white z-0 absolute"></div>
                <IconCheckCircleFill className="fill-accent relative z-10" />
                <span className="text-base font-semibold text-text-secondary">
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
