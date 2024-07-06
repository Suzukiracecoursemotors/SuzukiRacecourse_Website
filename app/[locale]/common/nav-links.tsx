import { getTranslations } from "next-intl/server";
import React from "react";
import { Link } from "@/navigation";

enum NavLinksLocale {
  Home = "Home",
  Departments = "Departments",
  CUC = "CUC",
  Aftersale = "Aftersale",
  Gallery = "Gallery",
  Blog = "Blog",
  Finance = "Finance",
  Parts = "Parts",
  Support = "Support",
  BodyShop = "BodyShop",
  Contact = "Contact",
  Sale = "Sale",
}

type NavLink = {
  locale: NavLinksLocale;
  path: string;
  children?: NavLink[];
};

const linksConfig: NavLink[] = [
  {
    locale: NavLinksLocale.Departments,
    path: "/departments",
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
        path: "/aftersale",
      },
      {
        locale: NavLinksLocale.Parts,
        path: "/aftersale/service",
      },
      {
        locale: NavLinksLocale.Support,
        path: "/aftersale/parts",
      },
      {
        locale: NavLinksLocale.BodyShop,
        path: "/aftersale/bodyshop",
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
        if (
          link.children &&
          (link.locale === NavLinksLocale.Sale ||
            link.locale === NavLinksLocale.Aftersale)
        ) {
          return (
            <li key={link.locale} className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                id={`dropdown-${link.locale}`}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t(`nav.${link.locale}`)}
              </a>
              <ul
                className="dropdown-menu dropdown-animation dropdown-menu-end min-w-auto bg-light"
                aria-labelledby={`dropdown-${link.locale}`}
              >
                {link.children.map((child) => (
                  <li key={child.path}>
                    <Link href={child.path} className="dropdown-item text-dark">
                      {t(`nav.${child.locale}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
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
