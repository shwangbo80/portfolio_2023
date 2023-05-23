import React from "react";

function WorksPage() {
  return (
    <>
      <div>
        <div id="wrapper" className="clearfix">
          <header
            id="header"
            className="border-bottom-0 no-sticky transparent-header">
            <div id="header-wrap">
              <div className="container">
                <div className="header-row">
                  <div id="logo">
                    <a href="demo-freelancer.html" className="standard-logo">
                      <img
                        src="./src/assets/demos/freelancer/images/logo.png"
                        alt="Canvas Logo"
                      />
                    </a>
                    <a href="demo-freelancer.html" className="retina-logo">
                      <img
                        src="./src/assets/demos/freelancer/images/logo@2x.png"
                        alt="Canvas Logo"
                      />
                    </a>
                  </div>
                  <div className="header-misc">
                    <a
                      href="mailto:noreply@canvas.com"
                      className="button button-border rounded-pill">
                      Email Us
                    </a>
                  </div>
                  <div id="primary-menu-trigger">
                    <svg className="svg-trigger" viewBox="0 0 100 100">
                      <path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
                      <path d="m 30,50 h 40" />
                      <path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
                    </svg>
                  </div>
                  <nav className="primary-menu">
                    <ul className="menu-container">
                      <li className="menu-item">
                        <a
                          className="menu-link"
                          href="demo-freelancer-about.html">
                          <div>About me</div>
                        </a>
                      </li>
                      <li className="menu-item current">
                        <a
                          className="menu-link"
                          href="demo-freelancer-works.html">
                          <div>Works</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          className="menu-link"
                          href="#"
                          data-scrollto="#footer"
                          data-easing="easeInOutExpo"
                          data-speed={1250}
                          data-offset={70}>
                          <div>Contact</div>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          <section id="content">
            <div className="content-wrap py-0">
              <div className="section m-0">
                <div className="container">
                  <div className="row align-items-end justify-content-between mb-5">
                    <div className="col-lg-6 offset-lg-1">
                      <div>
                        <h3 className="fw-bolder display-4 mb-3">
                          Latest Creative{" "}
                          <span className="gradient-text gradient-horizon">
                            Works
                          </span>{" "}
                          &amp; Selected{" "}
                          <span className="gradient-text gradient-horizon">
                            Projects
                          </span>
                        </h3>
                        <p className="lead mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="clear" />
                  <div className="row justify-content-center col-mb-50 mt-3">
                    <div className="col-lg-6 h-translatey-3 tf-ts">
                      <a
                        href="demo-store.html"
                        className="portfolio-item"
                        target="_blank">
                        <div className="portfolio-image">
                          <img
                            src="./src/assets/demos/freelancer/images/works/1.jpg"
                            alt="Portfoio Item"
                          />
                          <div className="bg-overlay">
                            <div className="bg-overlay-content align-items-start justify-content-start flex-column px-5 py-4">
                              <h3 className="mb-0 mt-1">Niche Demo Store</h3>
                              <h5>Media, Icons</h5>
                            </div>
                            <div className="bg-overlay-content align-items-start justify-content-end p-4">
                              <div
                                className="overlay-trigger-icon bg-dark text-white"
                                data-hover-animate="fadeInDownSmall"
                                data-hover-animate-out="fadeOutUpSmall"
                                data-hover-speed={350}>
                                <i className="icon-line-link" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-6 h-translatey-3 tf-ts">
                      <a
                        href="demo-yoga.html"
                        className="portfolio-item"
                        target="_blank">
                        <div className="portfolio-image">
                          <img
                            src="./src/assets/demos/freelancer/images/works/2.jpg"
                            alt="Portfoio Item"
                          />
                          <div className="bg-overlay">
                            <div className="bg-overlay-content align-items-start justify-content-start flex-column px-5 py-4">
                              <h3 className="mb-0 mt-1">Niche Demo Yoga</h3>
                              <h5>Media, Icons</h5>
                            </div>
                            <div className="bg-overlay-content align-items-start justify-content-end p-4">
                              <div
                                className="overlay-trigger-icon bg-dark text-white"
                                data-hover-animate="fadeInDownSmall"
                                data-hover-animate-out="fadeOutUpSmall"
                                data-hover-speed={350}>
                                <i className="icon-line-link" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-6 h-translatey-3 tf-ts">
                      <a
                        href="demo-hostel.html"
                        className="portfolio-item"
                        target="_blank">
                        <div className="portfolio-image">
                          <img
                            src="./src/assets/demos/freelancer/images/works/3.jpg"
                            alt="Portfoio Item"
                          />
                          <div className="bg-overlay">
                            <div className="bg-overlay-content align-items-start justify-content-start flex-column px-5 py-4">
                              <h3 className="mb-0 mt-1">Niche Demo Hostel</h3>
                              <h5>Media, Icons</h5>
                            </div>
                            <div className="bg-overlay-content align-items-start justify-content-end p-4">
                              <div
                                className="overlay-trigger-icon bg-dark text-white"
                                data-hover-animate="fadeInDownSmall"
                                data-hover-animate-out="fadeOutUpSmall"
                                data-hover-speed={350}>
                                <i className="icon-line-link" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-6 h-translatey-3 tf-ts">
                      <a
                        href="demo-conference.html"
                        className="portfolio-item"
                        target="_blank">
                        <div className="portfolio-image">
                          <img
                            src="./src/assets/demos/freelancer/images/works/4.jpg"
                            alt="Portfoio Item"
                          />
                          <div className="bg-overlay">
                            <div className="bg-overlay-content align-items-start justify-content-start flex-column px-5 py-4">
                              <h3 className="mb-0 mt-1">
                                Niche Demo Conference
                              </h3>
                              <h5>Media, Icons</h5>
                            </div>
                            <div className="bg-overlay-content align-items-start justify-content-end p-4">
                              <div
                                className="overlay-trigger-icon bg-dark text-white"
                                data-hover-animate="fadeInDownSmall"
                                data-hover-animate-out="fadeOutUpSmall"
                                data-hover-speed={350}>
                                <i className="icon-line-link" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer
            id="footer"
            className="border-0"
            style={{backgroundColor: "#C9D6CF"}}>
            <div className="container">
              <div className="footer-widgets-wrap  m-0">
                <div className="row justify-content-between">
                  <div className="col-md-4">
                    <div className="widget">
                      <h3 className="h1 mb-5">
                        Got a Project?
                        <br />
                        Let's Talk!
                      </h3>
                      <span className="text-black-50">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nobis quisquam aspernatur vero voluptas.
                      </span>
                      <a
                        href="mailto:noreply@canvas.com"
                        className="h4 text-dark mt-5 mb-4 d-block">
                        <u>noreply@canvas.com</u>{" "}
                        <i
                          className="icon-line-arrow-right position-relative ms-2"
                          style={{top: 3}}
                        />
                      </a>
                      <div>
                        <a
                          href="#"
                          className="social-icon si-small si-colored si-facebook">
                          <i className="icon-facebook" />
                          <i className="icon-facebook" />
                        </a>
                        <a
                          href="#"
                          className="social-icon si-small si-colored si-delicious">
                          <i className="icon-delicious" />
                          <i className="icon-delicious" />
                        </a>
                        <a
                          href="#"
                          className="social-icon si-small si-colored si-paypal">
                          <i className="icon-paypal" />
                          <i className="icon-paypal" />
                        </a>
                        <a
                          href="#"
                          className="social-icon si-small si-colored si-flattr">
                          <i className="icon-flattr" />
                          <i className="icon-flattr" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h3 className="h1 mb-5">Estimate your Project?</h3>
                    <div
                      className="form-widget"
                      data-loader="button"
                      data-alert-type="inline">
                      <div className="form-result" />
                      <form
                        className="row mb-0"
                        id="landing-enquiry"
                        action="include/form.php"
                        method="post"
                        encType="multipart/form-data">
                        <div className="form-process" />
                        <div className="col-12 form-group mb-4">
                          <label>What is Your Name:</label>
                          <input
                            type="text"
                            name="landing-enquiry-name"
                            id="landing-enquiry-name"
                            className="form-control border-form-control required"
                            defaultValue
                          />
                        </div>
                        <div className="col-12 form-group mb-4">
                          <label>Your Email Address Please:</label>
                          <input
                            type="email"
                            name="landing-enquiry-email"
                            id="landing-enquiry-email"
                            className="form-control border-form-control required"
                            defaultValue
                          />
                        </div>
                        <div className="col-12 form-group mb-4">
                          <label>Tell more about your Project:</label>
                          <textarea
                            name="landing-enquiry-additional-requirements"
                            id="landing-enquiry-additional-requirements"
                            className="form-control border-form-control"
                            cols={10}
                            rows={3}
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-12 d-none">
                          <input
                            type="text"
                            id="landing-enquiry-botcheck"
                            name="landing-enquiry-botcheck"
                            defaultValue
                          />
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            name="landing-enquiry-submit"
                            className="button h-translatey-3 bg-dark rounded-pill">
                            <i className="icon-line-arrow-right m-0" />
                          </button>
                        </div>
                        <input
                          type="hidden"
                          name="prefix"
                          defaultValue="landing-enquiry-"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <div
          id="gotoTop"
          className="icon-double-angle-up bg-white text-dark rounded-circle shadow"
        />
      </div>
    </>
  );
}

export default WorksPage;
