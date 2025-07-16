import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<string, string> = {
  primary: `
    bg-cyan-500 
    text-white 
    hover:bg-cyan-600 
    disabled:bg-gray-300 
    disabled:cursor-not-allowed
  `,
  secondary: `
    bg-gray-200 
    text-black 
    hover:bg-gray-300 
    disabled:bg-gray-100 
    disabled:cursor-not-allowed
  `,
  danger: `
    bg-red-500 
    text-white 
    hover:bg-red-600 
    disabled:bg-gray-300 
    disabled:cursor-not-allowed
  `,
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseClasses = `
    px-6 
    py-3 
    rounded 
    text-base 
    font-medium 
    transition-colors 
    w-full
  `;

  const finalClasses = `${baseClasses} ${variantClasses[variant] || ''}`;

  return (
    <button
      className={finalClasses}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
