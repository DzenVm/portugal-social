import type { Metadata } from "next";
import { Suspense } from "react";
import SlotMachineClient from "./GamePageClient";

export const metadata: Metadata = {
  title: "Jogar Slots Sociais Grátis",
  description:
    "Joga slots sociais gratuitos diretamente no navegador — sem dinheiro real, sem depósitos, apenas moeda virtual. Exclusivo para maiores de 18 anos em Portugal.",
  alternates: {
    canonical: "https://ptbalime.online/jogo",
  },
  openGraph: {
    title: "Jogar Slots Sociais Grátis | ptbalime.online",
    description:
      "Joga slots sociais gratuitos diretamente no navegador — sem dinheiro real, sem depósitos, apenas moeda virtual.",
    url: "https://ptbalime.online/jogo",
  },
};

export default function JogoPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100svh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--ink-dim)",
          }}
        >
          A carregar...
        </div>
      }
    >
      <SlotMachineClient />
    </Suspense>
  );
}
