"use client";

import { useState } from "react";

type Plano = {
  id: string;
  tag: string;
  nome: string;
  precoMensal: number;
  destaque?: boolean;
  features: string[];
};

const planos: Plano[] = [
  {
    id: "insight",
    tag: "Foco em Dados",
    nome: "MRP Insight",
    precoMensal: 399,
    features: [
      "Dashboards em Tempo Real",
      "Exportação de Relatórios",
      "Suporte Padrão",
    ],
  },
  {
    id: "automate",
    tag: "Foco em Processos",
    nome: "MRP Automate",
    precoMensal: 719,
    destaque: true,
    features: [
      "Tudo do Insight",
      "Automação de Fluxos Core",
      "Integrações API (Até 5)",
      "Suporte Prioritário",
    ],
  },
  {
    id: "core",
    tag: "Foco em Infraestrutura",
    nome: "MRP Core",
    precoMensal: 1199,
    features: [
      "Tudo do Automate",
      "Instância Dedicada",
      "Integrações Ilimitadas",
      "Suporte 24/7 SLA",
    ],
  },
];

function formatarPreco(valor: number) {
  return valor.toLocaleString("pt-BR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export function PrecosContent() {
  const [anual, setAnual] = useState(false);

  return (
    <main className="min-h-screen bg-black pt-24 pb-24 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(167,25,250,0.35) 0%, transparent 55%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(109, 251, 203, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109, 251, 203, 1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Investimento em{" "}
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-[#6DFBCB] to-[#A719FA]">
              Visão e Escala
            </span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-white/50 leading-relaxed">
            Nossa tecnologia revela a quarta dimensão do lucro. Sistemas de precisão aeroespacial aplicados à arquitetura do seu negócio.
          </p>

          {/* Toggle Mensal/Anual */}
          <div className="mt-10 inline-flex items-center gap-4 bg-white/[0.03] border border-white/10 px-5 py-2.5">
            <button
              onClick={() => setAnual(false)}
              className={`text-xs font-semibold uppercase tracking-widest transition-colors ${
                !anual ? "text-white" : "text-white/40 hover:text-white/70"
              }`}
            >
              Mensal
            </button>

            <button
              onClick={() => setAnual(!anual)}
              role="switch"
              aria-checked={anual}
              className="relative w-12 h-6 bg-white/10 border border-white/10 transition-colors"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-[#6DFBCB] transition-transform duration-300 ${
                  anual ? "translate-x-[22px]" : "translate-x-0"
                }`}
              />
            </button>

            <button
              onClick={() => setAnual(true)}
              className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                anual ? "text-white" : "text-white/40 hover:text-white/70"
              }`}
            >
              Anual
              <span className="text-[#6DFBCB] text-[10px] normal-case tracking-normal">
                (20% OFF)
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {planos.map((plano) => {
            const precoExibido = anual
              ? Math.round(plano.precoMensal * 0.8)
              : plano.precoMensal;

            return (
              <div
                key={plano.id}
                className={`relative h-full flex ${
                  plano.destaque ? "md:-translate-y-4" : ""
                }`}
              >
                {/* Halo de luz difusa atrás do card destaque */}
                {plano.destaque && (
                  <>
                    {/* Glow principal verde */}
                    <div
                      aria-hidden
                      className="absolute -inset-8 pointer-events-none blur-2xl opacity-40"
                      style={{
                        background:
                          "radial-gradient(ellipse at 50% 100%, #6DFBCB 0%, transparent 70%)",
                      }}
                    />
                    {/* Glow secundário roxo */}
                    <div
                      aria-hidden
                      className="absolute -inset-8 pointer-events-none blur-3xl opacity-30"
                      style={{
                        background:
                          "radial-gradient(ellipse at 50% 0%, #A719FA 0%, transparent 65%)",
                      }}
                    />
                    {/* Reflexo lateral esquerdo */}
                    <div
                      aria-hidden
                      className="absolute -inset-4 pointer-events-none blur-xl opacity-20"
                      style={{
                        background:
                          "radial-gradient(ellipse at 0% 50%, #6DFBCB 0%, transparent 60%)",
                      }}
                    />
                    {/* Reflexo lateral direito */}
                    <div
                      aria-hidden
                      className="absolute -inset-4 pointer-events-none blur-xl opacity-20"
                      style={{
                        background:
                          "radial-gradient(ellipse at 100% 50%, #A719FA 0%, transparent 60%)",
                      }}
                    />
                  </>
                )}

                {/* Borda gradiente p/ destaque */}
                {plano.destaque && (
                  <div
                    aria-hidden
                    className="absolute -inset-px pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, #6DFBCB 0%, #A719FA 50%, #6A3F91 100%)",
                    }}
                  />
                )}

                <div
                  className={`relative flex flex-col w-full p-8 bg-[#0A0A0A] border ${
                    plano.destaque
                      ? "border-transparent"
                      : "border-[#6A3F91]/30 hover:border-[#6A3F91]/60"
                  } transition-colors`}
                >
                  {plano.destaque && (
                    <span className="absolute top-5 right-5 bg-[#6DFBCB] text-[#0A0A0A] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                      Mais Popular
                    </span>
                  )}

                  {/* Tag */}
                  <div className="flex items-center gap-2 mb-6">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#A719FA]"
                    >
                      <polygon points="12 2 15 8.5 22 9.3 17 14 18.2 21 12 17.8 5.8 21 7 14 2 9.3 9 8.5 12 2" />
                    </svg>
                    <span className="text-[10px] text-white/50 uppercase tracking-widest font-mono">
                      {plano.tag}
                    </span>
                  </div>

                  {/* Nome */}
                  <h3 className="text-white text-2xl font-bold mb-5">
                    {plano.nome}
                  </h3>

                  {/* Preço */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-white/70 text-lg font-semibold">
                        R$
                      </span>
                      <span className="text-white text-5xl font-black tracking-tight">
                        {formatarPreco(precoExibido)}
                      </span>
                      <span className="text-white/40 text-sm ml-1">/mês</span>
                    </div>
                    {anual && (
                      <p className="text-[#6DFBCB]/80 text-xs mt-2">
                        Cobrado anualmente · Economia de 20%
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3.5 mb-10 flex-1">
                    {plano.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-white/75"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#6DFBCB] shrink-0 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="/#contato"
                    className={`w-full text-center py-3.5 text-xs font-bold uppercase tracking-widest transition-colors ${
                      plano.destaque
                        ? "bg-[#6DFBCB] text-[#0A0A0A] hover:bg-[#5ae8b8]"
                        : "border border-[#6A3F91] text-[#A719FA] hover:bg-[#6A3F91]/10 hover:text-white"
                    }`}
                  >
                    Selecionar Plano
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="text-center mt-14">
          <p className="text-sm text-white/40">
            Precisa de algo sob medida?{" "}
            <a
              href="/#contato"
              className="text-[#6DFBCB] hover:underline font-medium"
            >
              Fale com um especialista
            </a>
          </p>
          <div className="mt-4">
            <a
              href="/"
              className="text-sm text-white/30 hover:text-white/60 transition-colors"
            >
              ← Voltar ao início
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
