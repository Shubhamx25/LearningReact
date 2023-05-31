import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; 

import meter1 from '../assets/meter1.svg';
import meter2 from '../assets/meter2.svg';
import meter3 from '../assets/meter3.svg';
import colorSharp from '../assets/color-sharp.png'

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


      return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-box'>
                            <h2>
                                Skills
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider' >
                            <div className='item'>
                                <img src={meter1} alt='img'/>
                                <h5>Web developer</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt='img'/>
                                <h5>Web developer</h5>
                            </div>
                            <div className='item'> 
                                <img src={meter3} alt='img'/>
                                <h5>Web developer</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt='img'/>
                                <h5>Web developer</h5>
                            </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} className='background-image-left' alt='Ui img' />
        </section>
      )
    
}

export default Skills