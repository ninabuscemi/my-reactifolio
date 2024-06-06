import React from 'react';
// Importing the React library

import Header from './components/Header';
// Importing the Header component
import Footer from './components/Footer';
// Importing the Footer component
import './App.css'; // Import the CSS file for App component styles

export default function App() {
  return (
    <div className="App">
      {/* Rendering the Header component */}
      <Header />
      <main className="main-content">
        {/* Placeholder for the main content of the application */}
        {/* Your page content goes here */}
        {/* Rendering the Footer component */}
        <Footer />
      </main>
    </div>
  );
}