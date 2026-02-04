"use client"

import { Button } from "@/src/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import { FloatingShapes } from "./floating-shapes"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <FloatingShapes />
      
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-border">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Cupos limitados para este mes</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Aprende a programar{" "}
              <span className="text-primary">desde cero</span>{" "}
              con mentorías personalizadas
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Clases 1:1 adaptadas a tu ritmo. Desarrollo web, software y las tecnologías más demandadas del mercado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base">
                <Link href="#reservar">
                  Reservar mi clase
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 text-base border-border hover:bg-secondary bg-transparent">
                <Link href="#sobre-mi">
                  <Play size={18} />
                  Conocer más
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">{i}</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">+50 estudiantes</p>
                <p className="text-xs text-muted-foreground">han transformado su carrera</p>
              </div>
            </div>
          </div>
          
          {/* Code Preview */}
          <div className="relative hidden lg:block">
            <div className="relative bg-card rounded-lg border border-border p-6 shadow-2xl shadow-primary/5">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-destructive/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <pre className="font-mono text-sm leading-relaxed">
                <code>
                  <span className="text-muted-foreground">{"// Tu primer paso hacia el código"}</span>{"\n"}
                  <span className="text-primary">const</span> <span className="text-foreground">estudiante</span> = {"{"}{"\n"}
                  {"  "}<span className="text-primary">nombre</span>: <span className="text-yellow-400">{'"Tú"'}</span>,{"\n"}
                  {"  "}<span className="text-primary">meta</span>: <span className="text-yellow-400">{'"Desarrollador"'}</span>,{"\n"}
                  {"  "}<span className="text-primary">mentor</span>: <span className="text-yellow-400">{'"Franky"'}</span>{"\n"}
                  {"}"};{"\n\n"}
                  <span className="text-primary">function</span> <span className="text-blue-400">aprenderProgramacion</span>() {"{"}{"\n"}
                  {"  "}<span className="text-primary">return</span> <span className="text-yellow-400">{'"¡Éxito!"'}</span>;{"\n"}
                  {"}"}{"\n\n"}
                  <span className="text-muted-foreground">{"// Empezamos cuando tú quieras"}</span>
                </code>
              </pre>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/20 rounded-lg blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
