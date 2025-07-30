/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { ComponentPropsWithRef, ElementType, ForwardedRef } from "react";
import React, { forwardRef } from "react";

// Fix for forwardRef with generics
type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
) => (props: P & React.RefAttributes<T>) => React.ReactNode;

const fixedForwardRef = forwardRef as FixedForwardRef;

type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends any
  ? Omit<T, TOmitted>
  : never;

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
type TypographyCvaProps = VariantProps<typeof typographyVariants>;

const defaultElementMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  p: "p",
  quote: "p",
  code: "code",
  lead: "p",
  large: "p",
  small: "p",
  muted: "p",
  link: "a",
  default: "p",
} satisfies Record<NonNullable<TypographyCvaProps["variant"]>, ElementType>;

type TypographyVariant = keyof typeof defaultElementMapping;

interface TypographyProps<TAs extends ElementType = ElementType>
  extends TypographyCvaProps {
  as?: TAs;
  className?: string;
  children?: React.ReactNode;
}

/**
 * The Typography component is useful to add Text to your page.
 *
 * Usage:
 * <Typography variant="h1">Title</Typography>
 * <Typography variant="h2" as="a" href="#">Link</Typography>
 */
const InnerTypography = <
  TAs extends ElementType = ElementType,
  TVariant extends TypographyVariant = "default",
>(
  {
    variant = "default",
    className,
    as,
    ...props
  }: TypographyProps<TAs> &
    DistributiveOmit<
      ComponentPropsWithRef<TAs>,
      "as" | "className" | "children" | "variant"
    >,
  ref: ForwardedRef<any>,
) => {
  const Comp: ElementType =
    as ?? defaultElementMapping[variant ?? "default"] ?? "p";

  return (
    <Comp
      {...props}
      className={cn(typographyVariants({ variant }), className)}
      ref={ref}
    />
  );
};

export const Typography = fixedForwardRef(InnerTypography);