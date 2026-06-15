import type { ReactNode } from "react";
import SiteHeader from "@/components/Navbar";
import SiteFooter from "@/components/Footer";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main style={{ padding: "104px 0 64px" }}>
        <div className="shell" style={{ maxWidth: 820 }}>
          <h1
            style={{
              margin: "0 0 6px",
              fontSize: "clamp(26px,4vw,38px)",
              fontWeight: 900,
              letterSpacing: "-.02em",
            }}
          >
            {title}
          </h1>
          <p style={{ margin: "0 0 28px", color: "var(--ink-dim)", fontSize: 13 }}>
            Última atualização: {updated}
          </p>
          <div className="legal-prose">{children}</div>
        </div>
      </main>
      <SiteFooter />

      <style>{`
        .legal-prose h2 {
          margin: 28px 0 8px;
          font-size: 19px;
          font-weight: 800;
          letter-spacing: -.01em;
          color: var(--ink);
        }
        .legal-prose p,
        .legal-prose li {
          margin: 8px 0;
          color: var(--ink-dim);
          font-size: 15px;
          line-height: 1.7;
        }
        .legal-prose ul {
          margin: 8px 0;
          padding-left: 20px;
        }
        .legal-prose strong {
          color: var(--ink);
        }
        .legal-prose a {
          color: var(--brand-gold);
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
