import { ApiError } from "@/api/error";

type RequestConfig = {
  method?: string;
  headers?: Record<string, string>;
  body?: unknown;
  signal?: AbortSignal;
};

export class ApiClient {
  constructor(
    private baseUrl: string,
    private getAuthToken?: () => string | null,
  ) {}

  private async request<T>(
    path: string,
    config: RequestConfig = {},
  ): Promise<T> {
    const token = this.getAuthToken?.();

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: config.method ?? "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...config.headers,
      },
      body: config.body ? JSON.stringify(config.body) : undefined,
      signal: config.signal ? config.signal : undefined,
    });

    if (!response.ok) {
      throw await ApiError.fromResponse(response);
    }

    if (response.status === 204) return undefined as T;
    return response.json();
  }

  get<T>(path: string, signal?: AbortSignal) {
    return this.request<T>(path, { signal });
  }

  post<T>(path: string, body: unknown, signal?: AbortSignal) {
    return this.request<T>(path, { method: "POST", body, signal });
  }

  patch<T>(path: string, body: unknown, signal?: AbortSignal) {
    return this.request<T>(path, { method: "PATCH", body, signal });
  }

  delete<T>(path: string, signal?: AbortSignal) {
    return this.request<T>(path, { method: "DELETE", signal });
  }
}
