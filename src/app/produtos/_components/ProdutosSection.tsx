"use client";

import { useMemo, useState } from "react";

type Categoria =
  | "Todos"
  | "Dados"
  | "Inteligência"
  | "Automação"
  | "Infraestrutura"
  | "Integração";

type Produto = {
  id: string;
  nome: string;
  categoria: Exclude<Categoria, "Todos">;
  descricao: string;
  icon: React.ReactNode;
  accent: string; // cor principal do glow
  accentSecondary: string; // cor secundária do glow
};

const produtos: Produto[] = [
  {
    id: "insight",
    nome: "MRP Insight",
    categoria: "Dados",
    descricao:
      "Motor analítico avançado que processa milhões de dados em tempo real para entregar inteligência operacional acionável.",
    accent: "#6DFBCB",
    accentSecondary: "#6A3F91",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    id: "automate",
    nome: "MRP Automate",
    categoria: "Automação",
    descricao:
      "Orquestração inteligente de fluxos projetada para eliminar tarefas repetitivas e simplificar pipelines operacionais complexos.",
    accent: "#A719FA",
    accentSecondary: "#6DFBCB",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    id: "core",
    nome: "MRP Core",
    categoria: "Infraestrutura",
    descricao:
      "Backbone resiliente de alta disponibilidade, construído para atender demandas extremas de ambientes digitais modernos.",
    accent: "#6A3F91",
    accentSecondary: "#A719FA",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    id: "tesseract",
    nome: "MRP Tesseract",
    categoria: "Inteligência",
    descricao:
      "Sistema proprietário de IA multidimensional capaz de prever dinâmicas complexas de mercado e anomalias técnicas.",
    accent: "#A719FA",
    accentSecondary: "#6DFBCB",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    id: "nexus",
    nome: "MRP Nexus",
    categoria: "Integração",
    descricao:
      "Gateway universal de APIs e camada de integração que conecta sistemas legados em um ecossistema unificado e veloz.",
    accent: "#6DFBCB",
    accentSecondary: "#A719FA",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <circle cx="4" cy="4" r="2" />
        <circle cx="20" cy="4" r="2" />
        <circle cx="4" cy="20" r="2" />
        <circle cx="20" cy="20" r="2" />
        <line x1="6" y1="6" x2="10" y2="10" />
        <line x1="18" y1="6" x2="14" y2="10" />
        <line x1="6" y1="18" x2="10" y2="14" />
        <line x1="18" y1="18" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    id: "vision",
    nome: "MRP Vision",
    categoria: "Inteligência",
    descricao:
      "Algoritmos avançados de visão computacional para garantia de qualidade em tempo real e monitoramento em ambientes críticos.",
    accent: "#6A3F91",
    accentSecondary: "#6DFBCB",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

const categorias: Categoria[] = [
  "Todos",
  "Dados",
  "Inteligência",
  "Automação",
  "Infraestrutura",
  "Integração",
];

export function ProdutosSection() {
  const [filtro, setFiltro] = useState<Categoria>("Todos");

  const produtosFiltrados = useMemo(
    () =>
      filtro === "Todos"
        ? produtos
        : produtos.filter((p) => p.categoria === filtro),
    [filtro]
  );

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Grid sutil */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(106, 63, 145, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(106, 63, 145, 1) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Gradient soft accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(109,251,203,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#6A3F91] text-xs font-mono uppercase tracking-widest mb-4 block">
            Ecossistema MRP
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#101014] tracking-tight leading-tight">
            Um produto para cada{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A3F91] to-[#A719FA]">
              dimensão
            </span>{" "}
            do seu negócio
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Soluções integradas e modulares — use de forma independente ou combinadas para desbloquear o próximo nível de operação.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`text-xs font-semibold uppercase tracking-widest px-5 py-2.5 border transition-all ${
                filtro === cat
                  ? "border-[#6DFBCB] text-[#101014] bg-[#6DFBCB]/20 shadow-[0_0_20px_rgba(109,251,203,0.25)]"
                  : "border-[#101014]/15 text-[#4B5563] hover:border-[#6A3F91]/40 hover:text-[#6A3F91]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtosFiltrados.map((p) => (
            <article
              key={p.id}
              className="group relative"
              style={
                {
                  "--accent": p.accent,
                  "--accent-2": p.accentSecondary,
                } as React.CSSProperties
              }
            >
              {/* Aura luminosa atrás do card (sutil → intensa no hover) */}
              <div
                aria-hidden
                className="absolute -inset-4 pointer-events-none opacity-40 group-hover:opacity-90 blur-2xl transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 20%, var(--accent) 0%, transparent 55%), radial-gradient(ellipse at 80% 90%, var(--accent-2) 0%, transparent 55%)",
                }}
              />

              {/* Card */}
              <div className="relative h-full flex flex-col bg-white border border-[#101014]/8 shadow-[0_4px_24px_rgba(16,16,20,0.04)] p-7 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-[color:var(--accent)]/40 group-hover:shadow-[0_20px_50px_-10px_color-mix(in_srgb,var(--accent)_35%,transparent)]">
                {/* Linha superior de acento que cresce no hover */}
                <span
                  aria-hidden
                  className="absolute top-0 left-0 h-[2px] w-10 group-hover:w-full transition-all duration-500 ease-out"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--accent) 0%, var(--accent-2) 100%)",
                  }}
                />

                {/* Topo: ícone + categoria */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-12 h-12 flex items-center justify-center border border-[#101014]/10 bg-[#F7F8FA] text-[#101014] transition-all duration-500 group-hover:border-[color:var(--accent)]/40 group-hover:bg-white group-hover:text-[color:var(--accent-2)] group-hover:shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_40%,transparent)]"
                  >
                    {p.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#6B7280] bg-[#F3F4F6] px-2.5 py-1">
                    {p.categoria}
                  </span>
                </div>

                {/* Nome */}
                <h3 className="text-[#101014] text-2xl font-bold tracking-tight mb-3">
                  {p.nome}
                </h3>

                {/* Descrição */}
                <p className="text-[#4B5563] text-sm leading-relaxed flex-1 mb-6">
                  {p.descricao}
                </p>

                {/* CTA */}
                <a
                  href="/#contato"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#101014] group-hover:text-[color:var(--accent-2)] transition-colors"
                >
                  Saiba mais
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {produtosFiltrados.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#6B7280]">
              Nenhum produto encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
