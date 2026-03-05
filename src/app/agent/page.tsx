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
        titleEn="Marketer's Career"
        description="マーケターに特化した人材紹介エージェントとして、キャリア支援を行っています。"
      />
      <AgentContent />
    </>
  );
}
