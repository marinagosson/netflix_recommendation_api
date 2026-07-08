-- ============================================================
-- Netflix Recommendation API
-- Database initialization
-- PostgreSQL + pgvector
-- ============================================================

-- Extension
CREATE EXTENSION IF NOT EXISTS vector;

-- ============================================================
-- Movie Embeddings
-- ============================================================

CREATE TABLE IF NOT EXISTS movie_vectors (

    movie_id TEXT PRIMARY KEY,

    title TEXT NOT NULL,

    embedding VECTOR(68) NOT NULL,

    created_at TIMESTAMP DEFAULT NOW()

);

CREATE INDEX IF NOT EXISTS idx_movie_vectors_embedding
ON movie_vectors
USING hnsw (embedding vector_cosine_ops);

-- ============================================================
-- User Embeddings
-- ============================================================

CREATE TABLE IF NOT EXISTS user_vectors (

    user_id INTEGER PRIMARY KEY,

    name TEXT NOT NULL,

    embedding VECTOR(80) NOT NULL,

    created_at TIMESTAMP DEFAULT NOW()

);

CREATE INDEX IF NOT EXISTS idx_user_vectors_embedding
ON user_vectors
USING hnsw (embedding vector_cosine_ops);