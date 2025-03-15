import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Zap, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <HashLink to="/#" className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-purple-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              InnoBoost
            </span>
          </HashLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <HashLink
              smooth
              to="/#"
              className="text-white hover:text-purple-400 transition"
            >
              Home
            </HashLink>
            <HashLink
              smooth
              to="/#services"
              className="text-white hover:text-purple-400 transition"
            >
              Services
            </HashLink>
            <HashLink
              smooth
              to="/#features"
              className="text-white hover:text-purple-400 transition"
            >
              Features
            </HashLink>
            <HashLink
              smooth
              to="/#pricing"
              className="text-white hover:text-purple-400 transition"
            >
              Pricing
            </HashLink>
            <HashLink
              smooth
              to="/#contact"
              className="text-white hover:text-purple-400 transition"
            >
              Contact
            </HashLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-purple-400 transition"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          <HashLink
            smooth
            to="/#contact"
            className="hidden md:block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
          >
            Get Started
          </HashLink>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10">
            <div className="flex flex-col space-y-4 p-6">
              <HashLink
                smooth
                to="/#"
                className="text-white hover:text-purple-400 transition"
                onClick={closeMenu}
              >
                Home
              </HashLink>
              <HashLink
                smooth
                to="/#services"
                className="text-white hover:text-purple-400 transition"
                onClick={closeMenu}
              >
                Services
              </HashLink>
              <HashLink
                smooth
                to="/#features"
                className="text-white hover:text-purple-400 transition"
                onClick={closeMenu}
              >
                Features
              </HashLink>
              <HashLink
                smooth
                to="/#pricing"
                className="text-white hover:text-purple-400 transition"
                onClick={closeMenu}
              >
                Pricing
              </HashLink>
              <HashLink
                smooth
                to="/#contact"
                className="text-white hover:text-purple-400 transition"
                onClick={closeMenu}
              >
                Contact
              </HashLink>
              <HashLink
                smooth
                to="/#contact"
                className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition w-full text-center"
                onClick={closeMenu}
              >
                Get Started
              </HashLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
