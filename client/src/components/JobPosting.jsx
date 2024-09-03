import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const jobData = [
  { id: 1, title: 'Scientist B', category: 'Research', location: 'Delhi', description: 'Cutting-edge research in defense technology.', skills: ['Physics', 'Material Science'], deadline: '2024-09-30' },
  { id: 2, title: 'Technical Officer', category: 'Engineering', location: 'Bangalore', description: 'Technical project management.', skills: ['Project Management', 'Engineering'], deadline: '2024-10-15' },
  { id: 3, title: 'Admin Assistant', category: 'Administration', location: 'Hyderabad', description: 'Office management and administrative tasks.', skills: ['Administration', 'Communication'], deadline: '2024-09-25' },
  { id: 4, title: 'Software Developer', category: 'IT', location: 'Pune', description: 'Development of defense software systems.', skills: ['JavaScript', 'React', 'Python'], deadline: '2024-11-01' },
];

const DRDOJobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobData);
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredJobs(
      jobData.filter(
        (job) =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const handleJobClick = (job) => {
    navigate(`/jobs/${job.id}`, { state: { job } });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8 flex flex-col items-center">
      <motion.div
        className="max-w-3xl w-full text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className="text-4xl font-extrabold mb-6 text-blue-600">DRDO Job Listings</h1>
        <input
          type="text"
          placeholder="Search for a job..."
          className="w-full p-4 text-gray-800 rounded-lg border-2 border-gray-300 focus:ring-4 focus:ring-blue-200 focus:border-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredJobs.map((job) => (
          <motion.div
            key={job.id}
            className="bg-white text-gray-800 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-transform transform hover:scale-105"
            onClick={() => handleJobClick(job)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-3">{job.title}</h2>
            <p className="text-gray-600 mb-2">{job.location}</p>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <div className="flex space-x-2 flex-wrap">
              {job.skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-right text-gray-500 mt-4">Deadline: {job.deadline}</p>
          </motion.div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <motion.div
          className="text-center text-gray-500 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No jobs found for the search query.
        </motion.div>
      )}
    </div>
  );
};

export default DRDOJobs;
