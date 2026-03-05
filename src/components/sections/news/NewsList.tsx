import Link from "next/link";
import { format } from "date-fns";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type NewsItem = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  category?: string;
  excerpt?: string;
};

export function NewsList({ news }: { news: NewsItem[] }) {
  if (!news || news.length === 0) {
    return (
      <Section>
        <Container>
          <p className="text-center text-text-light">
            現在ニュースはありません。
          </p>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl divide-y divide-border">
          {news.map((item) => (
            <Link
              key={item._id}
              href={`/news/${item.slug.current}`}
              className="block rounded-xl px-3 py-6 transition-colors hover:bg-white"
            >
              <div className="flex items-center gap-3">
                <time className="text-sm text-text-light">
                  {format(new Date(item.publishedAt), "yyyy.MM.dd")}
                </time>
                {item.category && (
                  <span className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs text-text-light">
                    {item.category}
                  </span>
                )}
              </div>
              <h3 className="mt-2 font-bold">{item.title}</h3>
              {item.excerpt && (
                <p className="mt-1 text-sm text-text-light">{item.excerpt}</p>
              )}
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
