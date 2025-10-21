import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const sectionVariants = cva(
  "relative",
  {
    variants: {
      variant: {
        white: "section-white",
        blue: "section-blue",
        primary: "section-primary",
        secondary: "section-secondary", 
        muted: "section-muted",
        accent: "section-accent",
        sage: "section-sage",
        warm: "section-warm",
        cool: "section-cool",
      },
      size: {
        default: "container-section",
        sm: "container-section-sm",
        none: "", // Custom padding
      },
    },
    defaultVariants: {
      variant: "white",
      size: "default",
    },
  }
);

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: "section" | "div" | "header" | "footer" | "main";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant, size, as = "section", ...props }, ref) => {
    const Comp = as;
    return (
      <Comp
        className={cn(sectionVariants({ variant, size, className }))}
        ref={ref as any}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";

export { Section, sectionVariants };