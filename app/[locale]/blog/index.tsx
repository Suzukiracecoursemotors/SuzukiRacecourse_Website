import Image from "next/image";
import { Link } from "@/navigation";

import aim from "../../[locale]/sales/cars/altovx/New folder/Studio Session-479.jpg";
import aim1 from "../../[locale]/public/PurchaseOfferuptoRs.50,000forWagonR_1_011802.png";
import aim3 from "../../[locale]/sales/cars/swiftglvvt/swiftpic/Banner1.jpg";
import aim2 from "../../[locale]/sales/cars/bolanvx/bolanpic/bolan2.jpg";
import aim4 from "../../[locale]/sales/cars/cultusvxr/cultuscarosilimg/Exterior Cultus-1 (1920x800).jpg";
import aim5 from "../../[locale]/sales/cars/ravivx/Ravi/Exterior Ravi-1 (1920x800).jpg";

const blogData = [
  {
    src: aim3,
    title: "All-new Suzuki Swift to star at Festival of Motoring",
    date: "01/08/2024",
    herf: "/sales/cars/swiftglvvt",
  },
  {
    src: aim4,
    title: "Is Cultus better than Wagon R?",
    date: "01/08/2024",
    herf: "/sales/cars/cultusvxr",
  },
  {
    src: aim,
    title: "How Suzuki Alto is Better",
    date: "01/08/2024",
    herf: "/sales/cars/altovx",
  },
  {
    src: aim1,
    title: "Is Wagon R better than Cultus?",
    date: "02/08/2024",
    herf: "/sales/cars/wagonrvxr",
  },
  {
    src: aim5,
    title: "Suzuki Ravi - A true business partner",
    date: "04/04/2023",
    herf: "/sales/cars/ravi",
  },
  {
    src: aim2,
    title: "What is the fuel average of Suzuki Bolan? ",
    date: "10/12/2023",
    herf: "/sales/cars/bolanvx",
  },
];

async function Blogs() {
  return (
    <>
      <section className="py-15 py-xl-20">
        <div className="container">
          <div className="row mb-2">
            <div className="col">
              <h2 className="eyebrow text-muted">Latest Post </h2>
            </div>
          </div>
          <div className="row g-4 g-xl-5 justify-content-between mb-6">
            {blogData.map((blog, index) => (
              <div key={index} className="col-md-3 col-lg-4">
                <article className="card hover-arrow">
                  <Link href={blog.herf}>
                    <Image
                      className="card-img-top"
                      src={blog.src}
                      width={100}
                      height={100}
                      layout="responsive"
                      alt="background image"
                    />
                  </Link>
                  <div className="card-body p-0 pe-lg-5 mt-2">
                    <Link href={blog.herf}>
                      <h5>{blog.title}</h5>
                    </Link>
                    <time className="eyebrow text-muted">{blog.date} </time>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
