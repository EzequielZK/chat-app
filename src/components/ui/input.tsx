'use client';
import { useState, InputHTMLAttributes, forwardRef } from 'react';

import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [visible, setVisible] = useState(false);

    const changeVisibility = () => {
      setVisible(!visible);
    };

    return (
      <div
        className={cn(
          'flex relative h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
      >
        <input type={visible ? 'text' : type} ref={ref} {...props} />

        {type === 'password' && (
          <button
            className={`absolute right-0 inset-y-0 p-2 mr-2 ${
              type === 'password' ? '' : 'hidden'
            }rounded-full active:outline-none active:bg-zinc-200 focus:outline-none `}
            type='button'
            onClick={changeVisibility}
          >
            {visible ? (
              <Eye className='w-5 h-5' />
            ) : (
              <EyeOff className='w-5 h-5' />
            )}
          </button>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
