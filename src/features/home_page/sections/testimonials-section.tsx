import { BackgroundStarts } from "@/src/components/background_starts";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Laura Gómez",
    role: "Mamá de Nico",
    content:
      "Mi hijo pasó de ver la programación como algo imposible a emocionarse por crear sus propios proyectos. He visto cómo ha crecido en confianza y lógica en pocos meses.",
    initials: "LG",
  },
  {
    name: "Andrés Ramírez",
    role: "Papá de Mateo",
    content:
      "Las clases con Frank no solo le enseñaron a programar, también le enseñaron a pensar mejor y resolver problemas. Ahora Mateo quiere estudiar ingeniería.",
    initials: "AR",
  },
  {
    name: "Carolina Martínez",
    role: "Mamá de Sofía",
    content:
      "Me gusta que las clases son claras, estructuradas y a su ritmo. Sofía está motivada y cada semana quiere mostrarme lo que construyó.",
    initials: "CM",
  },
];


export function TestimonialsSection() {
  return (
    <section
      id="testimonios"
      className="py-24 min-h-screen h-full md:h-screen flex items-center justify-center relative"
    >
      <BackgroundStarts />
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">
            {"// TESTIMONIOS"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Lo que dicen mis{" "}
            <span className="bg-linear-to-r from-blue-400 via-green-400 to-green-500 bg-clip-text text-transparent">
              estudiantes{" "}
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Historias reales de personas que han transformado su carrera con las
            mentorías.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 flex flex-col justify-between rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <Quote className="w-8 h-8 text-text-tertiary/80 mb-4" />
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                {`"${testimonial.content}"`}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center">
                  <span className="text-sm font-medium text-text-primary">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
