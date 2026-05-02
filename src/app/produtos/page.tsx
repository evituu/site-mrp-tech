import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Produtos | MRP Tech",
  description: "Conheça os produtos digitais desenvolvidos pela MRP Tech.",
};

export default function ProdutosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(167,25,250,0.4) 0%, transparent 55%)",
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(109, 251, 203, 1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(109, 251, 203, 1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 text-center px-4">
          <span className="text-[#6DFBCB]/50 text-xs font-mono uppercase tracking-widest mb-6 block">
            Em breve
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
            Nossos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6DFBCB] to-[#A719FA]">
              Produtos
            </span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-white/45 text-base sm:text-lg leading-relaxed">
            Estamos construindo algo poderoso. Em breve você poderá conhecer os produtos digitais desenvolvidos pela MRP Tech.
          </p>
          <a
            href="/#contato"
            className="inline-block mt-10 px-8 py-3.5 bg-[#6DFBCB] text-[#0A0A0A] text-sm font-semibold uppercase tracking-wider hover:bg-[#5ae8b8] transition-colors"
          >
            Quero ser avisado
          </a>
          <div className="mt-6">
            <a
              href="/"
              className="text-sm text-white/30 hover:text-white/60 transition-colors"
            >
              ← Voltar ao início
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
