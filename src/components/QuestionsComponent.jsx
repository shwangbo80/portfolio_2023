import React from "react";
import "../assets/script";
import AccordionComponent from "./AcccordionComponent";

function QuestionsComponent() {
  return (
    <>
      <div
        className="section m-0"
        style={{
          background:
            '#caf0f8 url("./src/assets/demos/freelancer/images/bg.svg") no-repeat right center',
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
              <h3 className="fw-bolder h1 my-5">
                A few things people
                <br />
                normally ask me
              </h3>
              <div className="accordion" data-collapsible="true">
                <div className="accordion-header">
                  <div className="accordion-icon">
                    <i className="accordion-closed icon-line-plus color gradient-text gradient-red-yellow" />
                    <i className="accordion-open icon-line-minus color gradient-text gradient-red-yellow" />
                  </div>
                  <div className="accordion-title text-dark">
                    Why did you change your career from graphic design to web
                    development?
                  </div>
                </div>
                <div className="accordion-content">
                  I decided to transition to web development because I wanted to
                  expand my skill set and be able to create functional and
                  engaging online experiences. I saw it as an opportunity to
                  combine my design background with the technical aspects of
                  coding, enabling me to bring my creative vision to life in a
                  more interactive way.
                </div>
                <div className="accordion-header">
                  <div className="accordion-icon">
                    <i className="accordion-closed icon-line-plus color gradient-text gradient-red-yellow" />
                    <i className="accordion-open icon-line-minus color gradient-text gradient-red-yellow" />
                  </div>
                  <div className="accordion-title text-dark">
                    Where did you learn how to code?
                  </div>
                </div>
                <div className="accordion-content">
                  As a self-taught coder, I have cultivated a strong passion for
                  programming and a deep desire to continuously learn and
                  improve my skills. Without formal education in computer
                  science or a traditional coding background, I embarked on a
                  self-directed journey to acquire the knowledge and expertise
                  needed to become a proficient developer.
                </div>
                <div className="accordion-header" id="id-accordion-3">
                  <div className="accordion-icon">
                    <i className="accordion-closed icon-line-plus color gradient-text gradient-red-yellow" />
                    <i className="accordion-open icon-line-minus color gradient-text gradient-red-yellow" />
                  </div>
                  <div className="accordion-title text-dark">
                    What nationality are you?
                  </div>
                </div>
                <div className="accordion-content">
                  I was born in South Korea, and immigrated to USA when I was 10
                  years old.
                </div>
                <div className="accordion-header" id="id-accordion-4">
                  <div className="accordion-icon">
                    <i className="accordion-closed icon-line-plus color gradient-text gradient-red-yellow" />
                    <i className="accordion-open icon-line-minus color gradient-text gradient-red-yellow" />
                  </div>
                  <div className="accordion-title text-dark">
                    Other than web development, what other skills do you posess?
                  </div>
                </div>
                <div className="accordion-content">
                  <p className="fw-bold mb-0">Graphic Design</p>
                  <p>
                    I am a versatile and creative graphic designer with a keen
                    eye for visual aesthetics and a passion for bringing ideas
                    to life. With a strong background in design principles,
                    typography, and layout, I have the ability to effectively
                    communicate messages through compelling and visually
                    appealing designs. I excel in conceptualizing and executing
                    designs across various mediums, including print and digital
                    platforms. Whether it's creating eye-catching branding
                    materials, designing engaging marketing collateral, or
                    crafting intuitive user interfaces, I am dedicated to
                    delivering high-quality designs that make a lasting impact.
                  </p>
                  <p className="fw-bold mb-0">Project Management</p>
                  <p>
                    I am an experienced project manager with a proven track
                    record of successfully leading and delivering projects of
                    various scales and complexities. With a meticulous attention
                    to detail and strong organizational skills, I excel in
                    overseeing project timelines, budgets, and resources to
                    ensure smooth execution from initiation to completion. My
                    effective communication and collaboration abilities enable
                    me to effectively coordinate and motivate cross-functional
                    teams, ensuring everyone is aligned and working towards a
                    common goal. I thrive in fast-paced environments, leveraging
                    my problem-solving skills to mitigate risks and overcome
                    challenges. As a project manager, my ultimate goal is to
                    deliver exceptional results while fostering a positive and
                    productive team dynamic.
                  </p>
                </div>
              </div>
              <AccordionComponent />
            </div>
            <div className="col-lg-7">
              <img src="./src/assets/img/ask.svg" alt="FAQs" className="px-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionsComponent;
