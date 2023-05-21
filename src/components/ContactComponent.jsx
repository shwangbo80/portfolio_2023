import React from "react";

function ContactComponent() {
  return (
    <>
      <div id="footer" className="border-0" style={{backgroundColor: "white"}}>
        <div className="container">
          <div className="footer-widgets-wrap  m-0">
            <div className="row justify-content-between">
              <div className="col-md-6">
                <div className="widget">
                  <h3 className="fw-bolder h1 mb-4" data-aos="slide-right">
                    Lets <span className="text-primary">TALK!</span>
                  </h3>
                  <p
                    className="lead fw-normal"
                    data-aos="slide-right"
                    data-aos-delay="100">
                    Thank you for visiting my portfolio website. I invite you to
                    explore my work and get in touch to discuss how I can
                    contribute to your next web development project. Let's
                    collaborate and bring your ideas to life!
                  </p>
                  <div
                    className="my-5"
                    data-aos="slide-right"
                    data-aos-delay="200">
                    <a
                      href="mailto:shwangbo80@gmail.com"
                      className="h4 mt-5 mb-4 text-dark">
                      shwangbo80@gmail.com
                      <i
                        className="icon-line-arrow-right position-relative ms-2"
                        style={{top: 3}}
                      />
                    </a>
                  </div>
                  <div data-aos="slide-right" data-aos-delay="300">
                    <a
                      href="https://www.linkedin.com/in/soohwangbo/"
                      className="social-icon si-medium si-colored si-linkedin"
                      target="_blank">
                      <i className="icon-linkedin" />
                      <i className="icon-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="fade"
                data-aos-duration="2000">
                <img
                  className="profile_img img-fluid mt-5 mt-md-0 mx-auto d-block"
                  src="/assets/img/soo.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactComponent;
