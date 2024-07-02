"use client";
import Logo from "../../[locale]/public/suzuki-logo-5311518DD9-seeklogo.com.png";
import { Locale } from "@/i18n";
import Constants from "@/data/Constants";
import React, { useState } from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import HeaderLocaleSwitcher from "./locale-switcher";
import { usePathname } from "next/navigation";
import { lightNavPaths } from "@/lib/utils";

type HeaderProps = {
  params: { locale: Locale };
  children: React.ReactNode;
};

function Header({ children, params: { locale } }: HeaderProps) {
  const t = useTranslations("header");
  const pathname = usePathname();
  const theme = lightNavPaths.some((path) => pathname.includes(path))
    ? "light"
    : "dark";

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav
      id="mainNav"
      className={`navbar  navbar-expand-lg navbar-sticky navbar-${theme}`}
    >
      <div className="container">
        <Link href="/" className="navbar-brand" locale={locale}>
          <Image
            src={theme === "dark" ? Logo : Logo}
            alt="Voder Studio Logo"
            width={45}
            height={45}
          />
        </Link>
        {/* Secondary */}
        <ul className={`navbar-nav navbar-nav-secondary order-lg-3`}>
          <li className="nav-item d-lg-none">
            <a className="nav-link nav-icon" onClick={toggleMenu}>
              <span className="bi bi-list"></span>
            </a>
          </li>

          <div className="nav-item d-none d-lg-block">
            <Link
              href={`tel:${Constants.PHONE}`}
              className={`btn btn-outline-${
                theme === "light" ? "dark" : "white"
              } rounded-pill ms-2`}
            >
              <i className="bi me-1 bi-telephone-fill"></i>
              {t("reserve_appointment")}
            </Link>
          </div>
        </ul>

        {/* Primary */}
        <div
          className={`collapse navbar-collapse ${showMobileMenu && "show"}`}
          id="navbar"
          data-bs-parent="#mainNav"
        >
          <ul className="navbar-nav ">
            {children}
            <HeaderLocaleSwitcher />
          </ul>
        </div>

        {/* Mobile User Menu */}
      </div>
    </nav>
  );
}

export default Header;
