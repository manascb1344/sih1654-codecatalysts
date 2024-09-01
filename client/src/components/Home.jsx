import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaCogs, FaUsers, FaCheckCircle, FaFlag } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-black text-white overflow-hidden">
      <div className="absolute right-0 top-0 w-3/5 h-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGe82l9rNr2mOmwhD2GdGhCnMrV0z5iYSEFg&s"
          alt="DRDO Building"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent">
        <div className="container mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-col gap-8">
              <h1 className="text-5xl sm:text-7xl font-bold leading-tight">
                Expert Relevance Matching for DRDO Interview Boards
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8">
                Our solution efficiently matches the profiles of subject experts
                with interview board subjects and candidates' areas of
                expertise. By leveraging advanced algorithms, we provide a
                matching score for each expert, ensuring optimal selection for
                interview boards and enhancing the recruitment and assessment
                process at DRDO.
              </p>
            </div>
            <Link to="/dashboard" className="group relative inline-block">
              <div className="absolute inset-0 border-4 border-white translate-x-2 translate-y-2 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <button className="relative bg-[#39FF14] text-2xl text-black px-8 py-4 font-bold group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-200">
                Explore Solution
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const LatestSection = () => {
  const schedules = [
    {
      text: 'Interview Schedule',
      lastUpdated: '22 Aug, 2024 17:40 hrs.',
    },
    {
      text: ' Technical Screening Status - Biotechnology/ Biochemistry',
      lastUpdated: '21 Aug, 2024 12:05 hrs.',
    },
    {
      text: 'Technical Screening Status - Physiology',
      lastUpdated: '20 Aug, 2024 17:45 hrs.',
    },
    {
      text: 'Administrative Screening Status - Aerospace Engineering',
      lastUpdated: '13 Aug, 2024 11:45 hrs.',
    },
  ];
  return (
    <div className="bg-black text-white py-12 px-12">
      <div className="flex space-x-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-start">
          <h2 className="mb-8 flex items-center">
            <div className="w-12 h-px bg-white mr-4"></div>
            <span className="text-4xl font-bold uppercase tracking-wider text-white">
              LATEST
            </span>
          </h2>
        </div>
        <div className="flex-1 bg-black text-white p-6 rounded-lg shadow-lg">
          <ul className="space-y-2">
            {schedules.map((schedule, index) => (
              <Link
                to="https://rac.gov.in/"
                target="_blank"
                key={index}
                className="flex justify-between items-center border-b-2 text-2xl hover:scale-105 transition-all duration-300"
              >
                <span
                  className={`${index % 2 === 0 ? 'text-red-400' : 'text-white'
                    }`}
                >
                  {schedule.text}
                </span>
                <span className="text-sm text-gray-600">
                  Last updated on : {schedule.lastUpdated}
                </span>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaCogs className="text-5xl mb-4" aria-label="Cogs icon" />,
      title: 'Process Overview',
      description:
        'The RAC under DRDO conducts interviews for recruitment and sponsorship.',
    },
    {
      icon: <FaUsers className="text-5xl mb-4" aria-label="Users icon" />,
      title: 'Expert Selection',
      description:
        'Experts are selected from DRDO, industry, and academia for interview boards.',
    },
    {
      icon: (
        <FaCheckCircle
          className="text-5xl mb-4"
          aria-label="Check circle icon"
        />
      ),
      title: 'Matching Scores',
      description:
        'Our solution provides matching and relevancy scores for expert suitability.',
    },
    {
      icon: <FaFlag className="text-5xl mb-4" aria-label="Flag icon" />,
      title: 'Final Selection',
      description:
        'The most suitable experts are chosen for the interview boards.',
    },
  ];

  return (
    <section className="bg-black text-white py-12 px-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-8"
          >
            <div className="w-12 h-px bg-white mr-4"></div>
            <span className="text-4xl font-bold uppercase tracking-wider text-white">
              HOW IT WORKS
            </span>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className="text-green-400 mb-4">{step.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-green-300">
                  {step.title}
                </h4>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Expert Matching for Interviews',
      description: 'Find the best experts based on domain and candidate needs.',
      imageUrl:
        'https://cdn4.vectorstock.com/i/1000x1000/81/78/single-one-line-drawing-interview-man-vector-46008178.jpg',
    },
    {
      title: 'Relevancy Scoring for Board Selection',
      description:
        'Score experts based on their relevancy to the interview board.',
      imageUrl:
        'https://cdn4.vectorstock.com/i/1000x1000/81/78/single-one-line-drawing-interview-man-vector-46008178.jpg',
    },
    {
      title: "Profile Scoring Based on Candidates' Expertise",
      description: 'Match experts to candidates by scoring their profiles.',
      imageUrl:
        'https://cdn4.vectorstock.com/i/1000x1000/81/78/single-one-line-drawing-interview-man-vector-46008178.jpg',
    },
    {
      title: 'Advanced Analytics',
      description: 'Gain insights with advanced data analytics and reporting.',
      imageUrl:
        'https://cdn4.vectorstock.com/i/1000x1000/81/78/single-one-line-drawing-interview-man-vector-46008178.jpg',
    },
    {
      title: 'Custom Interview Processes',
      description: 'Tailor interview processes to specific needs.',
      imageUrl:
        'https://cdn4.vectorstock.com/i/1000x1000/81/78/single-one-line-drawing-interview-man-vector-46008178.jpg',
    },
  ];

  return (
    <section className="bg-black text-white py-12 px-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-start mb-8">
          <h2 className="flex items-center">
            <div className="w-12 h-px bg-white mr-4"></div>
            <span className="text-4xl font-bold uppercase tracking-wider text-white">
              OUR SERVICES
            </span>
          </h2>
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-12"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-transform duration-300 ease-in-out transform border border-gray-700 hover:border-green-500">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-green-400">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <Link
                        to="/register"
                        className="group relative inline-block self-start mt-4"
                      >
                        <div className="absolute inset-0 border-2 border-white translate-x-1 translate-y-1 "></div>
                        <button className="relative bg-red-600 text-white px-6 py-2 font-bold group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-200">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev-custom absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <button className="w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-lg">
              <svg
                className="w-5 h-5 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <button className="w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-lg">
              <svg
                className="w-5 h-5 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <LatestSection />
      <Services />
      <HowItWorks />
    </motion.div>
  );
};

export default Home;