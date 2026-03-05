"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { urlFor } from "@/lib/sanity/image";

type Member = {
  _id: string;
  name: string;
  nameEn?: string;
  role?: string;
  photo?: unknown;
  bio?: string;
};

export function MemberGrid({ members }: { members: Member[] }) {
  if (!members || members.length === 0) {
    return (
      <Section className="bg-surface">
        <Container>
          <SectionTitle en="Members" ja="メンバー" />
          <p className="text-center text-text-light">
            メンバー情報は準備中です。
          </p>
        </Container>
      </Section>
    );
  }

  return (
    <Section className="bg-surface">
      <Container>
        <SectionTitle en="Members" ja="メンバー" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, i) => (
            <motion.div
              key={member._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              {member.photo ? (
                <div className="relative mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src={urlFor(member.photo).width(320).height(320).url()}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="mx-auto mb-4 h-40 w-40 rounded-full bg-surface-dark" />
              )}
              <h3 className="font-bold">{member.name}</h3>
              {member.nameEn && (
                <p className="mt-0.5 font-display text-xs text-text-light">
                  {member.nameEn}
                </p>
              )}
              {member.role && (
                <p className="mt-1 text-sm text-primary-light">{member.role}</p>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
