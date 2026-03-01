import { defineField, defineType } from "sanity";

export const member = defineType({
  name: "member",
  title: "メンバー",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "名前",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "nameEn",
      title: "名前（英語）",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "役職",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "表示順",
      type: "number",
    }),
    defineField({
      name: "photo",
      title: "写真",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "bio",
      title: "紹介文",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "links",
      title: "リンク",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "ラベル", type: "string" },
            { name: "url", title: "URL", type: "url" },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "photo",
    },
  },
});
