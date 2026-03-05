"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

export function AboutPreview() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-12 rounded-3xl border border-border/80 bg-white p-8 md:grid-cols-2 md:p-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle en="About Us" ja="CMOについて" align="left" />
            <p className="leading-relaxed text-text-light">
              CMO株式会社は、マーケティングの知見で新しい航路を切り開く
              ナレッジエキスパート集団です。クライアントの課題に応じて、戦略と実行の両面で支援します。
            </p>
            <p className="mt-4 leading-relaxed text-text-light">
              Marketer&apos;s company. を掲げ、マーケターのキャリア支援や企業の人材採用支援も含めて、
              成長の仕組みづくりに取り組んでいます。
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
              { number: "2014", label: "設立" },
              { number: "8名", label: "従業員数（役員含む）" },
              { number: "13-ユ-316864", label: "有料職業紹介許可" },
              { number: "SDGs", label: "官民連携プラットフォーム会員" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/70 bg-surface p-6 text-center"
              >
                <p
                  className={`text-text ${stat.number.length > 6 ? "text-sm font-semibold md:text-base" : "font-display text-3xl font-semibold"}`}
                >
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
