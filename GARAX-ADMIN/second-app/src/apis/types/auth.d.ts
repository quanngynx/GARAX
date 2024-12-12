export type TRegisterBody = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type TLoginBody = {
  email: string;
  password: string;
};