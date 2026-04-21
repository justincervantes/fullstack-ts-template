type HealthResponse = {
  ok: boolean;
  dbTime?: string;
  error?: string;
};

type User = {
  id: number;
  name: string;
  email: string;
};

export type { HealthResponse, User };
