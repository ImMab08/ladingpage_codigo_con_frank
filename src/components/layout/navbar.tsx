"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Menu, X } from "lucide-react";
import { ButtonWhatsapp } from "../button_whatsapp";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              width={160}
              height={80}
              src="/img/logo_codigoconfrank.png"
              alt="Logo Código con Frank"
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link
              href="#beneficios"
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              Beneficios
            </Link>
            <Link
              href="#sobre-mi"
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              Sobre mí
            </Link>
            <Link
              href="#testimonios"
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              Testimonios
            </Link>
            <Link
              href="#precios"
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              Precios
            </Link>

            <ButtonWhatsapp text="Conoce más" />
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden mt-6 space-y-6 text-center pb-6">
            <Link
              href="#beneficios"
              className="block text-white/80 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Beneficios
            </Link>
            <Link
              href="#sobre-mi"
              className="block text-white/80 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Sobre mí
            </Link>
            <Link
              href="#testimonios"
              className="block text-white/80 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Testimonios
            </Link>
            <Link
              href="#precios"
              className="block text-white/80 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Precios
            </Link>

            <ButtonWhatsapp text="Conoce más" />
          </div>
        )}
      </div>
    </nav>
  );
}
