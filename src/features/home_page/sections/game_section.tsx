"use client";
import { BackgroundStarts } from "@/src/components/background_starts";
import { ButtonWhatsapp } from "@/src/components/button_whatsapp";
import { ImageSpaceship } from "@/src/components/image_spaceship";

export function GameSection() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full py-64 md:py-32 h-full md:h-screen overflow-hidden bg-background">
      {/* Fondo estrellado */}
      <BackgroundStarts />

      <div className="w-full h-full max-w-6xl flex flex-col mx-auto px-8 md:px-6 ">
        <div className="relative grid lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <div className="absolute md:relative">
            <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/20 via-transparent to-green-500/20 rounded-2xl blur-2xl opacity-80" />
            <ImageSpaceship />
          </div>

          {/* TEXT */}
          <div className="relative space-y-10 ">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-extrabold leading-9 md:leading-14">
                Regálale a tu hijo {""}
                <span className="bg-linear-to-r from-blue-400 via-green-400 to-green-500 bg-clip-text text-transparent">
                  una habilidad {""}
                </span>
                para toda la vida
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl font-inter">
                Aprenderán Python creando un videojuego espacial al estilo
                clásico de los 90°. Cada línea de código controla la nave, los
                disparos y las misiones.
              </p>

              <ul className="space-y-3 text-base md:text-lg">
                <li className="flex items-center gap-3">
                  🚀 <span>Mueve la nave con código.</span>
                </li>
                <li className="flex items-center gap-3">
                  💥 <span>Dispara, colisiona y suma puntos.</span>
                </li>
                <li className="flex items-center gap-3">
                  🐍 <span>Python real con Pygame.</span>
                </li>
                <li className="flex items-center gap-3">
                  🧠 <span>Aprenden lógica y pensamiento computacional.</span>
                </li>
              </ul>
            </div>

            <div className="hidden md:block">
              <ButtonWhatsapp text="Iniciar misió" />
            </div>
          </div>
        </div>
        <div className="relative -bottom-64 block md:hidden">
          <ButtonWhatsapp text="Iniciar misión"/>
        </div>
      </div>
    </section>
  );
}
