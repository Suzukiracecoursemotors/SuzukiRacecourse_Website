import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
import React from "react";
import { Link } from "@/navigation";

type NavLinksProps = {
  locale: Locale;
};

enum NavLinksLocale {
  Home = "Home",
  Sale = "Sale",
  Aftersale = "Aftersale",
  Gallery = "gallery",
  Blog= "Blog",
  Contact= "Contact"

}

type NavLink = {
  locale: NavLinksLocale;
  path: string;
};

const linksConfig: NavLink[] = [
  {
    locale: NavLinksLocale.Home,
    path: "/",
  },
  {
    locale: NavLinksLocale.Sale,
    path: "/sales",
  },
  {
    locale: NavLinksLocale.Aftersale,
    path: "/aftersale",
  },
  {
    locale: NavLinksLocale.Gallery,
    path: "/gallery",
  },
  {
    locale: NavLinksLocale.Blog,
    path: "/blog",
  },
  {
    locale: NavLinksLocale.Contact,
    path: "/contact",
  },
];

export default async function NavLinks({ locale }: NavLinksProps) {
  const t = await getTranslations({ locale, namespace: "header" });

  return linksConfig.map((link: NavLink) => {
    return (
      <li key={link.path} className="nav-item ">
        <Link className="nav-link text-dark" href={link.path} locale={locale}>
          {t(`nav.${link.locale}`)}
        </Link>
      </li>
    );
  });
}
