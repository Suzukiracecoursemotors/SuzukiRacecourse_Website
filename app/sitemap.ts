import { MetadataRoute } from "next";
import { locales } from "@/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  let base: MetadataRoute.Sitemap = [];

  let paths = [
    "/",
    "/blog/blog-post",
    "/aftersale",
    "/aftersale/spareparts",
    "/aftersale/extend_warrenty",
    "/aftersale/bodyshop",
    "/sales/finance",
    "/sales/cuc",
    "/sales/insurance",
    "/sales/extend_warranty",
    "/sales/register_transfer",
    "/sales/cars/altovx",
    "/sales/cars/every",
    "/sales/cars/cultusvxr",
    "/sales/cars/wagonrvxr",
    "/sales/cars/swiftglvvt",
    "/sales/cars/ravi",
    "/infrastructure/details_dep_sales",
    "infrastructure/details_dep_aftersales",
  ];

  for (const path of paths) {
    for (const locale of locales) {
      base.push({
        url: domainPath(locale + path),
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.5,
      });
    }
  }

  return base;
}

function domainPath(path: string): string {
  return "https://www.Suzukiracecoursemotor.com.pk/" + path;
  //return process.env.DOMAIN + path;
}
