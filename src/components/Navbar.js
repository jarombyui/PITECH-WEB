import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'INICIO', path: '/' },
    { name: '¿QUIÉNES SOMOS?', path: '/about' },
    { name: 'SERVICIOS', path: '/servicios' },
    { name: 'GALERÍA', path: '/blog' },
    { name: 'CONTÁCTANOS', path: '/contacto' },
  ];

  return (
    <nav className="bg-gradient-to-r from-primary via-blue-800 to-dark shadow-blue-lg border-b border-accent/30 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="flex items-center">
                <img
                  src="/images/logo-PYTECH.jpeg"
                  alt="PITECH Logo"
                  className="h-16 w-auto object-contain drop-shadow-lg"
                />
                <div className="ml-3">
                  <h1 className="text-2xl font-bold text-white font-tech">PITECH</h1>
                  <p className="text-sm text-accent">Servicios Residenciales</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-300 hover:text-accent hover:bg-accent/10 px-3 py-2 text-sm font-semibold rounded transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-accent"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-b from-primary/95 to-dark/95 backdrop-blur-sm">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-gray-300 hover:text-accent hover:bg-accent/10 px-3 py-2 text-base font-semibold rounded transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 