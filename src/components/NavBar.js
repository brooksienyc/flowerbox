import React, { useState } from 'react';

 
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <nav className="container nav-container mx-auto py-4">
      <div className="hidden lg:flex md:flex">
      <div className="container mx-auto flex justify-center">
        <ul className="flex justify-center text-center w-full">
          <li className="flex-grow">
            <a href="#about" className="text-white hover:text-gray-300">About</a>
          </li>
          <li className="flex-grow">
            <a href="#collections" className="text-white hover:text-gray-300">Collections</a>
          </li>
          <li className="flex-grow">
            <a href="#delivery" className="text-white hover:text-gray-300">Delivery Service</a>
          </li>
          <li className="flex-grow">
            <a href="#location" className="text-white hover:text-gray-300">Location</a>
          </li>
          <li className="flex-grow">
            <a href="#contact" className="text-white hover:text-gray-300">Contact Us</a>
          </li>
        </ul>
      </div>
      </div>
      {/* Start Mobile View */}
      <div className="lg:hidden md:hidden">
      <button
          type="button"
          className="block text-white hover:text-gray-300 focus:text-gray-300 ml-3"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
            />
          </svg>
        </button>
        <ul className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li>
            <a href="#about" className="block text-white hover:text-gray-300 ml-3 my-3">About</a>
          </li>
          <li>
            <a href="#collections" className="block text-white hover:text-gray-300 ml-3 my-3">Collections</a>
          </li>
          <li>
            <a href="#delivery" className="block text-white hover:text-gray-300 ml-3 my-3">Delivery Service</a>
          </li>
          <li>
            <a href="#location" className="block text-white hover:text-gray-300 ml-3 my-3">Location</a>
          </li>
          <li>
            <a href="#contact" className="block text-white hover:text-gray-300 ml-3 my-3">Contact Us</a>
          </li>
        </ul>
        </div>
    </nav>
  );
  };

export default Navbar;
