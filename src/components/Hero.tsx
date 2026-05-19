import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

const PROOF_POINTS = [
  "Sem depósitos",
  "Sem levantamentos",
  "Moeda virtual",
  "Apenas 18+",
  "Acesso imediato no navegador",
];

export default function Hero() {
  return (
    <section className={styles.stage}>
      <div className={styles.frame}>
        {/* Mobile fold: heading + artwork + button fill the first screen */}
        <div className={styles.fold}>
          <h1 className={styles.heading}>
            Slots Sociais <span className={styles.highlight}>em Portugal</span>
          </h1>

          <Link
            href="/jogo"
            className={styles.art}
            aria-label="Abrir o slot social agora"
          >
            <Image
              src="/images/heroimage_Lightroom_Mobile_Android.webp"
              alt="Slots sociais online com moeda virtual"
              width={560}
              height={520}
              priority
              className={styles.artImg}
            />
          </Link>

          <Link href="/jogo" className={`cta cta-spotlight ${styles.action}`}>
            Jogar Agora
          </Link>
        </div>

        {/* Supporting copy */}
        <div className={styles.copy}>
          <div className={styles.tag}>
            <span className={styles.beacon} />
            Plataforma Segura · 18+ · Sem Dinheiro Real
          </div>

          <p className={styles.lead}>
            Estes jogos existem unicamente para entretenimento. Não é possível
            ganhar dinheiro real nem prémios com valor monetário. Tudo decorre
            com moeda virtual, sem qualquer valor real.
          </p>

          <p className={styles.hint}>
            Este é conteúdo de jogo social. Em caso de dúvidas, consulta a{" "}
            <Link href="/#responsavel" className={styles.hintLink}>
              secção de jogo responsável
            </Link>
            .
          </p>
        </div>

        {/* Trust strip */}
        <div className={styles.proof}>
          {PROOF_POINTS.map((label) => (
            <span key={label} className={styles.proofItem}>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
