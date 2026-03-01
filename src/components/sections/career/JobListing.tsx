"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const jobs = [
  {
    title: "マーケティングコンサルタント",
    type: "正社員",
    location: "東京",
    description:
      "クライアントのマーケティング戦略立案・実行支援を担当していただきます。",
  },
  {
    title: "フロントエンドエンジニア",
    type: "正社員",
    location: "東京 / リモート",
    description:
      "自社サービスおよびクライアント向けWebアプリケーションの開発を担当していただきます。",
  },
  {
    title: "人材コンサルタント",
    type: "正社員",
    location: "東京 / 大阪",
    description:
      "企業の採用課題解決に向けた戦略提案と人材紹介を担当していただきます。",
  },
];

export function JobListing() {
  return (
    <Section className="bg-surface">
      <Container>
        <SectionTitle en="Open Positions" ja="募集職種" />

        <div className="space-y-6">
          {jobs.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Card className="p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold">{job.title}</h3>
                    <div className="mt-2 flex gap-3">
                      <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                        {job.type}
                      </span>
                      <span className="text-xs text-text-light">
                        {job.location}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-text-light">
                      {job.description}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="shrink-0">
                    詳細を見る
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
