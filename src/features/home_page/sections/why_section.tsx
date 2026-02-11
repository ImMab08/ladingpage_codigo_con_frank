export function WhySection() {
  return (
    <section
      id="sobre-mi"
      className="relative min-h-screen bg-primary overflow-hidden"
    >
      {/* Background image */}
      <div className="
          absolute inset-0
          bg-[url('/img/backgrounds/imagen_bg_porquecodigoconfrank.png')]
          bg-cover
          bg-center
        "
      />
      <div className="
          absolute inset-0
          bg-black/60
          z-10
        "
      />
      {/* Fade superior */}
      <div className="
          absolute top-0 left-0 right-0
          h-48
          bg-linear-to-b
          from-primary
          to-transparent
          z-10
        "
      />

      {/* Fade inferior */}
      <div className="
          absolute bottom-0 left-0 right-0
          h-48
          bg-linear-to-t
          from-primary
          to-transparent
          z-10
        "
      />

      {/* Contenido */}
      <div className="relative z-20 container mx-auto px-6 py-24">
        
      </div>
    </section>
  );
}
