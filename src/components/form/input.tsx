import React, { useState } from "react";
import { cn } from "../../utils/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, error, icon, type = "text", id, ...props }, ref) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="space-y-2">
        <label
          htmlFor={id}
          className="block text-sm font-medium dark:text-white"
        >
          {label}
        </label>

        <div className="relative">
          <input
            id={id}
            ref={ref}
            type={type === "password" && open ? "text" : type}
            {...props}
            className={cn(
              "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 dark:text-gray-950",
              error
                ? "border-rose-500 focus:ring-rose-500 focus:border-rose-500"
                : "focus:ring-blue-500 focus:border-blue-500"
            )}
          />

          {type === "password" && (
            <span
              className="absolute cursor-pointer right-4 top-4"
              onClick={() => setOpen(!open)}
            >
              {open ? "🔒" : icon}
            </span>
          )}

          {/* Ícone padrão se o tipo não for senha */}
          {icon && type !== "password" && (
            <span className="absolute right-4 top-4">{icon}</span>
          )}
        </div>

        {helperText && <p className="text-xs text-gray-500">{helperText}</p>}

        {error && (
          <span className="text-xs font-bold text-rose-500">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
