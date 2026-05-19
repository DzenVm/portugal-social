"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { to: "/#jogos", text: "Jogos" },
  { to: "/#como-funciona", text: "Como funciona" },
  { to: "/#responsavel", text: "Jogo Responsável" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      style={{
        position: "fixed",
        inset: "0 0 auto 0",
        zIndex: 50,
        transition: "background .3s, border-color .3s",
        background: elevated ? "rgba(19,12,16,.96)" : "transparent",
        backdropFilter: elevated ? "blur(12px)" : "none",
        borderBottom: elevated
          ? "1px solid rgba(245,236,238,.1)"
          : "1px solid transparent",
      }}
    >
      <div
        className="shell"
        style={{
          display: "flex",
          alignItems: "center",
          height: 64,
          justifyContent: "space-between",
        }}
      >
        <nav
          className="primary-nav"
          style={{ display: "flex", gap: 28, alignItems: "center" }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              style={{
                color: "var(--ink-dim)",
                fontWeight: 600,
                fontSize: 14,
                transition: "color .15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--ink-dim)")
              }
            >
              {item.text}
            </Link>
          ))}
        </nav>

        <Link
          href="/jogo"
          className="cta"
          style={{ minWidth: "auto", padding: "10px 22px", fontSize: 14 }}
        >
          Jogar Agora
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          className="menu-toggle"
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "var(--ink)",
            fontSize: 24,
            cursor: "pointer",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            background: "rgba(19,12,16,.98)",
            borderTop: "1px solid var(--hairline)",
            padding: "16px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              onClick={closeMenu}
              style={{
                color: "var(--ink-dim)",
                fontWeight: 600,
                padding: "8px 0",
                borderBottom: "1px solid var(--hairline)",
              }}
            >
              {item.text}
            </Link>
          ))}
          <Link
            href="/jogo"
            className="cta"
            style={{ textAlign: "center", marginTop: 8 }}
            onClick={closeMenu}
          >
            Jogar Agora
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .primary-nav { display: none !important; }
          .menu-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
