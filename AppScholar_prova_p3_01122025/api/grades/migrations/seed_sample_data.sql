-- seed_sample_data.sql
INSERT INTO teachers (id, name) VALUES (1, 'Professor Dev') ON CONFLICT DO NOTHING;
INSERT INTO subjects (id, name, teacher_id) VALUES (1, 'Matemática', 1), (2, 'História', 1) ON CONFLICT DO NOTHING;
INSERT INTO students (id, name) VALUES (1, 'Aluno Um'), (2, 'Aluno Dois'), (3, 'Aluno Tres') ON CONFLICT DO NOTHING;
INSERT INTO enrollments (student_id, subject_id) VALUES (1,1), (2,1), (3,2) ON CONFLICT DO NOTHING;
INSERT INTO grades (student_id, subject_id, grade, created_at, updated_at) VALUES (1,1,8.5,now(),now()) ON CONFLICT DO NOTHING;
