import { PageHero } from "@/components/ui/PageHero";
import { CompanyInfo } from "@/components/sections/about/CompanyInfo";
import { MemberGrid } from "@/components/sections/about/MemberGrid";
import { HistoryTimeline } from "@/components/sections/about/HistoryTimeline";
import { getAllMembers } from "@/lib/sanity/queries";

export const metadata = {
  title: "会社概要",
  description: "CMO株式会社の会社概要、メンバー紹介、沿革をご紹介します。",
};

export default async function AboutPage() {
  const members = await getAllMembers().catch(() => []);

  return (
    <>
      <PageHero
        title="会社概要"
        titleEn="About Us"
        description="CMO株式会社のビジョン、メンバー、そして歩みをご紹介します。"
      />
      <CompanyInfo />
      <MemberGrid members={members} />
      <HistoryTimeline />
    </>
  );
}
