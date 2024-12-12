export type RegisterBody = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginBody = {
  email: string;
  password: string;
};