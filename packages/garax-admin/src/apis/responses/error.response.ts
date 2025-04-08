export interface ErrorResponse {
  errors: Record<string, string[]>;
  title: string;
  status: number;
}
