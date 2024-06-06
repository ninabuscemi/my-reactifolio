import React from 'react';

// Importing components from react-bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// project function generates indivual cards to be used in the portfolio section

function Project(props) {

    return (
        <Container>
            <Row md={2} >
                
                {/* Mapping over the projects array and rendering a card for each project */}
                {props.projects.map((project) => (
                    <Col className='col-12 col-md-6'>
                        
                        {/* Card component to display project details */}
                        <Card className="bg-dark text-white card text-center m-4">

                            {/* Project image */}   
                            <Card.Img className='card-img' src={project.image} alt="Project card" />
                            
                            {/* Card overlay with project details */}
                            <Card.ImgOverlay className='overlay'>
                                
                                {/* Project title */}
                                <Card.Title key={project.id}><strong>{project.title}</strong></Card.Title>
                                
                                {/* Project description */}
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                                <Card.Subtitle className="mb-2">Tools: {project.tools}</Card.Subtitle>

                                {/* Button to view the project repository */}
                                <Button className=' btn-success btn-space'><Card.Link className='link' href={project.repo} target="_blank">View Repo</Card.Link></Button>
                                {/* Button to view the live project site */}
                                <Button className='btn-dark btn-space'><Card.Link className='link' href={project.live} target="_blank">View Site</Card.Link></Button>
                            
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Container>
    );
}

export default Project;