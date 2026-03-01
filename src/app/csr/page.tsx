import { PageHero } from "@/components/ui/PageHero";
import { CSRList } from "@/components/sections/csr/CSRList";
import { getAllCSR } from "@/lib/sanity/queries";

export const metadata = {
  title: "CSR",
  description: "CMO株式会社のCSR活動・社会貢献の取り組みをご紹介します。",
};

export default async function CSRPage() {
  const csrItems = await getAllCSR().catch(() => []);

  return (
    <>
      <PageHero
        title="CSR"
        titleEn="Corporate Social Responsibility"
        description="CMOの社会貢献活動をご紹介します。"
      />
      <CSRList items={csrItems} />
    </>
  );
}
