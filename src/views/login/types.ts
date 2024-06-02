type ComponentProps = {
  handleScreen: (screen: ScreenType) => void;
};

export type ScreenType = 'login' | 'register';

export type LoginProps = ComponentProps & {};
export type RegisterProps = ComponentProps & {};

export type RegisterBody = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginBody = {
  email: string;
  password: string;
};
