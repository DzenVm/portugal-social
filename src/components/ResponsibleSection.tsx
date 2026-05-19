const GUIDANCE = [
  {
    title: "Aviso legal",
    text: "Acesso reservado a maiores de 18 anos. Este site é informativo e não opera jogos. Jogue com responsabilidade. Em caso de dúvidas sobre dependência, procure apoio profissional.",
  },
  {
    title: "Jogo responsável",
    text: "Defina limites de tempo e dinheiro. Nunca jogue para recuperar perdas. Se o jogo deixar de ser divertimento, contacte os serviços de apoio indicados abaixo.",
  },
  {
    title: "Sinais de alerta",
    text: "Mentir sobre apostas, pedir emprestado para jogar ou negligenciar trabalho e família são sinais de risco. A ajuda é confidencial e gratuita.",
  },
];

const SUPPORT_ORGS = [
  { name: "SRIJ", url: "https://www.srij.turismodeportugal.pt/" },
  { name: "ICAD", url: "https://www.icad.pt/" },
];

export default function ResponsibleSection() {
  return (
    <section id="responsavel" style={{ padding: "0 0 80px" }}>
      <div className="shell">
        <div
          style={{
            background: "rgba(28,17,23,.65)",
            border: "1px solid var(--hairline)",
            borderRadius: "var(--round-lg)",
            padding: 28,
          }}
        >
          <h2
            style={{
              margin: "0 0 18px",
              fontSize: 22,
              fontWeight: 900,
              letterSpacing: "-.02em",
            }}
          >
            Recursos para o Jogo Responsável
          </h2>

          <div className="responsible-grid">
            {GUIDANCE.map((block) => (
              <article key={block.title} className="responsible-card">
                <h3
                  style={{
                    margin: "0 0 8px",
                    fontSize: 16,
                    fontWeight: 800,
                  }}
                >
                  {block.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "var(--ink-dim)",
                    fontSize: 13.5,
                    lineHeight: 1.65,
                  }}
                >
                  {block.text}
                </p>
              </article>
            ))}
          </div>

          <p
            style={{
              margin: "16px 0",
              padding: "14px 18px",
              borderRadius: "var(--round-md)",
              border: "1px solid rgba(226,55,68,.3)",
              background: "rgba(226,55,68,.1)",
              color: "var(--ink)",
              fontWeight: 800,
              fontSize: 14,
              textAlign: "center",
            }}
          >
            O jogo pode criar dependência. Jogue com moderação.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 18px",
                minHeight: 50,
                borderRadius: "var(--round-md)",
                border: "1px solid rgba(226,55,68,.35)",
                background: "linear-gradient(135deg, #b3202c, #e23744)",
                fontWeight: 900,
                fontSize: 22,
                color: "#fff",
                boxShadow: "0 12px 32px rgba(226,55,68,.22)",
                flexShrink: 0,
              }}
            >
              18+
            </div>
            {SUPPORT_ORGS.map((org) => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="responsible-org"
              >
                {org.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .responsible-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .responsible-card {
          background: rgba(255,255,255,.03);
          border: 1px solid var(--hairline);
          border-radius: var(--round-md);
          padding: 16px 18px;
        }
        .responsible-org {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 18px;
          min-height: 50px;
          flex: 1 1 140px;
          min-width: 140px;
          border-radius: var(--round-md);
          border: 1px solid var(--hairline);
          background: rgba(255,255,255,.04);
          font-weight: 800;
          font-size: clamp(13px, 1.5vw, 16px);
          color: var(--ink);
          white-space: nowrap;
          transition: transform var(--motion), border-color var(--motion);
        }
        .responsible-org:hover {
          transform: translateY(-2px);
          border-color: rgba(226,55,68,.4);
        }
        @media (max-width: 760px) {
          .responsible-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
