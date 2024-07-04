"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import PK from "../public/Flag_of_Pakistan_Flat_Square-128x128.png";
import US from "../public/Flag_of_United_States-128x67.png";

const locales: ("en" | "ur")[] = ["en", "ur"];

export default function HeaderLocaleSwitcher() {
  const t = useTranslations("header");

  const [showFlagMenu, setShowFlagMenu] = useState(false);
  const toggleFlag = () => {
    setShowFlagMenu(!showFlagMenu);
  };

  const pathName = usePathname();
  const router = useRouter();

  return (
    <li className="dropdown nav-item text-dark mt-1">
      <a className="nav-link small pb-2" onClick={toggleFlag}>
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
              className="dropdown-item me-4 pointer"
            >
              {locale === "ur" ? (
                <Image
                  className="fa-fw me-2"
                  src={PK}
                  height="30"
                  width="30"
                  alt="Urdu language flag"
                />
              ) : (
                <Image
                  className="fa-fw me-2"
                  src={US}
                  height="30"
                  width="30"
                  alt="English language flag"
                />
              )}
              {locale === "ur" ? "اردو" : "English"}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
