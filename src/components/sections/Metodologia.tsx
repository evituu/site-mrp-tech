
const iconBaseProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor" as const,
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

interface Step {
  label: string;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

const steps: Step[] = [
  {
    label: "Entendemos a dor",
    description: "Investigamos o problema real antes de propor tecnologia.",
    icon: (
      <svg {...iconBaseProps}>
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    label: "Mapeamos processos",
    description: "Identificamos fluxos, gargalos e pontos de perda.",
    icon: (
      <svg {...iconBaseProps}>
        <rect x="9" y="2" width="6" height="5" rx="0.5" />
        <rect x="2" y="15" width="6" height="5" rx="0.5" />
        <rect x="16" y="15" width="6" height="5" rx="0.5" />
        <path d="M12 7v4M5 15v-4h14v4" />
      </svg>
    ),
  },
  {
    label: "Desenhamos a solução",
    description: "Definimos arquitetura, experiência e lógica da solução.",
    icon: (
      <svg {...iconBaseProps}>
        <path d="M12 20h9" />
        <path d="m16.5 3.5 4 4L7 21l-4 1 1-4 12.5-13.5z" />
      </svg>
    ),
  },
  {
    label: "Desenvolvemos sistemas",
    description: "Construímos automações, integrações, dashboards e plataformas.",
    icon: (
      <svg {...iconBaseProps}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: "Validamos na operação",
    description: "Testamos a solução em ambiente real e medimos impacto.",
    icon: (
      <svg {...iconBaseProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Transformamos em produtos",
    description: "Soluções validadas viram produtos escaláveis da MRP Tech.",
    highlight: true,
    icon: (
      <svg {...iconBaseProps}>
        <circle cx="12" cy="12" r="3" />
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path d="m8 8 2 2" />
        <path d="m16 8-2 2" />
        <path d="m8 16 2-2" />
        <path d="m16 16-2-2" />
      </svg>
    ),
  },
];

const TOTAL = steps.length;
const CYCLE_SECONDS = 8;
const PROGRESS_END_AT = 7;

function getDelay(index: number) {
  const peak = (index / (TOTAL - 1)) * PROGRESS_END_AT;
  return -(CYCLE_SECONDS - peak);
}

export function Metodologia() {
  return (
    <section
      id="metodologia"
      className="relative py-24 bg-[#D1D5DB] overflow-hidden"
    >
      {/* Grid muito sutil no fundo cinza */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
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
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#101014] tracking-tight leading-tight">
            Da Dor ao <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A719FA] to-[#6A3F91]">Produto Escalável</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Nossa metodologia transforma problemas reais em soluções digitais validadas, escaláveis e prontas para gerar valor em diferentes negócios.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Trilha horizontal — desktop */}
          <div className="hidden md:block absolute left-[8.33%] right-[8.33%] top-7 h-0.5 -translate-y-1/2 bg-black/10">
            <div
              className="timeline-progress absolute left-0 top-0 h-full bg-gradient-to-r from-[#A719FA] via-[#6A3F91] to-[#6DFBCB]"
              style={{
                animation: "progressFlow 8s linear infinite",
                boxShadow: "0 0 12px rgba(109,251,203,0.4)",
                width: "0%",
              }}
            />
          </div>

          {/* Trilha vertical — mobile */}
          <div className="md:hidden absolute left-7 top-7 bottom-7 w-0.5 -translate-x-1/2 bg-black/10">
            <div
              className="timeline-progress-v absolute top-0 left-0 w-full bg-gradient-to-b from-[#A719FA] via-[#6A3F91] to-[#6DFBCB]"
              style={{
                animation: "progressFlowVertical 8s linear infinite",
                boxShadow: "0 0 12px rgba(109,251,203,0.4)",
                height: "0%",
              }}
            />
          </div>

          {/* Cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-6 gap-10 md:gap-4">
            {steps.map((step, i) => {
              const delay = getDelay(i);
              const isLast = step.highlight;

              return (
                <div
                  key={step.label}
                  className="flex md:flex-col items-start md:items-center gap-4 md:gap-3"
                >
                  {/* Ícone */}
                  <div
                    className={`shrink-0 relative w-14 h-14 flex items-center justify-center bg-white border shadow-sm ${
                      isLast
                        ? "border-[#6DFBCB]/60 text-[#6A3F91] shadow-[0_0_22px_rgba(109,251,203,0.15)]"
                        : "border-black/10 text-[#6A3F91]"
                    }`}
                  >
                    {/* Overlay ativo */}
                    <div
                      className="step-pulse absolute inset-0 border border-[#6DFBCB]/70 shadow-[0_0_28px_rgba(109,251,203,0.4)] opacity-0 pointer-events-none"
                      style={{
                        animation: "stepPulse 8s linear infinite",
                        animationDelay: `${delay}s`,
                      }}
                    />
                    {step.icon}
                  </div>

                  {/* Texto */}
                  <div className="flex-1 md:text-center md:flex md:flex-col md:items-center min-w-0">
                    <h3
                      className={`font-semibold text-sm leading-snug ${
                        isLast ? "text-[#6A3F91]" : "text-[#101014]"
                      }`}
                    >
                      {step.label}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#6B7280] leading-relaxed max-w-none md:max-w-[180px]">
                      {step.description}
                    </p>

                    {/* Marcador */}
                    <div
                      className={`relative mt-3 h-0.5 w-10 ${
                        isLast ? "bg-[#6DFBCB]/50" : "bg-[#A719FA]/20"
                      }`}
                    >
                      <div
                        className="step-pulse absolute inset-0 bg-[#6DFBCB] opacity-0 shadow-[0_0_8px_rgba(109,251,203,0.6)]"
                        style={{
                          animation: "stepPulse 8s linear infinite",
                          animationDelay: `${delay}s`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
