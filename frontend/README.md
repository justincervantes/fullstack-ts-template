# Frontend Starter

Simple React + Vite + TypeScript starter for a live coding exercise.

## Stack

- React
- Vite
- TypeScript
- React Router
- Axios
- Tailwind CSS

## What This Includes

- React app bootstrapped with Vite
- TypeScript setup
- Routing with `react-router-dom`
- API requests with `axios`
- Tailwind CSS for basic styling
- Scripts for development, build, linting, formatting, and preview

## Requirements

- Node.js 20+
- npm
- Backend API running locally

## Setup

1. Install dependencies:

```bash
npm install
```

2. Confirm the backend is running locally.

By default, this frontend expects the backend to be available at:

```text
http://localhost:3001
```

If your frontend uses a different API base URL, update the relevant config or API client file before running.

## Run

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Lint the project:

```bash
npm run lint
```

Format the project:

```bash
npm run format
```

## Quick Verification

Start the frontend:

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal, usually:

```text
http://localhost:5173
```

Verify that:

- the app loads successfully
- the frontend can call the backend
- any initial data fetches complete without errors
- routes render as expected

## Notes

- This project uses Vite for fast local development.
- Tailwind CSS is included for lightweight styling during the exercise.
- Axios is available for API calls.
- React Router is included in case routing is needed during the session.
- The goal is to keep the setup small and easy to extend during live coding.
