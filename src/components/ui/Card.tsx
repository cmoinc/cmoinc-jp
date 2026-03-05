import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/80 bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.04)]",
        hover &&
          "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(16,24,40,0.08)]",
        className
      )}
    >
      {children}
    </div>
  );
}
