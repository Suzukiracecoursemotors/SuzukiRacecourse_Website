import Assets from "@/data/Assets";
import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import FAQSection from "../common/faq-section";
import React from "react";
import { Link } from "@/navigation";
import NotFound from "../[...slug]/page";

type PricingPageProps = {
  params: { locale: Locale };
};

type PricingCards = {
  slug: string;
  price: string;
  massage: string;
  duration: string;
};

export default async function PricingPage({
  params: { locale },
}: PricingPageProps) {
  const t = await getTranslations({ locale, namespace: "page" });

  const pricingCards: PricingCards[] = [
    {
      slug: "d60",
      price: t("pricing.card1.price"),
      massage: t("pricing.card1.description"),
      duration: t("pricing.card1.duration"),
    },
    {
      slug: "d90",
      price: t("pricing.card2.price"),
      massage: t("pricing.card2.description"),
      duration: t("pricing.card2.duration"),
    },
    {
      slug: "d120",
      price: t("pricing.card3.price"),
      massage: t("pricing.card3.description"),
      duration: t("pricing.card3.duration"),
    },
  ];

  const pricingFAQa = [
    { question: t("pricing.faq.question1"), answer: t("pricing.faq.answer1") },
    { question: t("pricing.faq.question2"), answer: t("pricing.faq.answer2") },
    { question: t("pricing.faq.question3"), answer: t("pricing.faq.answer3") },
  ];

  return (
    // <>
    //   {/* Pricing */}
    //   <section className="py-15 py-xl-20">
    //     <div className="container mt-10">
    //       <div className="row justify-content-center mb-10">
    //         <div className="col-lg-8 text-center">
    //           <h1 className="mb-2">{t("pricing.title")}</h1>
    //           <p className="fs-lg text-secondary">{t("pricing.description")}</p>
    //         </div>
    //       </div>

    //       <div className="row g-3 g-xl-5 align-items-end">
    //         {pricingCards.map((card: PricingCards) => {
    //           return (
    //             <div className="col-md-4" key={card.slug}>
    //               <div className="card border">
    //                 <div className="card-body">
    //                   <h2 className="h1 mb-4"> {card.price}</h2>
    //                   <p className="text-muted mb-4">{card.massage}</p>
    //                   <ul className="list-unstyled mb-4">
    //                     <li className="py-1">
    //                       <i className="bi bi-clock" /> {card.duration}
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </section>

    //   {/* Gift Card */}
    //   <section className="py-15 py-xl-20">
    //     <div className="container">
    //       <div className="row align-items-center justify-content-between">
    //         <div className="col-lg-6 mb-5 mb-lg-0">
    //           <div className="frame">
    //             <Image
    //               src={Assets.GiftCard}
    //               className="img-fluid"
    //               alt=""
    //               height={300}
    //               width={680}
    //             />
    //             <span />
    //           </div>
    //         </div>
    //         <div className="col-lg-6 col-xl-5">
    //           <h2 className="fw-bold"> {t("pricing.gift_card.title")}</h2>
    //           <p className="text-secondary">
    //             {t("pricing.gift_card.description")}
    //           </p>
    //           <Link
    //             href={`/massage-voucher`}
    //             locale={locale}
    //             className="underline action text-dark"
    //           >
    //             {t("pricing.gift_card.cta")}
    //             <i className="bi bi-arrow-right"></i>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* FAQ */}
    //   <FAQSection title={t("pricing.faq.title")} questions={pricingFAQa} />
    // </>
    <NotFound/>

  );
}
