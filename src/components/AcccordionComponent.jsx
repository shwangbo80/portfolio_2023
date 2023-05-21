import Accordion from "react-bootstrap/Accordion";

function FlushExample() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <p className="fw-bold">
            Why did you change your career from graphic design to web
            development?
          </p>
        </Accordion.Header>
        <Accordion.Body>
          I decided to transition to web development because I wanted to expand
          my skill set and be able to create functional and engaging online
          experiences. I saw it as an opportunity to combine my design
          background with the technical aspects of coding, enabling me to bring
          my creative vision to life in a more interactive way.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <p className="fw-bold">Where did you learn how to code?</p>
        </Accordion.Header>
        <Accordion.Body>
          As a self-taught coder, I have cultivated a strong passion for
          programming and a deep desire to continuously learn and improve my
          skills. Without formal education in computer science or a traditional
          coding background, I embarked on a self-directed journey to acquire
          the knowledge and expertise needed to become a proficient developer.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <p className="fw-bold">What ethnicity are you?</p>
        </Accordion.Header>
        <Accordion.Body>
          I was born in South Korea, and my family immigrated to USA when I was
          10 years old.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <p className="fw-bold">
            Other than web development, what other skills do you posess?
          </p>
        </Accordion.Header>
        <Accordion.Body>
          <p className="fw-bold mb-0">Graphic Design</p>
          <p>
            I am a versatile and creative graphic designer with a keen eye for
            visual aesthetics and a passion for bringing ideas to life. With a
            strong background in design principles, typography, and layout, I
            have the ability to effectively communicate messages through
            compelling and visually appealing designs. I excel in
            conceptualizing and executing designs across various mediums,
            including print and digital platforms. Whether it's creating
            eye-catching branding materials, designing engaging marketing
            collateral, or crafting intuitive user interfaces, I am dedicated to
            delivering high-quality designs that make a lasting impact.
          </p>
          <p className="fw-bold mb-0">Project Management</p>
          <p>
            I am an experienced project manager with a proven track record of
            successfully leading and delivering projects of various scales and
            complexities. With a meticulous attention to detail and strong
            organizational skills, I excel in overseeing project timelines,
            budgets, and resources to ensure smooth execution from initiation to
            completion. My effective communication and collaboration abilities
            enable me to effectively coordinate and motivate cross-functional
            teams, ensuring everyone is aligned and working towards a common
            goal. I thrive in fast-paced environments, leveraging my
            problem-solving skills to mitigate risks and overcome challenges. As
            a project manager, my ultimate goal is to deliver exceptional
            results while fostering a positive and productive team dynamic.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FlushExample;
