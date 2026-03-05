import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <div className="rounded-3xl border border-border/80 bg-white px-6 py-14 text-center md:px-12 md:py-16">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-text-light">
            Contact Us
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-text md:text-4xl">
            Marketer&apos;s company.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-text-light">
            サービスのご相談、採用・キャリア支援に関するお問い合わせなど、
            まずはお気軽にご連絡ください。
          </p>
          <div className="mt-8">
            <Button href="/policy" size="lg">
              お問い合わせ
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
