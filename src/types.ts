import { ChangeEvent, ReactElement } from "react";

export interface ISignInProps {
  email: string;
  password: string;
}

export interface ISignUpProps {
  name: string;
  signUpEmail: string;
  niknameEmail: string;
  gender: string;
  password: string;
  confirmPassword: string;
}

export interface IInputProps {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  checked?: boolean;
  icon?: ReactElement;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
