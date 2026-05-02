"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { Button } from "../ui/Button";

type NavChild = { label: string; href: string };
type NavLink = { label: string; href: string; children?: NavChild[] };

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  {
    label: "Soluções",
    href: "#solucoes",
    children: [
      { label: "Produtos", href: "/produtos" },
      { label: "Preços", href: "/precos" },
    ],
  },
  { label: "Sobre", href: "#sobre" },
  { label: "Valores", href: "#valores" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(label);
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setDropdownOpen(null), 120);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="inline-flex items-center gap-3 group select-none"
          >
            <Image
              src="/Logo/LOGO_FUNDO_BRANCO.png"
              alt="MRP Tech"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
              priority
            />
            <span className="text-white font-bold text-xl tracking-wider">
              <span className="text-white">MRP </span>
              <span className="text-[#6A3F91]">Tech</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Trigger */}
                  <a
                    href={link.href}
                    className="flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${dropdownOpen === link.label ? "rotate-180" : ""}`}
                    >
                      <path d="M2 4.5L6 8L10 4.5" />
                    </svg>
                  </a>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                      dropdownOpen === link.label
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div className="bg-black/95 border border-white/10 backdrop-blur-md min-w-[160px] py-1.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors group"
                          onClick={() => setDropdownOpen(null)}
                        >
                          <span className="w-1 h-1 bg-[#6DFBCB] group-hover:scale-125 transition-transform" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="ghost" href="#contato">
              Fale com um especialista
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 border-t border-white/5 px-4 py-6 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === link.label ? null : link.label
                    )
                  }
                  className="w-full flex items-center justify-between text-base text-white/70 hover:text-white transition-colors py-3 border-b border-white/5"
                >
                  {link.label}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${mobileExpanded === link.label ? "rotate-180" : ""}`}
                  >
                    <path d="M2 4.5L6 8L10 4.5" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileExpanded === link.label
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 pl-4 py-2.5 text-sm text-white/50 hover:text-[#6DFBCB] transition-colors border-b border-white/5"
                    >
                      <span className="w-1 h-1 bg-[#6DFBCB]/50" />
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-white/70 hover:text-white transition-colors py-3 border-b border-white/5 last:border-0"
              >
                {link.label}
              </a>
            )
          )}
          <Button
            variant="ghost"
            href="#contato"
            className="mt-4 w-full justify-center"
            onClick={() => setOpen(false)}
          >
            Fale com um especialista
          </Button>
        </div>
      </div>
    </header>
  );
}
