import Image from "next/image";

const footerLinks = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Como atuamos", href: "#valores" },
  { label: "Contato", href: "#contato" },
];

const solutions = [
  "Consultoria em Tecnologia",
  "Desenvolvimento de Sistemas",
  "Inteligência Artificial",
  "Automação de Processos",
  "Engenharia de Dados",
  "Produtos Digitais",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030303] border-t border-white/5">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6DFBCB]/50 to-[#A719FA]/40" />

      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(106, 63, 145, 0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(106, 63, 145, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 85%)",
        }}
      />

      {/* Soft glows */}
      <div
        className="absolute -top-40 -left-32 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(167,25,250,0.16) 0%, transparent 68%)",
        }}
      />
      <div
        className="absolute -bottom-48 right-0 w-[520px] h-[520px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(109,251,203,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-3 group">
              <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-sm bg-white/5 ring-1 ring-white/10">
                <Image
                  src="/Logo/LOGO_FUNDO_BRANCO.png"
                  alt="MRP Tech"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain p-1"
                  priority
                />
              </span>
              <span className="text-white font-bold text-xl tracking-wider select-none">
                <span className="text-white">MRP </span>
                <span className="text-[#6A3F91]">Tech</span>
              </span>
            </a>

            <p className="mt-5 text-sm text-white/48 leading-relaxed max-w-sm">
              Consultoria em tecnologia, dados e produtos digitais. A MRP Tech
              transforma dores reais em soluções escaláveis, revelando
              dimensões invisíveis do negócio.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/35 mb-5">
              Navegação
            </p>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/48 transition-colors duration-200 hover:text-[#6DFBCB]"
                  >
                    <span className="h-px w-0 bg-[#6DFBCB] transition-all duration-200 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/35 mb-5">
              Soluções
            </p>
            <ul className="flex flex-col gap-3">
              {solutions.map((solution) => (
                <li key={solution}>
                  <span className="text-sm text-white/48">{solution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/35 mb-5">
              Contato
            </p>
            <p className="text-sm text-white/55 leading-relaxed mb-5">
              Tem uma dor operacional, comercial ou tecnológica para resolver?
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:contato@mrptech.com.br"
                className="text-sm text-white/50 hover:text-[#6DFBCB] transition-colors duration-200"
              >
                contato@mrptech.com.br
              </a>
              <span className="text-sm text-white/30">
                WhatsApp em breve
              </span>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center border border-white/10 bg-white/[0.02] text-white/40 transition-all duration-200 hover:border-[#6DFBCB]/60 hover:text-[#6DFBCB] hover:shadow-[0_0_20px_rgba(109,251,203,0.12)]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center border border-white/10 bg-white/[0.02] text-white/40 transition-all duration-200 hover:border-[#6DFBCB]/60 hover:text-[#6DFBCB] hover:shadow-[0_0_20px_rgba(109,251,203,0.12)]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} MRP Tech. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-white/30">
            Tecnologia como{" "}
            <span className="text-[#6DFBCB]/70">quarta dimensão</span> do
            negócio.
          </p>
        </div>
      </div>
    </footer>
  );
}
