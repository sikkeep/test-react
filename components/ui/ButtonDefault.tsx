import React from 'react';

interface ButtonProps {
  className?: string;
  onClick: () => void;
  children: React.ReactNode; // Обязательное свойство children
}

const Button: React.FC<ButtonProps> = ({ className = '', onClick, children }) => {
  return (
    <button
      className={`hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
