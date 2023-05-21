import React from "react";
import {Link} from "react-router-dom";

function ProjectPage() {
  return (
    <>
      <div id="wrapper" className="clearfix">
        <section id="content">
          <div className="content-wrap">
            <div className="container pt-5 mt-5">
              <div className="row mt-5">
                {/* Portfolio Single Image
						============================================= */}
                <div className="col-lg-8">
                  <a href="#" className="">
                    <img
                      className="portfolio-item"
                      src="../src/assets/img/works_3.jpg"
                      alt="Image"
                    />
                  </a>
                </div>

                {/* .portfolio-single-image end */}
                {/* Portfolio Single Content
						============================================= */}
                <div className="col-lg-4 portfolio-single-content">
                  <div className="clearfix">
                    <h1 className="">Portfolio Single</h1>
                  </div>
                  {/* Portfolio Single - Description
							============================================= */}
                  <div className="fancy-title title-bottom-border">
                    <h2>Project Info</h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perferendis, dolores, facere, corrupti delectus ex quidem
                    adipisci tempore.
                  </p>
                  <p>
                    Illum molestias cupiditate eveniet dolore obcaecati
                    voluptatibus est quos eos id recusandae officia. Cupiditate,
                    voluptates quibusdam ipsum vel corporis laboriosam id est
                    doloremque?
                  </p>
                  {/* Portfolio Single - Description End */}
                  <div className="line" />
                  {/* Portfolio Single - Meta
							============================================= */}
                  <ul className="portfolio-meta bottommargin">
                    <li>
                      <span>
                        <i className="icon-user" />
                        Created by:
                      </span>{" "}
                      John Doe
                    </li>
                    <li>
                      <span>
                        <i className="icon-calendar3" />
                        Completed on:
                      </span>{" "}
                      17th March 2021
                    </li>
                    <li>
                      <span>
                        <i className="icon-lightbulb" />
                        Skills:
                      </span>{" "}
                      HTML5 / PHP / CSS3
                    </li>
                    <li>
                      <span>
                        <i className="icon-link" />
                        Client:
                      </span>{" "}
                      <a href="#">Google</a>
                    </li>
                  </ul>
                  {/* Portfolio Single - Meta End */}
                  {/* Portfolio Single - Share
							============================================= */}

                  {/* Portfolio Single - Share End */}
                </div>
                {/* .portfolio-single-content end */}
              </div>
            </div>
          </div>
        </section>
        {/* #content end */}
        {/* #wrapper end */}
      </div>
    </>
  );
}

export default ProjectPage;
