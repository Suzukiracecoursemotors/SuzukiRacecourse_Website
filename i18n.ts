import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "ur"];

export type Locale = "en" | "ur" | undefined;

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./dictionaries/${locale}.json`)).default,
  };
});
