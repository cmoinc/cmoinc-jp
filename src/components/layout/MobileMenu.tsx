"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
};

export function MobileMenu({ open, onClose, navItems }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/35 backdrop-blur-[2px]"
          />

          {/* Slide-over panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-50 w-80 border-l border-border bg-white p-8"
          >
            <button
              onClick={onClose}
              className="mb-8 ml-auto flex h-10 w-10 items-center justify-center text-text"
              aria-label="メニューを閉じる"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="text-lg font-medium text-text-light transition-colors hover:text-text"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/policy"
                onClick={onClose}
                className="mt-4 rounded-full border border-primary bg-primary px-6 py-3 text-center text-sm font-medium text-text-inverse transition-colors hover:bg-primary-light"
              >
                お問い合わせ
              </Link>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
