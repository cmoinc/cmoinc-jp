import Link from "next/link";
import { Container } from "@/components/ui/Container";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "会社概要", href: "/aboutus" },
      { label: "ニュース", href: "/news" },
      { label: "CSR", href: "/csr" },
    ],
  },
  {
    title: "Service",
    links: [
      { label: "サービス概要", href: "/service" },
      { label: "サービス詳細", href: "/services" },
      { label: "キャリア支援", href: "/agent" },
    ],
  },
  {
    title: "Recruit",
    links: [
      { label: "採用情報", href: "/career" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-8 text-white/70">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-display text-xl font-bold text-white"
            >
              CMO Inc.
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              CMO株式会社
              <br />
              マーケティング・人材・テクノロジーで
              <br />
              企業の成長を支援します。
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-white">
                {group.title}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <Link
            href="/policy"
            className="text-xs transition-colors hover:text-white"
          >
            プライバシーポリシー
          </Link>
          <p className="text-xs">
            &copy; {new Date().getFullYear()} CMO Inc. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
