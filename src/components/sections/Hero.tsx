"use client";

import { useCallback, useRef } from "react";
import { Button } from "../ui/Button";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const gridHighlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    if (spotlightRef.current) {
      spotlightRef.current.style.setProperty("--mouse-x", `${x}%`);
      spotlightRef.current.style.setProperty("--mouse-y", `${y}%`);
      spotlightRef.current.style.opacity = "1";
    }
    if (gridHighlightRef.current) {
      gridHighlightRef.current.style.setProperty("--mouse-x", `${x}%`);
      gridHighlightRef.current.style.setProperty("--mouse-y", `${y}%`);
      gridHighlightRef.current.style.opacity = "1";
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (spotlightRef.current) spotlightRef.current.style.opacity = "0";
    if (gridHighlightRef.current) gridHighlightRef.current.style.opacity = "0";
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Grid highlight — teal na área do cursor (desktop) */}
      <div
        ref={gridHighlightRef}
        className="absolute inset-0 z-[3] pointer-events-none opacity-0 transition-opacity duration-300 hidden sm:block"
        style={
          {
            "--mouse-x": "50%",
            "--mouse-y": "50%",
            backgroundImage: `
              linear-gradient(rgba(109, 251, 203, 0.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(109, 251, 203, 0.35) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            WebkitMaskImage:
              "radial-gradient(circle 320px at var(--mouse-x) var(--mouse-y), black 0%, transparent 75%)",
            maskImage:
              "radial-gradient(circle 320px at var(--mouse-x) var(--mouse-y), black 0%, transparent 75%)",
          } as React.CSSProperties
        }
      />

      {/* Spotlight radial — glow seguindo o cursor (desktop) */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 z-[4] pointer-events-none opacity-0 transition-opacity duration-500 hidden sm:block"
        style={
          {
            "--mouse-x": "50%",
            "--mouse-y": "50%",
            background: `
              radial-gradient(
                circle 500px at var(--mouse-x) var(--mouse-y),
                rgba(109, 251, 203, 0.11) 0%,
                rgba(167, 25, 250, 0.08) 40%,
                transparent 65%
              )
            `,
          } as React.CSSProperties
        }
      />

      {/* Teal glow estático — top right */}
      <div
        className="absolute top-0 right-0 z-[1] w-[500px] h-[500px] pointer-events-none glow-pulse"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(109,251,203,0.18) 0%, transparent 65%)",
        }}
      />

      {/* Violet glow estático — center right */}
      <div
        className="absolute top-1/2 right-1/4 z-[1] w-[600px] h-[600px] pointer-events-none -translate-y-1/2 glow-pulse"
        style={{
          background:
            "radial-gradient(circle at center, rgba(167,25,250,0.12) 0%, transparent 65%)",
          animationDelay: "2s",
        }}
      />

      {/* Dark fade — garante legibilidade do texto */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.8) 40%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="relative max-w-2xl">
          {/* Grade sutil fixa apenas na região do texto */}
          <div
            className="absolute -inset-x-4 -inset-y-6 sm:-inset-x-8 sm:-inset-y-8 z-0 pointer-events-none opacity-45"
            style={{
              backgroundImage: `
                linear-gradient(rgba(106, 63, 145, 0.65) 1px, transparent 1px),
                linear-gradient(90deg, rgba(106, 63, 145, 0.65) 1px, transparent 1px)
              `,
              backgroundSize: "44px 44px",
              maskImage:
                "radial-gradient(ellipse at center, black 0%, black 58%, transparent 88%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 0%, black 58%, transparent 88%)",
            }}
          />

          <h1 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-[1.05] mb-8 tracking-tight">
            Revelamos a quarta
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6DFBCB] to-[#6A3F91]">
              dimensão
            </span>{" "}
            do seu
            <br />
            negócio
          </h1>

          <p className="relative z-10 text-sm sm:text-base text-white/65 mb-10 max-w-2xl leading-relaxed">
            A MRP Tech usa tecnologia e dados como uma lente para enxergar além
            do óbvio, transformando processos invisíveis em clareza estratégica
            e crescimento real.
          </p>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <Button variant="primary" href="#solucoes">
              Conheça nossas soluções
            </Button>
            <Button variant="outline" href="#contato">
              Entrar em contato
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))",
        }}
      />
    </section>
  );
}
