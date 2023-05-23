import React from "react";

function AboutPage() {
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
                      <li className="menu-item current">
                        <a
                          className="menu-link"
                          href="demo-freelancer-about.html">
                          <div>About me</div>
                        </a>
                      </li>
                      <li className="menu-item">
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
            <div className="content-wrap pb-0">
              <div className="mw-md container mb-5">
                <h2 className="display-4 fw-light" style={{lineHeight: "1.5"}}>
                  I am a Freelancer,{" "}
                  <span className="gradient-text gradient-horizon">
                    Graphics Designer
                  </span>{" "}
                  &amp;{" "}
                  <span className="gradient-text gradient-horizon">
                    Frontend Developer
                  </span>
                  , Based in{" "}
                  <span className="gradient-text gradient-horizon">
                    Germany
                  </span>
                  . Successful Designer with more than{" "}
                  <span className="gradient-text gradient-horizon">
                    10 years
                  </span>{" "}
                  of professional experience &amp; with lots of{" "}
                  <span className="gradient-text gradient-horizon">
                    Satisfied
                  </span>{" "}
                  Customers.
                </h2>
              </div>
              <div className="clear" />
              <div
                className="section mb-0 p-0"
                style={{backgroundColor: "#F4F4F4", overflow: "visible"}}>
                <div className="d-flex justify-content-center position-relative">
                  <div
                    className="parallax min-vh-75"
                    style={{
                      backgroundImage: 'url("demos/freelancer/images/me.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
                    data-bottom-top="width: 40vw"
                    data-center-top="width: 100vw;">
                    <div className="row align-items-center justify-content-center h-100">
                      <div className="col-auto text-center">
                        <a
                          href="#"
                          className="display-4 fw-bolder text-white d-inline-block mx-4 h-op-08 op-ts">
                          <u>#dribbble</u>
                        </a>
                        <a
                          href="#"
                          className="display-4 fw-bolder text-white d-inline-block mx-4 h-op-08 op-ts">
                          <u>#behance</u>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="shape-divider"
                    data-shape="wave"
                    data-position="bottom"
                  />
                </div>
              </div>
              <div className="container mb-5">
                <div className="row col-mb-30 mt-5">
                  <div className="col-md-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="counter counter-xlarge text-dark fw-bolder">
                        <span
                          data-from={1}
                          data-to={15}
                          data-refresh-interval={2}
                          data-speed={600}
                        />
                      </div>
                      <span>
                        + Years Of
                        <br />
                        Experience.
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="counter counter-xlarge text-dark fw-bolder">
                        <span
                          data-from={4}
                          data-to={83}
                          data-refresh-interval={50}
                          data-speed={1500}
                        />
                      </div>
                      <span>
                        % of Works <br />
                        Completed.
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="counter counter-xlarge text-dark fw-bolder">
                        <span
                          data-from={5}
                          data-to={100}
                          data-refresh-interval={30}
                          data-speed={1200}
                        />
                      </div>
                      <span>
                        % Satisfied
                        <br />
                        Customers.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="line line-sm mb-0" />
              </div>
              <div className="clear" />
              <div className="container mw-md mt-5">
                <h2 className="display-3 fw-bolder text-uppercase">
                  What we Do{" "}
                  <span className="gradient-text gradient-horizon">&amp;</span>
                  <br /> How we Do
                </h2>
                <div className="row mt-4">
                  <div className="col-md-8 offset-1">
                    <p className="lead">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque tempora porro hic provident accusamus nam molestias
                      id architecto, temporibus consectetur dolor repellat
                      doloremque dignissimos eum asperiores amet officiis
                      reiciendis libero.
                    </p>
                    <p className="lead">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque tempora porro hic provident accusamus nam molestias
                      id architecto, temporibus consectetur dolor repellat
                      doloremque dignissimos eum asperiores amet officiis
                      reiciendis libero.
                    </p>
                  </div>
                </div>
                <div className="row align-wide-xxl my-5 text-center">
                  <div className="col-sm-6">
                    <img
                      src="./src/assets/demos/freelancer/images/about/1.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-sm-6">
                    <img
                      src="./src/assets/demos/freelancer/images/about/2.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="section text-center mb-0">
                <div className="mw-xs mx-auto ">
                  <h3 className="display-4 fw-bolder text-uppercase">
                    We Do It for{" "}
                    <span className="gradient-text gradient-horizon">Them</span>
                  </h3>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam necessitatibus quaerat, rem delectus
                  </p>
                  <div className="clear" />
                  <div className="row justify-content-center align-items-center mt-4 col-mb-30">
                    <div className="col-md-4 col-6 center">
                      <img
                        src="./src/assets/demos/freelancer/images/clients/amazon.svg"
                        alt="Clients"
                      />
                    </div>
                    <div className="col-md-4 col-6 center">
                      <img
                        src="./src/assets/demos/freelancer/images/clients/netflix.svg"
                        alt="Clients"
                      />
                    </div>
                    <div className="col-md-4 col-6 center">
                      <img
                        src="./src/assets/demos/freelancer/images/clients/google.svg"
                        alt="Clients"
                      />
                    </div>
                    <div className="col-md-4 col-6 center">
                      <img
                        src="./src/assets/demos/freelancer/images/clients/paypal.svg"
                        alt="Clients"
                      />
                    </div>
                    <div className="col-md-4 col-6 center">
                      <img
                        src="./src/assets/demos/freelancer/images/clients/skype.svg"
                        alt="Clients"
                      />
                    </div>
                    <div className="col-md-4 col-6 center">
                      <img
                        src="./src/assets/demos/freelancer/images/clients/ps.svg"
                        alt="Clients"
                      />
                    </div>
                    <div className="col-md-4 col-6 center">
                      <img
                        src="./src/assets/demos/freelancer/images/clients/slack.svg"
                        alt="Clients"
                      />
                    </div>
                    <div className="col-md-4 col-6 center">
                      <img
                        src="./src/assets/demos/freelancer/images/clients/applemusic.svg"
                        alt="Clients"
                      />
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

export default AboutPage;
