import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary Button: Simple coral, warm and approachable
        default: "bg-primary text-white hover:bg-primary/90 rounded-xl font-normal",
        
        // Secondary Button: Clean outline style
        outline: "border border-primary/30 text-primary bg-transparent hover:bg-primary/5 hover:border-primary/50 rounded-xl font-normal",
        
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-xl",
        secondary: "bg-secondary text-white hover:bg-secondary/90 rounded-xl font-normal",
        ghost: "hover:bg-primary/5 hover:text-primary rounded-xl",
        link: "text-primary underline-offset-4 hover:underline",
        
        // Simple warm variants
        coral: "bg-primary text-white hover:bg-primary/90 rounded-xl font-normal",
        elegant: "bg-primary/5 text-primary border border-primary/20 hover:bg-primary/10 hover:border-primary/30 rounded-xl font-normal",
        hero: "bg-primary text-white hover:bg-primary/90 rounded-xl font-normal",
        
        // Clean CTA variant
        cta: "bg-white text-primary hover:bg-gray-50 rounded-xl font-normal border border-gray-200",
        
        // Minimal variant
        minimal: "bg-transparent text-foreground border border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-xl font-normal",
      },
      size: {
        default: "h-12 px-8 py-3 text-base",
        sm: "h-10 rounded-2xl px-6 py-2 text-sm",
        lg: "h-16 rounded-3xl px-12 py-5 text-lg font-medium",
        icon: "h-12 w-12 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
