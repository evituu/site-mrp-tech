import Image from "next/image";

export function DesenvolvimentoCustomizado() {
  return (
    <section className="bg-[#0A0A0A] py-24 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(109, 251, 203, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109, 251, 203, 1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wrapper group para o efeito de hover */}
        <div className="group relative">

          {/* ── Aura luminosa (idêntica aos cards de produto) ── */}
          <div
            aria-hidden
            className="absolute -inset-4 pointer-events-none opacity-40 group-hover:opacity-90 blur-2xl transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(ellipse at 20% 50%, #6DFBCB 0%, transparent 50%), radial-gradient(ellipse at 85% 50%, #A719FA 0%, transparent 50%)",
            }}
          />

          {/* Card */}
          <div className="relative overflow-hidden border-l-4 border-l-[#6DFBCB] border border-white/10 transition-all duration-500 group-hover:border-[#6DFBCB]/50 group-hover:shadow-[0_0_60px_-10px_rgba(109,251,203,0.35)]">

            {/* Linha de acento superior que cresce no hover */}
            <span
              aria-hidden
              className="absolute top-0 left-0 h-[2px] w-16 group-hover:w-full transition-all duration-500 ease-out z-20"
              style={{
                background: "linear-gradient(90deg, #6DFBCB 0%, #A719FA 100%)",
              }}
            />

            {/* Imagem de fundo cobrindo o card inteiro */}
            <Image
              src="/fundo_card_cstomizavel.png"
              alt=""
              aria-hidden
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
              priority
            />

            {/* Overlay escuro para legibilidade do texto */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />

            {/* Light leak roxo — intensifica no hover */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none opacity-30 group-hover:opacity-50 mix-blend-overlay transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(circle at top left, rgba(167, 25, 250, 0.5) 0%, transparent 50%)",
              }}
            />

            {/* Conteúdo */}
            <div className="relative z-10 p-10 sm:p-14 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Texto */}
            <div className="flex-1 max-w-2xl">
              <span className="text-[#6DFBCB] text-xs font-mono uppercase tracking-widest mb-4 block">
                Engenharia Sob Medida
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                Desenvolvimento Customizado
              </h2>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10">
                Sua dor é o ponto de partida para um novo produto. Desenvolvemos sistemas exclusivos que resolvem seus problemas específicos e podem se tornar o próximo grande ativo do seu setor.
              </p>
              <a
                href="/#contato"
                className="inline-flex items-center gap-3 border border-[#A719FA] text-[#A719FA] hover:bg-[#A719FA]/10 hover:text-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest transition-all duration-300"
              >
                Falar com um Arquiteto
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
              </a>
            </div>

            {/* Espaçador para empurrar o texto p/ a esquerda em telas grandes */}
            <div className="hidden lg:block flex-1" aria-hidden />
          </div>
          </div>{/* /card */}
        </div>{/* /group */}
      </div>
    </section>
  );
}
