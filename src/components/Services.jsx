import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Button } from '@/components/ui/button';

const Services = ({ isDarkMode }) => {
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
    <section
      className={`p-6 md:p-10 text-center ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="flex items-center md:items-start mb-6 md:mb-0 md:mr-8">
        <div
          className={`w-12 h-px ${
            isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
          } mr-4 hidden md:block`}
        ></div>
        <span
          className={`text-sm uppercase tracking-wider ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          } whitespace-nowrap`}
        >
          OUR SERVICE
        </span>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
          Submit your application and
          <br className="hidden md:inline" />
          let our team do the rest
        </h2>
        <p
          className={`text-gray-400 max-w-full md:max-w-2xl ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          } mx-auto`}
        >
          In economics, services are economic activities that involve a number
          of interactions with consumers or businesses.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1} 
        slidesPerGroup={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4, 
          },
        }}
        className="mt-8"
        style={{ padding: '0 1rem' }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div
              className={`w-full max-w-xs ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } rounded-lg shadow-lg overflow-hidden flex flex-col items-center`}
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-32 md:h-40 object-cover"
                style={{ objectFit: 'cover', width: '100%' }} 
              />
              <div className="p-4">
                <h3
                  className={`text-base md:text-lg font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-gray-400 mb-4 text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {service.description}
                </p>
                <Button className="bg-green-500 text-white px-3 py-1 rounded">
                  Learn More
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;