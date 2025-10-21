# App_Scholar – Entrega 1 (Estrutura + Autenticação)

Pacote pronto para a **Entrega 1** do projeto App_Scholar: estrutura base da API de autenticação (Node/Express + PostgreSQL) e drop-in de Login para o app Expo/React Native.

## Como usar
1. **API**: entre em `server/`, configure o `.env`, crie as tabelas com `sql/init.sql` e execute `npm run dev`.
2. **App (Expo)**: copie os arquivos de `frontend_dropin/` para seu projeto existente e ajuste o `API_BASE` no `services/api.js`.
3. **Commits & Prints**: faça commits separados (API, Tela de Login) e tire prints do login funcionando e do histórico de commits para anexar na plataforma.

## Observação do enunciado
- Esta entrega cobre: **Configuração inicial**, **integração inicial com PostgreSQL**, **login/autenticação**, e **API de Autenticação**. As próximas entregas tratarão de cadastros e boletim.

Boa sorte! 🚀
