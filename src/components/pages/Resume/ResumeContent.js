import React from 'react';

// Imports the resumem file
import resumeFile from '../../../assets/images/files/ninaresume.pdf';

// Function component for the Resume section
const Resume = () => {
  return (
    <div>
    {/*Header for the resume section*/}
      <h2>My Resume</h2>

    {/* Button to download the resume file */}
      <button onClick={() => window.open(resumeFile, '_blank')} 
      className="btn btn-primary"> Download Resume </button>
      <p> </p>

    {/* Heading for the Proficiencies section */}
      <h3>Proficiencies</h3>
    
    {/* List of front-end proficiencies */}
      <ul> Front end:
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>jQuery</li>
      </ul>
    
    {/* List of back-end proficiencies */}
      <ul> Back end:
        <li> Python</li>
        <li> MYSQL</li>
        <li>MongoDB</li>
        <li>Express</li>
        <li>React</li>
        <li>Node</li>
      </ul>   
    </div>
  );
}

export default Resume;