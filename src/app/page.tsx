import { HeroSection } from "@/components/sections/home/HeroSection";
import { ServiceOverview } from "@/components/sections/home/ServiceOverview";
import { AboutPreview } from "@/components/sections/home/AboutPreview";
import { NewsPreview } from "@/components/sections/home/NewsPreview";
import { CTASection } from "@/components/sections/home/CTASection";
import { getLatestNews } from "@/lib/sanity/queries";

export default async function Home() {
  const latestNews = await getLatestNews(3).catch(() => []);

  return (
    <>
      <HeroSection />
      <ServiceOverview />
      <AboutPreview />
      <NewsPreview news={latestNews} />
      <CTASection />
    </>
  );
}
