"use client";

import { useState } from "react";
import { Button } from "../ui/Button";

export function Contato() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    email: "",
    mensagem: "",
  });
  const [enviado, setEnviado] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const mailtoLink = `mailto:contato@mrptech.com.br?subject=Contato via site - ${encodeURIComponent(form.nome)} (${encodeURIComponent(form.empresa)})&body=${encodeURIComponent(`Nome: ${form.nome}\nEmpresa: ${form.empresa}\nE-mail: ${form.email}\n\n${form.mensagem}`)}`;
    window.location.href = mailtoLink;
    setEnviado(true);
  }

  const inputClass =
    "w-full bg-[#F7F8FA] border border-black/10 text-[#101014] placeholder:text-black/30 text-sm px-4 py-3 outline-none focus:border-[#6A3F91]/50 focus:bg-white transition-colors";

  return (
    <section id="contato" className="py-24 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(167,25,250,0.3) 0%, transparent 60%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(106, 63, 145, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(106, 63, 145, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Vamos revelar a quarta <span className="text-[#A719FA]">dimensão</span> do seu negócio
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-white/65 leading-relaxed">
            Tem uma dor no seu negócio que a tecnologia pode resolver? Nosso primeiro passo é entender o seu cenário com profundidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>

            <div className="space-y-4">
              {[
                {
                  icon: "✉",
                  label: "E-mail",
                  value: "contato@mrptech.com.br",
                  href: "mailto:contato@mrptech.com.br",
                },
                {
                  icon: "💬",
                  label: "WhatsApp",
                  value: "Fale pelo WhatsApp",
                  href: "https://wa.me/55",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-white/10 text-[#6DFBCB] text-lg group-hover:border-[#6DFBCB]/40 transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm text-white/70 group-hover:text-[#6DFBCB] transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
            {enviado ? (
              <div className="flex flex-col items-center justify-center h-64 text-center gap-4">
                <div className="w-12 h-12 border border-[#6DFBCB]/40 flex items-center justify-center text-[#6DFBCB] text-2xl">
                  ✓
                </div>
                <p className="text-[#101014] font-semibold">
                  Mensagem enviada!
                </p>
                <p className="text-[#6B7280] text-sm">
                  Em breve entraremos em contato.
                </p>
                <button
                  onClick={() => { setEnviado(false); setForm({ nome: "", empresa: "", email: "", mensagem: "" }); }}
                  className="text-xs text-[#6A3F91] hover:underline mt-2"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#6B7280] uppercase tracking-wider block mb-1.5">
                      Nome
                    </label>
                    <input
                      required
                      name="nome"
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#6B7280] uppercase tracking-wider block mb-1.5">
                      Empresa
                    </label>
                    <input
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Nome da empresa"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#6B7280] uppercase tracking-wider block mb-1.5">
                    E-mail
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="text-xs text-[#6B7280] uppercase tracking-wider block mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    required
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    placeholder="Descreva a dor ou o desafio do seu negócio..."
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full mt-2 justify-center"
                >
                  Enviar mensagem
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
