"use client"

import React from "react"

import { Button } from "@/src/components/button"
import { ArrowRight, Calendar, Mail } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section id="reservar" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-6">
          <span className="text-primary font-mono text-sm">{"// COMIENZA HOY"}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reserva una sesión de diagnóstico gratuita y descubre cómo puedo ayudarte a alcanzar tus metas en programación.
          </p>
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {/* Option 1: Schedule call */}
          <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Agenda una llamada</h3>
            <p className="text-muted-foreground text-sm mb-6">
              30 minutos para conocer tus objetivos y diseñar un plan personalizado.
            </p>
            <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              <Link href="https://calendly.com" target="_blank">
                Agendar ahora
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
          
          {/* Option 2: Email */}
          <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Déjame tu email</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Te contactaré en menos de 24 horas para coordinar una llamada.
            </p>
            {submitted ? (
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/30 text-center">
                <p className="text-primary font-medium">¡Gracias! Te contactaré pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                />
                <Button type="submit" className="w-full bg-secondary border border-border hover:border-primary/50 text-foreground">
                  Enviar
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
