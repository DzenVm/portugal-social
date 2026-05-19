const HIGHLIGHTS = [
  {
    heading: "Como funciona a plataforma",
    body: "A plataforma destina-se exclusivamente ao entretenimento de utilizadores maiores de 18 anos. Os jogos usam apenas moeda virtual, sem valor real, para que a experiência seja social e sem risco financeiro.",
    points: [
      "Acedes ao jogo de imediato, diretamente no navegador.",
      "Recebes e utilizas apenas moeda virtual.",
      "Não existem depósitos, levantamentos ou conversões em dinheiro real.",
    ],
  },
  {
    heading: "Porque escolhem esta plataforma",
    body: "A interface está otimizada para telemóvel, tablet e computador, e as sessões de jogo foram pensadas para um acesso rápido, navegação clara e informação transparente sobre as regras e o jogo responsável.",
    points: [
      "Design limpo e simples de utilizar.",
      "Conteúdo transparente sobre os limites e a regra dos 18+.",
      "Ligações diretas para recursos de apoio responsável.",
    ],
  },
  {
    heading: "Segurança e transparência",
    body: "Damos prioridade a uma comunicação clara: o que a plataforma oferece, o que a plataforma não oferece e onde encontras a informação legal necessária para uma utilização responsável.",
    points: [
      "Políticas e termos disponíveis no rodapé.",
      "Avisos visíveis sobre 18+ e «sem dinheiro real».",
      "Recursos externos recomendados para o jogo responsável.",
    ],
  },
];

const QUESTIONS = [
  {
    question: "Posso ganhar dinheiro real nesta plataforma?",
    answer:
      "Não, em circunstância alguma. A plataforma funciona exclusivamente como um jogo social — todos os jogos usam moeda virtual sem qualquer valor financeiro real. Não existem mecanismos de ganho monetário, não são atribuídos prémios em dinheiro e não há forma de transformar a moeda virtual em dinheiro real.",
  },
  {
    question: "É possível fazer depósitos ou levantamentos?",
    answer:
      "Não. A plataforma não aceita nem processa qualquer tipo de pagamentos ou transferências financeiras. A moeda virtual é disponibilizada gratuitamente para demonstração e não pode ser convertida, transferida ou levantada de nenhuma forma.",
  },
  {
    question: "O que é a moeda virtual e como funciona?",
    answer:
      "A moeda virtual é um elemento de jogo usado apenas dentro da nossa plataforma. Funciona como uma pontuação interna — podes apostá-la, ganhá-la ou perdê-la no jogo, mas não tem qualquer valor fora da plataforma.",
  },
  {
    question: "A plataforma é permitida a menores de idade?",
    answer:
      "Não. O acesso está estritamente reservado a pessoas que já tenham completado 18 anos. Pedimos aos pais e tutores que acompanhem a atividade online dos menores.",
  },
  {
    question: "É necessário registo ou conta?",
    answer:
      "Não é obrigatório criar uma conta para aceder aos jogos de demonstração. Podes jogar diretamente no navegador, sem fornecer dados pessoais ou financeiros.",
  },
  {
    question: "A plataforma precisa de licença do SRIJ?",
    answer:
      "Não. Ao abrigo da legislação portuguesa (Decreto-Lei n.º 66/2015, RJO), as plataformas que não permitem apostar nem ganhar dinheiro real não estão sujeitas ao regime de licenciamento do Serviço de Regulação e Inspeção de Jogos.",
  },
  {
    question: "Os jogos refletem as probabilidades reais das slots?",
    answer:
      "Não. Os jogos desta plataforma são versões sociais simplificadas, criadas exclusivamente para demonstração e entretenimento. Os resultados são gerados aleatoriamente, com fins recreativos.",
  },
  {
    question: "Onde encontro informação sobre jogo responsável?",
    answer:
      "Na secção «Recursos para o Jogo Responsável» desta página encontras ligações para organizações especializadas em apoio. Se tu ou alguém próximo apresentar sinais de dependência, encorajamos o contacto com uma destas organizações.",
  },
];

export default function InfoSection() {
  return (
    <section id="como-funciona" style={{ padding: "0 0 80px" }}>
      <div className="shell">
        <div
          className="highlight-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 20,
            marginBottom: 20,
          }}
        >
          {HIGHLIGHTS.map((card) => (
            <article
              key={card.heading}
              style={{
                background: "rgba(28,17,23,.58)",
                border: "1px solid var(--hairline)",
                borderRadius: "var(--round-lg)",
                padding: 20,
              }}
            >
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: 20,
                  letterSpacing: "-.02em",
                }}
              >
                {card.heading}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "var(--ink-dim)",
                  fontSize: 14,
                  lineHeight: 1.65,
                }}
              >
                {card.body}
              </p>
              <ul
                style={{
                  margin: "10px 0 0",
                  paddingLeft: 18,
                  color: "var(--ink-dim)",
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                {card.points.map((point) => (
                  <li key={point} style={{ margin: "6px 0" }}>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <article
          style={{
            background: "rgba(28,17,23,.58)",
            border: "1px solid var(--hairline)",
            borderRadius: "var(--round-lg)",
            padding: "28px 28px 12px",
          }}
        >
          <h3 style={{ margin: "0 0 4px", fontSize: 22, letterSpacing: "-.02em" }}>
            Perguntas frequentes (FAQ)
          </h3>
          <p style={{ margin: "0 0 20px", color: "var(--ink-dim)", fontSize: 14 }}>
            Tudo o que precisas de saber sobre esta plataforma de jogos sociais.
          </p>
          <div
            className="faq-columns"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0 32px",
            }}
          >
            {QUESTIONS.map((item, index) => (
              <div
                key={item.question}
                style={{
                  padding: "16px 0",
                  borderTop:
                    index === 0 ? "none" : "1px solid rgba(245,236,238,.09)",
                }}
              >
                <strong
                  style={{
                    display: "block",
                    marginBottom: 8,
                    fontSize: 15,
                    color: "var(--ink)",
                  }}
                >
                  {item.question}
                </strong>
                <p
                  style={{
                    margin: 0,
                    color: "var(--ink-dim)",
                    fontSize: 14,
                    lineHeight: 1.65,
                  }}
                >
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .highlight-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 760px) {
          .faq-columns { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
