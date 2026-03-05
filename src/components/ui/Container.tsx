"use client";

import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-[1160px] px-6 sm:px-8 lg:px-10", className)}
    >
      {children}
    </Component>
  );
}
