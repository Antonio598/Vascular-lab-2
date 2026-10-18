import type { MetadataRoute } from "next";
import { studies } from "@/lib/estudios";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, priority: 1 },
    { url: `${site.url}/estudios/`, priority: 0.9 },
    ...studies.map((s) => ({ url: `${site.url}/estudios/${s.slug}/`, priority: 0.7 })),
  ];
}
