'use client'
import { ImageSpaceship } from "@/src/components/image_spaceship";

export function GameSection() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full py-56  h-full md:h-screen overflow-hidden bg-background">
      {/* Fondo estrellado */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Estrellas pequeñas */}
        <circle cx="5%" cy="10%" r="1" fill="white" opacity="0.4" />
        <circle cx="12%" cy="30%" r="1.2" fill="white" opacity="0.5" />
        <circle cx="18%" cy="75%" r="0.8" fill="white" opacity="0.3" />
        <circle cx="50%" cy="45%" r="1" fill="white" opacity="0.4" />

        {/* Estrellas medianas */}
        <circle cx="8%" cy="50%" r="1.6" fill="white" opacity="0.6" />
        <circle cx="15%" cy="90%" r="1.8" fill="white" opacity="0.7" />
        <circle cx="20%" cy="40%" r="1.5" fill="white" opacity="0.6" />
        <circle cx="53%" cy="20%" r="1.6" fill="white" opacity="0.5" />
        <circle cx="58%" cy="90%" r="1.8" fill="white" opacity="0.7" />

        {/* Estrellas grandes (pocas, para contraste) */}
        <circle cx="10%" cy="65%" r="2.2" fill="white" opacity="0.8" />
        <circle cx="25%" cy="20%" r="2" fill="white" opacity="0.7" />
        <circle cx="40%" cy="90%" r="2.4" fill="white" opacity="0.85" />
        <circle cx="85%" cy="70%" r="2.2" fill="white" opacity="0.75" />

        {/* Lado derecho */}
        <circle cx="60%" cy="10%" r="1" fill="white" opacity="0.4" />
        <circle cx="75%" cy="40%" r="1.6" fill="white" opacity="0.6" />
        <circle cx="78%" cy="90%" r="1.8" fill="white" opacity="0.7" />
        <circle cx="82%" cy="25%" r="1.2" fill="white" opacity="0.5" />
        <circle cx="88%" cy="50%" r="1.5" fill="white" opacity="0.6" />

      </svg>

      <div className="max-w-6xl mx-auto px-8 md:px-6 ">
        <div className="relative grid lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <div className="absolute md:relative">
            <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/20 via-transparent to-green-500/20 rounded-2xl blur-2xl opacity-80" />
            <ImageSpaceship />
          </div>

          {/* TEXT */}
          <div className="relative space-y-6">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-9 md:leading-14">
              Regálale a tu hijo {""}
              <span className="bg-linear-to-r from-blue-400 via-green-400 to-green-500 bg-clip-text text-transparent">
                una habilidad {""}
              </span>
              para toda la vida
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl font-inter">
              Aprenderán Python creando un videojuego espacial al estilo clásico
              de los 90°. Cada línea de código controla la nave, los disparos y
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
