import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/scss/index.scss";
import Assets from "@/data/Assets";
import { Locale } from "@/i18n";
import Header from "@/app/[locale]/common/header";
import Providers from "@/app/[locale]/providers";
import NavLinks from "@/app/[locale]/common/nav-links";
import Footer from "@/app/[locale]/common/footer";
import TrackingManager from "@/app/[locale]/common/tracking-manager";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.voderstudio.com"),
  title: "SUZUKI Racecourse Motors",
  description:
    "Lymphatic Drainage, Osteopathy Massages in a cozy massage studio in the center of Sofia.",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: Assets.FavIconIco,
      sizes: "32x32",
    },
    { rel: "icon", type: "image/svg+xml", url: Assets.FavIconSVG },
    { rel: "apple-touch-icon", url: Assets.FavIconApple, sizes: "180x180" },
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
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <TrackingManager />
          <Header params={{ locale: params.locale }}>
            <NavLinks locale={params.locale} />
          </Header>
          <main>{children}</main>
          <Footer  />
        </Providers>
      </body>
    </html>
  );
}
