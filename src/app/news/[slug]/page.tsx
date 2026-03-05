import { notFound } from "next/navigation";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getNewsBySlug, getNewsSlugs } from "@/lib/sanity/queries";
import { articleJsonLd } from "@/lib/jsonld";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getNewsSlugs().catch(() => []);
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = await getNewsBySlug(slug).catch(() => null);

  if (!article) {
    return { title: "ニュース" };
  }

  return {
    title: article.title,
    description: article.excerpt || `${article.title} - CMO株式会社`,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getNewsBySlug(slug).catch(() => null);

  if (!article) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: article.title,
              description: article.excerpt || article.title,
              url: `https://cmoinc.jp/news/${slug}`,
              publishedAt: article.publishedAt,
            })
          ),
        }}
      />
      <PageHero title={article.title} titleEn="News" />
      <Section>
        <Container>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <time className="text-sm text-text-light">
                {format(new Date(article.publishedAt), "yyyy.MM.dd")}
              </time>
              {article.category && (
                <span className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs text-text-light">
                  {article.category}
                </span>
              )}
            </div>

            {article.body && (
              <div className="prose prose-gray max-w-none prose-headings:font-semibold">
                <PortableText value={article.body} />
              </div>
            )}

            <div className="mt-12">
              <Button href="/news" variant="outline">
                ニュース一覧へ戻る
              </Button>
            </div>
          </article>
        </Container>
      </Section>
    </>
  );
}
