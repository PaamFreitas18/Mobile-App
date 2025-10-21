import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { query } from '../db.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

// POST /api/login
router.post('/login', async (req, res, next) => {
  try {
    const { email, senha } = req.body;
    if (!email || !senha) return res.status(400).json({ error: 'Email e senha são obrigatórios.' });

    const result = await query('SELECT id, nome, email, senha_hash, perfil FROM usuarios WHERE email=$1', [email]);
    if (result.rows.length === 0) return res.status(401).json({ error: 'Credenciais inválidas' });

    const user = result.rows[0];
    const ok = await bcrypt.compare(senha, user.senha_hash);
    if (!ok) return res.status(401).json({ error: 'Credenciais inválidas' });

    const token = jwt.sign({ sub: user.id, perfil: user.perfil }, JWT_SECRET, { expiresIn: '8h' });
    res.json({ token, perfil: user.perfil, nome: user.nome, id: user.id });
  } catch (e) { next(e); }
});

// (Opcional) rota de registro para testes locais
router.post('/register', async (req, res, next) => {
  try {
    const { nome, email, senha, perfil='aluno' } = req.body;
    if (!nome || !email || !senha) return res.status(400).json({ error: 'Campos obrigatórios: nome, email, senha.' });
    const senha_hash = await bcrypt.hash(senha, 10);
    const ins = await query(
      'INSERT INTO usuarios (nome, email, senha_hash, perfil) VALUES ($1,$2,$3,$4) RETURNING id, nome, email, perfil',
      [nome, email, senha_hash, perfil]
    );
    res.status(201).json(ins.rows[0]);
  } catch (e) { next(e); }
});

export default router;
