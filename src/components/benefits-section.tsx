import { Code, Users, Zap, Target, Clock, Award } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Mentorías 1:1",
    description: "Clases personalizadas enfocadas en tus objetivos y ritmo de aprendizaje."
  },
  {
    icon: Code,
    title: "Proyectos reales",
    description: "Aprende construyendo proyectos que puedes agregar a tu portafolio profesional."
  },
  {
    icon: Zap,
    title: "Tecnologías actuales",
    description: "React, Next.js, Node.js, TypeScript y las herramientas más demandadas."
  },
  {
    icon: Target,
    title: "Enfoque práctico",
    description: "Menos teoría, más código. Aprende haciendo desde el primer día."
  },
  {
    icon: Clock,
    title: "Horarios flexibles",
    description: "Agenda tus clases cuando mejor te convenga, adaptado a tu disponibilidad."
  },
  {
    icon: Award,
    title: "Soporte continuo",
    description: "Acceso a resolución de dudas entre sesiones y seguimiento de tu progreso."
  }
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">{"// BENEFICIOS"}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            ¿Por qué aprender conmigo?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Una metodología probada que combina teoría esencial con práctica intensiva.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
