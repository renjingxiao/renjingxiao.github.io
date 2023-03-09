import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Django Web App",
      description: "Live Site",
      imgUrl: projImg1,
      url: "https://greatkart.onrender.com/"
    },
    {
      title: "Fullstack MERN Web App",
      description: "Live Site",
      imgUrl: projImg2,
      url: "https://jobify-m3c3.onrender.com/"
    },
    {
      title: "Rest APIs with Flask",
      description: "Live Site",
      imgUrl: projImg3,
      url: "https://rest-apis-flask-python-project-a2af.onrender.com/store"
    },
    {
      title: "Lyft Virtual Experience",
      description: "Github",
      imgUrl: projImg4,
      url: "https://github.com/renjingxiao/forage-lyft-project"
    },
    {
      title: "Blackbird Virtual Experience",
      description: "Github",
      imgUrl: projImg5,
      url: "https://github.com/renjingxiao/forage-lyft-project"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are my latest coding creations - warning: may cause sudden cravings for caffeine and snacks.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
