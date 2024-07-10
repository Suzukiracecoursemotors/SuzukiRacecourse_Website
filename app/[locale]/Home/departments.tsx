// import React from "react";
// import Constants from "@/data/Constants";
// import { Link } from "@/navigation";
// import Image from "next/image";
// import SalesImg from "../../[locale]/public/sale.jpeg";
// import AfterSalesImg from "../../[locale]/public/aftersale1.jpeg";
// import { getTranslations } from "next-intl/server";

// async function DepartmentsList() {
//   const t = await getTranslations({
//     namespace: "page.home.departments",
//   });

//   return (
//     <section className="py-3 py-xl-1 bg-light">
//       <div className="container mt-5 mt-xl-10">
//         <div className="row mb-10 g-3 g-xl-5 align-items-end">
//           <div className="col-md-8">
//             <h2 className="display-1 fw-bold text-black">{t("maintitle")}</h2>
//           </div>
//           <div className="col-md-4 text-lg-end">
//             <div className="d-inline-flex align-items-center mb-0">
//               <span className="fs-2 me-2 lh-1 fw-bold text-black">
//                 {Constants.GOOGLE_REVIEW_SCORE}{" "}
//               </span>
//               <ul className="rating text-black fs-5">
//                 {[...Array(5)].map((_, index) => (
//                   <li key={index}>
//                     <i className="bi bi-star-fill"></i>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <small className="d-block text-muted">{t("reviewCount")}</small>
//           </div>
//         </div>
//         <div className="row mb-5 g-3 g-xl-5">
//           <Link href="/sales">
//             <div className="col-md-12">
//               <div className="card card-arrow card-hover-border bg-white">
//                 <div className="row g-0">
//                   <div className="col-xl-6">
//                     <Image
//                       className="media equal-16-10"
//                       layout="responsive"
//                       width={100}
//                       height={80}
//                       src={SalesImg}
//                       alt=""
//                     />
//                   </div>
//                   <div className="col-xl-6">
//                     <div className="card-body">
//                       <h3 className="card-title mt-2 fs-4 lh-2 pe-xl-10 text-black">
//                         {t("titledep")}
//                       </h3>
//                       <small className="d-block">{t("description")}</small>
//                       <p className="underline action text-red fs-lg mt-1">
//                         {t("learnmore")} <i className="bi bi-arrow-right"></i>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         </div>
//         <div className="row mb-5 g-3 g-xl-5">
//           <Link href="/aftersale  ">
//             <div className="col-md-12">
//               <div className="card card-arrow card-hover-border bg-white">
//                 <div className="row g-3">
//                   <div className="col-xl-6">
//                     <Image
//                       className="media equal-16-10"
//                       layout="responsive"
//                       width={100}
//                       height={80}
//                       src={AfterSalesImg}
//                       alt=""
//                     />
//                   </div>
//                   <div className="col-xl-6">
//                     <div className="card-body">
//                       <h3 className="card-title mt-2 fs-4 lh-2 pe-xl-10 text-black">
//                         {t("titledep1")}
//                       </h3>
//                       <small className="d-block">{t("description1")}</small>
//                       <p className="underline action text-red fs-lg mt-1">
//                         {t("learnmore")} <i className="bi bi-arrow-right"></i>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default DepartmentsList;
