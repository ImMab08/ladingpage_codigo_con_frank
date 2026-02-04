import { Github, Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", 
  "Node.js", "Python", "SQL", "Git"
]

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
              <div className="absolute inset-4 bg-card rounded-xl border border-border flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-secondary border-4 border-primary/30 flex items-center justify-center mb-6">
                    <span className="text-4xl font-bold text-primary">FV</span>
                  </div>
                  <h3 className="text-xl font-bold">Franky Vargas</h3>
                  <p className="text-primary font-mono text-sm mt-1">{"{ Desarrollador de Software }"}</p>
                  
                  <div className="flex justify-center gap-4 mt-6">
                    <Link 
                      href="https://github.com" 
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:border-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                    <Link 
                      href="https://linkedin.com" 
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:border-primary transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link 
                      href="https://franky-vargas.vercel.app/es" 
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:border-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <span className="text-primary font-mono text-sm">{"// SOBRE MÍ"}</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Tu mentor en el mundo del código
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy Desarrollador de Software con años de experiencia construyendo aplicaciones 
                web y enseñando a otros a hacer lo mismo. Mi pasión es simplificar lo complejo 
                y ayudar a personas a dar sus primeros pasos en programación.
              </p>
              <p>
                He trabajado con empresas y startups, desarrollando soluciones que van desde 
                landing pages hasta aplicaciones web complejas. Ahora quiero compartir ese 
                conocimiento contigo.
              </p>
            </div>
            
            <div className="pt-4">
              <p className="text-sm font-medium mb-3">Tecnologías que domino:</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 text-sm bg-secondary rounded-full border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
