"use client";

const SUPPORT_ORGS = [
  { name: "SICAD", url: "https://www.sicad.pt/" },
  { name: "Jogo Responsável", url: "https://www.jogoresponsavel.pt/" },
  { name: "SRIJ", url: "https://www.srij.turismodeportugal.pt/" },
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
              margin: "0 0 16px",
              fontSize: 22,
              fontWeight: 900,
              letterSpacing: "-.02em",
            }}
          >
            Recursos para o Jogo Responsável
          </h2>

          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              gap: 12,
              marginBottom: 16,
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
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 16px",
                  minHeight: 50,
                  flex: "1 1 120px",
                  minWidth: 120,
                  borderRadius: "var(--round-md)",
                  border: "1px solid var(--hairline)",
                  background: "rgba(255,255,255,.04)",
                  fontWeight: 800,
                  fontSize: "clamp(13px,1.5vw,16px)",
                  color: "var(--ink)",
                  whiteSpace: "nowrap",
                  transition:
                    "transform var(--motion), border-color var(--motion)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-2px)";
                  el.style.borderColor = "rgba(226,55,68,.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "";
                  el.style.borderColor = "";
                }}
              >
                {org.name}
              </a>
            ))}
          </div>

          <p
            style={{
              margin: "0 0 14px",
              color: "var(--ink-dim)",
              lineHeight: 1.65,
              fontSize: 14,
            }}
          >
            Estas organizações disponibilizam apoio e recursos para o jogo
            responsável. Esta plataforma não oferece jogos a dinheiro real e não
            necessita de licença da entidade reguladora nacional.
          </p>

          <div
            style={{
              padding: "16px 18px",
              borderRadius: "var(--round-md)",
              border: "1px solid var(--hairline)",
              background: "rgba(255,255,255,.02)",
              marginBottom: 18,
            }}
          >
            <p
              style={{
                margin: 0,
                color: "var(--ink-dim)",
                lineHeight: 1.7,
                fontSize: 13,
              }}
            >
              <strong>Aviso Legal nos Termos da Legislação Portuguesa:</strong>{" "}
              Esta plataforma disponibiliza jogos sociais apenas para fins de
              entretenimento, no quadro do Decreto-Lei n.º 66/2015 (RJO) relativo
              aos jogos e apostas online. Trata-se de uma plataforma de jogos
              sociais — não estão disponíveis jogos a dinheiro real. Todos os
              jogos utilizam exclusivamente moeda virtual sem valor real. Não é
              possível depositar, ganhar ou levantar dinheiro real. A moeda
              virtual não tem valor real e não pode ser trocada por dinheiro
              real. A plataforma destina-se a utilizadores maiores de 18 anos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
