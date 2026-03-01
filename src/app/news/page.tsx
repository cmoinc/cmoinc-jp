import { PageHero } from "@/components/ui/PageHero";
import { NewsList } from "@/components/sections/news/NewsList";
import { getAllNews } from "@/lib/sanity/queries";

export const metadata = {
  title: "ニュース",
  description: "CMO株式会社の最新ニュース・お知らせ一覧。",
};

export default async function NewsPage() {
  const news = await getAllNews().catch(() => []);

  return (
    <>
      <PageHero
        title="ニュース"
        titleEn="News"
        description="CMOの最新情報をお届けします。"
      />
      <NewsList news={news} />
    </>
  );
}
