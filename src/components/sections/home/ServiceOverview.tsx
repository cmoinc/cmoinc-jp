"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const services = [
  {
    title: "エージェンシー事業",
    description:
      "企業のマーケティング戦略立案から実行までを一気通貫で支援。広告運用改善やSEO、パートナー選定まで伴走します。",
  },
  {
    title: "キャリア支援事業",
    description:
      "マーケターに特化した人材紹介とキャリア支援を提供。法人の採用課題と個人のキャリア形成を同時に支援します。",
  },
  {
    title: "ナレッジサービス",
    description:
      "「CMO Career」やニュースレターなど、実務知見を活かした情報発信とサービスを通じてマーケターの成長を支えます。",
  },
];

export function ServiceOverview() {
  return (
    <Section>
      <Container>
        <SectionTitle en="Business" ja="事業紹介" />

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <Card className="h-full">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface text-sm font-display font-semibold text-text-light">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-3 text-lg font-semibold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/service" variant="outline">
            サービス詳細へ
          </Button>
        </div>
      </Container>
    </Section>
  );
}
