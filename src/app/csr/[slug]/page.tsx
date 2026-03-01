import { notFound } from "next/navigation";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getCSRBySlug, getCSRSlugs } from "@/lib/sanity/queries";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getCSRSlugs().catch(() => []);
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = await getCSRBySlug(slug).catch(() => null);

  if (!article) {
    return { title: "CSR" };
  }

  return {
    title: article.title,
    description: article.excerpt || `${article.title} - CMO株式会社`,
  };
}

export default async function CSRDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getCSRBySlug(slug).catch(() => null);

  if (!article) {
    notFound();
  }

  return (
    <>
      <PageHero title={article.title} titleEn="CSR" />
      <Section>
        <Container>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <time className="text-sm text-text-light">
                {format(new Date(article.publishedAt), "yyyy.MM.dd")}
              </time>
            </div>

            {article.body && (
              <div className="prose prose-gray max-w-none">
                <PortableText value={article.body} />
              </div>
            )}

            <div className="mt-12">
              <Button href="/csr" variant="outline">
                CSR一覧へ戻る
              </Button>
            </div>
          </article>
        </Container>
      </Section>
    </>
  );
}
