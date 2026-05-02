import { Badge } from "../ui/Badge";

const valores = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Visão 360°",
    description:
      "Enxergamos além do óbvio. Mapeamos processos, dados e gargalos antes de propor qualquer solução.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
      </svg>
    ),
    title: "Precisão",
    description:
      "Decisões baseadas em evidência, não em percepção. Transformamos dados em clareza e ação.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Escala",
    description:
      "Da consultoria ao produto. Uma dor resolvida pode virar um sistema aplicável a dezenas de empresas.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Parceria",
    description:
      "Somos a ponte entre a dor do empresário e a solução tecnológica. Lado a lado em cada etapa.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Inovação",
    description:
      "Tecnologia como camada estratégica — não uma ferramenta genérica, mas uma lente que amplia a visão.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Propósito",
    description:
      "Problemas reais merecem soluções reais. Cada projeto tem impacto concreto no negócio do cliente.",
  },
];

export function Valores() {
  return (
    <section id="valores" className="py-24 bg-[#040404] relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(109,251,203,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109,251,203,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
            Nossos <span className="text-[#A719FA]">valores</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            A MRP Tech é formada por pessoas com conhecimentos diferentes e
            complementares, unidas por um propósito: construir soluções que
            gerem valor real.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valores.map((v) => (
            <div
              key={v.title}
              className="group p-6 border border-white/8 bg-white/2 hover:border-[#A719FA]/40 hover:bg-[#A719FA]/5 transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center text-[#6DFBCB] mb-4 border border-[#6DFBCB]/20 bg-[#6DFBCB]/5 group-hover:bg-[#6DFBCB]/10 transition-colors">
                {v.icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-2">
                {v.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
