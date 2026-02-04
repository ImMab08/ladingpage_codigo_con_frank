import { Check } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Clase Individual",
    price: "25",
    description: "Ideal para resolver dudas puntuales o probar el método.",
    features: [
      "1 hora de mentoría 1:1",
      "Grabación de la sesión",
      "Soporte por chat 24h",
      "Material complementario"
    ],
    popular: false
  },
  {
    name: "Pack Mensual",
    price: "89",
    description: "El plan más popular para un aprendizaje constante.",
    features: [
      "4 clases de 1 hora",
      "Grabación de sesiones",
      "Soporte ilimitado por chat",
      "Proyectos prácticos",
      "Revisión de código",
      "Plan de estudios personalizado"
    ],
    popular: true
  },
  {
    name: "Intensivo",
    price: "149",
    description: "Acelera tu aprendizaje con más horas de práctica.",
    features: [
      "8 clases de 1 hora",
      "Grabación de sesiones",
      "Soporte prioritario 24/7",
      "Proyecto final para portafolio",
      "Revisión de código ilimitada",
      "Preparación para entrevistas"
    ],
    popular: false
  }
]

export function PricingSection() {
  return (
    <section id="precios" className="py-24 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">{"// PRECIOS"}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Invierte en tu futuro
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Planes flexibles adaptados a tus necesidades y objetivos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-6 lg:p-8 rounded-xl border transition-colors ${
                plan.popular 
                  ? "bg-card border-primary shadow-lg shadow-primary/10" 
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                    Más popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground text-sm">USD</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild 
                className={`w-full ${
                  plan.popular 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "bg-secondary border border-border hover:border-primary/50 text-foreground"
                }`}
              >
                <Link href="#reservar">Elegir plan</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
