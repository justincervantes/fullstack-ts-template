import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 10000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (axios.isAxiosError(error)) {
      const message =
        typeof error.response?.data?.error === "string"
          ? error.response.data.error
          : error.message;

      return Promise.reject(new Error(message));
    }

    return Promise.reject(new Error("Unexpected API error"));
  },
);

export { apiClient };
