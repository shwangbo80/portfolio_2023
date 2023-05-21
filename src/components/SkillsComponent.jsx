import React from "react";

function SkillsComponent() {
  return (
    <div>
      <div
        id="about"
        className="section  my-0 pt-3 pb-0"
        style={{
          backgroundColor: "#F4F4F4",
          marginTop: 150,
          overflow: "visible",
        }}>
        <div
          className="shape-divider"
          data-shape="wave"
          data-height={150}
          data-outside="true"
          data-flip-vertical="true"
          data-fill="#F4F4F4"
        />
        <div className="container">
          <div className="row justify-content-center text-center mt-5">
            <div className="col-lg-6">
              <div>
                <h3 className="fw-bolder h1 mb-4" data-aos="slide-right">
                  Fullstack Developer, Based in{" "}
                  <span className="text-primary">CALIFORNIA</span>
                </h3>
                <p className="mb-5 lead fw-normal" data-aos="slide-left">
                  With a strong foundation in JavaScript and expertise in the
                  MERN (MongoDB, Express.js, React.js, Node.js) stack, I have
                  successfully delivered numerous projects, ranging from small
                  business websites to complex web applications. I thrive on
                  challenging tasks that push the boundaries of what is
                  possible, and I am committed to delivering high-quality code
                  and exceptional user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center position-relative">
          <div
            className="parallax min-vh-75"
            style={{
              backgroundImage: 'url("/assets/img/desktop.avif")',
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
            data-bottom-top="width: 40vw"
            data-center-top="width: 100vw;">
            <div className="row align-items-center justify-content-center h-100">
              <div className="col-auto text-center">
                <p className="display-4 fw-bolder text-white d-inline-block mx-4 h-op-08 op-ts">
                  <u>#HTML</u>
                </p>
                <p className="display-4 fw-bolder text-white d-inline-block mx-4 h-op-08 op-ts">
                  <u>#CSS</u>
                </p>
                <p className="display-4 fw-bolder text-white d-inline-block mx-4 h-op-08 op-ts">
                  <u>#javascript</u>
                </p>
                <p className="display-4 fw-bolder text-white d-inline-block mx-4 h-op-08 op-ts">
                  <u>#react</u>
                </p>
                <p className="display-4 fw-bolder text-white d-inline-block mx-4 h-op-08 op-ts">
                  <u>#node</u>
                </p>
                <p className="display-4 fw-bolder text-white d-inline-block mx-4 h-op-08 op-ts">
                  <u>#express</u>
                </p>
                <p className="display-4 fw-bolder text-white d-inline-block mx-4 h-op-08 op-ts">
                  <u>#mongoDB</u>
                </p>
                <p className="display-4 fw-bolder text-white d-inline-block mx-4 h-op-08 op-ts">
                  <u>#MERN</u>
                </p>
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
    </div>
  );
}

export default SkillsComponent;
