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
    // "/sales/cars/altovxl",
    // "/sales/cars/altovxrags",
    // "/sales/cars/altovxlags",
    "/sales/cars/cultusvxr",
    // "/sales/cars/cultusvxl",
    // "/sales/cars/cultusags",
    // "/sales/cars/wagonrags",
    // "/sales/cars/wagonrvxl",
    "/sales/cars/wagonrvxr",
    "/sales/cars/swiftglvvt",
    // "/sales/cars/swiftglvt",
    // "/sales/cars/swiftglmt",
    // "/sales/cars/bolancargo",
    "/sales/cars/bolanvx",
    "/sales/cars/ravi",
    "/infrastructure/details_dep_sales",
    "infrastructure/details_dep_aftersales",
  ];

  /*
    Do not use alternative structure for now.
    const alternativeLanguages = i18n.locales.filter(function(ele){
        return ele != i18n.defaultLocale;
    });*/

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
  return "https://www.Suzukiracecoursemotor.com/" + path;
  //return process.env.DOMAIN + path;
}
