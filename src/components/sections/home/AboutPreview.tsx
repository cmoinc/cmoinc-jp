"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

export function AboutPreview() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle en="About Us" ja="CMOについて" align="left" />
            <p className="leading-relaxed text-text-light">
              CMO株式会社は、「マーケティング・人材・テクノロジー」の3つの事業領域を通じて、
              企業の持続的な成長を支援するプロフェッショナルファームです。
            </p>
            <p className="mt-4 leading-relaxed text-text-light">
              私たちは、クライアントのビジネスに深く関与し、
              戦略立案から実行まで一貫して伴走することで、真の成果を生み出します。
            </p>
            <div className="mt-8">
              <Button href="/aboutus" variant="outline">
                もっと詳しく
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: "10+", label: "年の実績" },
              { number: "500+", label: "支援企業数" },
              { number: "50+", label: "プロフェッショナル" },
              { number: "3", label: "事業領域" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg bg-white p-6 text-center shadow-sm"
              >
                <p className="font-display text-3xl font-bold text-accent">
                  {stat.number}
                </p>
                <p className="mt-1 text-sm text-text-light">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
