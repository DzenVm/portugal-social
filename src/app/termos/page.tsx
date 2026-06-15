import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Termos de Utilização",
  description:
    "Termos de Utilização da plataforma de slots sociais ptbalime.online. Entretenimento 18+ com moeda virtual, sem dinheiro real, sem depósitos, levantamentos ou prémios.",
  alternates: { canonical: "https://ptbalime.online/termos" },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Termos de Utilização" updated="15 de junho de 2026">
      <p>
        Ao aceder e utilizar a plataforma <strong>ptbalime.online</strong>, operada por{" "}
        <strong>DWELLING s.r.o.</strong>, declaras que leste, compreendeste e aceitas
        os presentes Termos de Utilização. Se não concordares, não deves utilizar a
        plataforma.
      </p>

      <h2>Natureza do serviço</h2>
      <p>
        A plataforma oferece jogos de slots <strong>sociais</strong>, destinados
        exclusivamente ao entretenimento. Os jogos utilizam apenas moeda virtual, sem
        qualquer valor real. <strong>Não é possível ganhar dinheiro real nem prémios
        com valor monetário.</strong> Não existem depósitos, levantamentos, compras nem
        conversões da moeda virtual em dinheiro real ou em prémios de valor real.
      </p>

      <h2>Requisito de idade</h2>
      <p>
        A utilização da plataforma está reservada a pessoas com{" "}
        <strong>18 anos ou mais</strong>. Ao utilizar a plataforma, confirmas que tens
        a idade mínima exigida.
      </p>

      <h2>Utilização permitida</h2>
      <ul>
        <li>Utilizar os jogos para fins pessoais e de entretenimento.</li>
        <li>Não tentar contornar, manipular ou interferir com o funcionamento da plataforma.</li>
        <li>Não utilizar a plataforma para qualquer fim ilícito.</li>
      </ul>

      <h2>Propriedade intelectual e designações dos jogos</h2>
      <p>
        As designações, descrições e imagens dos jogos são meramente ilustrativas e
        fictícias, criadas para fins de demonstração. Não estão associadas, nem
        representam, quaisquer marcas, logótipos ou produtos de jogo a dinheiro real, e
        não devem ser interpretadas como tal.
      </p>

      <h2>Ausência de garantias</h2>
      <p>
        Os resultados dos jogos são gerados aleatoriamente, com fins recreativos, e não
        refletem as probabilidades reais de quaisquer jogos de azar. A plataforma é
        disponibilizada «tal como está», sem garantias de disponibilidade contínua ou
        ausência de erros.
      </p>

      <h2>Jogo responsável</h2>
      <p>
        Ainda que não disponibilizemos jogos a dinheiro real, apoiamos o jogo
        responsável. Caso tenhas preocupações relacionadas com o jogo, consulta os
        recursos de apoio indicados na plataforma.
      </p>

      <h2>Limitação de responsabilidade</h2>
      <p>
        Na medida máxima permitida por lei, a DWELLING s.r.o. não será responsável por
        quaisquer danos resultantes da utilização ou da impossibilidade de utilização
        da plataforma.
      </p>

      <h2>Lei aplicável</h2>
      <p>
        Os presentes Termos regem-se pela legislação aplicável. Os jogos sociais que
        não permitem apostar nem ganhar dinheiro real não estão sujeitos ao regime de
        licenciamento de jogos a dinheiro real em Portugal (Decreto-Lei n.º 66/2015 —
        RJO).
      </p>

      <h2>Alterações aos termos</h2>
      <p>
        Estes Termos podem ser atualizados periodicamente. A data da última atualização
        encontra-se no topo desta página.
      </p>

      <h2>Contacto</h2>
      <p>
        DWELLING s.r.o.
        <br />
        IČ: 28106903
        <br />
        Lidická tř. 1274/246, České Budějovice 7, PSČ 37007, República Checa
      </p>
    </LegalLayout>
  );
}
