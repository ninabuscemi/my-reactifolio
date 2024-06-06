import React from 'react';
import Project from './Work'; // Imports the project component
import projectImage from '../../../assets/images/03-javascript-homework-demo.png';
import projectImage2 from '../../../assets/images/04-proj-1.png';
import projectImage3 from '../../../assets/images/05-note-taker.png'; // Import the image files

// Array of project objects

const projects = [
  {
    id: 0,
    title: "Password Generator",
    tools: "HTML, CSS, Javascript",
    image: projectImage, // Assinging the imported image to the project
    description: "A web application that generates random passwords.",
    repo: "https://github.com/ninabuscemi/module-3",
    live: "https://ninabuscemi.github.io/module-3/",
  },

  {
    id: 1,
    title: "Emoji Translator (Team Project)",
    tools: "HTML, CSS (Tailwind CSS), Javascript",
    image: projectImage2,
    description: "A fun web application that allows users to translate their text into expressive emojis, and it also offers a feature to generate random quotes with a visually appealing design.",
    repo: "https://github.com/ninabuscemi/Emoji-Translator",
    live: "https://johnchewning.github.io/Emoji-Translator/",
  },

  {
    id: 2,
    title: "Note taking generator",
    tools: "Express.js, JSON, Render",
    image: projectImage3,
    description: "A website used to write and save notes.",
    repo: "https://github.com/ninabuscemi/note-generator",
    live: "https://note-taking-generator.onrender.com/",
  },

// adding projects later
];

// Functional component for the Portfolio section
const Portfolio = () => {
  return (
   <div className='m-4'>
         {/* Rendering the Project component and passing the projects array as a prop */}
            <Project projects={projects} />
        </div>
  );
}

export default Portfolio;