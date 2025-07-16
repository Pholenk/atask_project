import React, { type InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  type = 'text',
  disabled = false,
  ...props
}) => {
  return (
    <input
      className={`
        w-full 
        px-4 
        py-3 
        border 
        border-gray-300 
        rounded 
        text-base 
        outline-none 
        transition-colors 
        placeholder-gray-500
        focus:border-cyan-500
        disabled:bg-gray-100 
        disabled:cursor-not-allowed
      `}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
  );
};

export default Input
