import React from 'react';
import ApplicantCard from '@/components/ApplicantCard';

const applicantsData = [
  {
    name: 'John Doe',
    skills: ['JavaScript', 'React', 'Node.js'],
    education: 'B.Sc in Computer Science',
    projects: ['Project A', 'Project B'],
    experience: '2 years at TechCorp',
  },
  {
    name: 'Jane Smith',
    skills: ['Python', 'Django', 'Machine Learning'],
    education: 'M.Sc in AI',
    projects: ['Project X', 'Project Y'],
    experience: '3 years at DataLabs',
  },
];

const Applicants = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Applicants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applicantsData.map((applicant, index) => (
          <ApplicantCard
            key={index}
            name={applicant.name}
            skills={applicant.skills}
            education={applicant.education}
            projects={applicant.projects}
            experience={applicant.experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Applicants;
