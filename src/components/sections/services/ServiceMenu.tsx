"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

const categories = [
  {
    title: "デジタルマーケティング",
    items: [
      {
        name: "SEO対策",
        desc: "検索エンジン最適化によるオーガニック集客の最大化",
      },
      {
        name: "リスティング広告",
        desc: "Google・Yahoo広告の戦略設計・運用最適化",
      },
      {
        name: "SNS広告運用",
        desc: "Facebook、Instagram、X、LINEなど各種SNS広告",
      },
      {
        name: "コンテンツマーケティング",
        desc: "オウンドメディア戦略・コンテンツ制作・運用",
      },
      { name: "アクセス解析", desc: "GA4、各種BIツールを活用したデータ分析" },
    ],
  },
  {
    title: "人材ソリューション",
    items: [
      {
        name: "採用コンサルティング",
        desc: "採用戦略立案・採用ブランディング・選考設計",
      },
      {
        name: "人材紹介",
        desc: "ミドル〜ハイクラス人材の紹介・マッチング",
      },
      {
        name: "組織開発",
        desc: "組織診断・エンゲージメント向上・制度設計支援",
      },
      {
        name: "研修・教育",
        desc: "マネジメント研修・DXリテラシー教育プログラム",
      },
    ],
  },
  {
    title: "テクノロジー",
    items: [
      {
        name: "Webシステム開発",
        desc: "業務システム・Webアプリケーションの設計・開発",
      },
      { name: "アプリ開発", desc: "iOS / Android ネイティブ・クロスプラットフォーム" },
      { name: "DX推進コンサルティング", desc: "業務プロセスのデジタル化・自動化支援" },
      { name: "データ基盤構築", desc: "データウェアハウス・BI基盤の設計・構築" },
    ],
  },
];

export function ServiceMenu() {
  return (
    <Section>
      <Container>
        {categories.map((category, ci) => (
          <div key={category.title} className={ci > 0 ? "mt-16" : ""}>
            <SectionTitle en="" ja={category.title} align="left" />

            <div className="grid gap-6 sm:grid-cols-2">
              {category.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="rounded-2xl border border-border/80 bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.04)]"
                >
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-text-light">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
}
