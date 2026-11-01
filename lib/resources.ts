import {
  type ResourceArticle,
  resourceArticles
} from "./resources-data";

export type { ResourceArticle, ResourceSection } from "./resources-data";

export function getAllResources(): ResourceArticle[] {
  return [...resourceArticles];
}

export function getFeaturedResource(): ResourceArticle | undefined {
  return resourceArticles.find((art) => art.featured) ?? resourceArticles[0];
}

export function getResourceBySlug(slug: string): ResourceArticle | undefined {
  return resourceArticles.find((art) => art.slug === slug);
}

export function getResourcesByCategory(category: string): ResourceArticle[] {
  return resourceArticles.filter((art) => art.category === category);
}

export function getAllCategories(): string[] {
  const categories = new Set(resourceArticles.map((art) => art.category));
  return Array.from(categories);
}
