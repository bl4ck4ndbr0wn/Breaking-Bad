import React from 'react';
import {Link} from 'react-router-dom';


const Footer = () => {
  return (
    <>
      <footer className="bg-gray-200">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-500 hover:text-gray-400">Breaking Bad</Link>
          <p className="py-2 text-gray-500 sm:py-0">All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;