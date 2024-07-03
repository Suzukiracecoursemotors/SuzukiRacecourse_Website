import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
// import Image from "next/image";
import NotFound from "../[...slug]/page";
import Address from "../Home/address";



async function Aftersale() {
  const t = await getTranslations({  namespace: "page" });

  return (
    // <>
    //   <section className="overflow-hidden bg-black inverted">
    //     <div className="d-flex flex-column container py-20 min-vh-100 level-1">
    //       <div className="row align-items-center justify-content-center justify-content-lg-end my-auto">
    //         <div className="col-md-8 col-lg-5 text-center text-lg-start">
    //           <span className="badge bg-opaque-yellow text-yellow rounded-pill">
    //             {t("about.therapist")}
    //           </span>
    //           <h1 className="display-2 fw-bold lh-sm my-2 my-xl-4">
    //             {t("about.therapist_name")}
    //           </h1>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="container-fluid back back-background">
    //       <div className="row h-100">
    //         <div className="col-lg-6" data-aos="fade-in">
    //           <Image
    //             height={903}
    //             width={553}
    //             className="back-background"
    //             style={{
    //               backgroundImage: `url(${Assets.Juliapic})`,
    //             }}
    //             data-top-top="transform: translateY(0%);"
    //             data-top-bottom="transform: translateY(10%);"
    //             src={""}
    //             alt={""}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* accordion */}
    //   <section className="py-15 py-xl-20 bg-black inverted">
    //     <div className="container">
    //       <div className="row mb-20">
    //         <div className="col-lg-10">
    //           <p className="h3 fs-4 text-center">
    //             {t("about.therapist_intro")}
    //           </p>
    //         </div>
    //       </div>

    //       <div className="row justify-content-center mb-8">
    //         <div className="col-lg-10">
    //           <h2 className="fw-bold"> {t("about.techniques.title")}</h2>
    //         </div>
    //       </div>
    //       <div className="row justify-content-center">
    //         <div className="col-lg-10">
    //           <div className="accordion accordion-highlight" id="accordion-1">
    //             {/* Render each technique directly */}
    //             <div className="accordion-item">
    //               <h2 className="accordion-header" id="heading-1">
    //                 <button
    //                   className="accordion-button fs-lg collapsed text-white"
    //                   type="button"
    //                   data-bs-toggle="collapse"
    //                   data-bs-target="#collapse-1"
    //                   aria-expanded="false"
    //                   aria-controls="collapse-1"
    //                 >
    //                   <i className="bi bi-asterisk text-yellow fs-5 me-2" />
    //                   {t("about.techniques.question1")}
    //                 </button>
    //               </h2>
    //               <div
    //                 id="collapse-1"
    //                 className="accordion-collapse collapse"
    //                 aria-labelledby="heading-1"
    //                 data-bs-parent="#accordion-1"
    //               >
    //                 <div className="accordion-body">
    //                   <p className="text-secondary">
    //                     {t("about.techniques.answer1")}
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="accordion-item">
    //               <h2 className="accordion-header" id="heading-2">
    //                 <button
    //                   className="accordion-button fs-lg collapsed text-white"
    //                   type="button"
    //                   data-bs-toggle="collapse"
    //                   data-bs-target="#collapse-2"
    //                   aria-expanded="false"
    //                   aria-controls="collapse-2"
    //                 >
    //                   <i className="bi bi-asterisk text-yellow fs-5 me-2" />
    //                   {t("about.techniques.question2")}
    //                 </button>
    //               </h2>
    //               <div
    //                 id="collapse-2"
    //                 className="accordion-collapse collapse"
    //                 aria-labelledby="heading-2"
    //                 data-bs-parent="#accordion-1"
    //               >
    //                 <div className="accordion-body">
    //                   <p className="text-secondary">
    //                     {t("about.techniques.answer2")}
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Customer reviews */}
    //   <section className="py-15 py-xl-20 bg-black inverted">
    //     <div className="container">
    //       <div className="row justify-content-center">
    //         <div className="col-lg-10">
    //           <div className="row justify-content-center mb-5">
    //             <div className="col-lg-8 text-center">
    //               <span className="eyebrow mb-2 text-secondary">
    //                 {t("about.customer_review.review_title")}
    //               </span>
    //               <h2 className="fw-bold">
    //                 {" "}
    //                 {t("about.customer_review.title")}
    //               </h2>
    //             </div>
    //           </div>
    //           <div className="row">
    //             <div className="col">
    //               <ul className="list-unstyled border-bottom">
    //                 {/* Review 1 */}
    //                 <li className="border-top py-5">
    //                   <div className="d-flex flex-wrap justify-content-between">
    //                     <div className="col-md-4 mb-4 mb-md-0">
    //                       <div className="d-flex align-items-end mb-1">
    //                         <span className="fs-3 fw-bold lh-1 mb-0 me-1">
    //                           {t("about.customer_review.rating")}
    //                         </span>
    //                         <span className="text-muted">
    //                           {" "}
    //                           {t("about.customer_review.total_rating")}
    //                         </span>
    //                       </div>
    //                       <ul className="rating text-yellow">
    //                         {[...Array(4)].map((_, i) => (
    //                           <li key={i}>
    //                             <i className="bi bi-star-fill" />
    //                           </li>
    //                         ))}
    //                       </ul>
    //                     </div>
    //                     <div className="col-md-8">
    //                       <p className="mb-2 lead text-secondary">
    //                         {t("about.customer_review.description")}
    //                       </p>
    //                       <span className="eyebrow">
    //                         {t("about.customer_review.author")}
    //                       </span>
    //                     </div>
    //                   </div>
    //                 </li>
    //                 {/* Review 2 */}
    //                 <li className="border-top py-5">
    //                   <div className="d-flex flex-wrap justify-content-between">
    //                     <div className="col-md-4 mb-4 mb-md-0">
    //                       <div className="d-flex align-items-end mb-1">
    //                         <span className="fs-3 fw-bold lh-1 mb-0 me-1">
    //                           {t("about.customer_review.rating")}
    //                         </span>
    //                         <span className="text-muted">
    //                           {" "}
    //                           {t("about.customer_review.total_rating")}
    //                         </span>
    //                       </div>
    //                       <ul className="rating text-yellow">
    //                         {[...Array(4)].map((_, i) => (
    //                           <li key={i}>
    //                             <i className="bi bi-star-fill" />
    //                           </li>
    //                         ))}
    //                       </ul>
    //                     </div>
    //                     <div className="col-md-8">
    //                       <p className="mb-2 lead text-secondary">
    //                         {t("about.customer_review.description")}
    //                       </p>
    //                       <span className="eyebrow">
    //                         {t("about.customer_review.author")}
    //                       </span>
    //                     </div>
    //                   </div>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>
    <Address />

  );
}

export default Aftersale;
