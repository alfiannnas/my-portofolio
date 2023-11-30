import React, { FC } from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ href, children }) => {
  return (
    <a href={href}>
      <button type="button">{children}</button>
    </a>
  );
};

export default Button;
