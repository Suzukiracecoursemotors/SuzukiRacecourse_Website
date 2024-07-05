import Image from "next/image";
import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";

import aim from "../../[locale]/public/PurchaseOfferuptoRs.50,000forWagonR_1_011802.png";
import aim1 from "../../[locale]/public/PurchaseOfferuptoRs.50,000forWagonR_1_011802.png";
import aim2 from "../../[locale]/public/PurchaseOfferuptoRs.50,000forWagonR_1_011802.png";
import aim3 from "../../[locale]/public/PurchaseOfferuptoRs.50,000forWagonR_1_011802.png";
import aim4 from "../../[locale]/public/PurchaseOfferuptoRs.50,000forWagonR_1_011802.png";
import aim5 from "../../[locale]/public/PurchaseOfferuptoRs.50,000forWagonR_1_011802.png";

const blogData = [
  { src: aim3, title: "title1", date: "date1" },
  { src: aim4, title: "title2", date: "date2" },
  { src: aim, title: "title3", date: "date3" },
  { src: aim1, title: "title4", date: "date4" },
  { src: aim5, title: "title5", date: "date5" },
  { src: aim2, title: "title6", date: "date6" },
];

const highlightData = [
  { title: "title1", time: "time1" },
  { title: "title2", time: "time2" },
  { title: "title3", time: "time3" },
  { title: "title4", time: "time4" },
];

async function Blogs() {
  const t = await getTranslations();

  return (
    <>
      <section className="py-15 py-xl-20">
        <div className="container">
          <div className="row mb-2">
            <div className="col">
              <h2 className="eyebrow text-muted">
                {t("page.blogs.latest_posts")}
              </h2>
            </div>
          </div>
          <div className="row g-4 g-xl-5 justify-content-between mb-6">
            {blogData.map((blog, index) => (
              <div key={index} className="col-md-3 col-lg-4">
                <article className="card hover-arrow">
                  <Link href="/blog/blog-post">
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
                    <Link href="/blog/blog-post">
                      <h5>{t(`page.blog_heading.${blog.title}`)}</h5>
                    </Link>
                    <time className="eyebrow text-muted">
                      {t(`page.blog_heading.${blog.date}`)}
                    </time>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-15 py-xl-20 bg-black inverted mx-xl-3">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-6">
              <h2 className="eyebrow text-muted">
                {t("page.blogs.weekly_highlights")}
              </h2>
            </div>
            <div className="col-md-6 text-end">
              <a href="#" className="eyebrow action underline">
                {t("page.blogs.viewAll")} <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="row align-items-start justify-content-between">
            <div className="col-lg-5">
              <article className="card">
                <Link href="/blog/blog-post" className="card-title">
                  <h3>{t("page.blogs.mainpost")}</h3>
                </Link>
                <time className="eyebrow text-muted mb-1">
                  {t("page.blogs.mainpost_time")}
                </time>
              </article>
            </div>
            <div className="col-lg-6">
              <div className="row g-4" data-masonry>
                {highlightData.map((highlight, index) => (
                  <div key={index} className="col-md-6">
                    <article className="card">
                      <Link href="/blog/blog-post">
                        <h6>
                          {t(`page.additional_highlights.${highlight.title}`)}
                        </h6>
                      </Link>
                      <time className="eyebrow text-muted mb-1">
                        {t(`page.additional_highlights.${highlight.time}`)}
                      </time>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
