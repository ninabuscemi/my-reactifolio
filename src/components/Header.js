import React, { useState } from 'react';
// Importing the useState hook from React

import Navigation from './Navigation';
// Importing the Navigation component
import About from './pages/AboutPage/AboutMe';
// Importing the About component
import Portfolio from './pages/Portfolio/Portfolio';
// Importing the Portfolio component
import Contact from './pages/Contact';
// Importing the Contact component
import Resume from './pages/Resume/Resume';
// Importing the Resume component

export default function Header() {
  // State variable to keep track of the current page
  const [currentPage, setCurrentPage] = useState('About');

  // Function to render the appropriate page component based on the current page state
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

  // Function to handle page changes and update the current page state
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Rendering the Navigation component and passing the current page and page change handler as props */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Rendering the appropriate page component based on the current page state */}
      {renderPage()}
    </div>
  );
}