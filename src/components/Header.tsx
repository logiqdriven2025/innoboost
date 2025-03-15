import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Zap, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed w-full top-0 z-50 glass-card">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <HashLink to="/#" className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold gradient-text">InnoBoost</span>
          </HashLink>

          <div className="flex items-center justify-between gap-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <HashLink
                smooth
                to="/#"
                className="text-white hover:text-primary transition"
              >
                Home
              </HashLink>
              <HashLink
                smooth
                to="/#services"
                className="text-white hover:text-primary transition"
              >
                Services
              </HashLink>
              <HashLink
                smooth
                to="/#features"
                className="text-white hover:text-primary transition"
              >
                Features
              </HashLink>
              <HashLink
                smooth
                to="/#pricing"
                className="text-white hover:text-primary transition"
              >
                Pricing
              </HashLink>
              <HashLink
                smooth
                to="/#contact"
                className="text-white hover:text-primary transition"
              >
                Contact
              </HashLink>
            </div>

            <HashLink
              smooth
              to="/#contact"
              className="hidden md:block bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full hover:opacity-90 transition"
            >
              Get Started
            </HashLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-primary transition"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/85 backdrop-blur-lg border-b border-white/10">
            <div className="flex flex-col space-y-4 p-6">
              <HashLink
                smooth
                to="/#"
                className="text-white hover:text-primary transition"
                onClick={closeMenu}
              >
                Home
              </HashLink>
              <HashLink
                smooth
                to="/#services"
                className="text-white hover:text-primary transition"
                onClick={closeMenu}
              >
                Services
              </HashLink>
              <HashLink
                smooth
                to="/#features"
                className="text-white hover:text-primary transition"
                onClick={closeMenu}
              >
                Features
              </HashLink>
              <HashLink
                smooth
                to="/#pricing"
                className="text-white hover:text-primary transition"
                onClick={closeMenu}
              >
                Pricing
              </HashLink>
              <HashLink
                smooth
                to="/#contact"
                className="text-white hover:text-primary transition"
                onClick={closeMenu}
              >
                Contact
              </HashLink>
              <HashLink
                smooth
                to="/#contact"
                className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full hover:opacity-90 transition w-full text-center"
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
