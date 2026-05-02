import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PrecosContent } from "./PrecosContent";

export const metadata = {
  title: "Preços | MRP Tech",
  description:
    "Planos e preços dos serviços e produtos da MRP Tech. Investimento em visão e escala para o seu negócio.",
};

export default function PrecosPage() {
  return (
    <>
      <Navbar />
      <PrecosContent />
      <Footer />
    </>
  );
}
