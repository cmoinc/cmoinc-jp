import { cn } from "@/lib/utils";

type SectionTitleProps = {
  en: string;
  ja: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  en,
  ja,
  className,
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" && "text-center",
        className
      )}
    >
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        {en}
      </p>
      <h2 className="mt-2 text-2xl font-bold md:text-3xl">{ja}</h2>
    </div>
  );
}
