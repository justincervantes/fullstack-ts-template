import { Request, Router } from "express";

import { pool } from "../../db/pool.js";

const healthRouter = Router();

healthRouter.get("/health", async (_req: Request, res) => {
  try {
    const result = await pool.query<{ now: Date }>("SELECT NOW() AS now");

    res.status(200).json({
      ok: true,
      dbTime: result.rows[0]?.now,
    });
  } catch (error) {
    console.error("Health check failed:", error);
    res.status(500).json({ ok: false, error: "Database connection failed" });
  }
});

export { healthRouter };
