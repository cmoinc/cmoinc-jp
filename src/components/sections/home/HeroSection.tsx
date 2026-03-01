"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center bg-primary">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary opacity-90" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            CMO Inc.
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            マーケティング・人材・
            <br />
            テクノロジーで
            <br />
            <span className="text-accent">企業の成長</span>を支援する
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            CMO株式会社は、デジタルマーケティング、人材ソリューション、テクノロジーの3つの柱で
            企業の持続的な成長を実現するプロフェッショナルファームです。
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/service" size="lg">
              サービスを見る
            </Button>
            <Button href="/aboutus" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              会社概要
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="h-10 w-6 rounded-full border-2 border-white/30 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
}
