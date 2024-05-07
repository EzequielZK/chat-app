export type ActionResponse = {
  code: number;
  message: string;
  ok: boolean;
  data?: any;
};

export type ValueValidationResponse = {
    error: string | null;
  };