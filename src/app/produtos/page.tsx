import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProdutosSection } from "./_components/ProdutosSection";
import { DesenvolvimentoCustomizado } from "./_components/DesenvolvimentoCustomizado";

export const metadata = {
  title: "Produtos | MRP Tech",
  description:
    "Conheça o ecossistema de produtos digitais desenvolvidos pela MRP Tech.",
};

export default function ProdutosPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-black pt-32 pb-20 relative overflow-hidden">
          {/* Background gradient */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
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

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#6DFBCB]/60 text-xs font-mono uppercase tracking-widest mb-5 block">
              Produtos
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
              Nossos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6DFBCB] to-[#A719FA]">
                Produtos
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-white/50 text-base sm:text-lg leading-relaxed">
              Conheça o ecossistema de soluções da MRP Tech — construído para empresas que querem transformar operação em escala.
            </p>
          </div>
        </section>

        {/* Seção de Produtos */}
        <ProdutosSection />

        {/* Desenvolvimento Customizado */}
        <DesenvolvimentoCustomizado />
      </main>
      <Footer />
    </>
  );
}
