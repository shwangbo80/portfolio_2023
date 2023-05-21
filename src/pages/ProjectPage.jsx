import React from "react";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import projectsObj from "../projectsObj";
import {Spinner} from "react-bootstrap";

function ProjectPage() {
  useEffect(() => {
    getProjectInfo();
  }, []);

  const [projectInfo, setProjectInfo] = useState();
  const [projectLoaded, setProjectLoaded] = useState(false);
  const projectId = useParams().id;

  const getProjectInfo = () => {
    const result = projectsObj.filter((item) => item.project_id == projectId);
    setProjectInfo(result);
    setProjectLoaded(true);
  };

  const RenderProject = () => {
    if (!projectLoaded) {
      return <Spinner />;
    } else {
      return projectInfo.map((item, key) => {
        return (
          <div className="row mt-5" key={key}>
            <div className="col-lg-8">
              <a href="#">
                <img
                  className="portfolio-item mb-5"
                  src={item.img[0]}
                  alt="Image"
                />
              </a>
            </div>
            <div className="col-lg-4 portfolio-single-content">
              <div className="clearfix">
                <h1>{item.project_name}</h1>
              </div>
              <div className="fancy-title title-bottom-border mt-4">
                <h2>Project Info</h2>
              </div>
              <p>{item.project_overview}</p>
              <div className="line my-4" />
              <ul className="portfolio-meta bottommargin">
                <li className="d-flex">
                  <span>
                    <i className="icon-user" />
                    Created by:
                  </span>
                  <div>Soo Hwangbo</div>
                </li>
                <li className="d-flex">
                  <span>
                    <i className="icon-lightbulb" />
                    Skills:
                  </span>
                  <div>
                    <div>HTML /CSS / React</div>
                    <div>Node / Express / MongoDB</div>
                  </div>
                </li>
              </ul>
              <div>
                <a
                  href="https://www.linkedin.com/in/soohwangbo/"
                  className="social-icon si-medium si-colored si-linkedin"
                  target="_blank">
                  <i className="icon-github bg-secondary" />
                  <i className="icon-github bg-dark" />
                </a>
              </div>{" "}
            </div>
          </div>
        );
      });
    }
  };

  return (
    <>
      <div id="wrapper" className="clearfix">
        <section id="content">
          <div className="content-wrap">
            <div className="container pt-5 mt-5">
              <RenderProject />
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
