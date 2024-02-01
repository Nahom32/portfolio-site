import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [jobTitle, setJobTitle] = useState('Full Stack Developer');

  useEffect(() => {
    const jobTitles = ['Web Developer', 'Software Engineer', 'Problem Solver'];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setJobTitle(jobTitles[currentIndex]);
      currentIndex = (currentIndex + 1) % jobTitles.length;
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-500 transition duration-500 transform hover:scale-110">
          Your Name
        </h1>
        <p className="text-xl text-gray-400 mt-2 transition duration-300">
          {jobTitle}
        </p>
      </header>

      <section className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
          About Me
        </h2>
        <p className="text-gray-400">
          Welcome to my portfolio! I'm a passionate and dedicated full-stack developer
          with expertise in creating web applications. My goal is to combine my technical
          skills with my creativity to provide innovative solutions.
        </p>
      </section>

      <section className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
          Skills
        </h2>
        <ul className="list-disc list-inside text-gray-400">
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          {/* Add more skills as needed */}
        </ul>
      </section>

      <section className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
          Projects
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-indigo-500 mb-2">
            Project Name 1
          </h3>
          <p className="text-gray-400">
            Description of the project goes here. Highlight key features and technologies used.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-indigo-500 mb-2">
            Project Name 2
          </h3>
          <p className="text-gray-400">
            Description of the project goes here. Highlight key features and technologies used.
          </p>
        </div>
        <Link to="/projects" className="text-indigo-500 hover:underline transition duration-300">
          View All Projects
        </Link>
      </section>

      <section className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
          Contact Me
        </h2>
        <p className="text-gray-400">
          Interested in collaborating or have a question? Feel free to get in touch with me.
        </p>
        <Link to="/contact" className="text-indigo-500 hover:underline transition duration-300 mt-2">
          Contact Form
        </Link>
      </section>

      <footer className="mt-auto text-center text-gray-400">
        <p>&copy; 2024 Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
