"use client";

import Link from "next/link";
import Image from "next/image";

const CATALOGUE = [
  {
    id: "pharaoh",
    title: "Slot social: Egito Antigo",
    summary:
      "Um slot social clássico e muito procurado. Sem dinheiro real — apenas moeda virtual.",
    cover: "/images/Pharaoh-Fortune-Social__Lightroom_Mobile_Android.jpg",
  },
  {
    id: "cleopatra",
    title: "Slot social: Rainhas do Egito",
    summary:
      "Um slot social popular, com símbolos clássicos. Não existem ganhos em dinheiro real.",
    cover: "/images/Cleopatra-Gold-Social_Lightroom_Mobile_Android.jpg",
  },
  {
    id: "aztec",
    title: "Slot social: Civilizações Astecas",
    summary:
      "Uma experiência social inspirada em lendas. Apenas entretenimento, sem valor real.",
    cover: "/images/Aztec-Fortune-Social_Lightroom_Mobile_Android.jpg",
  },
  {
    id: "bonanza",
    title: "Slot social: Aventura Selvagem",
    summary:
      "Slot social cheio de energia para diversão. Sem depósitos e sem levantamentos; a moeda é sempre virtual.",
    cover: "/images/Wild-Bonanza-Social__Lightroom_Mobile_Android.jpg",
  },
];

function GameCard({ game }: { game: (typeof CATALOGUE)[number] }) {
  return (
    <article
      style={{
        background: "rgba(28,17,23,.65)",
        border: "1px solid var(--hairline)",
        borderRadius: "var(--round-lg)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition:
          "transform var(--motion), box-shadow var(--motion), border-color var(--motion)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow =
          "0 20px 48px rgba(226,55,68,.14), 0 8px 24px rgba(0,0,0,.28)";
        el.style.borderColor = "rgba(226,55,68,.28)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "";
        el.style.boxShadow = "";
        el.style.borderColor = "";
      }}
    >
      <div style={{ padding: "14px 16px 0" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 12px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,.12)",
            background: "rgba(255,255,255,.04)",
            fontWeight: 800,
            fontSize: 12,
          }}
        >
          Social · Gratuito
        </span>
      </div>

      <div
        style={{
          margin: "14px 16px 0",
          borderRadius: "var(--round-md)",
          border: "1px solid rgba(255,255,255,.1)",
          overflow: "hidden",
          aspectRatio: "19/11",
          position: "relative",
        }}
      >
        <Image
          src={game.cover}
          alt={game.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 700px) 100vw, 50vw"
        />
      </div>

      <div
        style={{
          padding: "14px 16px 16px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          flex: 1,
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: 17,
            fontWeight: 900,
            letterSpacing: "-.01em",
          }}
        >
          {game.title}
        </h3>
        <p
          style={{
            margin: 0,
            color: "var(--ink-dim)",
            fontSize: 14,
            flex: 1,
            lineHeight: 1.5,
          }}
        >
          {game.summary}
        </p>
        <div style={{ paddingTop: 4 }}>
          <Link
            href={`/jogo?game=${game.id}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 14px",
              borderRadius: "var(--round-md)",
              width: "100%",
              fontWeight: 900,
              fontSize: 15,
              background: "linear-gradient(135deg, var(--brand), var(--brand-gold))",
              border: "1px solid rgba(244,196,48,.25)",
              color: "#1a0d10",
              boxShadow: "0 10px 24px rgba(226,55,68,.16)",
            }}
          >
            Jogar
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function GamesSection() {
  return (
    <section id="jogos" style={{ padding: "80px 0" }}>
      <div className="shell">
        <div style={{ marginBottom: 32 }}>
          <h2
            style={{
              margin: "0 0 8px",
              fontSize: "clamp(22px,3vw,32px)",
              fontWeight: 900,
              letterSpacing: "-.02em",
            }}
          >
            Escolhe um jogo social
          </h2>
          <p style={{ margin: 0, color: "var(--ink-dim)", fontSize: 14 }}>
            Slots sociais gratuitos — sem dinheiro real, apenas moeda virtual
          </p>
        </div>

        <div
          className="catalogue-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }}
        >
          {CATALOGUE.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .catalogue-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
