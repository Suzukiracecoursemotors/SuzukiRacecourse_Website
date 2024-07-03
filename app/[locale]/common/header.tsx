"use client";
import Logo from "../../[locale]/public/logo.png";
import Constants from "@/data/Constants";
import React, { useState } from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import HeaderLocaleSwitcher from "./locale-switcher";

type HeaderProps = {
  children: React.ReactNode;
};

function Header({ children}: HeaderProps) {
  const t = useTranslations("header"); 
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav
      id="mainNav"
      className={`navbar  navbar-expand-lg bg-white navbar-sticky `}
    >
      <div className="container display-flex">
        <Link href="/" className="navbar-brand" >
          <Image
            src={ Logo}
            alt="racecourselogo"
            width={35}
            height={35}
          />
        </Link>
        {/* Secondary */}
        <ul className={`navbar-nav navbar-nav-secondary  order-lg-3`}>
          <li className="nav-item d-lg-none">
            <a className="nav-link text-dark nav-icon" onClick={toggleMenu}>
              <span className="bi bi-list"></span>
            </a>
          </li>

            <div className="nav-item d-none d-lg-block">
            <Link
              href={`tel:${Constants.PHONE}`}
              className="btn btn-with-icon btn-yellow rounded-pill mx-auto "

            >
              <i className="bi bi-telephone-fill me-1"></i>
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
          <ul className="navbar-nav text-dark ">
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
