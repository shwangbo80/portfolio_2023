import React from "react";

function ExperienceComponent() {
  return (
    <>
      <div className="container" style={{maxWidth: 1000}}>
        <div className="row col-mb-30 mt-5">
          <div className="col-md-4">
            <div className="d-flex align-items-center justify-content-center">
              <h1 className="counter counter-xlarge h1 text-primary fw-bolder">
                5
              </h1>
              <span>
                + Years Of
                <br />
                Web Development Experience.
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex align-items-center justify-content-center">
              <h1 className="counter counter-xlarge h1 text-primary fw-bolder">
                10
              </h1>
              <span>
                Years Of
                <br />
                Project Management Experience.
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex align-items-center justify-content-center">
              <h1 className="counter counter-xlarge h1 text-primary fw-bolder">
                15
              </h1>
              <span>
                + Years Of
                <br />
                Web/Graphic Design Experience.
              </span>
            </div>
          </div>
        </div>
        <div className="line line-sm mb-0" />
      </div>
    </>
  );
}

export default ExperienceComponent;
