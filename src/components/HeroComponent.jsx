import React from "react";
import {useEffect} from "react";

function HeroComponent() {
  return (
    <>
      <section
        data-aos="zoom-in"
        data-aos-duration="1000"
        id="slider"
        className="slider-element min-vh-md-100 mt-1 py-4 include-header">
        <div className="slider-inner">
          <div className="vertical-middle slider-element-fade">
            <div className="container text-center p-5">
              <div className="row">
                <div className="col"></div>
                <div className="col-lg-10">
                  <div className="emphasis-title mb-2">
                    <img
                      className="mb-5 profile-img"
                      src="/assets/img/soo.png"></img>

                    <div className="oc-item">
                      <h4 className="text-uppercase ls3 fw-bolder mb-0">
                        Hello, my name is
                      </h4>
                      <h2 className="mt-3 text-primary fw-bolder text-uppercase">
                        Soo Hwangbo
                      </h2>
                    </div>
                  </div>
                  <div className="mx-auto" style={{maxWidth: 600}}>
                    <p className="lead fw-normal mb-5">
                      Welcome to my portfolio website! I'm Soo Hwangbo, a
                      passionate and experienced full-stack MERN web developer.
                      I specialize in crafting immersive and user-friendly web
                      experiences that combine the power of modern technologies
                      with captivating design.
                    </p>
                    <a
                      href="#projects"
                      data-scrollto="#projects"
                      data-easing="easeInOutExpo"
                      data-speed={1250}
                      data-offset={70}
                      className="button button-dark button-hero h-translatey-3 tf-ts button-reveal overflow-visible bg-dark text-end">
                      <span>My Works</span>
                      <i className="icon-line-arrow-right" />
                    </a>
                    <a
                      href="/assets/Soo_Hwangbo_082423.pdf"
                      className="button button-dark button-hero h-translatey-3 tf-ts button-reveal overflow-visible bg-dark text-end">
                      <span>Resume</span>
                      <i className="icon-line-arrow-right" />
                    </a>
                    <a
                      href="#contact"
                      data-scrollto="#footer"
                      data-easing="easeInOutExpo"
                      data-speed={1250}
                      data-offset={70}
                      className="button button-large button-light text-dark bg-transparent m-0">
                      <i className="icon-line2-arrow-down fw-bold" />
                      <u>Contact Me</u>
                    </a>
                  </div>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroComponent;
