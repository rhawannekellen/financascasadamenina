# Casa de Dama da Noite

Aplicativo responsivo em Next.js para gestão de integrantes e mensalidades da Casa de Dama da Noite.

## Executar

```bash
npm install
cp .env.example .env
npx prisma generate
npx prisma db push
npm run dev
```

Configure `DATABASE_URL` com a conexão PostgreSQL do Neon.

Esta primeira entrega inclui a interface completa do dashboard, cadastro visual de integrantes, filtros, registro visual de pagamentos e preparação de mensagens no WhatsApp. A interface usa dados locais até a conexão das APIs com o Prisma. Nenhuma mensagem aberta ou enviada é considerada confirmação de pagamento.
