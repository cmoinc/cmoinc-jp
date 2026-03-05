import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

const companyData = [
  { label: "名称", value: "CMO株式会社 (英 : CMO, Inc.)" },
  { label: "設立", value: "2014年10月" },
  { label: "従業員数", value: "8名（役員含む）" },
  { label: "資本金", value: "950万円" },
  { label: "取引銀行", value: "三井住友銀行 中野支店" },
  { label: "許可証番号", value: "13-ユ-316864（有料職業紹介）" },
  {
    label: "本社",
    value: "〒151-0051 東京都渋谷区千駄ヶ谷5-28-10 ドルミ第二御苑306",
  },
];

export function CompanyInfo() {
  return (
    <Section>
      <Container>
        <SectionTitle en="Company" ja="会社情報" />

        <div className="mx-auto max-w-2xl">
          <dl className="divide-y divide-border">
            {companyData.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-[120px_1fr] gap-4 py-4 sm:grid-cols-[160px_1fr]"
              >
                <dt className="text-sm font-semibold">{item.label}</dt>
                <dd className="text-sm text-text-light">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
