import Image from "next/image";
import React from "react";

export default function RoadMapSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="max-w-xs space-y-5">
            <div className="">
              <p className="text-4xl font-bold leading-20">0.</p>
              <p className="text-3xl font-bold leading-5">Roadmap de</p>
              <p className="text-6xl text-text-tertiary font-bold">
                Aprendizaje
              </p>
            </div>

            <p className="text-justify text-text-primary/80">
              No se trata de aprender rápido, sino de aprender bien.{" "}
              <span className="text-text-tertiary/80">
                {" "}
                Este roadmap está diseñado para que entiendas la programación
                desde sus fundamentos.{" "}
              </span>{" "}
              Aquí comenzamos todos. Sin conocimientos previos, sin presión y
              sin falsas promesas. Entenderás qué es programar, cómo funciona el
              mundo del desarrollo y por qué sí es posible aprender, incluso si
              antes te pareció imposible.
            </p>
          </div>
          <div className="">
            <Image
              src="/img/image_00.png"
              width={600}
              height={500}
              alt="Hola mundo"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="">
            <Image
              src="/img/image_01.png"
              width={600}
              height={500}
              alt="Hola mundo"
            />
          </div>
          <div className="max-w-xs space-y-5">
            <div className="">
              <p className="text-4xl font-bold leading-20text">1.</p>
              <p className="text-3xl font-bold leading-5 text-end">
                Bases y conceptos
              </p>
              <p className="text-6xl text-text-tertiary font-bold">
                fundamentales
              </p>
            </div>

            <p className="text-justify text-text-primary/80">
              No se trata de aprender rápido, sino de aprender bien.
              <span className="text-text-tertiary/80">
                Este roadmap está diseñado para que entiendas la programación
                desde sus fundamentos.
              </span>
              Aquí comenzamos todos. Sin conocimientos previos, sin presión y
              sin falsas promesas. Entenderás qué es programar, cómo funciona el
              mundo del desarrollo y por qué sí es posible aprender, incluso si
              antes te pareció imposible.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="max-w-xs space-y-5">
            <div className="">
              <p className="text-4xl font-bold leading-20">0.</p>
              <p className="text-3xl font-bold leading-5">Roadmap de</p>
              <p className="text-6xl text-text-tertiary font-bold">
                Aprendizaje
              </p>
            </div>

            <p className="text-justify text-text-primary/80">
              No se trata de aprender rápido, sino de aprender bien.{" "}
              <span className="text-text-tertiary/80">
                {" "}
                Este roadmap está diseñado para que entiendas la programación
                desde sus fundamentos.{" "}
              </span>{" "}
              Aquí comenzamos todos. Sin conocimientos previos, sin presión y
              sin falsas promesas. Entenderás qué es programar, cómo funciona el
              mundo del desarrollo y por qué sí es posible aprender, incluso si
              antes te pareció imposible.
            </p>
          </div>
          <div className="">
            <Image
              src="/img/image_00.png"
              width={600}
              height={500}
              alt="Hola mundo"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="">
            <Image
              src="/img/image_01.png"
              width={600}
              height={500}
              alt="Hola mundo"
            />
          </div>
          <div className="max-w-xs space-y-5">
            <div className="">
              <p className="text-4xl font-bold leading-20text">1.</p>
              <p className="text-3xl font-bold leading-5 text-end">
                Bases y conceptos
              </p>
              <p className="text-6xl text-text-tertiary font-bold">
                fundamentales
              </p>
            </div>

            <p className="text-justify text-text-primary/80">
              No se trata de aprender rápido, sino de aprender bien.
              <span className="text-text-tertiary/80">
                Este roadmap está diseñado para que entiendas la programación
                desde sus fundamentos.
              </span>
              Aquí comenzamos todos. Sin conocimientos previos, sin presión y
              sin falsas promesas. Entenderás qué es programar, cómo funciona el
              mundo del desarrollo y por qué sí es posible aprender, incluso si
              antes te pareció imposible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
