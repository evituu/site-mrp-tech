"use client";

import { useState } from "react";

const beneficios = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Diagnóstico sem compromisso",
    description: "Uma análise técnica profunda da sua maturidade digital atual.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Análise de processos reais",
    description: "Mapeamos gargalos operacionais que custam tempo e dinheiro.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Foco em escala e ROI",
    description: "Soluções projetadas para trazer retorno financeiro mensurável.",
  },
];

const opcoesProjeto = [
  "Como podemos ajudar?",
  "Consultoria Tecnológica",
  "Desenvolvimento de Software",
  "Automação de Processos",
  "Análise de Dados e BI",
  "Inteligência Artificial",
  "Criação de Produtos Digitais",
  "Outro",
];

export function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    projeto: "",
    mensagem: "",
  });
  const [enviado, setEnviado] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const projetoTexto = form.projeto && form.projeto !== "Como podemos ajudar?" ? form.projeto : "Não especificado";
    const mailtoLink = `mailto:contato@mrptech.com.br?subject=Diagnóstico Estratégico - ${encodeURIComponent(form.nome)}&body=${encodeURIComponent(`Nome: ${form.nome}\nE-mail: ${form.email}\nInteresse: ${projetoTexto}\n\nDesafio:\n${form.mensagem}`)}`;
    window.location.href = mailtoLink;
    setEnviado(true);
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm px-4 py-3.5 outline-none focus:border-[#6DFBCB]/50 focus:bg-white/[0.07] transition-colors";

  return (
    <section id="contato" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(167,25,250,0.4) 0%, transparent 50%)",
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Desbloqueie a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6DFBCB] to-[#A719FA]">
              Quarta Dimensão
            </span>{" "}
            do Seu Negócio
          </h2>
          <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg text-white/50 leading-relaxed">
            Agende uma conversa estratégica com nossos especialistas e descubra os gargalos invisíveis que estão limitando seu crescimento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Benefits + Contact Info */}
          <div className="space-y-10">
            {/* Benefits */}
            <div className="space-y-6">
              {beneficios.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-[#6DFBCB]/30 bg-[#6DFBCB]/5 text-[#6DFBCB]">
                    {b.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">
                      {b.title}
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href="mailto:contato@mrptech.com.br"
                  className="flex items-center gap-2 text-white/60 hover:text-[#6DFBCB] transition-colors text-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  contato@mrptech.com.br
                </a>
                <a
                  href="https://wa.me/5511999999999"
                  className="flex items-center gap-2 text-white/60 hover:text-[#6DFBCB] transition-colors text-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +55 (11) 99999-9999
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="#"
                  className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:text-[#6DFBCB] hover:border-[#6DFBCB]/30 transition-colors"
                  aria-label="Compartilhar"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:text-[#6DFBCB] hover:border-[#6DFBCB]/30 transition-colors"
                  aria-label="Website"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:text-[#6DFBCB] hover:border-[#6DFBCB]/30 transition-colors"
                  aria-label="Chat"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 p-8">
            {enviado ? (
              <div className="flex flex-col items-center justify-center h-80 text-center gap-4">
                <div className="w-14 h-14 border border-[#6DFBCB]/40 bg-[#6DFBCB]/10 flex items-center justify-center text-[#6DFBCB] text-2xl">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-white font-semibold text-lg">
                  Solicitação enviada!
                </p>
                <p className="text-white/50 text-sm max-w-xs">
                  Nossa equipe entrará em contato em breve para agendar seu diagnóstico.
                </p>
                <button
                  onClick={() => { setEnviado(false); setForm({ nome: "", email: "", projeto: "", mensagem: "" }); }}
                  className="text-sm text-[#6DFBCB] hover:underline mt-4"
                >
                  Enviar outra solicitação
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    required
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className={inputClass}
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="E-mail corporativo"
                    className={inputClass}
                  />
                </div>

                <select
                  name="projeto"
                  value={form.projeto}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.5%204.5L6%208L9.5%204.5%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]`}
                >
                  {opcoesProjeto.map((op) => (
                    <option key={op} value={op === "Como podemos ajudar?" ? "" : op} className="bg-[#1a1a1a] text-white">
                      {op}
                    </option>
                  ))}
                </select>

                <textarea
                  required
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  placeholder="Descreva seu desafio técnico"
                  rows={5}
                  className={`${inputClass} resize-none`}
                />

                <button
                  type="submit"
                  className="w-full mt-2 py-4 bg-[#6DFBCB] text-[#0A0A0A] font-semibold text-sm uppercase tracking-wider hover:bg-[#5ae8b8] transition-colors"
                >
                  Solicitar Diagnóstico Estratégico
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
