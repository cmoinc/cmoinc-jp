import { Container } from "./Container";

type PageHeroProps = {
  title: string;
  titleEn: string;
  description?: string;
};

export function PageHero({ title, titleEn, description }: PageHeroProps) {
  return (
    <div className="bg-primary py-20 md:py-28">
      <Container>
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {titleEn}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base text-white/70">
            {description}
          </p>
        )}
      </Container>
    </div>
  );
}
