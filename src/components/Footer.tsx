import Link from "next/link";

const FOOTER_LINKS = [
  { to: "/", text: "Início" },
  { to: "/#jogos", text: "Jogos" },
  { to: "/#como-funciona", text: "Como funciona" },
  { to: "/#responsavel", text: "Jogo Responsável" },
];

export default function SiteFooter() {
  return (
    <footer
      style={{ borderTop: "1px solid var(--hairline)", padding: "28px 0 40px" }}
    >
      <div className="shell">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 20,
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <div>
            <nav
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                marginBottom: 16,
              }}
            >
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.to}
                  href={link.to}
                  style={{
                    padding: "9px 12px",
                    borderRadius: 10,
                    border: "1px solid var(--hairline)",
                    background: "rgba(255,255,255,.03)",
                    color: "var(--ink-dim)",
                    fontWeight: 700,
                    fontSize: 13,
                  }}
                >
                  {link.text}
                </Link>
              ))}
            </nav>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(226,55,68,.1)",
                border: "1px solid rgba(226,55,68,.2)",
                borderRadius: 8,
                padding: "6px 12px",
                fontSize: 12,
                fontWeight: 700,
                color: "var(--brand)",
              }}
            >
              APENAS 18+ | SEM DINHEIRO REAL | APENAS PARA ENTRETENIMENTO
            </div>
          </div>

          <div
            style={{
              color: "var(--ink-dim)",
              fontSize: 12,
              maxWidth: 420,
              lineHeight: 1.6,
            }}
          >
            Não disponibilizamos qualquer forma de ganhar ou levantar dinheiro
            real. A moeda virtual não tem valor real.
            <br />
            <br />
            <strong>Informação legal:</strong>
            <br />
            NIF: 6812099049
            <br />
            Empresa: ER SP Z O O
            <br />
            Morada: 8 Ul. Marii Konopnickiej, Limanowa, 34-600
            <br />
            País: Polónia
          </div>
        </div>
      </div>
    </footer>
  );
}
