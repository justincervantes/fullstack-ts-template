import axios from "axios";

type ApiError = {
  message: string;
  status?: number;
};

const apiClient = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 10000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: unknown) => Promise.reject(error),
);

function toApiError(error: unknown): ApiError {
  if (axios.isAxiosError<{ error?: string }>(error)) {
    return {
      message: error.response?.data?.error ?? error.message ?? "Request failed",
      status: error.response?.status,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
    };
  }

  return {
    message: "Unexpected error",
  };
}

export { apiClient, toApiError };
export type { ApiError };
