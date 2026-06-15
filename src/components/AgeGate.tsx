"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";

const STORAGE_KEY = "ptbalime-age-ok";
const CHANGE_EVENT = "ptbalime-age-change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

const getSnapshot = () => window.localStorage.getItem(STORAGE_KEY) === "1";
const getServerSnapshot = () => false;

export default function AgeGate() {
  const confirmed = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const confirm = () => {
    window.localStorage.setItem(STORAGE_KEY, "1");
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  const deny = () => {
    window.location.href = "/";
  };

  if (confirmed) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        background: "rgba(8,5,7,.86)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          maxWidth: 440,
          width: "100%",
          background: "var(--panel)",
          border: "1px solid var(--hairline)",
          borderRadius: "var(--round-lg)",
          padding: "28px 24px",
          textAlign: "center",
          boxShadow: "0 24px 64px rgba(0,0,0,.5)",
        }}
      >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 64,
              height: 64,
              padding: "0 14px",
              borderRadius: "var(--round-md)",
              border: "1px solid rgba(226,55,68,.35)",
              background: "linear-gradient(135deg, #b3202c, #e23744)",
              fontWeight: 900,
              fontSize: 26,
              color: "#fff",
              marginBottom: 16,
            }}
          >
            18+
          </div>

          <h2
            id="age-gate-title"
            style={{
              margin: "0 0 10px",
              fontSize: 22,
              fontWeight: 900,
              letterSpacing: "-.02em",
            }}
          >
            Confirmação de idade
          </h2>

          <p
            style={{
              margin: "0 0 8px",
              color: "var(--ink-dim)",
              fontSize: 14.5,
              lineHeight: 1.65,
            }}
          >
            Esta plataforma é um jogo social destinado exclusivamente ao
            entretenimento de maiores de 18 anos. Utiliza apenas moeda virtual,
            sem dinheiro real, sem depósitos e sem prémios de valor real.
          </p>
          <p
            style={{
              margin: "0 0 20px",
              color: "var(--ink-dim)",
              fontSize: 14.5,
              lineHeight: 1.65,
            }}
          >
            Para continuar, confirma que tens 18 anos ou mais.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <button
              type="button"
              onClick={confirm}
              className="cta"
              style={{ width: "100%" }}
            >
              Tenho 18 anos ou mais — Entrar
            </button>
            <button
              type="button"
              onClick={deny}
              style={{
                width: "100%",
                padding: "13px 18px",
                borderRadius: "var(--round-lg)",
                border: "1px solid var(--hairline)",
                background: "rgba(255,255,255,.03)",
                color: "var(--ink-dim)",
                fontWeight: 800,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              Tenho menos de 18 — Sair
            </button>
          </div>

          <p
            style={{
              margin: "16px 0 0",
              color: "var(--ink-dim)",
              fontSize: 12,
              lineHeight: 1.6,
            }}
          >
            Ao entrar, aceitas os{" "}
            <Link
              href="/termos"
              style={{ color: "var(--brand-gold)", textDecoration: "underline" }}
            >
              Termos de Utilização
            </Link>{" "}
            e a{" "}
            <Link
              href="/privacidade"
              style={{ color: "var(--brand-gold)", textDecoration: "underline" }}
            >
              Política de Privacidade
            </Link>
            .
          </p>
      </div>
    </div>
  );
}
