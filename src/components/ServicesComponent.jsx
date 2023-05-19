import React from "react";

function ServicesComponent() {
  return (
    <>
      <div className="section bg-transparent py-5">
        <div className="container">
          <div className="row justify-content-center text-center my-5">
            <div className="col-lg-6">
              <div>
                <h3 className="fw-bolder h1 mb-4">
                  Ways I can help <span className="text-primary">YOU</span>
                </h3>
                <p className="lead mb-0">
                  Throughout my career, I have honed my skills in front-end
                  development, creating beautiful and responsive user interfaces
                  with HTML, CSS, and React. I am equally comfortable working on
                  the back-end, architecting robust APIs and databases using
                  Node.js and MongoDB. The combination of my technical expertise
                  and creative problem-solving abilities allows me to create
                  seamless end-to-end solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="row gutter-50 mb-5 align-items-stretch">
            <div className="col-md-4">
              <div
                className="card d-flex align-items-end flex-column p-4 border-0"
                style={{backgroundColor: "#f9f9f9"}}>
                <div className="mt-5" />
                <div className="mt-auto">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-4">
                      <img
                        src="./src/assets/img/sketch.svg"
                        height={50}
                        alt="Image"
                      />
                    </div>
                    <h3 className="card-title fw-bolder">Website Design</h3>
                    <p className="card-text mb-0 mt-2 fw-light">
                      I have a keen eye for aesthetics and a deep understanding
                      of user experience principles. With my website design
                      skills, I create visually stunning and intuitive
                      interfaces that captivate users and enhance their browsing
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card d-flex align-items-end flex-column p-4 border-0"
                style={{backgroundColor: "#edf2fb"}}>
                <div className="mt-5" />
                <div className="mt-auto">
                  <div className="card-body">
                    <img
                      src="./src/assets/img/social.svg"
                      alt="Image"
                      className="mb-4"
                      height={50}
                    />
                    <h3 className="card-title fw-bolder">Responsive Website</h3>
                    <p className="card-text mb-0 mt-2 fw-light">
                      I specialize in building responsive websites that adapt
                      seamlessly to different screen sizes and devices. By
                      leveraging the latest CSS frameworks and best practices, I
                      ensure that your website looks and functions flawlessly on
                      desktops, tablets, and smartphones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card d-flex align-items-end flex-column p-4 border-0"
                style={{backgroundColor: "#f9f9f9"}}>
                <div className="mt-5" />
                <div className="mt-auto">
                  <div className="card-body">
                    <img
                      src="./src/assets/img/wp.png"
                      height={50}
                      alt="Image"
                      className="mb-4"
                    />
                    <h3 className="card-title fw-bolder">WordPress Website</h3>
                    <p className="card-text mb-0 mt-2 fw-light">
                      I am proficient in developing websites using WordPress, a
                      popular and versatile content management system. With my
                      expertise in customizing themes, implementing plugins, and
                      optimizing performance, I can create dynamic and
                      feature-rich WordPress websites tailored to your specific
                      needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card d-flex align-items-end flex-column p-4 border-0"
                style={{backgroundColor: "#edf2fb"}}>
                <div className="mt-5" />
                <div className="mt-auto">
                  <div className="card-body">
                    <img
                      src="./src/assets/img/react.png"
                      height={50}
                      alt="Image"
                      className="mb-4"
                    />
                    <h3 className="card-title fw-bolder">React.js</h3>
                    <p className="card-text mb-0 mt-2 fw-light">
                      As a skilled React.js developer, I build interactive and
                      dynamic user interfaces that provide a smooth and engaging
                      user experience. I leverage the power of React's
                      component-based architecture and virtual DOM to create
                      scalable and efficient web applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card d-flex align-items-end flex-column p-4 border-0"
                style={{backgroundColor: "#f9f9f9"}}>
                <div className="mt-5" />
                <div className="mt-auto">
                  <div className="card-body">
                    <img
                      src="./src/assets/img/node.png"
                      height={50}
                      alt="Image"
                      className="mb-4"
                    />
                    <h3 className="card-title fw-bolder">Node.js w/ Express</h3>
                    <p className="card-text mb-0 mt-2 fw-light">
                      With my expertise in Node.js and Express.js, I develop
                      robust server-side applications and APIs. I harness the
                      non-blocking I/O capabilities of Node.js to build
                      high-performance and scalable solutions, while Express.js
                      provides a minimalist and flexible framework for web
                      application development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card d-flex align-items-end flex-column p-4 border-0"
                style={{backgroundColor: "#edf2fb"}}>
                <div className="mt-5" />
                <div className="mt-auto">
                  <div className="card-body">
                    <img
                      src="./src/assets/img/mongodb.png"
                      height={50}
                      alt="Image"
                      className="mb-4"
                    />
                    <h3 className="card-title fw-bolder">MongoDB</h3>
                    <p className="card-text mb-0 mt-2 fw-light">
                      : I am experienced in working with MongoDB, a popular
                      NoSQL database, for efficient and scalable data storage. I
                      utilize the power of MongoDB's flexible document model and
                      rich query language to develop database solutions that
                      meet the unique requirements of each project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </>
  );
}

export default ServicesComponent;
