"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

function ThemesProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="data-bs-theme" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}

export default ThemesProvider;
