import Link from "next/link"
import { Facebook, Instagram, PhoneCall } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-primary font-mono text-lg">{"{"}</span>
            <span className="text-foreground font-semibold">Franky Vargas</span>
            <span className="text-primary font-mono text-lg">{"}"}</span>
          </Link>
          
          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#beneficios" className="hover:text-foreground transition-colors">
              Beneficios
            </Link>
            <Link href="#sobre-mi" className="hover:text-foreground transition-colors">
              Sobre mí
            </Link>
            <Link href="#precios" className="hover:text-foreground transition-colors">
              Precios
            </Link>
          </div>
          
          {/* Social */}
          <div className="flex items-center gap-4">
            <Link 
              href="https://github.com" 
              target="_blank"
              className="w-9 h-9 rounded-full bg-accent border border-border flex items-center justify-center hover:border-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </Link>
            <Link 
              href="https://linkedin.com" 
              target="_blank"
              className="w-9 h-9 rounded-full bg-accent border border-border flex items-center justify-center hover:border-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Facebook className="w-4 h-4" />
            </Link>
            <Link 
              href="https://twitter.com" 
              target="_blank"
              className="w-9 h-9 rounded-full bg-accent border border-border flex items-center justify-center hover:border-primary transition-colors"
              aria-label="Whatsapp"
            >
              <PhoneCall className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm font-sans text-muted-foreground">
          <p>© Franky Vargas - 2026 <br />Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
