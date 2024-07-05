import { getTranslations } from "next-intl/server";
import React from "react";
import { Link } from "@/navigation";
import Dropdown from "../common/dropdown"; // Import the Dropdown component

enum NavLinksLocale {
  Home = "Home",
  Sale = "Sale",
  CUC = "CUC",
  Aftersale = "Aftersale",
  Gallery = "Gallery",
  Blog = "Blog",
  Finance = "Finance",
  Parts = "Parts",
  Support = "Support",
  Contact = "Contact",
}

type NavLink = {
  locale: NavLinksLocale;
  path: string;
  children?: NavLink[];
};

const linksConfig: NavLink[] = [
  {
    locale: NavLinksLocale.Home,
    path: "/",
  },
  {
    locale: NavLinksLocale.Sale,
    path: "/sales",
    children: [
      {
        locale: NavLinksLocale.Sale,
        path: "/sales",
      },
      {
        locale: NavLinksLocale.CUC,
        path: "/sales/cuc",
      },
      {
        locale: NavLinksLocale.Finance,
        path: "/sales/finance",
      },
    ],
  },
  {
    locale: NavLinksLocale.Aftersale,
    path: "/aftersale",
    children: [
      {
        locale: NavLinksLocale.Aftersale,
        path: "/aftersale/service",
      },
      {
        locale: NavLinksLocale.Parts,
        path: "/aftersale/parts",
      },
      {
        locale: NavLinksLocale.Support,
        path: "/aftersale/support",
      },
    ],
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
    <ul className="navbar-nav">
      {linksConfig.map((link: NavLink) => {
        if (link.children) {
          return (
            <div>
              <Dropdown
                key={link.path}
                locale={link.locale}
                path={link.path}
                children={link.children}
                t={t}
              />
            </div>
          );
        }

        return (
          <li key={link.path} className="nav-item">
            <Link href={link.path} className="nav-link text-dark">
              {t(`nav.${link.locale}`)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
