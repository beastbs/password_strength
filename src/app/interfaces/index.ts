import { ChangeEvent } from "react";

export interface HeadingProps {
  text: string;
  tag?: string;
}
export interface ParagraphProps {
  text: string;
}

export interface ButtonProps {
  type?: "submit" | "button" | "reset";
  text: string;
  disabled?: boolean;
  className: string;
  size?: string;
  onClick?: () => void;
}

export interface PasswordIconsProps {
  fill?: string;
  width?: string;
  height?: string;
}

export interface TextFieldProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  validatePasswordStrength?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ErrorProps {
  name?: string;
  password?: string;
}

export interface PasswordDataProps {
  easyPassword?: boolean;
  mediumPassword?: boolean;
  strongPassword?: boolean;
  passwordDescription?: string;
}

export interface StrengthMeterProps {
  passwordData: PasswordDataProps;
  passwordBackground: string;
}

export interface PasswordCheckerProps {
  value: string;
}
