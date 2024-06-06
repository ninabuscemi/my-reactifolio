// Importing the React library
import React from 'react';

// Importing components from the react-bootstrap library for layout and UI
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// Importing the CSS file for styling the About component
import './about.css';

// Importing the portfolio picture image
import portfolioPic from './portfolio_pic.jpg'; // Import the image file

// Importing the FontAwesomeIcon component and icons from the @fortawesome/react-fontawesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function About() {
    return (
        <>
        {/* Container for the About section */}
            <Container className='about mx-auto mt-5 '>
                <Row className='about-body '>
                    <Col xs={12} md={8} className='justify-content-center'>

                    {/* Section for the introduction */}
                        <div className='about-intro p-4 mobile-text'>
                        <h1 className="raleway-font">
                        Hi, I'm <strong style={{ color: '#3BB169' }}>Nina Buscemi</strong>.
                        </h1>
                        </div>

                        {/* Section for the description */}
                        <div className='about-description p-4 mobile-text'>
                            <p>
                            I’m a certified Full Stack Web Developer and UX designer with a B.A. in Graphic Design. My journey into web development began with a passion for creativity and problem-solving. 
                            I've explored diverse disciplines like graphic and web design, human-centered design, motion graphics, and illustrations.
                            </p>
                            <p>As a full stack web developer, I blend design expertise with technical skills to create immersive digital experiences. 
                            Rooted in empathy and attention to detail, my approach ensures every project meets user needs. Inspired by my early experiences in Photoshop and HTML/CSS, I'm dedicated to crafting intuitive interfaces that make a difference.
                            </p>
                            <p>Looking forward, I'm committed to staying ahead in technology and delivering impactful solutions that resonate globally. </p>
                        </div>
                    
                    {/* Section for social links */}
                        <div className="social-links">
                        <a href="https://github.com/ninabuscemi" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/ninabuscemi/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/nina_coding/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" className="social-icon" />
                        </a>
                        </div>
                    </Col>

                        {/* Section for the profile picture */}
                        <Col xs={12} md={4} className='d-flex justify-content-center '>
                        <div>
                            <Image
                            className='about-img img-responsive center-block d-block mx-auto'
                            src={portfolioPic} // Uses the imported variable as the source
                            roundedCircle/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>

    );
}


export default About;