import React from "react";
import {useEffect} from "react";
import HeroComponent from "../components/HeroComponent";
import SkillsComponent from "../components/SkillsComponent";
import ExperienceComponent from "../components/ExperienceComponent";
import ProjectsComponent from "../components/ProjectsComponent";
import ServicesComponent from "../components/ServicesComponent";
import QuestionsComponent from "../components/QuestionsComponent";
import ContactComponent from "../components/ContactComponent";

function HomePage() {
  return (
    <>
      <div>
        <div id="wrapper" className="clearfix">
          <section id="content">
            <div className="content-wrap p-0">
              <HeroComponent />
              <div className="wave-container-skills" />
              <SkillsComponent />
              <ExperienceComponent />
              <div className="clear" />
              <ProjectsComponent />
              <div className="clear" />
              <ServicesComponent />
              <div className="wave-container" />
              <QuestionsComponent />
              <div className="clear" />
              <ContactComponent />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default HomePage;
