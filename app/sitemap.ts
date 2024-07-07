import { MetadataRoute } from "next";
import { locales } from "@/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  let base: MetadataRoute.Sitemap = [];
  let paths = [
    "/",
    "/blog/blog-post",
    "/aftersale",
    "/aftersale/service",
    "/aftersale/extend_warrenty",
    "/aftersale/bodyshop",
    "/sales/finance",
    "/sales/cuc",
    "/sales/insurance",
    "/sales/extend_warranty",
    "/sales/register_transfer",
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
