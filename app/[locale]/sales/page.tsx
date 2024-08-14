"use client";
import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React, { useEffect } from "react";
import bannersales from "../public/bannersales.jpg";
import Carosil from "../common/carosil";
import "aos/dist/aos.css";
import AOS from "aos";
import { useTranslations } from "next-intl";
import SaleHome from "./salehome";

export default function Sale() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration and once option
  }, []);
  return <SaleHome />;
}
