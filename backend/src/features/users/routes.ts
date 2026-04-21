import { Router } from "express";

import { pool } from "../../db/pool.js";

const usersRouter = Router();

usersRouter.get("/users", async (_req, res) => {
  try {
    const result = await pool.query<{
      id: number;
      name: string;
      email: string;
    }>("SELECT id, name, email FROM users ORDER BY id ASC");

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Failed to fetch users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

usersRouter.get("/users/:id", async (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: "Invalid user id" });
  }

  try {
    const result = await pool.query<{
      id: number;
      name: string;
      email: string;
    }>("SELECT id, name, email FROM users WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Failed to fetch user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

usersRouter.post("/users", async (req, res) => {
  const { name, email } = req.body as {
    name?: string;
    email?: string;
  };

  if (!name || !email) {
    return res.status(400).json({ error: "name and email are required" });
  }

  try {
    const result = await pool.query<{
      id: number;
      name: string;
      email: string;
    }>(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id, name, email",
      [name, email],
    );

    res.status(201).json(result.rows[0]);
  } catch (error: unknown) {
    console.error("Failed to create user:", error);

    const pgError = error as { code?: string };

    if (pgError.code === "23505") {
      return res.status(400).json({ error: "Email already exists" });
    }

    res.status(500).json({ error: "Failed to create user" });
  }
});

export { usersRouter };
