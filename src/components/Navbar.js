import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 text-white bg-gray-800">
      <div className="container mx-auto">
        {/* Mobile menu */}
        <div className="flex items-center justify-between md:hidden">
          <a href="#" className="text-lg font-semibold">
            Logo
          </a>
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            {/* Menu icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu items */}
        {isMenuOpen && (
          <div className="flex flex-col mt-4 space-y-2 md:hidden">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              Features
            </a>
            <a href="#" className="hover:text-gray-300">
              Download
            </a>
            <a href="#" className="hover:text-gray-300">
              Career
            </a>
            <a href="#" className="hover:text-gray-300">
              Pricing
            </a>
          </div>
        )}

        {/* Desktop menu */}
        <div className="justify-center hidden mx-auto space-x-8 md:flex max-w-7xl">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            Features
          </a>
          <a href="#" className="hover:text-gray-300">
            Download
          </a>
          <a href="#" className="hover:text-gray-300">
            Career
          </a>
          <a href="#" className="hover:text-gray-300">
            Pricing
          </a>
        </div>
      </div>
    </nav>
  );
}
