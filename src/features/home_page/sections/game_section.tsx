import Image from "next/image";
import React from "react";

export function GameSection() {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-background">
      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/20 via-transparent to-green-500/20 rounded-2xl blur-2xl" />
            <Image
							width={500}
							height={500}

              src="/img/image_spaceship.png"
              alt="Juego de naves espaciales"
              className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl"
            />
          </div>

          {/* TEXT */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-14">
              Programa tu propio{" "}
              <span className="bg-linear-to-r from-green-400 via-yellow-400 to-indigo-600 bg-clip-text text-transparent">
                juego de naves
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Aprenderán Python creando un videojuego espacial al estilo clásico
              de los 90. Cada línea de código controla la nave, los disparos y
              las misiones.
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
        </div>
      </div>
    </section>
  );
}
