import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import { apiVersion, dataset, projectId, isSanityConfigured } from "./env";

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false, // Set to false in production for fresh content or with ISR
    })
  : null;

// Image URL Builder
const imageBuilder = isSanityConfigured && client ? createImageUrlBuilder(client) : null;

// Helper to get image URL
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlForImage(source: any) {
  if (!imageBuilder || !source) return "";
  return imageBuilder.image(source).auto("format").fit("max").url();
}

// GROQ Queries
export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  category,
  publishedAt,
  readTime,
  featured
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  category,
  publishedAt,
  readTime,
  featured,
  content
}`;
