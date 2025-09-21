import React, { useState } from 'react';
import { Menu, X, GraduationCap, Users, BookOpen } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-xl">
              <GraduationCap className="h-8 w-8 text-white" />
            </div> */}
            <img
            src="/assets/images/sihlogo.png" 
            alt="Edu+ Logo"
            className="w-20 h-20 object-contain"
          />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Edu+
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
            >
              Features
            </button>
            {/* <button 
              onClick={() => scrollToSection('demo')} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
            >
              Demo
            </button> */}
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Login Section */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-blue-50 rounded-lg p-2">
              {/* <div className="flex items-center space-x-1 px-3 py-2 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <Users className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
                  <a href="https://edu-plus-daahboard.vercel.app/" target="_blank" rel="noopener noreferrer">Student</a></span>
              </div> */}
              <div className="flex items-center space-x-1 px-3 py-2 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <BookOpen className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
                   <a href="http://localhost:4028/" target="_blank" rel="noopener noreferrer">Teacher/Student </a>
                </span>
              </div>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg">
             <a href="https://edu-plus-daahboard.vercel.app/" target="_blank" rel="noopener noreferrer">
 Login
</a>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('demo')} 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Demo
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Contact
              </button>
              <div className="flex space-x-2 pt-4">
                <div className="flex items-center space-x-1 px-3 py-2 bg-blue-50 rounded-md">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Student</span>
                </div>
                <div className="flex items-center space-x-1 px-3 py-2 bg-blue-50 rounded-md">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Teacher</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-semibold w-full">
                Login
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;