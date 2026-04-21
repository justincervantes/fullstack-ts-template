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

export type ApiError = {
  message: string;
  status?: number;
};

export type { HealthResponse, User };
