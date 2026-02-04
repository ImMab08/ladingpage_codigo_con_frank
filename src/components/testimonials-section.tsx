import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Junior Developer @ Startup",
    content: "Gracias a las mentorías con Franky, pasé de no saber nada de código a conseguir mi primer trabajo como desarrolladora en solo 6 meses.",
    initials: "MG"
  },
  {
    name: "Carlos Rodríguez",
    role: "Freelancer Web",
    content: "La forma en que explica los conceptos hace que todo sea más fácil de entender. Ahora tengo mis propios clientes como freelancer.",
    initials: "CR"
  },
  {
    name: "Ana Martínez",
    role: "Full Stack Developer",
    content: "Las clases personalizadas me permitieron avanzar a mi ritmo. Franky siempre estuvo disponible para resolver mis dudas.",
    initials: "AM"
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">{"// TESTIMONIOS"}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Lo que dicen mis estudiantes
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Historias reales de personas que han transformado su carrera con las mentorías.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                {`"${testimonial.content}"`}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
