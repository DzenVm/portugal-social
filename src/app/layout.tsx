import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jogos Sociais Gratuitos (18+) | Sem Dinheiro Real",
  description:
    "Slots sociais para entretenimento. Sem dinheiro real, sem depósitos e sem levantamentos. Plataforma reservada a maiores de 18 anos em Portugal.",
  robots: "index, follow",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <body>{children}</body>
    </html>
  );
}
