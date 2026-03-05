import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center bg-surface pt-20 md:pt-24">
      <Container className="text-center">
        <p className="font-display text-6xl font-semibold text-primary-light">404</p>
        <h1 className="mt-4 text-2xl font-bold">
          ページが見つかりません
        </h1>
        <p className="mt-2 text-text-light">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <div className="mt-8">
          <Button href="/">ホームに戻る</Button>
        </div>
      </Container>
    </div>
  );
}
