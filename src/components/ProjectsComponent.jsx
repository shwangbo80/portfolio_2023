import React from "react";
import {Link} from "react-router-dom";
import projectsObj from "../projectsObj";

function ProjectsComponent() {
  const RenderProjects = () => {
    return projectsObj.map((item, key) => {
      return (
        <div key={key} className="col-lg-6 h-translatey-3 tf-ts">
          <a href={`./project/${item.project_id}`} className="portfolio-item">
            <div className="portfolio-image">
              <img src={item.img[0]} alt="Portfoio Item" />
              <div className="bg-overlay">
                <div className="bg-overlay-content align-items-start justify-content-start flex-column px-5 py-4">
                  <h3 className="mb-0 mt-1">{item.project_name}</h3>
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
      );
    });
  };

  return (
    <>
      <div id="projects" className="section m-0">
        <div className="container">
          <div className="row justify-content-center text-center my-5">
            <div className="col-lg-6">
              <div>
                <h3 className="fw-bolder h1 mb-4" data-aos="slide-right">
                  Featured <span className="text-primary">PROJECTS</span>
                </h3>
                <p className="lead mb-0 fw-normal" data-aos="slide-left">
                  In my portfolio, you will find a showcase of my projects,
                  demonstrating my ability to translate ideas into functional
                  and visually appealing websites. Each project represents a
                  unique challenge and an opportunity for me to innovate and
                  create solutions that exceed expectations.
                </p>
                <Link
                  to="portfolio"
                  className="button button-dark button-border rounded-pill mt-5">
                  View All Works <i className="icon-line-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center col-mb-50">
            <RenderProjects />
            <div className="col-lg-6 h-translatey-3 tf-ts"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsComponent;
