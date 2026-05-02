"use client";

import { useEffect, useMemo, useRef } from "react";

/**
 * Projeção animada de um tesseract (hipercubo 4D) em 2D.
 *
 * - 16 vértices: todas as combinações de (±1, ±1, ±1, ±1)
 * - 32 arestas: pares de vértices que diferem em exatamente uma coordenada
 *   - 24 arestas pertencem aos dois cubos 3D (XOR ∈ {1,2,4})
 *   - 8 arestas conectam os dois cubos na 4ª dimensão (XOR = 8)
 *
 * A animação aplica uma rotação real em 4D nos planos XW e YZ,
 * que é o que produz a sensação de "cubo invertendo dentro de cubo"
 * típica do tesseract de Schlegel.
 */

type V4 = [number, number, number, number];
type Edge = [number, number, boolean]; // [a, b, isHyperEdge]

function buildVertices(): V4[] {
  const v: V4[] = [];
  for (let i = 0; i < 16; i++) {
    v.push([
      i & 1 ? 1 : -1,
      i & 2 ? 1 : -1,
      i & 4 ? 1 : -1,
      i & 8 ? 1 : -1,
    ]);
  }
  return v;
}

function buildEdges(): Edge[] {
  const edges: Edge[] = [];
  for (let i = 0; i < 16; i++) {
    for (let j = i + 1; j < 16; j++) {
      const xor = i ^ j;
      // potência de 2 → diferem em exatamente uma coordenada
      if ((xor & (xor - 1)) === 0) {
        edges.push([i, j, xor === 8]);
      }
    }
  }
  return edges;
}

interface TesseractProps {
  className?: string;
  /** Cor das arestas dos cubos 3D (24 arestas) */
  cubeColor?: string;
  /** Cor das arestas que conectam a 4ª dimensão (8 arestas) */
  hyperColor?: string;
  /** Velocidade global (1 = padrão) */
  speed?: number;
}

export function Tesseract({
  className = "",
  cubeColor = "#A719FA",
  hyperColor = "#6DFBCB",
  speed = 1,
}: TesseractProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const vertices = useMemo(buildVertices, []);
  const edges = useMemo(buildEdges, []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const lineEls = Array.from(svg.querySelectorAll<SVGLineElement>("line.tess-edge"));
    const dotEls = Array.from(svg.querySelectorAll<SVGCircleElement>("circle.tess-vertex"));

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let t = 0;
    let last = performance.now();

    const project = (v: V4): [number, number, number] => {
      const a = t * 0.00035 * speed; // rotação 4D no plano XW
      const b = t * 0.00022 * speed; // rotação 3D no plano YZ
      const c = t * 0.00012 * speed; // rotação 3D no plano XY (apenas para vida)

      let [x, y, z, w] = v;

      // XW
      const cosA = Math.cos(a);
      const sinA = Math.sin(a);
      const x1 = x * cosA - w * sinA;
      const w1 = x * sinA + w * cosA;
      x = x1;
      w = w1;

      // YZ
      const cosB = Math.cos(b);
      const sinB = Math.sin(b);
      const y1 = y * cosB - z * sinB;
      const z1 = y * sinB + z * cosB;
      y = y1;
      z = z1;

      // XY (sutil)
      const cosC = Math.cos(c);
      const sinC = Math.sin(c);
      const x2 = x * cosC - y * sinC;
      const y2 = x * sinC + y * cosC;
      x = x2;
      y = y2;

      // Projeção 4D → 3D em perspectiva (usando W)
      const wScale = 2 / (3 - w);
      x *= wScale;
      y *= wScale;
      z *= wScale;

      // Projeção 3D → 2D em perspectiva (usando Z)
      const zScale = 4 / (5 - z);
      const px = x * zScale * 60;
      const py = y * zScale * 60;

      // Retorna também a "profundidade" para opacidade dinâmica
      return [px, py, wScale];
    };

    const render = (now: number) => {
      const dt = now - last;
      last = now;
      t += dt;

      const projected = vertices.map(project);

      for (let i = 0; i < edges.length; i++) {
        const [a, b] = edges[i];
        const p1 = projected[a];
        const p2 = projected[b];
        const el = lineEls[i];
        el.setAttribute("x1", p1[0].toFixed(2));
        el.setAttribute("y1", p1[1].toFixed(2));
        el.setAttribute("x2", p2[0].toFixed(2));
        el.setAttribute("y2", p2[1].toFixed(2));
        // Profundidade média → opacidade
        const depth = (p1[2] + p2[2]) / 2;
        el.style.opacity = String(Math.min(1, Math.max(0.15, (depth - 0.5) * 1.4)));
      }

      for (let i = 0; i < dotEls.length; i++) {
        const p = projected[i];
        dotEls[i].setAttribute("cx", p[0].toFixed(2));
        dotEls[i].setAttribute("cy", p[1].toFixed(2));
        dotEls[i].style.opacity = String(Math.min(1, Math.max(0.2, (p[2] - 0.5) * 1.6)));
      }

      if (!prefersReduced) raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);
    return () => cancelAnimationFrame(raf);
  }, [vertices, edges, speed]);

  return (
    <svg
      ref={svgRef}
      viewBox="-100 -100 200 200"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="tess-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={hyperColor} stopOpacity="0.18" />
          <stop offset="60%" stopColor={cubeColor} stopOpacity="0.04" />
          <stop offset="100%" stopColor={cubeColor} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Glow de fundo */}
      <circle cx="0" cy="0" r="95" fill="url(#tess-glow)" />

      {/* 32 arestas */}
      {edges.map(([a, b, isHyper], i) => (
        <line
          key={`e-${i}`}
          className="tess-edge"
          stroke={isHyper ? hyperColor : cubeColor}
          strokeWidth={isHyper ? 0.8 : 0.5}
          strokeLinecap="round"
          x1={0}
          y1={0}
          x2={0}
          y2={0}
        />
      ))}

      {/* 16 vértices */}
      {vertices.map((_, i) => (
        <circle
          key={`v-${i}`}
          className="tess-vertex"
          cx={0}
          cy={0}
          r={1.2}
          fill={hyperColor}
        />
      ))}
    </svg>
  );
}
