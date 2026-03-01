import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <Container className="text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Contact Us
        </p>
        <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
          お気軽にお問い合わせください
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-white/70">
          サービスに関するご質問、お見積もりのご依頼など、まずはお気軽にご連絡ください。
        </p>
        <div className="mt-8">
          <Button href="/policy" size="lg">
            お問い合わせ
          </Button>
        </div>
      </Container>
    </section>
  );
}
