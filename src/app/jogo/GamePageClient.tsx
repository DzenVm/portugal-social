"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import SiteFooter from "@/components/Footer";
import SlotSymbol, {
  SYMBOLS,
  SYMBOL_LABEL,
  type SymbolName,
} from "./SlotSymbol";
import styles from "./game.module.css";

type Cell = SymbolName | "?";

const GAMES = {
  pharaoh: {
    name: "Slot social: Egito Antigo",
    tab: "Egito Antigo",
    desc: "Um slot social clássico inspirado no Antigo Egito. Jogas exclusivamente com moeda virtual, sem valor real e sem dinheiro real.",
  },
  cleopatra: {
    name: "Slot social: Rainhas do Egito",
    tab: "Rainhas do Egito",
    desc: "Slot social com símbolos reais. Todas as recompensas são virtuais — não existem depósitos, levantamentos ou ganhos financeiros.",
  },
  aztec: {
    name: "Slot social: Civilizações Astecas",
    tab: "Civilizações Astecas",
    desc: "Experiência social inspirada nas lendas astecas. Apenas entretenimento, sem ganhos com valor real.",
  },
  bonanza: {
    name: "Slot social: Aventura Selvagem",
    tab: "Aventura Selvagem",
    desc: "Slot social cheio de energia para diversão. Sem depósitos e sem levantamentos; a moeda permanece sempre virtual.",
  },
} as const;

type GameKey = keyof typeof GAMES;

const STARTING_BALANCE = 1000;
const BET_OPTIONS = [10, 20, 50, 100];

const pickSymbol = (): SymbolName =>
  SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

const blankGrid = (): Cell[][] => [
  ["?", "?", "?"],
  ["?", "?", "?"],
  ["?", "?", "?"],
];

interface SpinEntry {
  combo: string;
  win: number;
}

interface Notice {
  text: string;
  type: "info" | "win" | "error";
}

export default function SlotMachineClient() {
  const requestedGame = useSearchParams().get("game");
  const [activeGame, setActiveGame] = useState<GameKey>(
    requestedGame && requestedGame in GAMES
      ? (requestedGame as GameKey)
      : "pharaoh"
  );
  const game = GAMES[activeGame];

  const [balance, setBalance] = useState(STARTING_BALANCE);
  const [bet, setBet] = useState(20);
  const [grid, setGrid] = useState<Cell[][]>(blankGrid);
  const [colSpinning, setColSpinning] = useState([false, false, false]);
  const [spinning, setSpinning] = useState(false);
  const [lastWin, setLastWin] = useState(0);
  const [spinCount, setSpinCount] = useState(0);
  const [history, setHistory] = useState<SpinEntry[]>([]);
  const [winCells, setWinCells] = useState([false, false, false]);
  const [showBanner, setShowBanner] = useState(false);
  const [notice, setNotice] = useState<Notice>({
    text: "Escolhe a aposta virtual e carrega em Rodar para começar a demonstração.",
    type: "info",
  });

  const timersRef = useRef<number[]>([]);
  const clearTimers = useCallback(() => {
    timersRef.current.forEach((id) => {
      window.clearInterval(id);
      window.clearTimeout(id);
    });
    timersRef.current = [];
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  const finishSpin = useCallback(
    (final: SymbolName[]) => {
      const [a, b, c] = final;
      let cells: [boolean, boolean, boolean] = [false, false, false];
      let win = 0;
      if (a === b && b === c) {
        cells = [true, true, true];
        win = a === "seven" ? bet * 8 : bet * 6;
      } else if (a === b) {
        cells = [true, true, false];
        win = bet * 2;
      } else if (b === c) {
        cells = [false, true, true];
        win = bet * 2;
      } else if (a === c) {
        cells = [true, false, true];
        win = bet * 2;
      }

      setBalance((value) => value + win);
      setLastWin(win);
      setSpinCount((count) => count + 1);
      setWinCells(cells);
      setSpinning(false);
      if (win > 0) {
        setShowBanner(true);
        setNotice({
          text: `Recompensa virtual: +${win} moedas. Parabéns!`,
          type: "win",
        });
      } else {
        setNotice({
          text: "Sem combinação vencedora na linha central. Tenta novamente!",
          type: "info",
        });
      }
      setHistory((entries) =>
        [
          { combo: final.map((s) => SYMBOL_LABEL[s]).join(" · "), win },
          ...entries,
        ].slice(0, 6)
      );
    },
    [bet]
  );

  const spin = useCallback(() => {
    if (spinning) return;
    if (balance < bet) {
      setNotice({
        text: "Saldo virtual insuficiente. Carrega em Reiniciar para continuar a demonstração.",
        type: "error",
      });
      return;
    }

    clearTimers();
    setBalance((value) => value - bet);
    setLastWin(0);
    setWinCells([false, false, false]);
    setShowBanner(false);
    setSpinning(true);
    setColSpinning([true, true, true]);
    setNotice({
      text: "Os rolos estão a rodar... resultado virtual em curso.",
      type: "info",
    });

    const final: SymbolName[] = [pickSymbol(), pickSymbol(), pickSymbol()];

    for (let col = 0; col < 3; col++) {
      const ticker = window.setInterval(() => {
        setGrid((current) => {
          const next = current.map((c) => [...c]);
          next[col] = [pickSymbol(), pickSymbol(), pickSymbol()];
          return next;
        });
      }, 75);
      timersRef.current.push(ticker);

      const stop = window.setTimeout(() => {
        window.clearInterval(ticker);
        setGrid((current) => {
          const next = current.map((c) => [...c]);
          next[col] = [pickSymbol(), final[col], pickSymbol()];
          return next;
        });
        setColSpinning((cs) => {
          const next = [...cs];
          next[col] = false;
          return next;
        });
        if (col === 2) {
          const settle = window.setTimeout(() => finishSpin(final), 200);
          timersRef.current.push(settle);
        }
      }, 650 + col * 360);
      timersRef.current.push(stop);
    }
  }, [spinning, balance, bet, clearTimers, finishSpin]);

  const reset = () => {
    if (spinning) return;
    clearTimers();
    setBalance(STARTING_BALANCE);
    setBet(20);
    setGrid(blankGrid());
    setColSpinning([false, false, false]);
    setLastWin(0);
    setSpinCount(0);
    setWinCells([false, false, false]);
    setShowBanner(false);
    setHistory([]);
    setNotice({
      text: "Demonstração reiniciada. Saldo virtual: 1000. Apenas para entretenimento.",
      type: "info",
    });
  };

  const switchGame = (key: GameKey) => {
    if (key === activeGame || spinning) return;
    clearTimers();
    setActiveGame(key);
    setGrid(blankGrid());
    setColSpinning([false, false, false]);
    setLastWin(0);
    setWinCells([false, false, false]);
    setShowBanner(false);
    setHistory([]);
    setNotice({
      text: "Novo jogo selecionado. Carrega em Rodar para começar.",
      type: "info",
    });
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `/jogo?game=${key}`);
    }
  };

  const machineWin = winCells.some(Boolean);
  const noticeClass =
    notice.type === "win"
      ? styles.messageWin
      : notice.type === "error"
        ? styles.messageError
        : "";

  return (
    <div className={styles.wrap}>
      {/* Topbar */}
      <div className={styles.topbar}>
        <div className={styles.pills}>
          <span className={`${styles.pill} ${styles.pillDanger}`}>
            18+ APENAS PARA ADULTOS
          </span>
          <span className={styles.pill}>SEM DINHEIRO REAL</span>
          <span className={styles.pill}>APENAS MOEDA VIRTUAL</span>
        </div>
        <Link href="/" className={styles.back}>
          &larr; Voltar à página inicial
        </Link>
      </div>

      <main>
        <div className="shell">
          {/* Header */}
          <header className={styles.head}>
            <h1 className={styles.title}>{game.name}</h1>
            <p className={styles.theme}>{game.desc}</p>
            <div className={styles.switcher}>
              {(Object.keys(GAMES) as GameKey[]).map((key) => (
                <button
                  key={key}
                  className={`${styles.tab} ${
                    key === activeGame ? styles.tabActive : ""
                  }`}
                  onClick={() => switchGame(key)}
                  disabled={spinning}
                >
                  {GAMES[key].tab}
                </button>
              ))}
            </div>
          </header>

          {/* Layout */}
          <div className={styles.layout}>
            {/* Slot machine */}
            <section>
              <div
                className={`${styles.machine} ${
                  machineWin ? styles.machineWin : ""
                }`}
              >
                {showBanner && lastWin > 0 && (
                  <div className={styles.winBanner}>
                    GANHO +{lastWin} MOEDAS VIRTUAIS
                  </div>
                )}
                <div className={styles.machineInner}>
                  {/* Stats */}
                  <div className={styles.statRow}>
                    <div className={styles.stat}>
                      <div className={styles.statLabel}>Saldo virtual</div>
                      <div
                        className={`${styles.statValue} ${
                          balance <= 0
                            ? styles.statDanger
                            : balance <= 100
                              ? styles.statWarn
                              : ""
                        }`}
                      >
                        {balance.toLocaleString("pt-PT")}
                      </div>
                    </div>
                    <div className={styles.stat}>
                      <div className={styles.statLabel}>
                        Ganho na última rodada
                      </div>
                      <div
                        className={`${styles.statValue} ${
                          lastWin > 0 ? styles.statWin : ""
                        }`}
                      >
                        {lastWin}
                      </div>
                    </div>
                    <div className={styles.stat}>
                      <div className={styles.statLabel}>Total de rodadas</div>
                      <div className={styles.statValue}>{spinCount}</div>
                    </div>
                  </div>

                  {/* Screen */}
                  <div className={styles.screen}>
                    <span
                      className={`${styles.payMark} ${styles.payMarkLeft}`}
                    />
                    <span
                      className={`${styles.payMark} ${styles.payMarkRight}`}
                    />
                    <div className={styles.grid}>
                      {[0, 1, 2].map((col) => (
                        <div
                          key={col}
                          className={`${styles.col} ${
                            colSpinning[col] ? styles.colSpinning : ""
                          }`}
                        >
                          {[0, 1, 2].map((row) => (
                            <div
                              key={row}
                              className={`${styles.cell} ${
                                row === 1 ? styles.cellMid : ""
                              } ${
                                row === 1 && winCells[col]
                                  ? styles.cellWin
                                  : ""
                              }`}
                            >
                              <SlotSymbol name={grid[col][row]} />
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Notice */}
                  <div className={`${styles.message} ${noticeClass}`}>
                    {notice.text}
                  </div>

                  {/* Controls */}
                  <div className={styles.controls}>
                    <div className={styles.betGroup}>
                      {BET_OPTIONS.map((option) => (
                        <button
                          key={option}
                          className={`${styles.betBtn} ${
                            option === bet ? styles.betBtnActive : ""
                          }`}
                          onClick={() => setBet(option)}
                          disabled={spinning}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    <div className={styles.actions}>
                      <button
                        className={styles.spinBtn}
                        onClick={spin}
                        disabled={spinning || balance < bet}
                      >
                        <span>{spinning ? "A RODAR..." : "RODAR"}</span>
                        <span className={styles.spinBet}>
                          Aposta virtual: {bet}
                        </span>
                      </button>
                      <button
                        className={styles.resetBtn}
                        onClick={reset}
                        disabled={spinning}
                      >
                        Reiniciar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Sidebar */}
            <aside className={styles.side}>
              {/* Paytable */}
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Tabela de recompensas virtuais
                </h3>
                <div className={styles.payRow}>
                  <span className={styles.paySym}>
                    <SlotSymbol name="seven" /> Três símbolos Sete
                  </span>
                  <span className={styles.payVal}>Aposta × 8</span>
                </div>
                <div className={styles.payRow}>
                  <span className={styles.paySym}>
                    <SlotSymbol name="star" /> Três símbolos iguais
                  </span>
                  <span className={styles.payVal}>Aposta × 6</span>
                </div>
                <div className={styles.payRow}>
                  <span className={styles.paySym}>
                    <SlotSymbol name="diamond" /> Dois símbolos iguais
                  </span>
                  <span className={styles.payVal}>Aposta × 2</span>
                </div>
                <div className={styles.payRow}>
                  <span className={styles.paySym}>
                    Sem correspondência na linha
                  </span>
                  <span className={styles.payVal}>0</span>
                </div>
                <p className={styles.cardNote} style={{ marginTop: 10 }}>
                  Os ganhos são avaliados apenas na linha central. Todos os
                  valores estão em moeda virtual sem valor real.
                </p>
              </div>

              {/* History */}
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Histórico de rodadas (últimas 6)
                </h3>
                {history.length === 0 ? (
                  <p className={styles.historyEmpty}>
                    Ainda não existem rodadas nesta sessão. Carrega em Rodar
                    para começar.
                  </p>
                ) : (
                  <div className={styles.history}>
                    {history.map((entry, index) => (
                      <div key={index} className={styles.historyItem}>
                        <span className={styles.historyCombo}>
                          {entry.combo}
                        </span>
                        <span
                          className={
                            entry.win > 0
                              ? styles.historyWin
                              : styles.historyZero
                          }
                        >
                          {entry.win > 0 ? `+${entry.win}` : "0"}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Responsible gaming */}
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Jogo responsável</h3>
                <p className={styles.cardNote} style={{ marginBottom: 12 }}>
                  Mesmo não disponibilizando jogos a dinheiro real, apoiamos o
                  jogo responsável. Se tu ou alguém próximo tiver preocupações,
                  contacta:
                </p>
                <div className={styles.orgLinks}>
                  {[
                    { label: "SICAD", href: "https://www.sicad.pt/" },
                    {
                      label: "Jogo Responsável",
                      href: "https://www.jogoresponsavel.pt/",
                    },
                    {
                      label: "SRIJ",
                      href: "https://www.srij.turismodeportugal.pt/",
                    },
                  ].map((org) => (
                    <a
                      key={org.label}
                      className={styles.orgLink}
                      href={org.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {org.label}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* Legal */}
          <div className={styles.legal}>
            <p className={styles.legalText}>
              <strong>Aviso legal:</strong> Este jogo é uma experiência social
              destinada exclusivamente ao entretenimento, no quadro do
              Decreto-Lei n.º 66/2015 (RJO) relativo aos jogos e apostas
              online. Não estão disponíveis jogos a dinheiro real. Todos os
              resultados são gerados aleatoriamente para demonstração e não
              refletem probabilidades reais de ganho. A moeda virtual não tem
              valor real, não pode ser comprada, levantada ou convertida em
              dinheiro real nem em prémios. Não é possível depositar ou ganhar
              dinheiro real. A plataforma destina-se a pessoas com 18 anos ou
              mais.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
