import dotenv from "dotenv";

import { app } from "./server.js";

dotenv.config();

const port = Number(process.env.PORT ?? 3001);

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
