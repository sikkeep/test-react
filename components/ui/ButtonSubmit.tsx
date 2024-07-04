// components/ui/buttonSubmit.tsx

import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ButtonSubmit: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      type="submit"
      className={`w-full p-2 bg-blue-500 text-white rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonSubmit;
