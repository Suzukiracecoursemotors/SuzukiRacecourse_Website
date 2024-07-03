import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/scss/index.scss";
import { Locale } from "@/i18n";
import Header from "@/app/[locale]/common/header";
import Providers from "@/app/[locale]/providers";
import NavLinks from "@/app/[locale]/common/nav-links";
import Footer from "@/app/[locale]/common/footer";
import TrackingManager from "@/app/[locale]/common/tracking-manager";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.suzukiracecoursemotor.com"),
  title: "SUZUKI Racecourse Motors",

  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: "",
      sizes: "32x32",
    },
    { rel: "icon", type: "image/svg+xml", url: "" },
    { rel: "apple-touch-icon", url: "", sizes: "180x180" },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: "light",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html  suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <TrackingManager />
          <Header >
            <NavLinks  />
          </Header>
          <main >{children}</main>
          <Footer  />
        </Providers>
      </body>
    </html>
  );
}
