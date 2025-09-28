import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/components/shared/lib";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-colors duration-300 disabled:pointer-events-none disabled:opacity-50 rounded-full hover:bg-white/10 active:bg-white/50",
  {
    variants: {
      variant: {
        default: "glass text-white border",
        ghost: "text-white",
      },
      size: {
        default: "h-10 px-3 text-sm",
        lg: "h-12 px-8",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
