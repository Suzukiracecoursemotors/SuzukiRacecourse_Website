"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import SaleHome from "./salehome";

export default function Sale() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return <SaleHome />;
}
