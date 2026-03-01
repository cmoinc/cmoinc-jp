"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const services = [
  {
    icon: "📊",
    title: "デジタルマーケティング",
    description:
      "データドリブンなマーケティング戦略の立案から実行まで。SEO、広告運用、コンテンツマーケティングを統合的に支援します。",
  },
  {
    icon: "👥",
    title: "人材ソリューション",
    description:
      "企業の成長に必要な人材の採用支援から組織開発まで。最適な人材戦略でビジネスを加速します。",
  },
  {
    icon: "💻",
    title: "テクノロジー",
    description:
      "最新のテクノロジーを活用したDX推進支援。システム開発からデータ活用まで、企業のデジタル変革を実現します。",
  },
];

export function ServiceOverview() {
  return (
    <Section>
      <Container>
        <SectionTitle en="Service" ja="事業内容" />

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <Card className="h-full text-center">
                <div className="mb-4 text-4xl">{service.icon}</div>
                <h3 className="mb-3 text-lg font-bold">{service.title}</h3>
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
