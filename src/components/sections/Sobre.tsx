import { Tesseract } from "../ui/Tesseract";

export function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-black relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] pointer-events-none opacity-10"
        style={{
          background:
            "radial-gradient(circle at 0% 50%, rgba(167,25,250,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Revelamos a quarta <span className="text-[#A719FA]">dimensão</span> do seu negócio
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-white/65 leading-relaxed">
            Tecnologia e dados como uma lente para enxergar além do óbvio, transformando processos invisíveis em crescimento real.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="space-y-4 text-white/55 leading-relaxed text-base">
              <p>
                A MRP Tech nasce da tecnologia que permite as
                empresas enxergarem as dimensões do negócio que antes estavam
                invisíveis. Somos uma empresa de consultoria em tecnologia e
                desenvolvimento de soluções digitais, focada em dores reais de
                negócio.
              </p>
              <p>
                Nosso símbolo é o{" "}
                <strong className="text-[#6DFBCB]">Tesseract</strong>. Assim como 
                ele representa uma dimensão além da percepção comum, a MRP Tech 
                revela ao seu negócio o que está invisível na operação: 
                dados, processos, gargalos e oportunidades que não aparecem no dia a dia.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-8 pl-4 border-l-2 border-[#A719FA]">
              <p className="text-sm text-white/40 italic leading-relaxed">
                "A MRP Tech não vende apenas sistemas. Vendemos visão, clareza 
                e a quarta dimensão do seu negócio."
              </p>
            </blockquote>
          </div>

          {/* Tesseract visual */}
          <div className="flex items-center justify-center">
            <div
              className="relative w-72 h-72 sm:w-96 sm:h-96"
              style={{ perspective: "1000px" }}
            >
              {/* Tesseract animado em 4D projetado em SVG */}
              <Tesseract className="absolute inset-0 w-full h-full" />

              {/* Centro */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#6DFBCB] to-[#A719FA] text-3xl sm:text-4xl font-bold leading-none tracking-[0.08em] pl-[0.08em]"
                  style={{ WebkitTextStroke: "0.5px rgba(0,0,0,0.4)" }}
                >
                  MRP
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
