import { ButtonWhatsapp } from "@/src/components/button_whatsapp";
import { IconCheckCircleFill } from "@/src/shared/icons/icon_check_circle_fill";
import Image from "next/image";

export function WhySection() {
  return (
    <section
      id="sobre-mi"
      className="relative min-h-screen bg-primary overflow-hidden flex items-center"
    >
      {/* Background image */}
      <div
        className="
          absolute inset-0
          bg-[url('/img/backgrounds/imagen_bg_porquecodigoconfrank.png')]
          bg-cover
          bg-center
        "
      />

      {/* Oscurecedor */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Fade superior */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-linear-to-b from-primary to-transparent z-10" />

      {/* Fade inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-primary to-transparent z-10" />

      {/* Contenido */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 py-24 text-center flex flex-col items-center">
        <div className="w-full">
          {/* Título */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2">
            <span className="text-white">¿Por qué </span>
            <span className="text-green-400">Código</span>
            <span className="text-yellow-400"> con </span>
            <span className="text-white">Frank?</span>
          </h2>

          {/* Subtítulo */}
          <p className="text-gray-300 text-lg mb-16 max-w-3xl mx-auto">
            Aprender a programar puede ser divertido, seguro y educativo.
          </p>
        </div>

        {/* Beneficios */}
        <div className="flex w-full justify-between">
          <div className="flex flex-col text-left space-y-6">
            <div className="flex gap-2">
              <IconCheckCircleFill className="text-text-tertiary mt-0.5" />
              <div>
                <h3 className="text-xl font-bold text-text-tertiary">
                  Acompañamiento cercano
                </h3>
                <p className="text-gray-300">
                  Profesores expertos que guían a <br /> cada niño en grupos
                  pequeños.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <IconCheckCircleFill className="text-text-tertiary mt-0.5" />
              <div>
                <h3 className="text-xl font-bold text-text-tertiary">
                  Desarrollo del pensamiento lógico
                </h3>
                <p className="text-gray-300">
                  Aprenden a resolver problemas <br /> y pensar como
                  programadores.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <IconCheckCircleFill className="text-text-tertiary mt-0.5" />
              <div>
                <h3 className="text-xl font-bold text-text-tertiary">
                  Crean sus propios videojuegos
                </h3>
                <p className="text-gray-300">
                  Los niños desarrollan sus propios <br /> juegos mientras se
                  divierten.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <IconCheckCircleFill className="text-text-tertiary mt-0.5" />
              <div>
                <h3 className="text-xl font-bold text-text-tertiary">
                  Clases dinámicas y guiadas
                </h3>
                <p className="text-gray-300">
                  Lecciones cortas y efectivas, <br /> tipo misión, paso a paso.
                </p>
              </div>
            </div>
          </div>

          <div>
            <Image width={200} height={200} src="" alt="" />
          </div>
        </div>

        {/* Botón */}
        <ButtonWhatsapp />
      </div>
    </section>
  );
}
