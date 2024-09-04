import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const jobData = [
  {
    id: 'DRDO-RAC-2024-001',
    title: "Scientist 'B' (Electronics & Comm. Engg)",
    category: 'Research',
    location: 'Delhi',
    description: 'Design and development of advanced communication systems for defense applications. Work on signal processing algorithms, RF circuit design, and system integration for next-generation military communication equipment.',
    skills: ['RF Design', 'Digital Signal Processing', 'FPGA', 'Embedded Systems', 'C++'],
    deadline: '2024-09-30',
    salary: '₹56,100 - ₹1,77,500 (Level 10)',
    qualification: 'B.E/B.Tech in Electronics & Communication Engineering'
  },
  {
    id: 'DRDO-RAC-2024-002',
    title: 'Scientist "C" (Computer Science)',
    category: 'IT',
    location: 'Bangalore',
    description: 'Lead the development of advanced cybersecurity solutions for critical defense infrastructure. Design and implement secure communication protocols, conduct vulnerability assessments, and develop AI-driven threat detection systems.',
    skills: ['Cybersecurity', 'Machine Learning', 'Network Security', 'Python', 'Cryptography'],
    deadline: '2024-10-15',
    salary: '₹67,700 - ₹2,08,700 (Level 11)',
    qualification: 'M.E/M.Tech in Computer Science with specialization in Information Security'
  },
  {
    id: 'DRDO-RAC-2024-003',
    title: 'Technical Officer "A" (Mechanical Engineering)',
    category: 'Engineering',
    location: 'Pune',
    description: 'Support the design and testing of advanced propulsion systems for aerospace applications. Conduct thermal and structural analysis, assist in prototype development, and participate in field trials of new propulsion technologies.',
    skills: ['CAD/CAM', 'Finite Element Analysis', 'Thermal Analysis', 'ANSYS', 'SolidWorks'],
    deadline: '2024-09-25',
    salary: '₹44,900 - ₹1,42,400 (Level 7)',
    qualification: 'Diploma in Mechanical Engineering with 2 years experience'
  },
  {
    id: 'DRDO-RAC-2024-004',
    title: 'Scientist "D" (Aeronautical Engineering)',
    category: 'Research',
    location: 'Hyderabad',
    description: 'Lead research projects in advanced aerodynamics for next-generation aircraft and missile systems. Conduct computational fluid dynamics simulations, design wind tunnel experiments, and develop innovative flow control techniques.',
    skills: ['Computational Fluid Dynamics', 'MATLAB', 'Wind Tunnel Testing', 'Aerodynamics', 'Python'],
    deadline: '2024-11-01',
    salary: '₹78,800 - ₹2,09,200 (Level 12)',
    qualification: 'Ph.D in Aeronautical Engineering or related field'
  },
  {
    id: 'DRDO-RAC-2024-005',
    title: 'Scientist "B" (Material Science)',
    category: 'Research',
    location: 'Kanpur',
    description: 'Research and develop advanced materials for defense applications, including high-strength alloys, smart materials, and nanocomposites. Conduct material characterization, perform failure analysis, and optimize material properties for extreme environments.',
    skills: ['Material Characterization', 'X-ray Diffraction', 'Electron Microscopy', 'Polymer Science', 'Metallurgy'],
    deadline: '2024-10-20',
    salary: '₹56,100 - ₹1,77,500 (Level 10)',
    qualification: 'M.Sc in Material Science or M.E/M.Tech in Metallurgical Engineering'
  },
  {
    id: 'DRDO-RAC-2024-006',
    title: 'Technical Assistant "B" (Electronics)',
    category: 'Technical Support',
    location: 'Chennai',
    description: 'Assist in the testing and maintenance of electronic warfare systems. Conduct performance evaluations, troubleshoot hardware issues, and support field trials of new electronic countermeasure technologies.',
    skills: ['Electronic Warfare Systems', 'RF Testing', 'Circuit Analysis', 'LabVIEW', 'Soldering'],
    deadline: '2024-09-15',
    salary: '₹35,400 - ₹1,12,400 (Level 6)',
    qualification: 'Diploma in Electronics Engineering'
  },
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
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-indigo-50 to-purple-200 text-gray-900 p-8 flex flex-col items-center">
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

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredJobs.map((job) => (
          <motion.div
            key={job.id}
            className="bg-white text-gray-800 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-transform transform hover:scale-105"
            onClick={() => handleJobClick(job)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-2">{job.location} | {job.category}</p>
            <p className="text-sm text-gray-500 mb-3">Job ID: {job.id}</p>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-2">Required Skills:</h3>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Qualification:</span> {job.qualification}</p>
            <p className="text-gray-700 mb-4"><span className="font-semibold">Salary:</span> {job.salary}</p>
            <p className="text-right text-gray-500">Application Deadline: {job.deadline}</p>
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
