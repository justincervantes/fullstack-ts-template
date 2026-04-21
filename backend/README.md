# Backend Starter

Simple Node.js + Express + PostgreSQL starter for a live coding exercise.

## Stack

- Node.js
- Express
- PostgreSQL
- TypeScript
- `pg` driver

## What This Includes

- Express API server
- PostgreSQL connection via `DATABASE_URL`
- Seed SQL for a `users` table with dummy data
- Basic endpoints:
  - `GET /health`
  - `GET /users`
  - `GET /users/:id`
  - `POST /users`

## Requirements

- Node.js 20+
- npm
- PostgreSQL running locally

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a local PostgreSQL database:

```bash
createdb sample_db
```

3. Set your environment variables in `.env`:

```env
PORT=3001
DATABASE_URL=postgresql://localhost:5432/sample_db
```

If your local Postgres user or password differs, use the correct connection string for your machine.

4. Seed the database:

```bash
psql sample_db -f db.sql
```

## Run

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Start the compiled server:

```bash
npm run start
```

Type-check the project:

```bash
npm test
```

## Quick Verification

Check the health endpoint:

```bash
curl http://localhost:3001/health
```

List users:

```bash
curl http://localhost:3001/users
```

Fetch one user:

```bash
curl http://localhost:3001/users/1
```

Create a user:

```bash
curl -X POST http://localhost:3001/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Dana White","email":"dana@example.com"}'
```
