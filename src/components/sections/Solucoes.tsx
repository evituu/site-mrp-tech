import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

const solucoes = [
  {
    number: "01",
    title: "Consultoria Tecnológica",
    description:
      "Identificamos a dor, mapeamos o processo, encontramos os gargalos e desenhamos a solução adequada à realidade da sua empresa — sem tecnologia genérica.",
    tags: ["Diagnóstico", "Estratégia", "Roadmap"],
  },
  {
    number: "02",
    title: "Desenvolvimento de Software",
    description:
      "Criamos sistemas, plataformas e aplicações sob medida, do back-end ao front-end, com qualidade e foco em performance e escalabilidade.",
    tags: ["Web", "Mobile", "APIs"],
  },
  {
    number: "03",
    title: "Automação de Processos",
    description:
      "Eliminamos tarefas repetitivas, integramos sistemas e automatizamos fluxos para liberar sua equipe para o que realmente importa.",
    tags: ["RPA", "Integrações", "Webhooks"],
  },
  {
    number: "04",
    title: "Análise de Dados e BI",
    description:
      "Transformamos dados brutos em painéis claros e inteligentes. Você passa a tomar decisões por evidência, não por percepção.",
    tags: ["Dashboards", "ETL", "Relatórios"],
  },
  {
    number: "05",
    title: "Inteligência Artificial",
    description:
      "Implementamos soluções de IA aplicadas ao seu negócio: chatbots, análise preditiva, processamento de linguagem natural e muito mais.",
    tags: ["LLM", "IA Generativa", "ML"],
  },
  {
    number: "06",
    title: "Criação de Produtos Digitais",
    description:
      "Uma solução criada para um cliente pode evoluir para um produto escalável. Ajudamos a transformar aprendizado em produto e produto em ecossistema.",
    tags: ["SaaS", "MVP", "Produto"],
  },
];

export function Solucoes() {
  return (
    <section id="solucoes" className="py-24 bg-black relative overflow-hidden">
      {/* Right glow */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] pointer-events-none -translate-y-1/2 opacity-10"
        style={{
          background:
            "radial-gradient(circle at 100% 50%, rgba(109,251,203,0.3) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <Badge className="mb-5">O que fazemos</Badge>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 max-w-lg leading-tight">
              Nossas <span className="text-[#6DFBCB]">soluções</span> para o
              seu negócio
            </h2>
            <Button variant="outline" href="#contato" className="shrink-0">
              Fale com um especialista
            </Button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {solucoes.map((s) => (
            <div
              key={s.number}
              className="group p-8 bg-black hover:bg-[#0a0a0a] transition-colors duration-300 flex flex-col"
            >
              <span className="text-[#A719FA]/40 text-xs font-mono mb-4">
                {s.number}
              </span>
              <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-[#6DFBCB] transition-colors">
                {s.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed flex-1">
                {s.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#A719FA]/60 border border-[#A719FA]/20 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
