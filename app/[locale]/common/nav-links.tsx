import { getTranslations } from "next-intl/server";
import React from "react";
import { Link } from "@/navigation";

enum NavLinksLocale {
  Home = "Home",
  Sale = "Sale",
  Aftersale = "Aftersale",
  Gallery = "gallery",
  Blog = "Blog",
  Contact = "Contact"
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

export default async function NavLinks() {
  const t = await getTranslations({ namespace: "header" });

  return (
    <ul className="nav d-block text-dark">
      {linksConfig.map((link: NavLink) => (
        <li key={link.path} className="nav-item">
          <Link className="nav-link" href={link.path}>
            {t(`nav.${link.locale}`)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
