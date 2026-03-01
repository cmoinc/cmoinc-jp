"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

const values = [
  {
    title: "挑戦を歓迎する文化",
    description:
      "新しいことに積極的にチャレンジする姿勢を大切にしています。失敗を恐れず、成長の機会として捉える文化があります。",
  },
  {
    title: "プロフェッショナリズム",
    description:
      "一人ひとりが専門性を磨き、プロフェッショナルとしてクライアントに価値を提供することを目指しています。",
  },
  {
    title: "チームワーク",
    description:
      "多様なバックグラウンドを持つメンバーが協力し合い、チームとして最大の成果を生み出します。",
  },
  {
    title: "ワークライフバランス",
    description:
      "リモートワーク・フレックスタイム制を導入し、個人の生活と仕事の両立を支援しています。",
  },
];

export function CultureSection() {
  return (
    <Section>
      <Container>
        <SectionTitle en="Culture" ja="カルチャー" />

        <div className="grid gap-8 md:grid-cols-2">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-lg bg-surface p-8"
            >
              <h3 className="text-lg font-bold">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-light">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
