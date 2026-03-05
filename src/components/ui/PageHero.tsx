import { Container } from "./Container";

type PageHeroProps = {
  title: string;
  titleEn: string;
  description?: string;
};

export function PageHero({ title, titleEn, description }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden border-b border-border/80 bg-white pb-16 pt-28 md:pb-20 md:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(37,99,235,0.12),transparent_42%),radial-gradient(circle_at_90%_80%,rgba(16,24,40,0.06),transparent_45%)]" />
      <Container>
        <p className="relative font-display text-xs font-semibold uppercase tracking-[0.22em] text-text-light">
          {titleEn}
        </p>
        <h1 className="relative mt-3 max-w-4xl text-4xl font-semibold text-text md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="relative mt-5 max-w-2xl text-base text-text-light md:text-lg">
            {description}
          </p>
        )}
      </Container>
    </div>
  );
}
