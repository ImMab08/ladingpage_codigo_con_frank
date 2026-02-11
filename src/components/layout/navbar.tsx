"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Menu, X } from "lucide-react";
import { Button } from "@/src/components/button_component";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 bg-primary right-0 z-50 ">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              width={200}
              height={100}
              className="hidden md:block"
              src="/img/logo_codigoconfrank.png"
              alt="Logo de Código con Frank, programación para niños, casco pixel verde"
            />
            <Image
              width={150}
              height={100}
              className="block md:hidden"
              src="/img/logo_codigoconfrank.png"
              alt="Logo de Código con Frank, programación para niños, casco pixel verde"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#beneficios" className="text-white transition-colors">
              Beneficios
            </Link>
            <Link href="#sobre-mi" className="text-white transition-colors">
              Sobre mí
            </Link>
            <Link href="#testimonios" className="text-white transition-colors">
              Testimonios
            </Link>
            <Link href="#precios" className="text-white transition-colors">
              Precios
            </Link>
            <Button
              asChild
              className="bg-tertiary text-primary-foreground hover:bg-tertiary/90"
            >
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
            <Link
              href="#beneficios"
              className="block text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Beneficios
            </Link>
            <Link
              href="#sobre-mi"
              className="block text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sobre mí
            </Link>
            <Link
              href="#testimonios"
              className="block text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Testimonios
            </Link>
            <Link
              href="#precios"
              className="block text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Precios
            </Link>
            <Button
              asChild
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="#reservar">Reservar clase</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
