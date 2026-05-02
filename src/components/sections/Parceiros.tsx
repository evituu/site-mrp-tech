import { Badge } from "../ui/Badge";

const parceiros = [
  { name: "Empresa A" },
  { name: "Empresa B" },
  { name: "Empresa C" },
  { name: "Empresa D" },
  { name: "Empresa E" },
  { name: "Empresa F" },
];

export function Parceiros() {
  return (
    <section className="py-20 bg-[#040404] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-4">
            Empresas que confiam na{" "}
            <span className="text-[#A719FA]">MRP Tech</span>
          </h2>
          <p className="mt-3 text-white/40 text-sm">
            Em breve, nossos parceiros e clientes aqui.
          </p>
        </div>

        {/* Placeholder logos */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {parceiros.map((p) => (
            <div
              key={p.name}
              className="h-16 border border-white/8 flex items-center justify-center bg-white/2 opacity-40"
            >
              <span className="text-white/30 text-xs tracking-widest uppercase font-mono">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
