import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da plataforma de slots sociais ptbalime.online. Não recolhemos dados pessoais ou financeiros para jogar. Plataforma 18+ sem dinheiro real.",
  alternates: { canonical: "https://ptbalime.online/privacidade" },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Política de Privacidade" updated="15 de junho de 2026">
      <p>
        Esta Política de Privacidade descreve como a plataforma{" "}
        <strong>ptbalime.online</strong>, operada por <strong>DWELLING s.r.o.</strong>,
        trata a informação dos utilizadores. A plataforma destina-se exclusivamente
        ao entretenimento social de pessoas com 18 anos ou mais e não disponibiliza
        jogos a dinheiro real.
      </p>

      <h2>Dados que recolhemos</h2>
      <p>
        Para jogar não é necessário criar conta nem fornecer dados pessoais. Não
        recolhemos nomes, endereços de email, números de telefone, dados de pagamento
        nem qualquer informação financeira, porque a plataforma não processa pagamentos
        de qualquer tipo.
      </p>

      <h2>Armazenamento local no navegador</h2>
      <p>
        Utilizamos o armazenamento local (localStorage) do teu navegador apenas para
        guardar a confirmação de que tens 18 anos ou mais, de modo a não voltar a
        mostrar o aviso em cada visita. O progresso do jogo (saldo de moeda virtual,
        histórico de rodadas) existe apenas durante a sessão no teu navegador e não é
        enviado para nenhum servidor.
      </p>

      <h2>Cookies e rastreamento</h2>
      <p>
        Não utilizamos cookies de rastreamento publicitário nem criamos perfis de
        utilizadores para fins de marketing. Caso esta situação venha a alterar-se,
        esta política será atualizada e, quando exigido, será solicitado o teu
        consentimento.
      </p>

      <h2>Ligações para sites externos</h2>
      <p>
        A plataforma inclui ligações para recursos de jogo responsável (por exemplo,
        SRIJ, SICAD, ICAD e Jogo Responsável). Não somos responsáveis pelas práticas
        de privacidade desses sites; recomendamos a consulta das respetivas políticas.
      </p>

      <h2>Menores de idade</h2>
      <p>
        O acesso está reservado a pessoas com 18 anos ou mais. Não recolhemos
        intencionalmente dados de menores. Apelamos a pais e tutores que acompanhem a
        atividade online dos menores a seu cargo.
      </p>

      <h2>Os teus direitos (RGPD)</h2>
      <p>
        Ao abrigo do Regulamento Geral sobre a Proteção de Dados, tens direito de
        acesso, retificação, eliminação e oposição relativamente a quaisquer dados
        pessoais. Uma vez que não recolhemos dados pessoais para utilizar a plataforma,
        na prática não conservamos informação que te identifique. Para qualquer questão,
        contacta-nos através dos dados indicados abaixo.
      </p>

      <h2>Alterações a esta política</h2>
      <p>
        Esta política pode ser atualizada periodicamente. A data da última atualização
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
