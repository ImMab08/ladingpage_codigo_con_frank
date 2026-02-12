import { ButtonWhatsapp } from "@/src/components/button_whatsapp";

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
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 py-24 space-y-10 text-center flex flex-col items-center">
        <div className="w-full ">
          <div className="">
            {/* Título */}
            <h2 className="text-3xl md:text-5xl font-extrabold mb-2">
              <span className="text-white">¿Por qué </span>
              <span className="bg-linear-to-r from-blue-400 via-green-400 to-green-500 bg-clip-text text-transparent">
                Código con
              </span>
              <span className="text-white">  Frank?</span>
            </h2>

            {/* Subtítulo */}
            <p className="text-gray-300 text-sm md:text-lg mb-16 max-w-3xl mx-auto">
              Aprender a programar puede <br className="block md:hidden" /> ser divertido, seguro y educativo.
            </p>
          </div>

          {/* Video */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/ID_DEL_VIDEO"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Botón */}
        <ButtonWhatsapp text="Más información" />
      </div>
    </section>
  );
}
