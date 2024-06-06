import React from 'react';

// Importing the ResumeContent component
import ResumeContent from './ResumeContent';
import './resume.css';

// Functional component for the Resume section
const Resume = () => {
  return (

   // Container div for the Resume section
    <div className="resume-container">
      <ResumeContent />
      {/* Other components or content */}
    </div>
  );
};

// Exporting the Resume component
export default Resume;