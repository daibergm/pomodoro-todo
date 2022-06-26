import React, { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  // label: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}

export default Button;
