import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../../lib/utils";

type InputProps = ComponentPropsWithoutRef<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      className={cn(
        "h-10 rounded-lg border border-violet-500 px-3 outline-none ring-2 ring-transparent ring-offset-2 focus-visible:ring-violet-800",
        className
      )}
      type={type}
      ref={ref}
      {...props}
    />
  )
);

Input.displayName = "Input";
