import type { Locale } from "@/i18n";
import HomePage from "../[locale]/Home";

type HomeProps = {
  params: { locale: Locale };
};

export default async function Home({ params }: HomeProps) {
  return <HomePage params={params} />;
}
