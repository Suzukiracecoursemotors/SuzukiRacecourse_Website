// import Image from "next/image";
import { getTranslations } from "next-intl/server";
// import S from "../public/3275466.png";
export default async function Landingpage() {
  const t = await getTranslations({
    namespace: "page.home",
  });

  return (
    <>
      {/* <section classNameName="py-10 py-xl-20">
        <div classNameName="container">
          <div classNameName="row mb-5">
            <div classNameName="col text-center">
              <h2 classNameName="fw-bold mb-0">Departments</h2>
            </div>
          </div>
          <div classNameName="row g-3 g-xl-5" data-masonry>
            {[
              { title: "Sale", link: "/en/sales" },
              { title: "CUC", link: "/en/sales/cuc" },
              { title: "Finance", link: "/en/sales/finance" },
              { title: "Parts", link: "/en/aftersale/parts" },
              { title: "Service", link: "/en/aftersale/service" },
              { title: "Body Shop", link: "/en/aftersale/bodyshop" },
            ].map((department, index) => (
              <div classNameName="col-md-4" data-aos="fade-up" key={index}>
                <a
                  href={department.link}
                  classNameName="card equal-md-1-1 card-hover-gradient"
                >
                  <Image
                    classNameName="background  "
                    src={S}
                    layout="responsive"
                    alt={department.title}
                  />
                  <div classNameName="card-wrap">
                    <div classNameName="card-footer my-auto">
                      <div classNameName="text-center text-shadow">
                        <h3 classNameName="mb-0 fw-bold text-white">
                          {department.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-15 py-xl-20">
        <div className="container mt-15">
          <div className="row g-5">
            <div className="col-md-6 col-lg-4 text-center" data-aos="fade-up">
              <i className="bi bi-layers fs-1 text-primary"></i>
              <h4 className="fs-5 mt-4">
                Organized nested <br /> symbols & overrides
              </h4>
              <p className="text-secondary mx-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="" className="underline">
                Learn More
              </a>
            </div>
            <div
              className="col-md-6 col-lg-4 text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <i className="bi bi-type fs-1 text-primary"></i>
              <h4 className="fs-5 mt-4">
                Fine-tuned <br /> typography
              </h4>
              <p className="text-secondary mx-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="" className="underline">
                Learn More
              </a>
            </div>
            <div
              className="col-md-6 col-lg-4 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="bi bi-collection-play fs-1 text-primary"></i>
              <h4 className="fs-5 mt-4">
                Interactive <br /> components
              </h4>
              <p className="text-secondary mx-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="" className="underline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black mx-xl-3">
        <div className="container py-15 pb-10 py-xl-20 level-3">
          <div className="row">
            <div className="col-lg-6 inverted">
              <h2 className="fw-bold">Get closer to your customers.</h2>
              <ul className="list-group list-group-minimal">
                <li className="list-group-item d-flex align-items-center">
                  <div className="icon-box icon-box-sm bg-opaque-white rounded-circle me-2">
                    <i className="bi bi-check2 text-white"></i>
                  </div>
                  High-fidelity interactive design
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <div className="icon-box icon-box-sm bg-opaque-white rounded-circle me-2">
                    <i className="bi bi-check2 text-white"></i>
                  </div>
                  Immersive prototyping experience
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <div className="icon-box icon-box-sm bg-opaque-white rounded-circle me-2">
                    <i className="bi bi-check2 text-white"></i>
                  </div>
                  Outstranding component animations
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid back back-static">
          <div className="row justify-content-end h-100">
            <div className="col-lg-6 overflow-hidden position-relative">
              <figure
                className="background background-parallax"
                // style="background-image: url('./assets/images/startup-2.jpg')"
                data-bottom-top="transform: translateY(0%);"
                data-top-bottom="transform: translateY(20%);"
              ></figure>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 py-xl-15">
        <div className="container">
          <div className="carousel carousel-align text-center">
            <div data-carousel='{"gutter": 48, "loop": false, "nav": false, "controls": false, "responsive": {"0": {"items": 2}, "768": {"items": 4}, "1200": {"items": 5}}}'>
              <div>
                {/* <img src="./assets/images/logo/logo-1.svg" alt="Logo" className="logo"> */}
              </div>
              <div>
                {/* <img src="./assets/images/logo/logo-2.svg" alt="Logo" className="logo"> */}
              </div>
              <div>
                {/* <img src="./assets/images/logo/logo-3.svg" alt="Logo" className="logo"> */}
              </div>
              <div>
                {/* <img src="./assets/images/logo/logo-4.svg" alt="Logo" className="logo"> */}
              </div>
              <div>
                {/* <img src="./assets/images/logo/logo-5.svg" alt="Logo" className="logo"> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-15 py-xl-20 bg-light">
        <div className="container">
          <div className="row mb-10">
            <div className="col">
              <h2 className="fw-bold">Integrations & Resources</h2>
            </div>
          </div>
          <div className="row g-3 g-xl-5 justify-content-between">
            <div className="col-xl-4">
              <ul
                className="nav nav-tabs flex-xl-column"
                id="component-1"
                role="tablist"
              >
                <li className="nav-item">
                  <button
                    className="nav-link fs-5 active"
                    id="component-1-1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#component-1-1"
                    type="button"
                    role="tab"
                    aria-controls="component-1-1"
                    aria-selected="true"
                  >
                    Popular
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link fs-5"
                    id="component-1-2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#component-1-2"
                    type="button"
                    role="tab"
                    aria-controls="component-1-2"
                    aria-selected="false"
                  >
                    Ecommerce
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link fs-5"
                    id="component-1-3-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#component-1-3"
                    type="button"
                    role="tab"
                    aria-controls="component-1-3"
                    aria-selected="false"
                  >
                    Localisation
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link fs-5"
                    id="component-1-4-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#component-1-4"
                    type="button"
                    role="tab"
                    aria-controls="component-1-4"
                    aria-selected="false"
                  >
                    CRM
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-xl-8">
              <div className="tab-content" id="component-1-content">
                <div
                  className="tab-pane fade show active"
                  id="component-1-1"
                  role="tabpanel"
                  aria-labelledby="component-1-1-tab"
                >
                  <div className="row g-3 g-xl-5">
                    <div className="col-md-6" data-aos="fade-up">
                      <a
                        href=""
                        className="card equal-md-1-1 card-hover-border bg-white"
                      >
                        <div className="card-wrap">
                          <div className="card-header pb-0">
                            {/* <img src="./assets/images/logo/logo-vendor-1.svg" alt="Logo" className="mb-4 w-20"> */}
                          </div>
                          <div className="card-footer mt-auto pt-0">
                            <h4 className="card-title">Google Tag Manager</h4>
                            <p className="text-secondary">
                              Praesentium quidem libero possimus similique
                              corporis sequi fugit aliquid.
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-md-6"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <a
                        href=""
                        className="card equal-md-1-1 card-hover-border bg-white"
                      >
                        <div className="card-wrap">
                          <div className="card-header pb-0">
                            {/* <img src="./assets/images/logo/logo-vendor-2.svg" alt="Logo" className="mb-4 w-20"> */}
                          </div>
                          <div className="card-footer pt-0 mt-auto">
                            <h4 className="card-title">Google Analytics</h4>
                            <p className="text-secondary">
                              Praesentium quidem libero possimus similique
                              corporis sequi fugit aliquid.
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-6" data-aos="fade-up">
                      <a
                        href=""
                        className="card equal-md-1-1 card-hover-border bg-white"
                      >
                        <div className="card-wrap">
                          <div className="card-header pb-0">
                            {/* <img src="./assets/images/logo/logo-vendor-3.svg" alt="Logo" className="mb-4 w-20"> */}
                          </div>
                          <div className="card-footer pt-0 mt-auto">
                            <h4 className="card-title">Shopify</h4>
                            <p className="text-secondary">
                              Praesentium quidem libero possimus similique
                              corporis sequi fugit aliquid.
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-md-6"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <a
                        href=""
                        className="card equal-md-1-1 card-hover-border bg-white"
                      >
                        <div className="card-wrap">
                          <div className="card-header pb-0">
                            {/* <img src="./assets/images/logo/logo-vendor-4.svg" alt="Logo" className="mb-4 w-20"> */}
                          </div>
                          <div className="card-footer pt-0 mt-auto">
                            <h4 className="card-title">Amazon</h4>
                            <p className="text-secondary">
                              Praesentium quidem libero possimus similique
                              corporis sequi fugit aliquid.
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="component-1-2"
                  role="tabpanel"
                  aria-labelledby="component-1-2-tab"
                >
                  <h5>Second tab content here ..</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maxime excepturi amet rem! Ab incidunt quod nobis nisi quas?
                    Magnam laudantium eveniet nostrum quaerat corporis error
                    saepe aperiam accusantium alias cumque?
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="component-1-3"
                  role="tabpanel"
                  aria-labelledby="component-1-3-tab"
                >
                  <h5>Third tab content here ..</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maxime excepturi amet rem! Ab incidunt quod nobis nisi quas?
                    Magnam laudantium eveniet nostrum quaerat corporis error
                    saepe aperiam accusantium alias cumque?
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="component-1-4"
                  role="tabpanel"
                  aria-labelledby="component-1-4-tab"
                >
                  <h5>Fourth tab content here ..</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maxime excepturi amet rem! Ab incidunt quod nobis nisi quas?
                    Magnam laudantium eveniet nostrum quaerat corporis error
                    saepe aperiam accusantium alias cumque?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-15 py-xl-20 bg-light">
        <div className="container">
          <div className="row align-items-end mb-5">
            <div className="col-lg-8">
              <h2 className="fw-light">
                Latest <span className="fw-bold">openings</span>
              </h2>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col">
              <ul className="list-unstyled">
                <li>
                  <a href="" className="card bg-white card-hover-border">
                    <div className="card-body py-4">
                      <div className="row align-items-center g-2 g-md-4 text-center text-md-start">
                        <div className="col-md-9">
                          <p className="fs-lg mb-0">Senior Visual Designer</p>
                          <ul className="list-inline list-inline-separated text-muted">
                            <li className="list-inline-item">at Spotify</li>
                            <li className="list-inline-item">
                              San Francisco, CA
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3 text-lg-end">
                          <span>$95k – $150k</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-1">
                  <a href="" className="card bg-white card-hover-border">
                    <div className="card-body py-4">
                      <div className="row align-items-center g-2 g-md-4 text-center text-md-start">
                        <div className="col-md-9">
                          <p className="fs-lg mb-0">Senior Visual Designer</p>
                          <ul className="list-inline list-inline-separated text-muted">
                            <li className="list-inline-item">at Spotify</li>
                            <li className="list-inline-item">
                              San Francisco, CA
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3 text-lg-end">
                          <span>$95k – $150k</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-1">
                  <a href="" className="card bg-white card-hover-border">
                    <div className="card-body py-4">
                      <div className="row align-items-center g-2 g-md-4 text-center text-md-start">
                        <div className="col-md-9">
                          <p className="fs-lg mb-0">Senior Visual Designer</p>
                          <ul className="list-inline list-inline-separated text-muted">
                            <li className="list-inline-item">at Spotify</li>
                            <li className="list-inline-item">
                              San Francisco, CA
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3 text-lg-end">
                          <span>$95k – $150k</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-1">
                  <a href="" className="card bg-white card-hover-border">
                    <div className="card-body py-4">
                      <div className="row align-items-center g-2 g-md-4 text-center text-md-start">
                        <div className="col-md-9">
                          <p className="fs-lg mb-0">Senior Visual Designer</p>
                          <ul className="list-inline list-inline-separated text-muted">
                            <li className="list-inline-item">at Spotify</li>
                            <li className="list-inline-item">
                              San Francisco, CA
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3 text-lg-end">
                          <span>$95k – $150k</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-1">
                  <a href="" className="card bg-white card-hover-border">
                    <div className="card-body py-4">
                      <div className="row align-items-center g-2 g-md-4 text-center text-md-start">
                        <div className="col-md-9">
                          <p className="fs-lg mb-0">Senior Visual Designer</p>
                          <ul className="list-inline list-inline-separated text-muted">
                            <li className="list-inline-item">at Spotify</li>
                            <li className="list-inline-item">
                              San Francisco, CA
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3 text-lg-end">
                          <span>$95k – $150k</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-15 py-xl-20 overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="carousel carousel-with-nav">
                <div data-carousel='{"controls": false, "autoHeight": true ,"gutter": 200, "center": true, "mouseDrag": true }'>
                  <div>
                    <blockquote className="text-center">
                      <span className="logo">
                        {/* <img src="./assets/images/logo/logo-1.svg" alt="Logo"> */}
                      </span>
                      <h4 className="fs-2 my-3">
                        “Amazing experience I love it a lot. Thanks to the team
                        that dreams come true.”
                      </h4>
                      <footer className="blockquote-footer">
                        <span>
                          <span className="text-black">Michael Doe</span>{" "}
                          Creative Director
                        </span>
                      </footer>
                    </blockquote>
                  </div>

                  <div>
                    <blockquote className="text-center">
                      <span className="logo">
                        {/* <img src="./assets/images/logo/logo-2.svg" alt="Logo"> */}
                      </span>
                      <h4 className="fs-2 my-3">
                        “Amazing experience I love it a lot. Thanks to the team
                        that dreams come true.”
                      </h4>
                      <footer className="blockquote-footer">
                        <span>
                          <span className="text-black">Michael Doe</span>{" "}
                          Creative Director
                        </span>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden">
        <div className="container">
          <div className="row align-items-end mb-5">
            <div className="col-lg-8 mb-2 mb-lg-0">
              <h2 className="fw-bold">Gadgets</h2>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="" className="underline action">
                View all products <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="carousel carousel-visible" data-aos="fade-left">
            <div data-carousel='{"nav": false,"mouseDrag": true, "gutter": 32, "loop": true, "responsive": {"0": {"items": 1}, "768": {"items": 2}, "992": {"items": 2}, "1200": {"items": 3}}}'>
              <div>
                <div className="product">
                  <figure className="product-image">
                    <a href="#!">
                      <img
                        src="assets/images/products/product-1.jpg"
                        alt="Image"
                      />
                      <img
                        src="assets/images/products/product-1-2.jpg"
                        alt="Image"
                      />
                    </a>
                  </figure>
                  <a className="product-title" href="#!">
                    Watch
                  </a>
                  <span className="product-price">$100 </span>
                </div>{" "}
              </div>
              <div>
                <div className="product">
                  <figure className="product-image">
                    <a href="#!">
                      <img
                        src="assets/images/products/product-2.jpg"
                        alt="Image"
                      />
                      <img
                        src="assets/images/products/product-2-2.jpg"
                        alt="Image"
                      />
                    </a>
                  </figure>
                  <a className="product-title" href="#!">
                    Black Karlo Backpack
                  </a>
                  <span className="product-price">$88 </span>
                </div>{" "}
              </div>
              <div>
                <div className="product">
                  <figure className="product-image">
                    <a href="#!">
                      <img
                        src="assets/images/products/product-3.jpg"
                        alt="Image"
                      />
                      <img
                        src="assets/images/products/product-3-2.jpg"
                        alt="Image"
                      />
                    </a>
                  </figure>
                  <a className="product-title" href="#!">
                    Black Closca Helmet
                  </a>
                  <span className="product-price">$132 </span>
                </div>{" "}
              </div>
              <div>
                <div className="product">
                  <figure className="product-image">
                    <a href="#!">
                      <img
                        src="assets/images/products/product-4.jpg"
                        alt="Image"
                      />
                      <img
                        src="assets/images/products/product-4-2.jpg"
                        alt="Image"
                      />
                    </a>
                  </figure>
                  <a className="product-title" href="#!">
                    Speaker
                  </a>
                  <span className="product-price">$100 </span>
                </div>{" "}
              </div>
              <div>
                <div className="product">
                  <figure className="product-image">
                    <a href="#!">
                      <img
                        src="assets/images/products/product-5.jpg"
                        alt="Image"
                      />
                      <img
                        src="assets/images/products/product-5-2.jpg"
                        alt="Image"
                      />
                    </a>
                  </figure>
                  <a className="product-title" href="#!">
                    Gravel Black Sigg Water Bottle
                  </a>
                  <span className="product-price">
                    $23 <s className="text-muted">$34</s>
                  </span>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-15 py-xl-20">
        <div className="container mt-5 mt-xl-10">
          <div className="row justify-content-center mb-5 mb-xl-10">
            <div className="col-lg-8 text-center">
              <h1 className="fw-light mb-3">
                <span className="fw-bold">9 careers</span> available right now.
              </h1>
              <button
                className="btn btn-filter rounded-pill current"
                data-filter="*"
                data-target="#grid1"
              >
                all
              </button>
              <button
                className="btn btn-filter rounded-pill"
                data-filter=".filter-design"
                data-target="#grid1"
              >
                design
              </button>
              <button
                className="btn btn-filter rounded-pill"
                data-filter=".filter-development"
                data-target="#grid1"
              >
                development
              </button>
              <button
                className="btn btn-filter rounded-pill"
                data-filter=".filter-sales"
                data-target="#grid1"
              >
                sales
              </button>
            </div>
          </div>

          <div className="row g-1" id="grid1" data-isotope>
            <div className="col-12 filter-design">
              <a href="" className="card bg-white card-hover-border">
                <div className="card-body">
                  <div className="row align-items-center g-2 g-md-4 text-center text-md-start">
                    <div className="col-md-2 col-lg-3">
                      {/* <img src="./assets/images/logo/logo-1.svg" alt="Logo" className="logo"> */}
                    </div>
                    <div className="col-md-6">
                      <p className="fs-lg mb-0">Senior Visual Designer</p>
                      <ul className="list-inline list-inline-separated text-muted">
                        <li className="list-inline-item">at Spotify</li>
                        <li className="list-inline-item">San Francisco, CA</li>
                      </ul>
                    </div>
                    <div className="col-md-3 text-lg-end">
                      <span>$95k – $150k</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 filter-development">
              <a href="" className="card bg-white card-hover-border">
                <div className="card-body">
                  <div className="row align-items-center g-2 g-md-4 text-center text-md-start">
                    <div className="col-md-2 col-lg-3">
                      {/* <img src="./assets/images/logo/logo-2.svg" alt="Logo" className="logo"> */}
                    </div>
                    <div className="col-md-6">
                      <p className="fs-lg mb-0">Senior Visual Designer</p>
                      <ul className="list-inline list-inline-separated text-muted">
                        <li className="list-inline-item">at Spotify</li>
                        <li className="list-inline-item">San Francisco, CA</li>
                      </ul>
                    </div>
                    <div className="col-md-3 text-lg-end">
                      <span>$95k – $150k</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 filter-sales">
              <a href="" className="card bg-white card-hover-border">
                <div className="card-body">
                  <div className="row align-items-center g-2 g-md-4 text-center text-md-start">
                    <div className="col-md-2 col-lg-3">
                      {/* <img src="./assets/images/logo/logo-3.svg" alt="Logo" className="logo"> */}
                    </div>
                    <div className="col-md-6">
                      <p className="fs-lg mb-0">Senior Visual Designer</p>
                      <ul className="list-inline list-inline-separated text-muted">
                        <li className="list-inline-item">at Spotify</li>
                        <li className="list-inline-item">San Francisco, CA</li>
                      </ul>
                    </div>
                    <div className="col-md-3 text-lg-end">
                      <span>$95k – $150k</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 filter-design">
              <a href="" className="card bg-white card-hover-border">
                <div className="card-body">
                  <div className="row align-items-center g-2 g-md-4 text-center text-md-start">
                    <div className="col-md-2 col-lg-3">
                      {/* <img src="./assets/images/logo/logo-4.svg" alt="Logo" className="logo"> */}
                    </div>
                    <div className="col-md-6">
                      <p className="fs-lg mb-0">Senior Visual Designer</p>
                      <ul className="list-inline list-inline-separated text-muted">
                        <li className="list-inline-item">at Spotify</li>
                        <li className="list-inline-item">San Francisco, CA</li>
                      </ul>
                    </div>
                    <div className="col-md-3 text-lg-end">
                      <span>$95k – $150k</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 filter-sales">
              <a href="" className="card bg-white card-hover-border">
                <div className="card-body">
                  <div className="row align-items-center g-2 g-md-4 text-center text-md-start">
                    <div className="col-md-2 col-lg-3">
                      {/* <img src="./assets/images/logo/logo-5.svg" alt="Logo" className="logo"> */}
                    </div>
                    <div className="col-md-6">
                      <p className="fs-lg mb-0">Senior Visual Designer</p>
                      <ul className="list-inline list-inline-separated text-muted">
                        <li className="list-inline-item">at Spotify</li>
                        <li className="list-inline-item">San Francisco, CA</li>
                      </ul>
                    </div>
                    <div className="col-md-3 text-lg-end">
                      <span>$95k – $150k</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 filter-development">
              <a href="" className="card bg-white card-hover-border">
                <div className="card-body">
                  <div className="row align-items-center g-2 g-md-4 text-center text-md-start">
                    <div className="col-md-2 col-lg-3">
                      {/* <img src="./assets/images/logo/logo-3.svg" alt="Logo" className="logo"> */}
                    </div>
                    <div className="col-md-6">
                      <p className="fs-lg mb-0">Senior Visual Designer</p>
                      <ul className="list-inline list-inline-separated text-muted">
                        <li className="list-inline-item">at Spotify</li>
                        <li className="list-inline-item">San Francisco, CA</li>
                      </ul>
                    </div>
                    <div className="col-md-3 text-lg-end">
                      <span>$95k – $150k</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 filter-sales">
              <a href="" className="card bg-white card-hover-border">
                <div className="card-body">
                  <div className="row align-items-center g-2 g-md-4 text-center text-md-start">
                    <div className="col-md-2 col-lg-3">
                      {/* <img src="./assets/images/logo/logo-2.svg" alt="Logo" className="logo"> */}
                    </div>
                    <div className="col-md-6">
                      <p className="fs-lg mb-0">Senior Visual Designer</p>
                      <ul className="list-inline list-inline-separated text-muted">
                        <li className="list-inline-item">at Spotify</li>
                        <li className="list-inline-item">San Francisco, CA</li>
                      </ul>
                    </div>
                    <div className="col-md-3 text-lg-end">
                      <span>$95k – $150k</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 filter-design">
              <a href="" className="card bg-white card-hover-border">
                <div className="card-body">
                  <div className="row align-items-center g-2 g-md-4 text-center text-md-start">
                    <div className="col-md-2 col-lg-3">
                      {/* <img src="./assets/images/logo/logo-1.svg" alt="Logo" className="logo"> */}
                    </div>
                    <div className="col-md-6">
                      <p className="fs-lg mb-0">Senior Visual Designer</p>
                      <ul className="list-inline list-inline-separated text-muted">
                        <li className="list-inline-item">at Spotify</li>
                        <li className="list-inline-item">San Francisco, CA</li>
                      </ul>
                    </div>
                    <div className="col-md-3 text-lg-end">
                      <span>$95k – $150k</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 filter-development">
              <a href="" className="card bg-white card-hover-border">
                <div className="card-body">
                  <div className="row align-items-center g-2 g-md-4 text-center text-md-start">
                    <div className="col-md-2 col-lg-3">
                      {/* <img src="./assets/images/logo/logo-1.svg" alt="Logo" className="logo"> */}
                    </div>
                    <div className="col-md-6">
                      <p className="fs-lg mb-0">Senior Visual Designer</p>
                      <ul className="list-inline list-inline-separated text-muted">
                        <li className="list-inline-item">at Spotify</li>
                        <li className="list-inline-item">San Francisco, CA</li>
                      </ul>
                    </div>
                    <div className="col-md-3 text-lg-end">
                      <span>$95k – $150k</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
