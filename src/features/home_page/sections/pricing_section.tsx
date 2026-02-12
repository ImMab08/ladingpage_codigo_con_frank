import { Check, CircleCheck } from "lucide-react";
import { Button } from "@/src/components/button_component";
import Link from "next/link";
import { BackgroundStarts } from "@/src/components/background_starts";

const plan = {
  name: "Curso Mensual de Programación",
  oldPrice: "200.000",
  price: "150.000",
  description:
    "Programa intensivo de 30 días para que tu hijo aprenda programación de forma práctica, estructurada y divertida.",
  features: [
    "Duración: 30 días",
    "3 sesiones por semana",
    "Clases de 1 hora y 30 minutos",
    "Grupos pequeños (máx. 10 estudiantes)",
    "Soporte durante todo el mes",
    "Proyecto práctico final",
    "Revisión de código personalizada",
    "Acceso a grabaciones de clases",
  ],
};

export function PricingSection() {
  return (
    <section id="precios" className="py-24 bg-primary relative">
      <BackgroundStarts />
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">
            {"// INSCRIPCIONES ABIERTAS"}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Invierte en el futuro de tu hijo
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Un programa diseñado para desarrollar lógica, creatividad y pensamiento
            tecnológico en un entorno guiado y personalizado.
          </p>
        </div>

        {/* Card */}
        <div className="relative max-w-lg p-8 rounded-2xl border bg-card border-primary shadow-lg shadow-primary/10">

          {/* Badge */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="px-4 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
              Cupos limitados
            </span>
          </div>

          {/* Plan Info */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>

            {/* Precio */}
            <div className="flex flex-col items-center gap-2">
              
              <div className="flex items-center gap-2">
                <span className="text-text-tertiary/40 line-through text-lg">
                  ${plan.oldPrice}
                </span>
                <span className="bg-red-500/10 text-red-500 text-xs px-2 py-0.5 rounded-full">
                  Descuento especial
                </span>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-text-tertiary">
                  ${plan.price}
                </span>
                <span className="text-muted-foreground text-sm">COP</span>
              </div>

              <p className="text-muted-foreground text-sm mt-2">
                Pago mensual por 30 días de formación
              </p>
            </div>

            <p className="text-muted-foreground text-sm mt-6 max-w-xl mx-auto">
              {plan.description}
            </p>
          </div>

          {/* Features */}
          <ul className="space-y-4 mb-10 max-w-xl mx-auto">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <CircleCheck className="w-5 h-5 text-text-tertiary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Button
            asChild
            className="w-full bg-yellow-300 text-primary hover:bg-yellow-300/90 text-lg py-6 rounded-xl"
          >
            <Link target="_blank" href="https://wa.me/message/4KVV5SVUMXGSC1">Reservar cupo ahora</Link>
          </Button>

        </div>
      </div>
    </section>
  );
}
