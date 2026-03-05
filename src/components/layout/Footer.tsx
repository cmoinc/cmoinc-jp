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
    title: "Media",
    links: [
      { label: "採用情報", href: "/career" },
      { label: "ニュースレター", href: "https://media.cmoinc.jp/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-white pb-10 pt-16 text-text-light">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-display text-xl font-semibold text-text"
            >
              CMO Inc.
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-text-light">
              CMO株式会社
              <br />
              マーケティングの知見で
              <br />
              企業の成長を支援します。
              <br />
              info@cmoinc.jp / 03-5050-2639
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-text">
                {group.title}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/80 pt-8 md:flex-row">
          <Link
            href="/policy"
            className="text-xs transition-colors hover:text-primary"
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
