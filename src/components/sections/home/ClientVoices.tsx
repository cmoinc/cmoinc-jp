"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";

const voices = [
  {
    company: "株式会社日本経済新聞社 様",
    logo: "https://storage.googleapis.com/studio-design-asset-files/projects/VGOKwJ77On/s-2400x513_v-frms_webp_cc3f6bdc-820f-4baa-9b6f-1b8726c9ae0b_small.webp",
  },
  {
    company: "株式会社メンバーズ 様",
    logo: "https://storage.googleapis.com/studio-design-asset-files/projects/VGOKwJ77On/s-1552x302_v-fms_webp_1a58aa34-e370-441b-8507-aae28b52f85e_small.webp",
  },
];

export function ClientVoices() {
  return (
    <Section>
      <Container>
        <SectionTitle en="Voice" ja="お客様の声" />
        <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-relaxed text-text-light md:text-base">
          CMO株式会社は、国内外のトップ企業のデジタル分野におけるパートナーとして、
          多くの企業のマーケティング・デジタル戦略を支援してきました。
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {voices.map((voice, i) => (
            <motion.div
              key={voice.company}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <Card className="h-full">
                <div className="flex h-16 items-center justify-center rounded-xl bg-surface px-4">
                  <Image
                    src={voice.logo}
                    alt={voice.company}
                    width={260}
                    height={60}
                    className="h-auto max-h-10 w-auto object-contain"
                  />
                </div>
                <p className="mt-5 text-center text-sm font-semibold text-text">
                  {voice.company}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
