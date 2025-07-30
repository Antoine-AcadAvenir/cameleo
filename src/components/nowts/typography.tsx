/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  forwardRef,
  type ElementType,
  type ComponentPropsWithRef,
  type ForwardedRef,
} from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// Définition des variantes CSS
export const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "font-caption scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "font-caption scroll-m-20 text-3xl font-semibold tracking-tight transition-colors",
      h3: "font-caption scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      default: "",
      quote: "mt-6 border-l-2 pl-6 italic",
      code: "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-muted-foreground text-xl",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-muted-foreground text-sm",
      link: "dark:text-primary font-medium text-cyan-600 hover:underline",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type TypographyVariant = VariantProps<typeof typographyVariants>["variant"];

const defaultElementMapping: Record<NonNullable<TypographyVariant>, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  p: "p",
  quote: "blockquote",
  code: "code",
  lead: "p",
  large: "p",
  small: "p",
  muted: "p",
  link: "a",
  default: "p",
};

type TypographyProps<T extends ElementType> = {
  as?: T;
  variant?: TypographyVariant;
  className?: string;
} & Omit<ComponentPropsWithRef<T>, "as" | "ref">;

// Composant principal
const TypographyInner = <T extends ElementType = "p">(
  { as, variant = "default", className, ...props }: TypographyProps<T>,
  ref: ForwardedRef<any>
) => {
  const Component = as ?? defaultElementMapping[variant as TypographyVariant] ?? "p";

  return (
    <Component
      ref={ref}
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    />
  );
};

export const Typography = forwardRef(TypographyInner);