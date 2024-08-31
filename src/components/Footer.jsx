import React from 'react';

const Footer = () => {
  return (
    <footer className="p-5 bg-gray-800 text-white text-center">
      <p>© 2024 JobFi. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="text-gray-400">Facebook</a>
        <a href="#" className="text-gray-400">Twitter</a>
        <a href="#" className="text-gray-400">LinkedIn</a>
      </div>
      <button className="bg-green-500 mt-4 px-4 py-2 rounded">Contact Us</button>
    </footer>
  );
};

export default Footer;
