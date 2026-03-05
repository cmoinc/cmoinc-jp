import { PageHero } from "@/components/ui/PageHero";
import { ServiceIntro } from "@/components/sections/service/ServiceIntro";

export const metadata = {
  title: "サービス概要",
  description: "人材紹介、広告運用改善、SEOなどCMO株式会社のサービスをご紹介します。",
};

export default function ServicePage() {
  return (
    <>
      <PageHero
        title="サービス概要"
        titleEn="Service"
        description="人材紹介 / キャリア支援から広告運用改善まで、マーケティング実務に直結する支援を提供します。"
      />
      <ServiceIntro />
    </>
  );
}
