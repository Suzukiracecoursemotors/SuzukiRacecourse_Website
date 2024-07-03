import { Inter } from "next/font/google";
import "@/scss/index.scss";
import Header from "@/app/[locale]/common/header";
import Providers from "@/app/[locale]/providers";
import NavLinks from "@/app/[locale]/common/nav-links";
import Footer from "@/app/[locale]/common/footer";

const inter = Inter({ subsets: ["latin"] });
import type { Metadata, Viewport } from "next";
import TrackingManager from "./common/tracking-manager";

const faviconUrls: any = {
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: "/[locale]/public/logoneww.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/[locale]/public/logoneww.png",
    },
    {
      rel: "apple-touch-icon",
      url: "/[locale]/public/logoneww.png",
      sizes: "180x180",
    },
  ],
};
export const metadata: Metadata = {
  icons: [faviconUrls.icon, faviconUrls.svgIcon, faviconUrls.appleTouchIcon],
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
    <html suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <TrackingManager />
          <Header>
            <NavLinks />
          </Header>
          <main>{children} </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
