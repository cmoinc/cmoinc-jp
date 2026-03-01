import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "プライバシーポリシー",
  description: "CMO株式会社のプライバシーポリシー。",
};

export default function PolicyPage() {
  return (
    <>
      <PageHero title="プライバシーポリシー" titleEn="Privacy Policy" />
      <Section>
        <Container>
          <div className="prose prose-gray mx-auto max-w-3xl">
            <h2>個人情報の取り扱いについて</h2>
            <p>
              CMO株式会社（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、
              以下の方針に基づき個人情報の適切な保護・管理に努めます。
            </p>

            <h3>1. 個人情報の収集</h3>
            <p>
              当社は、業務上必要な範囲内で、適法かつ公正な手段により個人情報を収集します。
            </p>

            <h3>2. 個人情報の利用目的</h3>
            <p>当社は、収集した個人情報を以下の目的で利用します。</p>
            <ul>
              <li>お問い合わせへの回答</li>
              <li>サービスの提供・改善</li>
              <li>採用活動における連絡</li>
              <li>法令に基づく対応</li>
            </ul>

            <h3>3. 個人情報の第三者提供</h3>
            <p>
              当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
            </p>

            <h3>4. 個人情報の管理</h3>
            <p>
              当社は、個人情報の正確性・最新性を保ち、不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、
              適切なセキュリティ対策を講じます。
            </p>

            <h3>5. お問い合わせ</h3>
            <p>
              個人情報の取り扱いに関するお問い合わせは、当社までご連絡ください。
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
