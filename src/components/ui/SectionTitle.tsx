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
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {en ? (
        <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-text-light">
          {en}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{ja}</h2>
    </div>
  );
}
