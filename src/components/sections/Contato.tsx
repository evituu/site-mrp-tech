"use client";

import { useState } from "react";
import { Badge } from "../ui/Badge";
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
    "w-full bg-white/4 border border-white/10 text-white placeholder:text-white/25 text-sm px-4 py-3 outline-none focus:border-[#A719FA]/60 focus:bg-white/6 transition-colors";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <Badge className="mb-5">Entre em contato</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-6 leading-tight">
              Vamos revelar a quarta dimensão{" "}
              <span className="text-[#A719FA]">do seu negócio</span>
            </h2>
            <p className="text-white/50 leading-relaxed text-base mb-8">
              Tem uma dor no seu negócio que a tecnologia pode resolver? Fale
              com a gente. Nosso primeiro passo é entender o seu cenário com
              profundidade — sem propor nada genérico.
            </p>

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
          <div className="border border-white/8 bg-white/2 p-8">
            {enviado ? (
              <div className="flex flex-col items-center justify-center h-64 text-center gap-4">
                <div className="w-12 h-12 border border-[#6DFBCB]/40 flex items-center justify-center text-[#6DFBCB] text-2xl">
                  ✓
                </div>
                <p className="text-white font-semibold">
                  Mensagem enviada!
                </p>
                <p className="text-white/40 text-sm">
                  Em breve entraremos em contato.
                </p>
                <button
                  onClick={() => { setEnviado(false); setForm({ nome: "", empresa: "", email: "", mensagem: "" }); }}
                  className="text-xs text-[#A719FA] hover:underline mt-2"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-wider block mb-1.5">
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
                    <label className="text-xs text-white/40 uppercase tracking-wider block mb-1.5">
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
                  <label className="text-xs text-white/40 uppercase tracking-wider block mb-1.5">
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
                  <label className="text-xs text-white/40 uppercase tracking-wider block mb-1.5">
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
