import type { MetadataRoute } from "next";
import { BOOKS } from "@/lib/data";

const STATIC = [
  "",
  "/books",
  "/bundles",
  "/authors",
  "/tracking",
  "/wishlist",
  "/cart",
  "/about",
  "/terms",
  "/delivery",
  "/privacy",
  "/faq",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...STATIC.map((p) => ({ url: p || "/", lastModified: now })),
    ...BOOKS.map((b) => ({ url: `/books/${b.slug}`, lastModified: now })),
  ];
}
