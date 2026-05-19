# Portugal Social

Plataforma de jogos sociais (slots) em português europeu, construída com
[Next.js](https://nextjs.org). Os jogos existem apenas para entretenimento:
sem dinheiro real, sem depósitos e sem levantamentos. Reservada a maiores de
18 anos.

## Começar

Instala as dependências e arranca o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) no navegador para ver o
resultado.

## Scripts disponíveis

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run start` — arranca o build de produção
- `npm run lint` — análise estática com ESLint

## Estrutura

- `src/app` — rotas da aplicação (página inicial e `/jogo`)
- `src/components` — componentes da interface
- `public/images` — imagens dos jogos e do hero

## Deploy

O projeto está preparado para deploy na [Vercel](https://vercel.com) com a
predefinição de framework Next.js (ver `vercel.json`).
