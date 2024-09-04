import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const JobDetail = () => {
  const location = useLocation();
  const { job } = location.state || {};

  if (!job) {
    return <p className="text-center text-white">Job not found.</p>;
  }

  const handleClick = () => {
    window.location.href = '/form';
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-indigo-50 to-purple-200 text-white p-8 flex justify-center items-center">
      <motion.div
        className="max-w-4xl w-full bg-white text-gray-800 rounded-xl shadow-2xl p-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className="text-4xl font-extrabold text-blue-600 mb-6">{job.title}</h1>
        <p className="text-xl mb-4"><strong>Location:</strong> {job.location}</p>
        <p className="text-lg mb-6">{job.description}</p>
        <h2 className="text-2xl font-bold text-blue-500 mb-4">Required Skills</h2>
        <ul className="list-disc pl-5 space-y-2">
          {job.skills.map((skill, index) => (
            <li key={index} className="text-lg text-gray-700">{skill}</li>
          ))}
        </ul>

        {/* Apply Button */}
        <div className="flex justify-center mt-8">
          <button
            className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:from-green-500 hover:to-blue-500 transform hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={handleClick}
          >
            Apply Now
          </button>
        </div>

        <p className="text-right text-gray-500 mt-6">Application Deadline: {job.deadline}</p>
      </motion.div>
    </div>
  );
};

export default JobDetail;
