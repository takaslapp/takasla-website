import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Blog Yazısı",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Yazı Başlığı",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(120),
    }),
    defineField({
      name: "slug",
      title: "URL (Slug)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Kısa Özet",
      description: "Yazının başında ve kartlarda gözükecek kısa özet cümle.",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(260),
    }),
    defineField({
      name: "coverImage",
      title: "Kapak Görseli",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternatif Metin (SEO Alt Tag)",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Rehber", value: "Rehber" },
          { title: "Döngüsel Ekonomi", value: "Döngüsel Ekonomi" },
          { title: "Güvenlik", value: "Güvenlik" },
          { title: "İpuçları", value: "İpuçları" },
          { title: "Duyurular", value: "Duyurular" },
        ],
      },
      initialValue: "Rehber",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Yayın Tarihi",
      type: "date",
      initialValue: () => new Date().toISOString().split("T")[0],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "readTime",
      title: "Okuma Süresi",
      type: "string",
      description: "Örn: 4 dk okuma",
      initialValue: "4 dk okuma",
    }),
    defineField({
      name: "featured",
      title: "Öne Çıkarılsın mı?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "content",
      title: "Yazı İçeriği",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Başlık 2 (H2)", value: "h2" },
            { title: "Başlık 3 (H3)", value: "h3" },
            { title: "Alıntı (Quote)", value: "blockquote" },
          ],
          lists: [
            { title: "Madde İmleri (Bullet)", value: "bullet" },
            { title: "Numaralı Liste", value: "number" },
          ],
        },
        {
          type: "object",
          name: "callout",
          title: "İpucu / Vurgu Kutusu",
          fields: [
            {
              name: "title",
              title: "Kutu Başlığı",
              type: "string",
              initialValue: "Önemli İpucu",
            },
            {
              name: "text",
              title: "Açıklama",
              type: "text",
              rows: 2,
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "coverImage",
    },
  },
});
