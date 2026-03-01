import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "サイト設定",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      title: "会社名",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "サイト説明",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "address",
      title: "住所",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "電話番号",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "メールアドレス",
      type: "string",
    }),
    defineField({
      name: "socialLinks",
      title: "SNSリンク",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", title: "プラットフォーム", type: "string" },
            { name: "url", title: "URL", type: "url" },
          ],
        },
      ],
    }),
    defineField({
      name: "ogImage",
      title: "OG画像",
      type: "image",
    }),
  ],
});
