-- migration_create_grades.sql
CREATE TABLE IF NOT EXISTS teachers ( id SERIAL PRIMARY KEY, name TEXT NOT NULL );
CREATE TABLE IF NOT EXISTS subjects ( id SERIAL PRIMARY KEY, name TEXT NOT NULL, teacher_id INTEGER REFERENCES teachers(id) );
CREATE TABLE IF NOT EXISTS students ( id SERIAL PRIMARY KEY, name TEXT NOT NULL );
CREATE TABLE IF NOT EXISTS enrollments ( id SERIAL PRIMARY KEY, student_id INTEGER REFERENCES students(id), subject_id INTEGER REFERENCES subjects(id) );
CREATE TABLE IF NOT EXISTS grades ( id SERIAL PRIMARY KEY, student_id INTEGER REFERENCES students(id), subject_id INTEGER REFERENCES subjects(id), grade NUMERIC(5,2), created_at TIMESTAMP, updated_at TIMESTAMP, UNIQUE (student_id, subject_id) );
