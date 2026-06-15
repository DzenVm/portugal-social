import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://ptbalime.online";

export const viewport: Viewport = {
  themeColor: "#1c1117",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Slots Sociais Gratuitos 18+ | Sem Dinheiro Real | Portugal",
    template: "%s | ptbalime.online",
  },
  description:
    "Joga slots sociais gratuitos em Portugal — sem dinheiro real, sem depósitos e sem levantamentos. Plataforma de entretenimento exclusiva para maiores de 18 anos.",
  keywords: [
    "slots sociais",
    "jogos sociais gratuitos",
    "slots grátis Portugal",
    "casino social",
    "jogos sem dinheiro real",
    "entretenimento 18+",
    "moeda virtual",
    "slots online Portugal",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: SITE_URL,
    siteName: "ptbalime.online",
    title: "Slots Sociais Gratuitos 18+ | Sem Dinheiro Real | Portugal",
    description:
      "Joga slots sociais gratuitos em Portugal — sem dinheiro real, sem depósitos e sem levantamentos. Apenas entretenimento para maiores de 18 anos.",
    images: [
      {
        url: "/images/heroimage_Lightroom_Mobile_Android.webp",
        width: 1200,
        height: 630,
        alt: "Slots sociais online com moeda virtual — ptbalime.online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slots Sociais Gratuitos 18+ | Sem Dinheiro Real",
    description:
      "Joga slots sociais gratuitos em Portugal — sem dinheiro real, sem depósitos e sem levantamentos.",
    images: ["/images/heroimage_Lightroom_Mobile_Android.webp"],
  },
  icons: { icon: "/favicon.svg" },
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ptbalime.online",
  url: SITE_URL,
  description:
    "Slots sociais gratuitos para maiores de 18 anos em Portugal. Sem dinheiro real, sem depósitos.",
  inLanguage: "pt-PT",
};

const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DWELLING s.r.o.",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lidická tř. 1274/246",
    addressLocality: "České Budějovice 7",
    postalCode: "37007",
    addressCountry: "CZ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
