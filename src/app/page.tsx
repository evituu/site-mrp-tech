import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Valores } from "@/components/sections/Valores";
import { Solucoes } from "@/components/sections/Solucoes";
import { Parceiros } from "@/components/sections/Parceiros";
import { Contato } from "@/components/sections/Contato";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Valores />
        <Solucoes />
        <Parceiros />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
