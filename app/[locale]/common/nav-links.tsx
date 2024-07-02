import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
import React from "react";
import { Link } from "@/navigation";

type NavLinksProps = {
  locale: Locale;
};

enum NavLinksLocale {
  Massages = "massages",
  Pricing = "pricing",
  AboutMe = "about_me",
  Gallery = "gallery",
}

type NavLink = {
  locale: NavLinksLocale;
  path: string;
};

const linksConfig: NavLink[] = [
  {
    locale: NavLinksLocale.Massages,
    path: "/massages",
  },
  {
    locale: NavLinksLocale.Pricing,
    path: "/pricing",
  },
  {
    locale: NavLinksLocale.AboutMe,
    path: "/about-me",
  },
  {
    locale: NavLinksLocale.Gallery,
    path: "/gallery",
  },
];

export default async function NavLinks({ locale }: NavLinksProps) {
  const t = await getTranslations({ locale, namespace: "header" });

  return linksConfig.map((link: NavLink) => {
    return (
      <li key={link.path} className="nav-item">
        <Link className="nav-link" href={link.path} locale={locale}>
          {t(`nav.${link.locale}`)}
        </Link>
      </li>
    );
  });
}
