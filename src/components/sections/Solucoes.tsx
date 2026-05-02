"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

const solucoes = [
  {
    number: "01",
    title: "Consultoria Tecnológica",
    description:
      "Identificamos a dor, mapeamos o processo, encontramos os gargalos e desenhamos a solução adequada à realidade da sua empresa — sem tecnologia genérica.",
    tags: ["Diagnóstico", "Estratégia", "Roadmap"],
  },
  {
    number: "02",
    title: "Desenvolvimento de Software",
    description:
      "Criamos sistemas, plataformas e aplicações sob medida, do back-end ao front-end, com qualidade e foco em performance e escalabilidade.",
    tags: ["Web", "Mobile", "APIs"],
  },
  {
    number: "03",
    title: "Automação de Processos",
    description:
      "Eliminamos tarefas repetitivas, integramos sistemas e automatizamos fluxos para liberar sua equipe para o que realmente importa.",
    tags: ["RPA", "Integrações", "Webhooks"],
  },
  {
    number: "04",
    title: "Análise de Dados e BI",
    description:
      "Transformamos dados brutos em painéis claros e inteligentes. Você passa a tomar decisões por evidência, não por percepção.",
    tags: ["Dashboards", "ETL", "Relatórios"],
  },
  {
    number: "05",
    title: "Inteligência Artificial",
    description:
      "Implementamos soluções de IA aplicadas ao seu negócio: chatbots, análise preditiva, processamento de linguagem natural e muito mais.",
    tags: ["LLM", "IA Generativa", "ML"],
  },
  {
    number: "06",
    title: "Criação de Produtos Digitais",
    description:
      "Uma solução criada para um cliente pode evoluir para um produto escalável. Ajudamos a transformar aprendizado em produto e produto em ecossistema.",
    tags: ["SaaS", "MVP", "Produto"],
  },
];

export function Solucoes() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [gridVisible, setGridVisible] = useState(false);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGridVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="solucoes" className="py-24 bg-[#F3F4F6] relative overflow-hidden">
      {/* Grid sutil */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(106, 63, 145, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(106, 63, 145, 1) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <Badge light className="mb-5">O que fazemos</Badge>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#101014] mt-4 max-w-lg leading-tight">
              Nossas{" "}
              <span className="text-[#6A3F91]">soluções</span> para o seu
              negócio
            </h2>
            <Button variant="dark" href="#contato" className="shrink-0">
              Fale com um especialista
            </Button>
          </div>
        </div>

        {/* Cards grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solucoes.map((s, i) => (
            <div
              key={s.number}
              className="group relative overflow-hidden p-8 bg-white/55 backdrop-blur-xl border border-white/60 shadow-[0_8px_40px_rgba(16,16,20,0.08)] hover:bg-white/70 hover:border-[#6DFBCB]/40 hover:shadow-[0_16px_60px_rgba(106,63,145,0.14)] transition-all duration-800 flex flex-col"
              style={{
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? "translateY(0)" : "translateY(28px)",
                transitionDelay: gridVisible ? `${i * 500}ms` : "0ms",
                transitionProperty: "opacity, transform, box-shadow, background-color, border-color",
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#6DFBCB]/20 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-[#A719FA]/15 blur-3xl" />
              </div>

              <div className="relative z-10 flex flex-col flex-1">
                <span className="text-[#A719FA]/50 text-xs font-mono mb-4">
                  {s.number}
                </span>
                <h3 className="text-[#101014] font-semibold text-lg mb-3 group-hover:text-[#6A3F91] transition-colors">
                  {s.title}
                </h3>
                <p className="text-[#4B5563] text-sm leading-relaxed flex-1">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[#6A3F91]/80 border border-[#6A3F91]/20 bg-white/40 backdrop-blur-md px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
