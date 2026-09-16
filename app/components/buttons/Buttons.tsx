// src/components/Buttons/Buttons.tsx
import { ButtonHTMLAttributes } from 'react';

type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export default function Button({ size = 'md', className = '', children, ...props }: ButtonProps) {
  return (
    <button
      className={`font-medium transition-colors ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}