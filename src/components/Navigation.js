import React from 'react';

// Importing styled-components library
import styled from 'styled-components';

// Importing components from react-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Importing the logo image
import logo from '../assets/images/nb_logo.png';

// Styled component for custom styles
const Styles = styled.div`
  a, .navbar-nav .nav-link {
    color: black;
    &:hover {
      background-color: black;
      color: white;
    }
  }
  .active {
    background-color: black;
    color: white !important;
  }
  .navbar {
    display: flex;
    justify-content: center;
    padding-top: 10px; /* Adjust padding for spacing */
    padding-bottom: 10px; /* Adjust padding for spacing */
  }
  .navbar-brand {
    margin-left: 100px; /* Push Navbar.Brand to the right */
  }
  
`;

// Navigation component
function Navigation({ currentPage, handlePageChange }) {

  return (
    <Styles>

      {/* Navbar component from react-bootstrap */}
      <Navbar bg="transparent" expand='lg'>
        <Navbar.Brand>
          <img src={logo} alt="Logo" style={{ height: '120px' }} /> {/* Add the logo image */}
        </Navbar.Brand>
      
      {/* Navbar toggle button for responsive view */}
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Container>
                    <Nav className="m-auto flex-grow-1 justify-content-evenly">
                      
                      {/* Navigation links */}
                        <Nav.Link
                            href="#aboutme" onClick={() => handlePageChange('Home')}
                            className={currentPage === 'About' ? 'active' : 'nav-link'}>
                            ABOUT
                        </Nav.Link>
                        <Nav.Link
                            href="#work" onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Project' ? 'active' : 'nav-link'}>
                            WORK
                        </Nav.Link>
                        <Nav.Link
                            href="#resume" onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'active' : 'nav-link'}>
                            RESUME
                        </Nav.Link>
                        <Nav.Link
                            href="#contact" onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'active' : 'nav-link'}>
                            CONTACT
                        </Nav.Link>
                    </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
}

// Exporting the Navigation component
export default Navigation;