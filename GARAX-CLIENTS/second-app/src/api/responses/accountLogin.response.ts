export interface AccountLoginResponse {
  message: string;
  status: number;
  metadata: {
    user: {
      userName: string;
      email: string;
      roleId: string;
    };
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  };
}
