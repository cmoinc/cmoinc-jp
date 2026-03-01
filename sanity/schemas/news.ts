import { defineField, defineType } from "sanity";

export const news = defineType({
  name: "news",
  title: "ニュース",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "タイトル",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "スラッグ",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "公開日",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "カテゴリ",
      type: "string",
      options: {
        list: [
          { title: "お知らせ", value: "お知らせ" },
          { title: "プレスリリース", value: "プレスリリース" },
          { title: "メディア掲載", value: "メディア掲載" },
          { title: "イベント", value: "イベント" },
        ],
      },
    }),
    defineField({
      name: "excerpt",
      title: "概要",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "mainImage",
      title: "メイン画像",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "body",
      title: "本文",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      date: "publishedAt",
      media: "mainImage",
    },
    prepare({ title, date, media }) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString("ja-JP") : "",
        media,
      };
    },
  },
});
