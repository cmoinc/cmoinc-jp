"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { format } from "date-fns";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

type NewsItem = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  category?: string;
};

export function NewsPreview({ news }: { news: NewsItem[] }) {
  if (!news || news.length === 0) return null;

  return (
    <Section>
      <Container>
        <SectionTitle en="News" ja="ニュースリリース" />

        <div className="space-y-0 divide-y divide-border">
          {news.map((item, i) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Link
                href={`/news/${item.slug.current}`}
                className="flex flex-col gap-2 rounded-xl px-3 py-5 transition-colors hover:bg-white sm:flex-row sm:items-center sm:gap-6"
              >
                <div className="flex shrink-0 items-center gap-3">
                  <time className="text-sm text-text-light">
                    {format(new Date(item.publishedAt), "yyyy.MM.dd")}
                  </time>
                  {item.category && (
                    <span className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs text-text-light">
                      {item.category}
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium">{item.title}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/news" variant="outline">
            ニュース一覧へ
          </Button>
          <p className="mt-4 text-sm text-text-light">
            ニュースレターは
            <a
              href="https://media.cmoinc.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 underline decoration-text-light/50 underline-offset-4 transition-colors hover:text-primary"
            >
              こちら
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
}
