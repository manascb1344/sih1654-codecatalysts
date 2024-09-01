import React, { useState }  from 'react';


const getRandomScore = () => {
  const minScore = 1;
  const maxScore = 100;
  return Math.floor(Math.random() * (maxScore - minScore + 1)) + minScore;
};

const ApplicantCard = ({ name, skills, education, projects, experience }) => {
  const score = getRandomScore();
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="bg-gray-900 p-6">
        <h2 className="text-2xl font-bold text-white">{name}</h2>
        <p className="text-gray-400 text-sm mt-1">Applicant</p>
      </div>
      <div className="p-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Education</h3>
          <p className="text-gray-700">{education}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Important Projects</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Past Experience</h3>
          <p className="text-gray-700">{experience}</p>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <span className="text-sm font-medium text-gray-500">Applicant Score</span>
          <span className="text-3xl font-bold text-blue-600">{score}</span>
        </div>
      </div>
    </div>
  );
};

// ... rest of the file remains unchanged

export default ApplicantCard;