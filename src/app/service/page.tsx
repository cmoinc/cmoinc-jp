import { PageHero } from "@/components/ui/PageHero";
import { ServiceIntro } from "@/components/sections/service/ServiceIntro";

export const metadata = {
  title: "サービス概要",
  description: "CMO株式会社が提供するサービスの概要をご紹介します。",
};

export default function ServicePage() {
  return (
    <>
      <PageHero
        title="サービス概要"
        titleEn="Service"
        description="マーケティング・人材・テクノロジーの3つの領域で、企業の成長を支援します。"
      />
      <ServiceIntro />
    </>
  );
}
