import { PageHero } from "@/components/ui/PageHero";
import { CultureSection } from "@/components/sections/career/CultureSection";
import { JobListing } from "@/components/sections/career/JobListing";

export const metadata = {
  title: "採用情報",
  description: "CMO株式会社の採用情報。一緒に働く仲間を募集しています。",
};

export default function CareerPage() {
  return (
    <>
      <PageHero
        title="採用情報"
        titleEn="Career"
        description="CMOで一緒に未来を創りませんか。"
      />
      <CultureSection />
      <JobListing />
    </>
  );
}
