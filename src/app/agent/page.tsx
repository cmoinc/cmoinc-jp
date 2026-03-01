import { PageHero } from "@/components/ui/PageHero";
import { AgentContent } from "@/components/sections/agent/AgentContent";

export const metadata = {
  title: "キャリア支援",
  description: "CMO株式会社のキャリア支援サービスのご案内。",
};

export default function AgentPage() {
  return (
    <>
      <PageHero
        title="キャリア支援"
        titleEn="Career Agent"
        description="あなたのキャリアを、最適なステージへ。"
      />
      <AgentContent />
    </>
  );
}
