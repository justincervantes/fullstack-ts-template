import cors from "cors";
import express from "express";

import { healthRouter } from "./features/health/routes.js";
import { usersRouter } from "./features/users/routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(healthRouter);
app.use(usersRouter);

export { app };
