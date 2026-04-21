import { apiClient, toApiError } from "./client.ts";
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

  async createUser(user: { name: string; email: string }): Promise<{
    id: number;
    name: string;
    email: string;
  }> {
    const result = await apiClient.post<User>("/users", user);
    return result.data;
  },

  toApiError,
};

export { api };
export type { HealthResponse, User } from "./types.ts";
