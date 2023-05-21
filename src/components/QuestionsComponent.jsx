import React from "react";
import "../../public/assets/script";
import AccordionComponent from "./AcccordionComponent";

function QuestionsComponent() {
  return (
    <>
      <div
        className="section m-0 pt-5"
        style={{
          background:
            '#caf0f8 url("/assets/demos/freelancer/images/bg.svg") no-repeat right center',
          paddingTop: 240,
        }}>
        <div
          className="shape-divider"
          data-shape="wave-4"
          data-height={150}
          id="shape-divider-6017">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1280 140"
            preserveAspectRatio="none">
            <path
              className="shape-divider-fill"
              fill="#F8F7F2"
              d="M0 51.76c36.21-2.25 77.57-3.58 126.42-3.58 320 0 320 57 640 57 271.15 0 312.58-40.91 513.58-53.4V0H0z"
              opacity="0.3"
            />
            <path
              className="shape-divider-fill"
              d="M0 24.31c43.46-5.69 94.56-9.25 158.42-9.25 320 0 320 89.24 640 89.24 256.13 0 307.28-57.16 481.58-80V0H0z"
              opacity="0.5"
            />
            <path
              className="shape-divider-fill"
              d="M0 0v3.4C28.2 1.6 59.4.59 94.42.59c320 0 320 84.3 640 84.3 285 0 316.17-66.85 545.58-81.49V0z"
            />
          </svg>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h3 className="fw-bolder h1 mb-4" data-aos="slide-right">
                Few things people usually ask{" "}
                <span className="text-primary">ME</span>
              </h3>
              <div data-aos="slide-up">
                <AccordionComponent />
              </div>
            </div>
            <div className="col-lg-7">
              <img src="/assets/img/ask.svg" alt="FAQs" className="px-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionsComponent;
