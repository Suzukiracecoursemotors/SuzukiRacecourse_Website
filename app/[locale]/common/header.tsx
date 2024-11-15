"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import Image from "next/image";
import logo from "../../[locale]/public/Asset 1.svg";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { lightNavPaths } from "@/lib/utils";

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  const t = useTranslations("header");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [header, setHeader] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    if (!showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setHeader(currentScrollPos >= prevScrollPos || prevScrollPos < -1);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);
  const closeMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest(".dropdown")) {
      return;
    }
    setShowMobileMenu(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    window.addEventListener("auto", handleScroll);
    return () => {
      window.removeEventListener("auto", handleScroll);
    };
  }, [handleScroll]);
  const pathname = usePathname();
  const theme = lightNavPaths.some((path) => pathname.includes(path))
    ? "light"
    : "dark";

  return !header ? (
    <nav
      id="mainNav"
      className={`navbar bg-white
       ${
         header
           ? "mainNav bg-white"
           : " navbar-expand-lg bg-white navbar-sticky"
       }`}
    >
      <div className="container display-flex">
        <Link href="/" className="navbar-brand">
          <Image
            src={theme === "dark" ? logo : logo}
            alt="racecoursemotors"
            width={40}
            height={40}
          />
        </Link>
        {/* Secondary */}
        <ul className={`navbar-nav navbar-nav-secondary  order-lg-3 `}>
          <li className="nav-item d-lg-none">
            <button
              className="nav-link text-dark nav-icon"
              onClick={toggleMenu}
            >
              <span className="bi text-dark bi-list"></span>
            </button>
          </li>

          <div className="nav-item d-none d-lg-block row">
            <Link
              href={`tel:${Constants.PHONE}`}
              className={`btn btn-outline-${
                theme === "light" ? "white" : "light"
              }  btn btn-with-icon rounded-pill text-dark ms-2`}
            >
              <i className="bi bi-telephone-fill text-dark me-1"></i>
              {t("reserve_appointment")}
            </Link>
          </div>
        </ul>

        {/* Primary */}
        <div
          className={`collapse navbar-collapse  ${showMobileMenu && "show "}`}
          id="navbar"
          data-bs-parent="#mainNav"
          onClick={closeMenu}
        >
          {children}
        </div>
      </div>
    </nav>
  ) : (
    <>
      {prevScrollPos === -1 ? (
        <nav id="mainNav" className={`navbar navbar-sticky`}>
          <div className="container bg-white">
            <Link href="/" className="navbar-brand">
              <Image
                src={theme === "dark" ? logo : logo}
                alt="SuzukiRacecourse"
                width={50}
                height={50}
              />
            </Link>

            {/* Secondary */}
            <ul className={`navbar-nav navbar-nav-secondary  order-lg-3 `}>
              <li className="nav-item d-lg-none">
                <button
                  className="nav-link text-dark nav-icon"
                  onClick={toggleMenu}
                >
                  <span className="bi  bi-list"></span>
                </button>
              </li>

              <div className="nav-item d-none d-lg-block">
                <Link
                  href={`tel:${Constants.PHONE}`}
                  className={`btn btn-outline-${
                    theme === "light" ? "dark" : "white"
                  } rounded-pill ms-2`}
                >
                  <i className="bi bi-telephone-fill me-1"></i>
                  {t("reserve_appointment")}
                </Link>
              </div>
            </ul>

            {/* Primary */}
            <div
              className={`collapse navbar-collapse bg-white
           ${showMobileMenu && "show "}`}
              id="navbar"
              data-bs-parent="#mainNav"
              onClick={closeMenu}
            >
              {children}
            </div>
          </div>
        </nav>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
