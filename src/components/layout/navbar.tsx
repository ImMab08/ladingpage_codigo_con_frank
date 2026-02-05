"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/src/components/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-primary font-mono text-xl">{"{"}</span>
            <span className="text-foreground font-semibold">Franky Vargas</span>
            <span className="text-primary font-mono text-xl">{"}"}</span>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors">
              Beneficios
            </Link>
            <Link href="#sobre-mi" className="text-muted-foreground hover:text-foreground transition-colors">
              Sobre mí
            </Link>
            <Link href="#testimonios" className="text-muted-foreground hover:text-foreground transition-colors">
              Testimonios
            </Link>
            <Link href="#precios" className="text-muted-foreground hover:text-foreground transition-colors">
              Precios
            </Link>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#reservar">Reservar clase</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-4">
            <Link href="#beneficios" className="block text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
              Beneficios
            </Link>
            <Link href="#sobre-mi" className="block text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
              Sobre mí
            </Link>
            <Link href="#testimonios" className="block text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
              Testimonios
            </Link>
            <Link href="#precios" className="block text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
              Precios
            </Link>
            <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#reservar">Reservar clase</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
