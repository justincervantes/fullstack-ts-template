import { apiClient } from "./client.ts";
import type { HealthResponse, User } from "./types.ts";

const api = {
  async getHealth() {
    const response = await apiClient.get<HealthResponse>("/health");
    return response.data;
  },

  async getUsers() {
    const response = await apiClient.get<User[]>("/users");
    return response.data;
  },
};

export { api };
export type { HealthResponse, User } from "./types.ts";
