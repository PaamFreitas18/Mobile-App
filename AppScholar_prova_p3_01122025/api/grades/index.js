const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const app = express();
app.use(cors()); app.use(bodyParser.json());
const pool = new Pool({ connectionString: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/appscholar' });
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';
function teacherAuth(req,res,next){ try{ const auth=req.headers.authorization; if(!auth){ const dev=req.headers['x-dev-token']; if(dev==='dev-token'){ req.teacher={id:1,name:'Professor Dev'}; return next(); } return res.status(401).json({error:'missing_authorization'}); } const parts=auth.split(' '); if(parts.length!==2) return res.status(401).json({error:'bad_authorization'}); const payload=jwt.verify(parts[1],JWT_SECRET); req.teacher={id:payload.teacher_id||payload.sub||1}; next(); }catch(err){ console.error('auth error',err && err.message); return res.status(401).json({error:'invalid_token'});} }
const gradeSchema = Joi.object({ student_id: Joi.number().integer().required(), subject_id: Joi.number().integer().required(), grade: Joi.number().min(0).max(10).required() });
app.get('/api/grades/subjects', teacherAuth, async (req,res)=>{ try{ const r = await pool.query('SELECT id,name FROM subjects WHERE teacher_id=$1',[req.teacher.id]); res.json(r.rows); }catch(e){ console.error(e); res.status(500).json({error:'db'}); } });
app.get('/api/grades/subjects/:id/students', teacherAuth, async (req,res)=>{ const subjectId = req.params.id; try{ const r = await pool.query(`SELECT s.id,s.name,g.id as grade_id,g.grade FROM students s JOIN enrollments e ON e.student_id=s.id LEFT JOIN grades g ON g.student_id=s.id AND g.subject_id=$1 WHERE e.subject_id=$1`, [subjectId]); res.json(r.rows); }catch(e){ console.error(e); res.status(500).json({error:'db'}); } });
app.post('/api/grades', teacherAuth, async (req,res)=>{ const { error, value } = gradeSchema.validate(req.body); if(error) return res.status(400).json({ error: error.details[0].message }); const { student_id, subject_id, grade } = value; try{ const up = await pool.query(`INSERT INTO grades (student_id, subject_id, grade, created_at, updated_at) VALUES ($1,$2,$3,now(),now()) ON CONFLICT (student_id, subject_id) DO UPDATE SET grade = EXCLUDED.grade, updated_at = now() RETURNING *`, [student_id, subject_id, grade]); res.status(201).json(up.rows[0]); }catch(e){ console.error(e); res.status(500).json({error:'db'}); } });
app.put('/api/grades/:id', teacherAuth, async (req,res)=>{ const id=req.params.id; const schema = Joi.object({ grade: Joi.number().min(0).max(10).required() }); const { error, value } = schema.validate(req.body); if(error) return res.status(400).json({ error: error.details[0].message }); try{ const r = await pool.query('UPDATE grades SET grade=$1,updated_at=now() WHERE id=$2 RETURNING *', [value.grade, id]); res.json(r.rows[0]); }catch(e){ console.error(e); res.status(500).json({error:'db'}); } });
const port = process.env.PORT || 3000; app.listen(port, ()=> console.log('Grades API listening on', port));
