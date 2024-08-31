import React from 'react';
import { FaCogs, FaUsers, FaCheckCircle } from 'react-icons/fa'; 

const HowItWorks = ({ isDarkMode }) => {
  return (
    <section
      className={`p-10 rounded-lg shadow-lg ${
        isDarkMode
          ? 'bg-gray-800 text-white'
          : 'bg-gradient-to-r from-blue-100 to-blue-300 text-gray-800'
      }`}
    >
      <h2 className="text-3xl font-extrabold text-center mb-6">How It Works</h2>
      <div className="flex flex-col md:flex-row md:space-x-8 items-center">
        <div className="flex flex-col items-center md:w-1/3 mb-6 md:mb-0">
          <FaCogs className="text-4xl mb-3" aria-label="Cogs icon" />
          <h3 className="text-xl font-semibold mb-2">Process Overview</h3>
          <p className="text-center">
            The RAC under DRDO, Ministry of Defence conducts interviews for
            candidate recruitment and higher qualifications sponsorship.
          </p>
        </div>
        <div className="flex flex-col items-center md:w-1/3 mb-6 md:mb-0">
          <FaUsers className="text-4xl mb-3" aria-label="Users icon" />
          <h3 className="text-xl font-semibold mb-2">Expert Selection</h3>
          <p className="text-center">
            Experts are selected from DRDO, industry, and academia to form
            interview boards based on their areas of expertise.
          </p>
        </div>
        <div className="flex flex-col items-center md:w-1/3">
          <FaCheckCircle
            className="text-4xl mb-3"
            aria-label="Check circle icon"
          />
          <h3 className="text-xl font-semibold mb-2">Matching Scores</h3>
          <p className="text-center">
            Our solution provides a matching score and relevancy score to
            predict the suitability of experts for interview boards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
