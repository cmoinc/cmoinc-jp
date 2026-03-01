"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const services = [
  {
    title: "デジタルマーケティング",
    description:
      "SEO対策、リスティング広告、SNS広告、コンテンツマーケティング、アクセス解析など、デジタル領域のマーケティング施策を総合的に支援します。",
    features: ["SEO / SEM", "SNS広告運用", "コンテンツ戦略", "データ分析"],
  },
  {
    title: "人材ソリューション",
    description:
      "採用コンサルティング、人材紹介、組織開発、研修・教育プログラムなど、人材に関する課題をワンストップで解決します。",
    features: ["採用コンサルティング", "人材紹介", "組織開発", "研修プログラム"],
  },
  {
    title: "テクノロジー",
    description:
      "Webシステム開発、アプリ開発、DX推進コンサルティング、データ基盤構築など、テクノロジーの力でビジネス変革を実現します。",
    features: ["Web / アプリ開発", "DX推進", "データ基盤構築", "AI活用支援"],
  },
];

export function ServiceIntro() {
  return (
    <Section>
      <Container>
        <div className="space-y-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="p-8 md:p-10">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-text-light">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-text-light"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services">サービスメニュー詳細へ</Button>
        </div>
      </Container>
    </Section>
  );
}
