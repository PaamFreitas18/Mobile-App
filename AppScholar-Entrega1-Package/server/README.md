# App Scholar – Auth API (Entrega 1)

API de autenticação para o projeto App_Scholar usando Node.js, Express e PostgreSQL.

## Requisitos
- Node 18+
- PostgreSQL 13+

## Setup
1. Instale dependências:
   ```bash
   npm install
   ```
2. Copie `.env.example` para `.env` e ajuste `DATABASE_URL` e `JWT_SECRET`.
3. Crie o banco e rode o SQL:
   ```bash
   psql "$DATABASE_URL" -f sql/init.sql
   ```
4. Execute:
   ```bash
   npm run dev
   ```

## Rotas
- `POST /api/login` → body: `{ email, senha }` → retorna `{ token, perfil, nome, id }`
- `POST /api/register` (opcional, para testes locais)

## Credenciais de teste
- Email: `admin@appscholar.dev`, Senha: `123456`
- Email: `aluno@appscholar.dev`, Senha: `123456`
