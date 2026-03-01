"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const features = [
  {
    title: "キャリアカウンセリング",
    description:
      "経験豊富なキャリアアドバイザーが、あなたの強み・志向性を丁寧にヒアリングし、最適なキャリアプランをご提案します。",
  },
  {
    title: "求人紹介",
    description:
      "独自のネットワークを活かし、公開求人から非公開求人まで、あなたにマッチするポジションをご紹介します。",
  },
  {
    title: "選考サポート",
    description:
      "履歴書・職務経歴書の添削、面接対策、条件交渉まで、内定獲得に向けて一貫してサポートします。",
  },
  {
    title: "入社後フォロー",
    description:
      "入社後も定期的にフォローアップを行い、新しい環境でのスムーズな立ち上がりを支援します。",
  },
];

const flow = [
  { step: "01", title: "お申し込み", desc: "Web・お電話からお気軽にご連絡ください" },
  { step: "02", title: "カウンセリング", desc: "キャリアアドバイザーと面談" },
  { step: "03", title: "求人紹介", desc: "ご希望に合った求人をご提案" },
  { step: "04", title: "選考・内定", desc: "書類添削・面接対策で全力サポート" },
  { step: "05", title: "入社", desc: "入社後のフォローアップも万全" },
];

export function AgentContent() {
  return (
    <>
      <Section>
        <Container>
          <SectionTitle en="Features" ja="サービスの特長" />
          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full">
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-light">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionTitle en="Flow" ja="ご利用の流れ" />
          <div className="mx-auto max-w-2xl space-y-6">
            {flow.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex gap-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent font-display text-lg font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="mt-1 text-sm text-text-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/policy" size="lg">
              無料相談に申し込む
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
