import { getTranslations } from "next-intl/server";
import React from "react";
import { Link } from "@/navigation";

enum NavLinksLocale {
  Home = "Home",
  SpareParts = "SpareParts",
  CUC = "CUC",
  Aftersale = "Aftersale",
  Aboutus = "About Us",
  Blog = "Blog",
  Finance = "Finance",
  Mechanical = "Mechanical",
  BodyShop = "BodyShop",
  Contact = "Contact",
  Sale = "Sale",
  Warranty = "Extend_Warranty",
  Insurance = "Insurance",
  // Transfer = "Registration_Transfer",
  Careers = "Careers",
  Infrastructure = "Infrastructure",
}

type NavLink = {
  locale: NavLinksLocale;
  path: string;
  children?: NavLink[];
};

const linksConfig: NavLink[] = [
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
      {
        locale: NavLinksLocale.Insurance,
        path: "/sales/insurance",
      },
      {
        locale: NavLinksLocale.Warranty,
        path: "/sales/extend_warranty",
      },
    ],
  },
  {
    locale: NavLinksLocale.Aftersale,
    path: "/aftersale",
    // children: [
    //   {
    //     locale: NavLinksLocale.Aftersale,
    //     path: "/aftersale",
    //   },
    //   {
    //     locale: NavLinksLocale.Mechanical,
    //     path: "/aftersale/service",
    //   },
    //   {
    //     locale: NavLinksLocale.SpareParts,
    //     path: "/aftersale/spareparts",
    //   },
    //   {
    //     locale: NavLinksLocale.BodyShop,
    //     path: "/aftersale/bodyshop",
    //   },
    // ],
  },

  {
    locale: NavLinksLocale.Infrastructure,
    path: "/infrastructure",
  },
  {
    locale: NavLinksLocale.Aboutus,
    path: "/aboutus",
  },
  {
    locale: NavLinksLocale.Blog,
    path: "/blog",
  },
  {
    locale: NavLinksLocale.Careers,
    path: "/career",
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
