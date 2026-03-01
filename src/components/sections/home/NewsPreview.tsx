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
        <SectionTitle en="News" ja="ニュース" />

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
                className="flex flex-col gap-2 py-5 transition-colors hover:bg-surface/50 sm:flex-row sm:items-center sm:gap-6"
              >
                <div className="flex shrink-0 items-center gap-3">
                  <time className="text-sm text-text-light">
                    {format(new Date(item.publishedAt), "yyyy.MM.dd")}
                  </time>
                  {item.category && (
                    <span className="rounded bg-primary px-2 py-0.5 text-xs text-white">
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
        </div>
      </Container>
    </Section>
  );
}
