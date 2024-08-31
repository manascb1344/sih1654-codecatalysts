import React from 'react';

const HeroSection = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <section
      className={`relative py-20 px-10 flex items-center justify-center ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4 leading-snug">
            Find The Perfect Jobs That You Deserve
          </h1>
          <div
            className={`flex items-center rounded-md overflow-hidden mt-4 ${
              isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
            }`}
          >
            <input
              type="text"
              placeholder="Search job title, keywords, or company"
              className={`p-4 w-full ${
                isDarkMode
                  ? 'text-gray-300 bg-gray-800'
                  : 'text-gray-900 bg-gray-200'
              } focus:outline-none`}
            />
            <span
              className={`border-l h-full ${
                isDarkMode ? 'border-gray-700' : 'border-gray-300'
              }`}
            ></span>
            <input
              type="text"
              placeholder="Province, city, or region"
              className={`p-4 w-full ${
                isDarkMode
                  ? 'text-gray-300 bg-gray-800'
                  : 'text-gray-900 bg-gray-200'
              } focus:outline-none`}
            />
            <button
              className={`bg-green-500 text-white px-6 py-4 rounded-r-md hover:bg-green-600`}
            >
              Search
            </button>
          </div>
          <p
            className={`text-gray-400 mt-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Browse job offers by Category or Location
          </p>
        </div>
        <div className="hidden md:block">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Drdo-delhi-1-1-1675666412.webp"
            alt="DRDO"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
