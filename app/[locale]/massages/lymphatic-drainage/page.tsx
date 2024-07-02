import Assets from "@/data/Assets";
import MassageProducts from "@/app/[locale]/home/home-massage-costmetics";
import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
import Address from "@/app/[locale]/home/address";
import Pricing from "@/app/[locale]/home/pricing";
import FAQSection from "@/app/[locale]/common/faq-section";
import Image from "next/image";
import HeroSmallWithImage from "@/app/[locale]/common/hero-small-with-image";

interface MassageParts {
  image: string;
  title: string;
  description: string;
}
type LymphaticDrainageMassageProps = {
  params: { locale: Locale };
};

export default async function LymphaticDrainageMassage({
  params: { locale },
}: LymphaticDrainageMassageProps) {
  const t = await getTranslations({ locale, namespace: "page" });

  const parts: MassageParts[] = [
    {
      title: t("lymphatic_drainage.massage_parts.head.title"),
      description: t("lymphatic_drainage.massage_parts.head.description"),
      image: Assets.LymphaticDrainageMassage1,
    },
    {
      title: t("lymphatic_drainage.massage_parts.neck.title"),
      description: t("lymphatic_drainage.massage_parts.neck.description"),
      image: Assets.LymphaticDrainageMassage2,
    },
    {
      title: t("lymphatic_drainage.massage_parts.armpits.title"),
      description: t("lymphatic_drainage.massage_parts.armpits.description"),
      image: Assets.LymphaticDrainageMassage3,
    },
    {
      title: t("lymphatic_drainage.massage_parts.hands.title"),
      description: t("lymphatic_drainage.massage_parts.hands.description"),
      image: Assets.LymphaticDrainageMassage4,
    },
    {
      title: t("lymphatic_drainage.massage_parts.breast.title"),
      description: t("lymphatic_drainage.massage_parts.breast.description"),
      image: Assets.LymphaticDrainageMassage5,
    },
    {
      title: t("lymphatic_drainage.massage_parts.back.title"),
      description: t("lymphatic_drainage.massage_parts.back.description"),
      image: Assets.LymphaticDrainageMassage6,
    },
    {
      title: t("lymphatic_drainage.massage_parts.abdominal.title"),
      description: t("lymphatic_drainage.massage_parts.abdominal.description"),
      image: Assets.LymphaticDrainageMassage7,
    },
    {
      title: t("lymphatic_drainage.massage_parts.legs.title"),
      description: t("lymphatic_drainage.massage_parts.legs.description"),
      image: Assets.LymphaticDrainageMassage8,
    },
    {
      title: t("lymphatic_drainage.massage_parts.feet.title"),
      description: t("lymphatic_drainage.massage_parts.feet.description"),
      image: Assets.LymphaticDrainageMassage9,
    },
  ];
  const drainageBenefits = [
    t("lymphatic_drainage.benefits.p1"),
    t("lymphatic_drainage.benefits.p2"),
    t("lymphatic_drainage.benefits.p3"),
    t("lymphatic_drainage.benefits.p4"),
    t("lymphatic_drainage.benefits.p5"),
    t("lymphatic_drainage.benefits.p6"),
  ];

  const contraindicationsPackages = [
    t("lymphatic_drainage.contraindications.p1"),
    t("lymphatic_drainage.contraindications.p2"),
    t("lymphatic_drainage.contraindications.p3"),
    t("lymphatic_drainage.contraindications.p4"),
    t("lymphatic_drainage.contraindications.p5"),
    t("lymphatic_drainage.contraindications.p6"),
  ];

  const FAQs = [
    {
      question: t("lymphatic_drainage.faq.q1"),
      answer: t("lymphatic_drainage.faq.a1"),
    },
    {
      question: t("lymphatic_drainage.faq.q2"),
      answer: t("lymphatic_drainage.faq.a2"),
    },
    {
      question: t("lymphatic_drainage.faq.q3"),
      answer: t("lymphatic_drainage.faq.a3"),
    },
    {
      question: t("lymphatic_drainage.faq.q4"),
      answer: t("lymphatic_drainage.faq.a4"),
    },
    {
      question: t("lymphatic_drainage.faq.q5"),
      answer: t("lymphatic_drainage.faq.a5"),
    },
    {
      question: t("lymphatic_drainage.faq.q6"),
      answer: t("lymphatic_drainage.faq.a6"),
    },
    {
      question: t("lymphatic_drainage.faq.q7"),
      answer: t("lymphatic_drainage.faq.a7"),
    },
    {
      question: t("lymphatic_drainage.faq.q8"),
      answer: t("lymphatic_drainage.faq.a8"),
    },
    {
      question: t("lymphatic_drainage.faq.q9"),
      answer: t("lymphatic_drainage.faq.a9"),
    },
    {
      question: t("lymphatic_drainage.faq.q10"),
      answer: t("lymphatic_drainage.faq.a10"),
    },
    {
      question: t("lymphatic_drainage.faq.q11"),
      answer: t("lymphatic_drainage.faq.a11"),
    },
    {
      question: t("lymphatic_drainage.faq.q12"),
      answer: t("lymphatic_drainage.faq.a12"),
    },
    {
      question: t("lymphatic_drainage.faq.q13"),
      answer: t("lymphatic_drainage.faq.a13"),
    },
    {
      question: t("lymphatic_drainage.faq.q14"),
      answer: t("lymphatic_drainage.faq.a14"),
    },
    {
      question: t("lymphatic_drainage.faq.q15"),
      answer: t("lymphatic_drainage.faq.a15"),
    },
    {
      question: t("lymphatic_drainage.faq.q16"),
      answer: t("lymphatic_drainage.faq.a16"),
    },
    {
      question: t("lymphatic_drainage.faq.q17"),
      answer: t("lymphatic_drainage.faq.a17"),
    },
    {
      question: t("lymphatic_drainage.faq.q18"),
      answer: t("lymphatic_drainage.faq.a18"),
    },
    {
      question: t("lymphatic_drainage.faq.q19"),
      answer: t("lymphatic_drainage.faq.a19"),
    },
    {
      question: t("lymphatic_drainage.faq.q20"),
      answer: t("lymphatic_drainage.faq.a20"),
    },
    {
      question: t("lymphatic_drainage.faq.q21"),
      answer: t("lymphatic_drainage.faq.a21"),
    },
  ];

  return (
    <>
      <HeroSmallWithImage
        title={t("lymphatic_drainage.title")}
        imageURL={Assets.MassagesLymphaticDrainageHero}
      />

      {/* about */}
      <section className="py-15 py-xl-20 border-bottom">
        <div className="container">
          <div className="row justify-content-center mb-10">
            <div className="col-lg-10">
              <p className="fs-6">{t("lymphatic_drainage.description.p1")}</p>
              <p className="fs-6">{t("lymphatic_drainage.description.p2")}</p>
              <p className="fs-6">{t("lymphatic_drainage.description.p3")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-15 py-xl-20 bg-light">
        <div className="container mt-5 mt-xl-10">
          <div className="row mb-10 g-3 g-xl-5 align-items-end">
            <div className="col-lg-8">
              <h2 className="display-1 h1">
                {t("lymphatic_drainage.massage_parts.title")}
              </h2>
            </div>
          </div>

          {parts.map((item, index) => (
            <div
              className="row g-0 bg-white  mb-10 mb-md-5  mb-lg-10"
              data-aos="fade-up"
              data-aos-delay={150}
              key={index}
            >
              <div className="col-lg-6 p-4 p-md-5 order-lg-2">
                <h3 className="fw-bold h4">{item.title}</h3>
                <p className="fs-lg text-secondary">{item.description}</p>
              </div>
              <div className="col-lg-6 order-lg-1 position-relative">
                <Image
                  alt={`${index}`}
                  src={item.image}
                  height={800}
                  width={600}
                  layout="responsive"
                ></Image>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-15 py-xl-20 border-bottom">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6">
              <h2 className="fw-light">
                {t("lymphatic_drainage.benefits.title")}
              </h2>
            </div>
          </div>

          <div className="row mb-10">
            <div className="col-lg-10">
              <p className="fs-lg">{t("lymphatic_drainage.benefits.about")}</p>
            </div>
          </div>
          <div className="row g-3 g-xl-5">
            {drainageBenefits.map((packageDescription, index) => (
              <div className="col-lg-4" key={index}>
                <div className="d-flex align-items-center">
                  <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                    <i className="bi bi-check2 text-green"></i>
                  </div>
                  <div>
                    <p className="fs-lg">{packageDescription}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Massage products */}
      <MassageProducts locale={locale} />

      {/*  Address  */}
      <Address locale={locale} />

      {/*  Pricing  */}
      <Pricing
        locale={locale}
        description={t("lymphatic_drainage.price_description")}
      />

      <section className="py-15 py-xl-20 border-bottom">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6">
              <h2 className="fw-light">
                {t("lymphatic_drainage.contraindications.title")}
              </h2>
            </div>
          </div>

          <div className="row mb-10">
            <div className="col-lg-10">
              <p className="fs-lg">
                {t("lymphatic_drainage.contraindications.about")}
              </p>
            </div>
          </div>

          <div className="row g-3 g-xl-5 ">
            {contraindicationsPackages.map((contraindication, index) => (
              <div className="col-lg-4 " key={index}>
                <div className="d-flex  align-items-center">
                  <div className="icon-box icon-box-sm bg-opaque-red rounded-circle me-2 ">
                    <i className="bi bi-x-lg text-red "></i>
                  </div>
                  <div>
                    <p className="fs-lg ">{contraindication}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection questions={FAQs} title={t("lymphatic_drainage.faq.title")} />
    </>
  );
}
