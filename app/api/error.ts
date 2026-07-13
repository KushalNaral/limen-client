export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string,
    public details?: unknown,
  ) {
    super(message);
    this.name = "ApiError";
  }

  static async fromResponse(response: Response): Promise<ApiError> {
    let body: any;
    try {
      body = await response.json();
    } catch {
      body = null;
    }
    return new ApiError(
      body?.message ?? response.statusText,
      response.status,
      body?.code,
      body?.details,
    );
  }

  get isAuthError() {
    return this.status === 401;
  }
  get isNotFound() {
    return this.status === 404;
  }
  get isValidationError() {
    return this.status === 422;
  }
}
