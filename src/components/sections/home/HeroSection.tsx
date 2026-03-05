"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/80 pb-20 pt-28 md:min-h-[calc(100vh-72px)] md:pb-24 md:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(99,102,241,0.16),transparent_35%),radial-gradient(circle_at_88%_75%,rgba(37,99,235,0.12),transparent_44%)]" />

      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-text-light">
            CMO, inc.
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight text-text md:text-6xl lg:text-7xl">
            Marketing.
          </h1>
          <h2 className="mt-4 text-2xl font-semibold leading-tight text-text md:text-4xl">
            マーケティングの知見で、
            <br />
            新しい航路を切り開きます。
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-text-light md:text-lg">
            CMO株式会社は、デジタルを主戦場としながらマーケティング戦略を作る、
            ナレッジエキスパート集団です。DXとマーケティング、2つの領域で企業の成長を支援します。
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/service" size="lg">
              サービスを見る
            </Button>
            <Button href="/aboutus" variant="outline" size="lg">
              会社概要
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <div className="relative h-[420px] overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-700 shadow-[0_30px_70px_rgba(37,99,235,0.35)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.22),transparent_40%),radial-gradient(circle_at_78%_72%,rgba(255,255,255,0.1),transparent_46%)]" />
            <div className="relative flex h-full items-center justify-center">
              <p className="font-display text-7xl font-bold tracking-tight text-white">CMO</p>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="h-10 w-6 rounded-full border border-border p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-text-light/60" />
        </div>
      </motion.div>
    </section>
  );
}
