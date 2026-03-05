"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const services = [
  {
    title: "人材紹介 / キャリア支援",
    description:
      "マーケターに特化した人材紹介とキャリア支援を提供。法人採用・個人転職の双方をサポートします。",
  },
  {
    title: "フリーランス紹介",
    description:
      "マーケティング領域に専門性を持つフリーランス人材を、業務委託などの形でスピーディにご紹介します。",
  },
  {
    title: "パートナー選定支援",
    description:
      "支援実績に基づき、企業に最適な広告代理店やSEOコンサルタントなどの外部パートナー選定を支援します。",
  },
  {
    title: "広告運用改善",
    description:
      "業界トップクラスの知見を持つコンサルタントが広告アカウントを診断し、成果につながる運用体制を構築します。",
  },
  {
    title: "サイト運用",
    description:
      "月額・管理不要でWebサイト運用を支援。コンテンツ制作と運用改善をセットで伴走します。",
  },
  {
    title: "検索エンジン最適化",
    description:
      "検索エンジン流入を分析し、評価低下の要因を特定。継続的なSEO改善の打ち手を提示します。",
  },
];

export function ServiceIntro() {
  return (
    <Section>
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="h-full p-7 md:p-8">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-text-light">
                  {service.description}
                </p>
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
