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
              <Image
                src="/Logo/LOGO_FUNDO_BRANCO.png"
                alt="MRP Tech"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                priority
              />
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
              <a
                href="https://wa.me/55"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/50 hover:text-[#6DFBCB] transition-colors duration-200"
              >
                Fale pelo WhatsApp
              </a>
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
                href="https://wa.me/55"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 flex items-center justify-center border border-white/10 bg-white/[0.02] text-white/40 transition-all duration-200 hover:border-[#6DFBCB]/60 hover:text-[#6DFBCB] hover:shadow-[0_0_20px_rgba(109,251,203,0.12)]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.52 3.48A11.9 11.9 0 0 0 12.07 0C5.43 0 .04 5.38.04 12.02c0 2.12.55 4.2 1.6 6.03L0 24l6.1-1.6a11.93 11.93 0 0 0 5.96 1.51h.01c6.64 0 12.03-5.38 12.03-12.02 0-3.22-1.26-6.25-3.58-8.41Zm-8.45 18.47h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.62.95.97-3.52-.23-.37a9.88 9.88 0 0 1-1.52-5.27C2.25 6.6 6.62 2.23 12.07 2.23c2.66 0 5.16 1.04 7.04 2.92a9.86 9.86 0 0 1 2.92 7.04c0 5.45-4.37 9.76-9.96 9.76Zm5.76-7.88c-.31-.16-1.84-.91-2.13-1.02-.29-.1-.5-.16-.72.16-.21.31-.82 1.02-1 1.23-.18.2-.36.23-.67.08-.31-.16-1.31-.48-2.49-1.53-.92-.82-1.53-1.84-1.71-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.36.46-.54.15-.18.2-.31.31-.51.1-.2.05-.38-.02-.54-.08-.16-.72-1.73-.99-2.36-.26-.62-.53-.53-.72-.54h-.62c-.2 0-.54.08-.82.38-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.13 3.06 1.28 3.27.16.2 2.22 3.39 5.39 4.75.75.32 1.33.51 1.78.65.75.24 1.43.21 1.97.13.6-.09 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.6-.36Z" />
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
