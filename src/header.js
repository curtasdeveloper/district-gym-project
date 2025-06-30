import './index.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../src/images/image.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 h-16 sm:h-20 w-full z-50 flex justify-between items-center p-4 sm:px-8 bg-white shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center text-gray-800 text-xl sm:text-2xl lg:text-3xl jersey-15-regular">
            <img 
              src={image} 
              alt="DG" 
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mr-2 p-1 rounded-full border border-gray-300" 
            />
            <span className="text-base sm:text-xl lg:text-2xl">District Gym</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <Link 
            to="/why-join-us" 
            className="text-gray text-base lg:text-lg font-gemunu hover:underline cursor-pointer transition-colors"
          >
            Why Join Us
          </Link>
          <Link 
            to="/services" 
            className="text-gray text-base lg:text-lg font-gemunu hover:underline cursor-pointer transition-colors"
          >
            Services
          </Link>
          <Link 
            to="/about-us" 
            className="text-gray text-base lg:text-lg font-gemunu hover:underline cursor-pointer transition-colors"
          >
            About Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-16 sm:top-20 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <nav className="flex flex-col p-6 space-y-6">
          <Link 
            to="/why-join-us" 
            className="text-gray text-lg font-gemunu hover:text-gray-900 border-b border-gray-200 pb-3 transition-colors"
            onClick={closeMenu}
          >
            Why Join Us
          </Link>
          <Link 
            to="/services" 
            className="text-gray text-lg font-gemunu hover:text-gray-900 border-b border-gray-200 pb-3 transition-colors"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link 
            to="/about-us" 
            className="text-gray text-lg font-gemunu hover:text-gray-900 transition-colors"
            onClick={closeMenu}
          >
            About Us
          </Link>
        </nav>
      </div>
    </>
  );
};