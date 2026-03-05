"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "./MobileMenu";

const navItems = [
  { label: "ホーム", href: "/" },
  { label: "会社概要", href: "/aboutus" },
  { label: "サービス", href: "/service" },
  { label: "採用情報", href: "/career" },
  { label: "キャリア支援", href: "/agent" },
  { label: "ニュース", href: "/news" },
  { label: "CSR", href: "/csr" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/80 bg-white/85 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between md:h-[72px]">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight text-text">
          CMO Inc.
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-light transition-colors hover:text-text"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/policy"
            className="rounded-full border border-primary bg-primary px-4 py-2 text-sm font-medium text-text-inverse transition-colors hover:bg-primary-light"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="flex flex-col gap-1.5 text-text md:hidden"
          aria-label="メニューを開く"
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
        </button>
      </Container>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={navItems}
      />
    </header>
  );
}
