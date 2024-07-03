"use client";

import { locales } from "@/i18n";
import { useState } from "react";
import Assets from "@/data/Assets";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/navigation";

export default function HeaderLocaleSwitcher() {
  const t = useTranslations("header");

  const [showFlagMenu, setShowFlagMenu] = useState(false);
  const toggleFlag = () => {
    setShowFlagMenu(!showFlagMenu);
  };

  const pathName = usePathname();
  const router = useRouter();

  return (
    <li className="dropdown nav-item">
      <a className="nav-link small text-dark pb-2" onClick={toggleFlag}>
        <i className="bi bi-globe fa-fw me-1"></i>
        {t("nav.language")}
      </a>

      <ul
        className={`dropdown-menu dropdown-animation dropdown-menu-end min-w-auto bg-light ${
          showFlagMenu && "show"
        }`}
        aria-labelledby="languageDropdown"
      >
        {locales.map((locale) => (
          <li key={locale}>
            <a
              onClick={() => {
                router.replace(pathName, { locale });
              }}
              className="dropdown-item  me-4 pointer"
            >
              {locale === "bg" ? (
                <Image
                  className="fa-fw me-2"
                  src={Assets.BGFlag}
                  height="30"
                  width="30"
                  alt="Bulgarian language flag"
                />
              ) : (
                <Image
                  className="fa-fw me-2"
                  src={Assets.flagUK}
                  height="30"
                  width="30"
                  alt="English language flag"
                />
              )}
              {locale === "bg" ? "Български" : "English"}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
