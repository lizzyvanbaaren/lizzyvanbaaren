import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva(
  "rounded-lg transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground border shadow-sm",
        elevated: "card-elevated",
        glass: "card-glass",
        minimal: "card-minimal",
        feature: "bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg p-8",
      },
      hover: {
        none: "",
        lift: "hover:shadow-lg hover:-translate-y-1",
        scale: "hover-scale",
        glow: "hover:shadow-glow",
      },
    },
    defaultVariants: {
      variant: "default",
      hover: "none",
    },
  }
);

export interface CardEnhancedProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const CardEnhanced = React.forwardRef<HTMLDivElement, CardEnhancedProps>(
  ({ className, variant, hover, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, hover, className }))}
      {...props}
    />
  )
);
CardEnhanced.displayName = "CardEnhanced";

const CardEnhancedHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardEnhancedHeader.displayName = "CardEnhancedHeader";

const CardEnhancedTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-display text-xl leading-none tracking-tight", className)}
    {...props}
  />
));
CardEnhancedTitle.displayName = "CardEnhancedTitle";

const CardEnhancedDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardEnhancedDescription.displayName = "CardEnhancedDescription";

const CardEnhancedContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardEnhancedContent.displayName = "CardEnhancedContent";

const CardEnhancedFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardEnhancedFooter.displayName = "CardEnhancedFooter";

export {
  CardEnhanced,
  CardEnhancedHeader,
  CardEnhancedFooter,
  CardEnhancedTitle,
  CardEnhancedDescription,
  CardEnhancedContent,
  cardVariants,
};