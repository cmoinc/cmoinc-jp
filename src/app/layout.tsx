import type { Metadata } from "next";
import { Noto_Sans_JP, Raleway } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { organizationJsonLd } from "@/lib/jsonld";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cmoinc.jp"),
  title: {
    default: "CMO株式会社 | CMO Inc.",
    template: "%s | CMO株式会社",
  },
  description:
    "CMO株式会社は、デジタルを主戦場としながらマーケティング戦略を作る、ナレッジエキスパート集団です。DXとマーケティング、2つの領域で企業の成長を支援します。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "CMO株式会社",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
      </head>
      <body
        className={`${notoSansJP.variable} ${raleway.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
