# AppScholar — Entrega 3 (Módulo de Lançamento de Notas)

Projeto completo contendo:
- Frontend: React Native (telas para disciplina, alunos e lançamento de notas)
- Backend: API REST em Node.js + Express
- Banco: PostgreSQL (migrations + seed)
- Execução via Docker (docker-compose)

## Como executar (recomendado - Docker)
1. No diretório raiz: `docker-compose up --build -d`
2. Aplique migrations e seed no container Postgres:
   ```
   docker exec -i $(docker ps -q -f "ancestor=postgres:15") psql -U postgres -d appscholar -f /usr/src/app/api/grades/migrations/migration_create_grades.sql
   docker exec -i $(docker ps -q -f "ancestor=postgres:15") psql -U postgres -d appscholar -f /usr/src/app/api/grades/migrations/seed_sample_data.sql
   ```
3. Abra o app no emulador Android: `npx react-native run-android`
   - O app usa `http://10.0.2.2:3000` como base para o emulador Android.

## Teste rápido (dev)
- Para facilitar, o frontend envia `x-dev-token: dev-token` em headers, e a API aceita esse token para autenticação do professor.
- Em produção, use `Authorization: Bearer <JWT>`.

## Rotas principais da API
- `GET /api/grades/subjects` — disciplinas do professor autenticado
- `GET /api/grades/subjects/:id/students` — alunos matriculados + nota atual
- `POST /api/grades` — criar/atualizar nota (upsert)
- `PUT /api/grades/:id` — atualizar nota por id

