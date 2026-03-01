import { PageHero } from "@/components/ui/PageHero";
import { ServiceMenu } from "@/components/sections/services/ServiceMenu";

export const metadata = {
  title: "サービスメニュー",
  description: "CMO株式会社のサービスメニュー詳細をご紹介します。",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="サービスメニュー"
        titleEn="Services"
        description="各サービスの詳細をご確認いただけます。"
      />
      <ServiceMenu />
    </>
  );
}
