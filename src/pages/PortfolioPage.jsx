import React from "react";
import {Link} from "react-router-dom";

function PortfolioPage() {
  return (
    <div>
      <div className="coming-soon-container">
        <h1 className="fw-bold">COMING SOON</h1>
        <a href="/">go back</a>
      </div>
      {/* <div id="wrapper" className="clearfix ">
        <div id="projects" className="section m-0 bg-white">
          <div className="container mt-5 pt-5">
            <div className="row justify-content-center text-center my-5">
              <div className="col-lg-6">
                <div>
                  <h3 className="fw-bolder h1 mb-4">
                    My <span className="text-primary">PORTFOLIO</span>
                  </h3>
                  <p className="lead mb-0">
                    In my portfolio, you will find a showcase of my projects,
                    demonstrating my ability to translate ideas into functional
                    and visually appealing websites. Each project represents a
                    unique challenge and an opportunity for me to innovate and
                    create solutions that exceed expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="projects" className="section m-0">
          <div className="container">
            <div className="row justify-content-center text-center my-5">
              <div className="col-lg-6">
                <div>
                  <h3 className="fw-bolder h2">
                    Featured <span className="text-primary">PROJECTS</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="row justify-content-center col-mb-50">
              <div className="col-lg-4 h-translatey-3 tf-ts">
                <a
                  href="demo-store.html"
                  className="portfolio-item"
                  target="_blank">
                  <div className="portfolio-image">
                    <img
                      src="./src/assets/img/works_3.jpg"
                      alt="Portfoio Item"
                    />
                    <div className="bg-overlay">
                      <div className="bg-overlay-content align-items-start justify-content-start flex-column px-5 py-2">
                        <h3 className="mb-0 mt-1">Project Manager</h3>
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
              <div className="col-lg-4 h-translatey-3 tf-ts">
                <a
                  href="demo-yoga.html"
                  className="portfolio-item"
                  target="_blank">
                  <div className="portfolio-image">
                    <img
                      src="./src/assets/img/works_2.jpg"
                      alt="Portfoio Item"
                    />
                    <div className="bg-overlay">
                      <div className="bg-overlay-content align-items-start justify-content-start flex-column px-5 py-2">
                        <h3 className="mb-0 mt-1">Blogger</h3>
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
              <div className="col-lg-4 h-translatey-3 tf-ts">
                <a
                  href="demo-hostel.html"
                  className="portfolio-item"
                  target="_blank">
                  <div className="portfolio-image">
                    <img
                      src="./src/assets/img/works_1.jpg"
                      alt="Portfoio Item"
                    />
                    <div className="bg-overlay">
                      <div className="bg-overlay-content align-items-start justify-content-start flex-column px-5 py-2">
                        <h3 className="mb-0 mt-1">Community Forum</h3>
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
              <div className="col-lg-6 h-translatey-3 tf-ts"></div>
            </div>
          </div>
        </div>

        <div id="projects" className="section m-0 bg-white">
          <div className="container">
            <div className="row justify-content-center text-center my-5">
              <div className="col-lg-6">
                <div>
                  <h3 className="fw-bolder h2">
                    More <span className="text-primary">PROJECTS</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="row justify-content-center col-mb-50">
              <div className="col-lg-6 h-translatey-3 tf-ts">
                <a
                  href="demo-store.html"
                  className="portfolio-item"
                  target="_blank">
                  <div className="portfolio-image">
                    <img
                      src="./src/assets/img/works_3.jpg"
                      alt="Portfoio Item"
                    />
                    <div className="bg-overlay">
                      <div className="bg-overlay-content align-items-start justify-content-start flex-column px-5 py-4">
                        <h3 className="mb-0 mt-1">Project Manager</h3>
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
                      src="./src/assets/img/works_2.jpg"
                      alt="Portfoio Item"
                    />
                    <div className="bg-overlay">
                      <div className="bg-overlay-content align-items-start justify-content-start flex-column px-5 py-4">
                        <h3 className="mb-0 mt-1">Blogger</h3>
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
                      src="./src/assets/img/works_1.jpg"
                      alt="Portfoio Item"
                    />
                    <div className="bg-overlay">
                      <div className="bg-overlay-content align-items-start justify-content-start flex-column px-5 py-4">
                        <h3 className="mb-0 mt-1">Community Forum</h3>
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
              <div className="col-lg-6 h-translatey-3 tf-ts"></div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default PortfolioPage;
