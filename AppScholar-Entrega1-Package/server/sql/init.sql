-- Create base tables for Entrega 1
CREATE TABLE IF NOT EXISTS usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(120) UNIQUE NOT NULL,
  senha_hash VARCHAR(120) NOT NULL,
  perfil VARCHAR(20) NOT NULL CHECK (perfil IN ('admin','aluno','professor'))
);

-- Seed: one admin and one aluno (password: 123456)
-- Remember to run with bcrypt hashing if using /register; below is just for fast demos.
-- If you want to insert directly:
-- Use the bcrypt hash for '123456': $2a$10$1kE7QX0qE6w7oVvU4XczpO8G9qj2a2qA7KXqVhwEJZ2h6YcJYkU0e
INSERT INTO usuarios (nome, email, senha_hash, perfil)
VALUES
  ('Admin Teste', 'admin@appscholar.dev', '$2a$10$1kE7QX0qE6w7oVvU4XczpO8G9qj2a2qA7KXqVhwEJZ2h6YcJYkU0e', 'admin')
ON CONFLICT (email) DO NOTHING;

INSERT INTO usuarios (nome, email, senha_hash, perfil)
VALUES
  ('Aluno Demo', 'aluno@appscholar.dev', '$2a$10$1kE7QX0qE6w7oVvU4XczpO8G9qj2a2qA7KXqVhwEJZ2h6YcJYkU0e', 'aluno')
ON CONFLICT (email) DO NOTHING;
