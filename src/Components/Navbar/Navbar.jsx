import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavLinkClick = () => {
    closeMobileMenu();
  };

  const handleLogoClick = () => {
    closeMobileMenu();
  };

  return (
    <nav className="bg-dark">
      <div className="w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <NavLink to="/" style={{ display: 'contents' }}>
              <img className="h-8 w-auto" src="../images/logo.svg" alt="Bahrawy" />
              <span className="logoText px-2 text-2xl">Bahrawy</span>
            </NavLink>
          </div>
          <div className="hidden sm:ml-6 mar sm:block">
            <div className="flex space-x-4">
              <NavLink
                to="/"
                className="hot link text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                <span className="hash">#</span>Home
              </NavLink>
              <NavLink
                to="/projects"
                className="hot text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                aria-current="page"
              >
                <span className="hash">#</span>Projects
              </NavLink>
              <NavLink
                to="/about"
                className="hot text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                <span className="hash">#</span>About
              </NavLink>
              <NavLink
                to="/contact"
                className="hot text-gray-300 hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium"
              >
                <span className="hash">#</span>Contact
              </NavLink>
            </div>
          </div>

          <div className="absolute inset-y-0   right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              onClick={toggleMobileMenu}
              className="p-2 focus:outline-none  navBox sm:hidden "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6  "
                fill="#fff"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLink
              to="/"
              className="hot bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              onClick={handleNavLinkClick} // Call the function to close the mobile menu
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className=" hot text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              onClick={handleNavLinkClick}>
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className=" hot text-gray-300 hover-bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              onClick={handleNavLinkClick}>
              About
            </NavLink>
            <NavLink
              to="/contact"
              className=" hot text-gray-300 hover-bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              onClick={handleNavLinkClick}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
