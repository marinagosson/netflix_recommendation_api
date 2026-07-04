# 🎬 Netflix Recommendation API

API desenvolvida em Node.js responsável pelo armazenamento e busca vetorial dos embeddings utilizados pelo projeto **Netflix Recommendation System**.

A aplicação utiliza **PostgreSQL + pgvector** para persistência dos vetores e disponibiliza endpoints para importação e consulta de embeddings, permitindo que o sistema de recomendação realize buscas eficientes por similaridade.

---

## Tecnologias

- Node.js
- TypeScript
- Express
- PostgreSQL
- pgvector
- Docker

---

## Arquitetura

```text
Client
    │
    ▼
Routes
    │
    ▼
Controllers
    │
    ▼
Services
    │
    ▼
Repositories
    │
    ▼
PostgreSQL + pgvector
```

---

## Endpoints

| Método | Endpoint | Descrição |
|---------|----------|-----------|
| GET | `/health` | Verifica a disponibilidade da API e a conexão com o banco de dados. |
| POST | `/movie-vectors/batch` | Importa um lote de embeddings de filmes para o banco vetorial. |

---

## Estrutura

```text
src
├── config
├── controllers
├── dto
├── repositories
├── routes
├── services
├── app.ts
└── server.ts
```

---

## Próximas etapas

- [x] Configuração da API
- [x] Integração com PostgreSQL
- [x] Persistência em lote dos embeddings
- [ ] Busca vetorial por similaridade
- [ ] Integração com o frontend
- [ ] Ranking utilizando TensorFlow.js