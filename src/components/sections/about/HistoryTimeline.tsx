"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

const history = [
  { year: "2015", event: "CMO株式会社設立" },
  { year: "2017", event: "人材ソリューション事業開始" },
  { year: "2019", event: "テクノロジー事業部を新設" },
  { year: "2021", event: "大阪オフィス開設" },
  { year: "2023", event: "DXコンサルティング事業を強化" },
  { year: "2025", event: "グループ拡大・新サービスローンチ" },
];

export function HistoryTimeline() {
  return (
    <Section>
      <Container>
        <SectionTitle en="History" ja="沿革" />

        <div className="mx-auto max-w-2xl">
          <div className="relative border-l-2 border-border pl-8">
            {history.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="relative mb-8 last:mb-0"
              >
                {/* Dot */}
                <div className="absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 rounded-full bg-accent" />

                <p className="font-display text-sm font-bold text-accent">
                  {item.year}
                </p>
                <p className="mt-1 text-sm text-text-light">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
