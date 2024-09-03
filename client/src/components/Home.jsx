import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaCogs, FaUsers, FaCheckCircle, FaFlag } from 'react-icons/fa';;
// import { FaRocket, FaUserTie, FaChartLine } from 'react-icons/fa';
import { FaRocket, FaUserTie, FaChartLine, FaClock } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-200 via-indigo-50 to-purple-200 min-h-screen w-full flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Expert Matching for
              <span className="block text-indigo-600">DRDO Interview Boards</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Revolutionizing the selection process with AI-powered profile matching and expert recommendations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/jobs"
                className="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Solution
              </Link>
              <Link
                to="/demo"
                className="bg-white text-indigo-600 hover:bg-indigo-50 border-2 border-indigo-600 px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: FaRocket, title: "Streamlined Process", description: "Faster and more efficient expert selection" },
                  { icon: FaUserTie, title: "Perfect Match", description: "AI-driven expert-candidate pairing" },
                  { icon: FaChartLine, title: "Data Insights", description: "Advanced analytics for better decisions" },
                  { icon: FaClock, title: "Time Savings", description: "Reduce administrative overhead" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="bg-indigo-100 p-3 rounded-full mb-4">
                      <item.icon className="text-2xl text-indigo-600" />
                    </div>
                    <h3 className="text-gray-800 font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
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
      text: 'Technical Screening Status - Biotechnology/ Biochemistry',
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
    <div className="bg-gray-100 py-16 px-8">
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-16 container mx-auto">
        <div className="flex justify-start items-start">
          <h2 className="mb-8 flex items-center">
            <div className="w-12 h-px bg-blue-600 mr-4"></div>
            <span className="text-4xl font-bold uppercase tracking-wider text-blue-600">
              LATEST
            </span>
          </h2>
        </div>
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
          <ul className="space-y-4">
            {schedules.map((schedule, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to="https://rac.gov.in/"
                  target="_blank"
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 pb-4 text-lg hover:bg-gray-50 transition-all duration-300 rounded-lg p-4"
                >
                  <span className={`${index % 2 === 0 ? 'text-blue-600' : 'text-purple-600'} font-semibold`}>
                    {schedule.text}
                  </span>
                  <span className="text-sm text-gray-600 mt-2 sm:mt-0">
                    Last updated on: {schedule.lastUpdated}
                  </span>
                </Link>
              </motion.li>
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
    <section className="bg-gradient-to-b from-blue-50 to-purple-50 py-16 px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-12"
        >
          <div className="w-12 h-px bg-blue-600 mr-4"></div>
          <span className="text-4xl font-bold uppercase tracking-wider text-blue-600">
            HOW IT WORKS
          </span>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className="text-blue-600 mb-4">{step.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-blue-800">
                  {step.title}
                </h4>
                <p className="text-gray-600">{step.description}</p>
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
    <section className="bg-gradient-to-b from-purple-50 to-blue-50 py-16 px-8">
      <div className="container mx-auto">
        <div className="flex justify-start items-start mb-12">
          <h2 className="flex items-center">
            <div className="w-12 h-px bg-purple-600 mr-4"></div>
            <span className="text-4xl font-bold uppercase tracking-wider text-purple-600">
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                >
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-purple-700">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <Link
                        to="/register"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-bold transition-colors duration-200"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev-custom absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <button className="w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-lg text-purple-600 hover:text-purple-800 transition-colors duration-200">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <button className="w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-lg text-purple-600 hover:text-purple-800 transition-colors duration-200">
              <svg
                className="w-5 h-5"
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