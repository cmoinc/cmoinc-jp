export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CMO株式会社",
    alternateName: "CMO Inc.",
    url: "https://cmoinc.jp",
    description:
      "マーケティング・人材・テクノロジーの力で企業の成長を支援するプロフェッショナルファーム",
  };
}

export function articleJsonLd({
  title,
  description,
  url,
  publishedAt,
}: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished: publishedAt,
    publisher: {
      "@type": "Organization",
      name: "CMO株式会社",
      url: "https://cmoinc.jp",
    },
  };
}
