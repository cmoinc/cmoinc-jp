import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

const companyData = [
  { label: "会社名", value: "CMO株式会社 (CMO Inc.)" },
  { label: "設立", value: "2015年" },
  { label: "代表取締役", value: "―" },
  { label: "所在地", value: "東京都" },
  {
    label: "事業内容",
    value:
      "デジタルマーケティング事業、人材ソリューション事業、テクノロジー事業",
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
