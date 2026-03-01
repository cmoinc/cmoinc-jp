import { client } from "./client";

// ---- News ----
export async function getAllNews() {
  return client.fetch(
    `*[_type == "news"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      category,
      excerpt,
      mainImage
    }`,
    {},
    { next: { tags: ["news"] } }
  );
}

export async function getLatestNews(limit = 3) {
  return client.fetch(
    `*[_type == "news"] | order(publishedAt desc) [0...$limit] {
      _id,
      title,
      slug,
      publishedAt,
      category,
      excerpt
    }`,
    { limit },
    { next: { tags: ["news"] } }
  );
}

export async function getNewsBySlug(slug: string) {
  return client.fetch(
    `*[_type == "news" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      category,
      excerpt,
      mainImage,
      body
    }`,
    { slug },
    { next: { tags: ["news"] } }
  );
}

export async function getNewsSlugs() {
  return client.fetch(
    `*[_type == "news" && defined(slug.current)].slug.current`,
    {},
    { next: { tags: ["news"] } }
  );
}

// ---- CSR ----
export async function getAllCSR() {
  return client.fetch(
    `*[_type == "csr"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage
    }`,
    {},
    { next: { tags: ["csr"] } }
  );
}

export async function getCSRBySlug(slug: string) {
  return client.fetch(
    `*[_type == "csr" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      body
    }`,
    { slug },
    { next: { tags: ["csr"] } }
  );
}

export async function getCSRSlugs() {
  return client.fetch(
    `*[_type == "csr" && defined(slug.current)].slug.current`,
    {},
    { next: { tags: ["csr"] } }
  );
}

// ---- Members ----
export async function getAllMembers() {
  return client.fetch(
    `*[_type == "member"] | order(order asc) {
      _id,
      name,
      nameEn,
      role,
      photo,
      bio,
      links
    }`,
    {},
    { next: { tags: ["member"] } }
  );
}

// ---- Site Settings ----
export async function getSiteSettings() {
  return client.fetch(
    `*[_type == "siteSettings"][0]`,
    {},
    { next: { tags: ["siteSettings"] } }
  );
}
