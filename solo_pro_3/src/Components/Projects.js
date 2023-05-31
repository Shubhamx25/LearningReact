import React from 'react'
import { Col, Container, Row, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import projImg1 from '../assets/project-img1.png';
import projImg2 from '../assets/project-img2.png';
import projImg3 from '../assets/project-img3.png';
import colorSharp2 from '../assets/color-sharp2.png';

const Projects = () => {
  
    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];
   
    
  return (
    <section className='project' id='project'>
        <Container >
            <Row>
                <Col>
                <h2>
                    Projects
                </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Tab.Container id='project-tabs' defaultActiveKey='first'>
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab one</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                            Tab three
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((item,index) => {
                                        console.table(projects);
                                        return (
                                           <ProjectCard 
                                             key={index}
                                             {...item}
                                            
                                           />
                                           
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img src={colorSharp2} className='background-image-right' alt='Ui img' />
    </section>
  )
}

export default Projects