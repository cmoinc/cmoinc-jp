import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { urlFor } from "@/lib/sanity/image";

type CSRItem = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: unknown;
};

export function CSRList({ items }: { items: CSRItem[] }) {
  if (!items || items.length === 0) {
    return (
      <Section>
        <Container>
          <p className="text-center text-text-light">
            現在CSR記事はありません。
          </p>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          {items.map((item) => (
            <Link key={item._id} href={`/csr/${item.slug.current}`}>
              <Card className="h-full">
                {item.mainImage ? (
                  <div className="relative mb-4 h-48 overflow-hidden rounded">
                    <Image
                      src={urlFor(item.mainImage).width(600).height(400).url()}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="mb-4 h-48 rounded bg-surface-dark" />
                )}
                <time className="text-sm text-text-light">
                  {format(new Date(item.publishedAt), "yyyy.MM.dd")}
                </time>
                <h3 className="mt-2 font-bold">{item.title}</h3>
                {item.excerpt && (
                  <p className="mt-2 text-sm text-text-light">
                    {item.excerpt}
                  </p>
                )}
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
